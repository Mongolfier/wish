import hashlib
import secrets
import uuid
from datetime import UTC, datetime, timedelta

import bcrypt
from sqlalchemy import select
from sqlalchemy.exc import IntegrityError
from sqlalchemy.orm import Session

from wish_api.config import Settings
from wish_api.models.user import Session as UserSession
from wish_api.models.user import User, UserIdentity
from wish_api.schemas.auth import UserResponse

EMAIL_PROVIDER = "email"


class AuthError(Exception):
	def __init__(
		self,
		code: str,
		status_code: int = 400,
		*,
		retry_after_seconds: int | None = None,
	) -> None:
		self.code = code
		self.status_code = status_code
		self.retry_after_seconds = retry_after_seconds
		super().__init__(code)


def hash_password(password: str) -> str:
	password_bytes = password.encode("utf-8")
	return bcrypt.hashpw(password_bytes, bcrypt.gensalt()).decode("utf-8")


def verify_password(password: str, password_hash: str) -> bool:
	return bcrypt.checkpw(password.encode("utf-8"), password_hash.encode("utf-8"))


def hash_token(token: str) -> str:
	return hashlib.sha256(token.encode("utf-8")).hexdigest()


def ensure_email_available_for_registration(db: Session, email: str) -> None:
	normalized_email = email.strip().lower()

	existing = db.scalar(select(User).where(User.email == normalized_email))
	if existing is not None:
		raise AuthError("email_taken", status_code=409)

	identity = db.scalar(
		select(UserIdentity).where(
			UserIdentity.provider == EMAIL_PROVIDER,
			UserIdentity.provider_id == normalized_email,
		)
	)
	if identity is None:
		return

	owner = db.get(User, identity.user_id)
	if owner is None:
		db.delete(identity)
		db.flush()
		return

	raise AuthError("email_taken", status_code=409)


def user_to_response(user: User) -> UserResponse:
	return UserResponse(
		id=str(user.id),
		email=user.email,
		display_name=user.display_name,
		avatar_url=user.avatar_url,
	)


def register_user(db: Session, email: str, password: str, display_name: str | None) -> User:
	normalized_email = email.lower()

	ensure_email_available_for_registration(db, normalized_email)

	user = User(
		email=normalized_email,
		password_hash=hash_password(password),
		display_name=display_name or normalized_email.split("@")[0],
	)
	db.add(user)
	db.flush()

	db.add(
		UserIdentity(
			user_id=user.id,
			provider=EMAIL_PROVIDER,
			provider_id=normalized_email,
		)
	)
	db.commit()
	db.refresh(user)
	return user


def register_user_by_email(
	db: Session,
	email: str,
	display_name: str | None,
	password: str,
	*,
	provider: str = EMAIL_PROVIDER,
) -> User:
	normalized_email = email.lower()

	ensure_email_available_for_registration(db, normalized_email)

	user = User(
		email=normalized_email,
		password_hash=hash_password(password),
		display_name=display_name or normalized_email.split("@")[0],
	)
	db.add(user)
	db.flush()

	db.add(
		UserIdentity(
			user_id=user.id,
			provider=provider,
			provider_id=normalized_email,
		)
	)

	try:
		db.commit()
	except IntegrityError as error:
		db.rollback()
		raise AuthError("email_taken", status_code=409) from error

	db.refresh(user)
	return user


def authenticate_user(db: Session, email: str, password: str) -> User:
	normalized_email = email.lower()
	user = db.scalar(select(User).where(User.email == normalized_email))

	if user is None or user.password_hash is None or not verify_password(password, user.password_hash):
		raise AuthError("invalid_credentials", status_code=401)

	return user


def create_session(db: Session, user: User, settings: Settings) -> str:
	token = secrets.token_urlsafe(32)
	expires_at = datetime.now(UTC) + timedelta(seconds=settings.session_max_age_seconds)

	db.add(
		UserSession(
			user_id=user.id,
			token_hash=hash_token(token),
			expires_at=expires_at,
		)
	)
	db.commit()
	return token


def delete_session(db: Session, token: str | None) -> None:
	if not token:
		return

	session = db.scalar(select(UserSession).where(UserSession.token_hash == hash_token(token)))
	if session is not None:
		db.delete(session)
		db.commit()


def get_user_by_session_token(db: Session, token: str | None) -> User | None:
	if not token:
		return None

	session = db.scalar(select(UserSession).where(UserSession.token_hash == hash_token(token)))
	if session is None:
		return None

	expires_at = session.expires_at
	if expires_at.tzinfo is None:
		expires_at = expires_at.replace(tzinfo=UTC)

	if expires_at <= datetime.now(UTC):
		db.delete(session)
		db.commit()
		return None

	return session.user

