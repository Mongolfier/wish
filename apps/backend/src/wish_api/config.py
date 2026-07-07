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
	secret_key: str = "dev-secret-change-in-production-min-32-chars!!"

	session_cookie_name: str = "wish_session"
	session_max_age_seconds: int = 60 * 60 * 24 * 30

	cookie_secure: bool = False
	cookie_samesite: str = "lax"

	oauth_redirect_base: str = "http://localhost:3000"
	frontend_default_locale: str = "ru"

	google_client_id: str = ""
	google_client_secret: str = ""
	google_oauth_redirect_uri: str = ""

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
	def docs_enabled(self) -> bool:
		return self.environment.strip().lower() == "dev"

	@property
	def allowed_origins_list(self) -> list[str]:
		return [o.strip() for o in self.allowed_origins.split(",") if o.strip()]

	@property
	def google_oauth_enabled(self) -> bool:
		return bool(self.google_client_id and self.google_client_secret)

	@property
	def resolved_google_oauth_redirect_uri(self) -> str:
		if self.google_oauth_redirect_uri.strip():
			return self.google_oauth_redirect_uri.strip()
		return f"{self.oauth_redirect_base.rstrip('/')}/api/auth/google/callback"

	@property
	def smtp_enabled(self) -> bool:
		return bool(self.smtp_host and self.smtp_user and self.smtp_password and self.smtp_from)


@lru_cache
def get_settings() -> Settings:
	return Settings()
