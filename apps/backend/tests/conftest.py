import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from wish_api.config import Settings
from wish_api.db.base import Base
from wish_api.db.session import get_db
from wish_api.dependencies.auth import get_settings_dep
from wish_api.main import app
from wish_api.services.oauth import configure_oauth


@pytest.fixture
def settings() -> Settings:
	return Settings(
		database_url="sqlite://",
		secret_key="test-secret-key-for-session-middleware-32",
		cookie_secure=False,
		google_client_id="",
		google_client_secret="",
		smtp_dev_log_codes=True,
	)


@pytest.fixture
def client(settings: Settings):
	engine = create_engine(
		"sqlite://",
		connect_args={"check_same_thread": False},
		poolclass=StaticPool,
	)
	TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
	Base.metadata.create_all(bind=engine)

	def override_get_db():
		db = TestingSessionLocal()
		try:
			yield db
		finally:
			db.close()

	def override_get_settings():
		return settings

	app.dependency_overrides[get_db] = override_get_db
	app.dependency_overrides[get_settings_dep] = override_get_settings
	configure_oauth(settings)

	with TestClient(app) as test_client:
		yield test_client

	app.dependency_overrides.clear()
