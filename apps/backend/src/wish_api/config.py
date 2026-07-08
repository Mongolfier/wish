from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings, SettingsConfigDict

_BACKEND_ROOT = Path(__file__).resolve().parents[2]
_ENV_FILE = _BACKEND_ROOT / ".env"


class Settings(BaseSettings):
	model_config = SettingsConfigDict(
		env_file=_ENV_FILE if _ENV_FILE.exists() else None,
		env_file_encoding="utf-8",
		extra="ignore",
	)

	environment: str = "dev"

	allowed_origins: str = "http://localhost:3000,http://127.0.0.1:3000"
	database_url: str = "sqlite:///./wish.db"

	session_cookie_name: str = "wish_session"
	session_max_age_seconds: int = 60 * 60 * 24 * 30

	cookie_secure: bool = False
	cookie_samesite: str = "lax"

	direct_register_enabled: bool = True

	login_rate_limit_attempts: int = 10
	login_rate_limit_window_seconds: int = 60
	send_code_ip_rate_limit_attempts: int = 10
	send_code_ip_rate_limit_window_seconds: int = 60

	smtp_host: str = ""
	smtp_port: int = 1127
	smtp_user: str = ""
	smtp_password: str = ""
	smtp_from: str = ""
	smtp_use_ssl: bool = True
	smtp_use_starttls: bool = False
	smtp_fallback_starttls: bool = True
	smtp_fallback_port: int = 1126
	smtp_dev_log_codes: bool = False

	email_code_ttl_seconds: int = 900
	email_code_resend_seconds: int = 60
	email_code_max_attempts: int = 5

	@property
	def is_production(self) -> bool:
		return self.environment.strip().lower() == "production"

	@property
	def docs_enabled(self) -> bool:
		return self.environment.strip().lower() == "dev"

	@property
	def allowed_origins_list(self) -> list[str]:
		return [o.strip() for o in self.allowed_origins.split(",") if o.strip()]

	@property
	def smtp_enabled(self) -> bool:
		return bool(self.smtp_host and self.smtp_user and self.smtp_password and self.smtp_from)


def validate_settings(settings: Settings) -> None:
	if not settings.is_production:
		return

	if settings.smtp_dev_log_codes:
		raise RuntimeError("SMTP_DEV_LOG_CODES must not be enabled in production")

	if "sqlite" in settings.database_url.lower():
		raise RuntimeError("DATABASE_URL must use PostgreSQL in production")


@lru_cache
def get_settings() -> Settings:
	return Settings()
