from pydantic import BaseModel, EmailStr, Field


class RegisterRequest(BaseModel):
	email: EmailStr = Field(description="Account email address")
	password: str = Field(min_length=8, max_length=128, description="At least 8 characters")
	display_name: str | None = Field(default=None, max_length=255, description="Optional display name")


class LoginRequest(BaseModel):
	email: EmailStr = Field(description="Account email address")
	password: str = Field(min_length=1, max_length=128, description="Account password")


class SendEmailCodeRequest(BaseModel):
	email: EmailStr = Field(description="Email to send the registration code to")
	locale: str = Field(
		default="ru",
		pattern=r"^(ru|en)$",
		description="Email language: `ru` or `en`",
	)


class VerifyEmailCodeRequest(BaseModel):
	email: EmailStr = Field(description="Same email used in send-code")
	code: str = Field(
		min_length=6,
		max_length=6,
		pattern=r"^\d{6}$",
		description="6-digit verification code from email",
	)
	password: str = Field(min_length=8, max_length=128, description="Password for the new account")
	display_name: str | None = Field(default=None, max_length=255, description="Optional display name")


class UserResponse(BaseModel):
	id: str = Field(description="User UUID")
	email: str | None = Field(description="Primary email")
	display_name: str | None = Field(description="Display name shown in the UI")
	avatar_url: str | None = Field(description="Profile image URL")

	model_config = {"from_attributes": True}
