from unittest.mock import patch
import uuid

import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from wish_api.config import Settings
from wish_api.db.base import Base
from wish_api.services.auth import AuthError, register_user
from wish_api.services.email_code import send_registration_code, verify_registration_code


@pytest.fixture
def db_session():
	engine = create_engine(
		"sqlite://",
		connect_args={"check_same_thread": False},
		poolclass=StaticPool,
	)
	Base.metadata.create_all(bind=engine)
	session = sessionmaker(bind=engine)()
	yield session
	session.close()


@pytest.fixture
def settings():
	return Settings(
		email_code_ttl_seconds=900,
		email_code_resend_seconds=60,
		email_code_max_attempts=5,
		smtp_host="",
		smtp_from="",
	)


def test_send_and_verify_registration_code(db_session, settings):
	with patch("wish_api.services.email_code.send_email") as send_email_mock:
		send_registration_code(db_session, "new@example.com", settings, "ru")
		send_email_mock.assert_called_once()
		body = send_email_mock.call_args.kwargs["body"]
		code = next(part for part in body.replace(":", " ").split() if part.isdigit() and len(part) == 6)

	user = verify_registration_code(db_session, "new@example.com", code, "New User", "password123", settings)

	assert user.email == "new@example.com"
	assert user.display_name == "New User"
	assert user.password_hash is not None


def test_send_code_rejects_existing_email(db_session, settings):
	register_user(db_session, "taken@example.com", "password123", "Taken")

	with pytest.raises(AuthError) as error:
		send_registration_code(db_session, "taken@example.com", settings)

	assert error.value.code == "email_taken"


def test_verify_recovers_orphaned_email_identity(db_session, settings):
	from wish_api.models.user import UserIdentity

	orphan_user_id = uuid.uuid4()
	db_session.add(
		UserIdentity(
			user_id=orphan_user_id,
			provider="email",
			provider_id="orphan@example.com",
		)
	)
	db_session.commit()

	with patch("wish_api.services.email_code.send_email"):
		send_registration_code(db_session, "orphan@example.com", settings)
		body_code = "424242"
		from wish_api.services.auth import hash_token
		from wish_api.models.email_code import EmailVerificationCode
		from sqlalchemy import select

		record = db_session.scalar(
			select(EmailVerificationCode).where(EmailVerificationCode.email == "orphan@example.com")
		)
		record.code_hash = hash_token(body_code)
		db_session.commit()

	user = verify_registration_code(db_session, "orphan@example.com", body_code, "Orphan", "password123", settings)

	assert user.email == "orphan@example.com"
	assert user.display_name == "Orphan"


def test_verify_rejects_invalid_code(db_session, settings):
	with patch("wish_api.services.email_code.send_email"):
		send_registration_code(db_session, "user@example.com", settings)

	with pytest.raises(AuthError) as error:
		verify_registration_code(db_session, "user@example.com", "000000", None, "password123", settings)

	assert error.value.code == "invalid_code"


def test_send_code_rate_limited(db_session, settings):
	settings = Settings(
		email_code_resend_seconds=60,
		smtp_host="",
		smtp_from="",
	)

	with patch("wish_api.services.email_code.send_email"):
		send_registration_code(db_session, "user@example.com", settings)

	with pytest.raises(AuthError) as error:
		send_registration_code(db_session, "user@example.com", settings)

	assert error.value.code == "code_rate_limited"
	assert error.value.retry_after_seconds == 60


def test_verify_register_endpoint(client):
	with patch("wish_api.services.email_code.send_email") as send_email_mock:
		send_response = client.post(
			"/api/auth/email/send-code",
			json={"email": "endpoint@example.com", "locale": "ru"},
		)
		assert send_response.status_code == 204
		assert send_response.headers.get("X-Dev-Registration-Code") is None
		body = send_email_mock.call_args.kwargs["body"]
		code = next(part for part in body.replace(":", " ").split() if part.isdigit() and len(part) == 6)

	verify_response = client.post(
		"/api/auth/email/verify-register",
		json={
			"email": "endpoint@example.com",
			"code": code,
			"password": "password123",
			"display_name": "Endpoint User",
		},
	)

	assert verify_response.status_code == 200
	payload = verify_response.json()
	assert payload["email"] == "endpoint@example.com"
	assert payload["display_name"] == "Endpoint User"
	assert "wish_session" in verify_response.cookies
