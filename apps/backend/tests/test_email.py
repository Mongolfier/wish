import smtplib
from unittest.mock import MagicMock, patch

import pytest

from wish_api.config import Settings
from wish_api.services.email import EmailDeliveryError, send_email


def test_send_email_when_smtp_disabled(caplog):
	settings = Settings(smtp_host="", smtp_from="")

	with caplog.at_level("INFO"):
		send_email(to="user@example.com", subject="Test", body="Hello", settings=settings)

	assert "SMTP disabled" in caplog.text


def test_send_email_via_ssl():
	settings = Settings(
		smtp_host="smtp.example.com",
		smtp_port=1127,
		smtp_user="10008",
		smtp_password="secret",
		smtp_from="noreply@wish-time.ru",
		smtp_use_ssl=True,
		smtp_fallback_starttls=False,
	)

	mock_client = MagicMock()
	mock_ssl = MagicMock()
	mock_ssl.return_value.__enter__.return_value = mock_client

	with patch("wish_api.services.email.smtplib.SMTP_SSL", mock_ssl):
		send_email(to="user@example.com", subject="Code", body="123456", settings=settings)

	mock_ssl.assert_called_once()
	assert mock_ssl.call_args.args[:2] == ("smtp.example.com", 1127)
	mock_client.login.assert_called_once_with("10008", "secret")
	mock_client.send_message.assert_called_once()


def test_send_email_raises_on_smtp_error():
	settings = Settings(
		smtp_host="smtp.example.com",
		smtp_port=1127,
		smtp_user="10008",
		smtp_password="secret",
		smtp_from="noreply@wish-time.ru",
		smtp_use_ssl=True,
		smtp_fallback_starttls=False,
	)

	mock_client = MagicMock()
	mock_client.login.side_effect = smtplib.SMTPAuthenticationError(535, b"Auth failed")
	mock_ssl = MagicMock()
	mock_ssl.return_value.__enter__.return_value = mock_client

	with patch("wish_api.services.email.smtplib.SMTP_SSL", mock_ssl):
		with pytest.raises(EmailDeliveryError):
			send_email(to="user@example.com", subject="Code", body="123456", settings=settings)
