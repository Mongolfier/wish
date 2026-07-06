from unittest.mock import patch

import pytest
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from wish_api.config import Settings
from wish_api.db.base import Base
from wish_api.services.auth import AuthError
from wish_api.services.email import EmailDeliveryError
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


def test_send_code_dev_fallback_when_smtp_fails(db_session):
	settings = Settings(
		smtp_host="smtp.example.com",
		smtp_port=1127,
		smtp_user="10008",
		smtp_password="secret",
		smtp_from="noreply@wish-time.ru",
		smtp_dev_log_codes=True,
	)

	with patch("wish_api.services.email_code.send_email", side_effect=EmailDeliveryError("blocked")):
		retry_after, dev_code = send_registration_code(db_session, "dev@example.com", settings)
		assert dev_code is not None
		assert len(dev_code) == 6

	assert retry_after == settings.email_code_resend_seconds

	with pytest.raises(AuthError) as error:
		verify_registration_code(db_session, "dev@example.com", "000000", None, "password123", settings)

	assert error.value.code == "invalid_code"


def test_verify_registration_allows_login(db_session, settings):
	with patch("wish_api.services.email_code.send_email"):
		send_registration_code(db_session, "login@example.com", settings)

	from wish_api.services.auth import authenticate_user

	with pytest.raises(AuthError) as error:
		authenticate_user(db_session, "login@example.com", "password123")

	assert error.value.code == "invalid_credentials"

	with patch("wish_api.services.email_code.send_email") as send_email_mock:
		send_registration_code(db_session, "login2@example.com", settings)
		body = send_email_mock.call_args.kwargs["body"]
		code = next(part for part in body.replace(":", " ").split() if part.isdigit() and len(part) == 6)

	verify_registration_code(db_session, "login2@example.com", code, "Login User", "password123", settings)
	user = authenticate_user(db_session, "login2@example.com", "password123")

	assert user.email == "login2@example.com"


def test_send_code_raises_when_smtp_fails_without_dev_fallback(db_session):
	settings = Settings(
		smtp_host="smtp.example.com",
		smtp_port=1127,
		smtp_user="10008",
		smtp_password="secret",
		smtp_from="noreply@wish-time.ru",
		smtp_dev_log_codes=False,
	)

	with patch("wish_api.services.email_code.send_email", side_effect=EmailDeliveryError("blocked")):
		with pytest.raises(AuthError) as error:
			send_registration_code(db_session, "fail@example.com", settings)

	assert error.value.code == "email_delivery_failed"
