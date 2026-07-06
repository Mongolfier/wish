from pydantic import BaseModel, EmailStr, Field


class RegisterRequest(BaseModel):
	email: EmailStr
	password: str = Field(min_length=8, max_length=128)
	display_name: str | None = Field(default=None, max_length=255)


class LoginRequest(BaseModel):
	email: EmailStr
	password: str = Field(min_length=1, max_length=128)


class SendEmailCodeRequest(BaseModel):
	email: EmailStr
	locale: str = Field(default="ru", pattern=r"^(ru|en)$")


class VerifyEmailCodeRequest(BaseModel):
	email: EmailStr
	code: str = Field(min_length=6, max_length=6, pattern=r"^\d{6}$")
	password: str = Field(min_length=8, max_length=128)
	display_name: str | None = Field(default=None, max_length=255)


class UserResponse(BaseModel):
	id: str
	email: str | None
	display_name: str | None
	avatar_url: str | None

	model_config = {"from_attributes": True}


class AuthConfigResponse(BaseModel):
	google_oauth_enabled: bool
