import logging
import secrets
from datetime import UTC, datetime, timedelta

from sqlalchemy import delete, select
from sqlalchemy.orm import Session

from wish_api.config import Settings
from wish_api.models.email_code import EmailVerificationCode
from wish_api.models.user import User
from wish_api.services.auth import (
	AuthError,
	EMAIL_PROVIDER,
	ensure_email_available_for_registration,
	hash_token,
	register_user_by_email,
)
from wish_api.services.email import EmailDeliveryError, send_email

logger = logging.getLogger(__name__)

REGISTER_PURPOSE = "register"

_EMAIL_SUBJECTS = {
	"ru": "Код подтверждения Wish",
	"en": "Wish verification code",
}

_EMAIL_BODIES = {
	"ru": "Ваш код для регистрации: {code}\n\nКод действует {minutes} минут.",
	"en": "Your registration code: {code}\n\nThe code is valid for {minutes} minutes.",
}


def _normalize_email(email: str) -> str:
	return email.strip().lower()


def _generate_code() -> str:
	return f"{secrets.randbelow(1_000_000):06d}"


def _code_expires_at(settings: Settings) -> datetime:
	return datetime.now(UTC) + timedelta(seconds=settings.email_code_ttl_seconds)


def _is_expired(expires_at: datetime) -> bool:
	value = expires_at if expires_at.tzinfo else expires_at.replace(tzinfo=UTC)
	return value <= datetime.now(UTC)


def _resend_retry_after_seconds(created_at: datetime, settings: Settings) -> int:
	elapsed = datetime.now(UTC) - created_at
	remaining = settings.email_code_resend_seconds - int(elapsed.total_seconds())
	return max(remaining, 1)


def send_registration_code(
	db: Session,
	email: str,
	settings: Settings,
	locale: str = "ru",
) -> tuple[int, str | None]:
	normalized_email = _normalize_email(email)

	ensure_email_available_for_registration(db, normalized_email)

	latest_code = db.scalar(
		select(EmailVerificationCode)
		.where(
			EmailVerificationCode.email == normalized_email,
			EmailVerificationCode.purpose == REGISTER_PURPOSE,
		)
		.order_by(EmailVerificationCode.created_at.desc())
		.limit(1)
	)

	if latest_code is not None:
		created_at = latest_code.created_at
		if created_at.tzinfo is None:
			created_at = created_at.replace(tzinfo=UTC)
		elapsed = datetime.now(UTC) - created_at

		if elapsed.total_seconds() < settings.email_code_resend_seconds:
			raise AuthError(
				"code_rate_limited",
				status_code=429,
				retry_after_seconds=_resend_retry_after_seconds(created_at, settings),
			)

	db.execute(
		delete(EmailVerificationCode).where(
			EmailVerificationCode.email == normalized_email,
			EmailVerificationCode.purpose == REGISTER_PURPOSE,
		)
	)

	code = _generate_code()
	lang = locale if locale in _EMAIL_SUBJECTS else "ru"
	minutes = settings.email_code_ttl_seconds // 60
	subject = _EMAIL_SUBJECTS[lang]
	body = _EMAIL_BODIES[lang].format(code=code, minutes=minutes)

	dev_code: str | None = None
	try:
		send_email(to=normalized_email, subject=subject, body=body, settings=settings)
	except EmailDeliveryError as error:
		if settings.smtp_dev_log_codes:
			logger.warning(
				"SMTP unavailable (%s) — dev registration code for %s: %s",
				error,
				normalized_email,
				code,
			)
			dev_code = code
		else:
			raise AuthError("email_delivery_failed", status_code=503) from error

	db.add(
		EmailVerificationCode(
			email=normalized_email,
			code_hash=hash_token(code),
			purpose=REGISTER_PURPOSE,
			attempts=0,
			expires_at=_code_expires_at(settings),
		)
	)
	db.commit()

	return settings.email_code_resend_seconds, dev_code


def verify_registration_code(
	db: Session,
	email: str,
	code: str,
	display_name: str | None,
	password: str,
	settings: Settings,
) -> User:
	normalized_email = _normalize_email(email)
	normalized_code = code.strip()

	record = db.scalar(
		select(EmailVerificationCode)
		.where(
			EmailVerificationCode.email == normalized_email,
			EmailVerificationCode.purpose == REGISTER_PURPOSE,
		)
		.order_by(EmailVerificationCode.created_at.desc())
		.limit(1)
	)

	if record is None or _is_expired(record.expires_at):
		raise AuthError("code_expired", status_code=400)

	attempts = record.attempts or 0
	if attempts >= settings.email_code_max_attempts:
		raise AuthError("code_max_attempts", status_code=400)

	if hash_token(normalized_code) != record.code_hash:
		record.attempts = attempts + 1
		db.commit()
		raise AuthError("invalid_code", status_code=400)

	ensure_email_available_for_registration(db, normalized_email)

	db.delete(record)
	db.commit()

	return register_user_by_email(
		db,
		normalized_email,
		display_name,
		password,
		provider=EMAIL_PROVIDER,
	)
