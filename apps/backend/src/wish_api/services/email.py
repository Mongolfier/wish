import logging
import smtplib
import ssl
from email.message import EmailMessage

from wish_api.config import Settings, get_settings

logger = logging.getLogger(__name__)


class EmailDeliveryError(Exception):
	pass


def _send_via_ssl(message: EmailMessage, settings: Settings) -> None:
	context = ssl.create_default_context()
	with smtplib.SMTP_SSL(
		settings.smtp_host,
		settings.smtp_port,
		timeout=30,
		context=context,
	) as client:
		client.login(settings.smtp_user, settings.smtp_password)
		client.send_message(message)


def _send_via_starttls(message: EmailMessage, settings: Settings, port: int) -> None:
	context = ssl.create_default_context()
	with smtplib.SMTP(settings.smtp_host, port, timeout=30) as client:
		client.starttls(context=context)
		client.login(settings.smtp_user, settings.smtp_password)
		client.send_message(message)


def send_email(
	*,
	to: str,
	subject: str,
	body: str,
	settings: Settings | None = None,
) -> None:
	settings = settings or get_settings()

	if not settings.smtp_enabled:
		logger.info("SMTP disabled — email to %s: %s / %s", to, subject, body)
		return

	message = EmailMessage()
	message["From"] = settings.smtp_from
	message["To"] = to
	message["Subject"] = subject
	message.set_content(body)

	errors: list[str] = []

	if settings.smtp_use_ssl:
		try:
			_send_via_ssl(message, settings)
			return
		except (OSError, smtplib.SMTPException) as error:
			errors.append(f"SSL:{error}")
			logger.warning("SMTP SSL send failed for %s: %s", to, error)

	if settings.smtp_use_starttls:
		try:
			_send_via_starttls(message, settings, settings.smtp_port)
			return
		except (OSError, smtplib.SMTPException) as error:
			errors.append(f"STARTTLS:{error}")
			logger.warning("SMTP STARTTLS send failed for %s: %s", to, error)

	if settings.smtp_fallback_starttls:
		try:
			_send_via_starttls(message, settings, settings.smtp_fallback_port)
			return
		except (OSError, smtplib.SMTPException) as error:
			errors.append(f"STARTTLS-fallback:{error}")
			logger.warning("SMTP STARTTLS fallback send failed for %s: %s", to, error)

	raise EmailDeliveryError("; ".join(errors) if errors else "SMTP send failed")
