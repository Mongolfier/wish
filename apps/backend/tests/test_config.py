import pytest

from wish_api.config import Settings, validate_settings


def test_validate_settings_allows_dev_defaults():
	validate_settings(Settings(environment="dev"))


def test_validate_settings_rejects_sqlite_in_production():
	with pytest.raises(RuntimeError, match="PostgreSQL"):
		validate_settings(
			Settings(
				environment="production",
				database_url="sqlite:///./wish.db",
			)
		)


def test_validate_settings_rejects_dev_log_codes_in_production():
	with pytest.raises(RuntimeError, match="SMTP_DEV_LOG_CODES"):
		validate_settings(
			Settings(
				environment="production",
				database_url="postgresql+psycopg://user:pass@db:5432/wish",
				smtp_dev_log_codes=True,
			)
		)
