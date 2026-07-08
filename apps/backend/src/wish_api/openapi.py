OPENAPI_TAGS = [
	{
		"name": "health",
		"description": "Service liveness checks.",
	},
	{
		"name": "auth",
		"description": (
			"Registration, login, session cookies (`wish_session`), and email verification."
		),
	},
]

API_DESCRIPTION = """
Wish REST API.

## Sessions

Successful login and registration responses set an HTTP-only session cookie.
Use it for authenticated routes such as `GET /api/auth/me`.

## Email registration

1. `POST /api/auth/email/send-code` — send a 6-digit code.
2. `POST /api/auth/email/verify-register` — verify the code and create the account.

When `SMTP_DEV_LOG_CODES=true`, the dev code is returned in the `X-Dev-Registration-Code` response header.
"""
