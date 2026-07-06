def test_register_login_me_logout(client):
	register_response = client.post(
		"/api/auth/register",
		json={
			"email": "user@example.com",
			"password": "password123",
			"display_name": "Test User",
		},
	)
	assert register_response.status_code == 200
	payload = register_response.json()
	assert payload["email"] == "user@example.com"
	assert payload["display_name"] == "Test User"
	assert "wish_session" in register_response.cookies

	me_response = client.get("/api/auth/me")
	assert me_response.status_code == 200
	assert me_response.json()["email"] == "user@example.com"

	logout_response = client.post("/api/auth/logout")
	assert logout_response.status_code == 204

	me_after_logout = client.get("/api/auth/me")
	assert me_after_logout.status_code == 401


def test_register_duplicate_email(client):
	payload = {
		"email": "duplicate@example.com",
		"password": "password123",
	}
	first = client.post("/api/auth/register", json=payload)
	second = client.post("/api/auth/register", json=payload)

	assert first.status_code == 200
	assert second.status_code == 409
	assert second.json()["detail"] == "email_taken"


def test_login_invalid_credentials(client):
	client.post(
		"/api/auth/register",
		json={"email": "login@example.com", "password": "password123"},
	)

	wrong_password = client.post(
		"/api/auth/login",
		json={"email": "login@example.com", "password": "wrong-password"},
	)
	assert wrong_password.status_code == 401
	assert wrong_password.json()["detail"] == "invalid_credentials"


def test_me_unauthenticated(client):
	response = client.get("/api/auth/me")
	assert response.status_code == 401
	assert response.json()["detail"] == "not_authenticated"


def test_google_oauth_disabled(client):
	config = client.get("/api/auth/config")
	assert config.status_code == 200
	assert config.json()["google_oauth_enabled"] is False

	response = client.get("/api/auth/google", follow_redirects=False)
	assert response.status_code == 307
	assert "error=google_oauth_disabled" in response.headers["location"]
