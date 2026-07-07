from fastapi.testclient import TestClient

from wish_api.config import Settings, get_settings
from wish_api.main import app, create_app

client = TestClient(app)


def test_openapi_json_in_dev():
	r = client.get("/openapi.json")
	assert r.status_code == 200

	spec = r.json()
	assert spec["openapi"].startswith("3.")
	assert spec["info"]["title"] == "Wish API"
	assert "/api/health" in spec["paths"]
	assert "/api/auth/login" in spec["paths"]

	login = spec["paths"]["/api/auth/login"]["post"]
	assert login["summary"] == "Login with email and password"
	assert "401" in login["responses"]


def test_swagger_ui_in_dev():
	r = client.get("/docs")
	assert r.status_code == 200
	assert "swagger" in r.text.lower()


def test_docs_disabled_in_production(monkeypatch):
	monkeypatch.setenv("ENVIRONMENT", "production")
	get_settings.cache_clear()

	production_app = create_app()
	with TestClient(production_app) as production_client:
		assert production_client.get("/docs").status_code == 404
		assert production_client.get("/redoc").status_code == 404
		assert production_client.get("/openapi.json").status_code == 404

	get_settings.cache_clear()


def test_docs_disabled_in_docker(monkeypatch):
	monkeypatch.setenv("ENVIRONMENT", "docker")
	get_settings.cache_clear()

	docker_app = create_app()
	with TestClient(docker_app) as docker_client:
		assert docker_client.get("/docs").status_code == 404
		assert docker_client.get("/openapi.json").status_code == 404

	get_settings.cache_clear()


def test_docs_enabled_only_in_dev_environment(monkeypatch):
	monkeypatch.setenv("ENVIRONMENT", "dev")
	get_settings.cache_clear()
	assert Settings().docs_enabled is True

	monkeypatch.setenv("ENVIRONMENT", "production")
	get_settings.cache_clear()
	assert Settings().docs_enabled is False

	monkeypatch.setenv("ENVIRONMENT", "docker")
	get_settings.cache_clear()
	assert Settings().docs_enabled is False

	get_settings.cache_clear()
