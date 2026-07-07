from pydantic import BaseModel, Field


class ErrorDetail(BaseModel):
	detail: str = Field(description="Machine-readable error code")


def error_example(code: str) -> dict:
	return {"content": {"application/json": {"example": {"detail": code}}}}


AUTH_ERROR_RESPONSES: dict[int, dict] = {
	401: {"description": "Invalid credentials or missing session", **error_example("invalid_credentials")},
	409: {"description": "Email already registered", **error_example("email_taken")},
}

EMAIL_CODE_ERROR_RESPONSES: dict[int, dict] = {
	400: {
		"description": "Invalid, expired, or exhausted verification code",
		**error_example("invalid_code"),
	},
	409: {"description": "Email already registered", **error_example("email_taken")},
	429: {"description": "Resend rate limit (see `Retry-After` header)", **error_example("code_rate_limited")},
	503: {"description": "SMTP delivery failed", **error_example("email_delivery_failed")},
}
