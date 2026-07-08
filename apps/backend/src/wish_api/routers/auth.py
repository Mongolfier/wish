from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from starlette.responses import Response

from wish_api.config import Settings
from wish_api.db.session import get_db
from wish_api.dependencies.auth import get_current_user_optional, get_settings_dep
from wish_api.models.user import User
from wish_api.schemas.auth import (
	LoginRequest,
	RegisterRequest,
	SendEmailCodeRequest,
	UserResponse,
	VerifyEmailCodeRequest,
)
from wish_api.schemas.common import AUTH_ERROR_RESPONSES, EMAIL_CODE_ERROR_RESPONSES
from wish_api.security.request import get_client_ip, require_allowed_origin
from wish_api.services.auth import (
	AuthError,
	authenticate_user,
	create_session,
	delete_session,
	register_user,
	user_to_response,
)
from wish_api.services.email_code import send_registration_code, verify_registration_code
from wish_api.services.rate_limit import rate_limiter

router = APIRouter(prefix="/auth", tags=["auth"])


def _set_session_cookie(response: Response, token: str, settings: Settings) -> None:
	response.set_cookie(
		key=settings.session_cookie_name,
		value=token,
		max_age=settings.session_max_age_seconds,
		httponly=True,
		secure=settings.cookie_secure,
		samesite=settings.cookie_samesite,
		path="/",
	)


def _clear_session_cookie(response: Response, settings: Settings) -> None:
	response.delete_cookie(
		key=settings.session_cookie_name,
		path="/",
		httponly=True,
		secure=settings.cookie_secure,
		samesite=settings.cookie_samesite,
	)


def _auth_response(response: Response, user: User, token: str, settings: Settings) -> UserResponse:
	_set_session_cookie(response, token, settings)
	return user_to_response(user)


def _enforce_login_rate_limit(request: Request, settings: Settings) -> None:
	client_ip = get_client_ip(request)
	retry_after = rate_limiter.check(
		f"login:ip:{client_ip}",
		settings.login_rate_limit_attempts,
		settings.login_rate_limit_window_seconds,
	)
	if retry_after is not None:
		raise HTTPException(
			status_code=429,
			detail="rate_limited",
			headers={"Retry-After": str(retry_after)},
		)


def _enforce_send_code_ip_rate_limit(request: Request, settings: Settings) -> None:
	client_ip = get_client_ip(request)
	retry_after = rate_limiter.check(
		f"send-code:ip:{client_ip}",
		settings.send_code_ip_rate_limit_attempts,
		settings.send_code_ip_rate_limit_window_seconds,
	)
	if retry_after is not None:
		raise HTTPException(
			status_code=429,
			detail="code_rate_limited",
			headers={"Retry-After": str(retry_after)},
		)


@router.post(
	"/register",
	response_model=UserResponse,
	summary="Register with email and password",
	responses=AUTH_ERROR_RESPONSES,
)
def register(
	body: RegisterRequest,
	request: Request,
	response: Response,
	db: Session = Depends(get_db),
	settings: Settings = Depends(get_settings_dep),
) -> UserResponse:
	"""Create an account and start a session (sets the `wish_session` cookie)."""
	if not settings.direct_register_enabled:
		raise HTTPException(status_code=403, detail="registration_disabled")

	require_allowed_origin(request, settings)

	try:
		user = register_user(db, body.email, body.password, body.display_name)
	except AuthError as error:
		raise HTTPException(status_code=error.status_code, detail=error.code) from error

	token = create_session(db, user, settings)
	return _auth_response(response, user, token, settings)


@router.post(
	"/email/send-code",
	status_code=204,
	summary="Send registration verification code",
	responses=EMAIL_CODE_ERROR_RESPONSES,
)
def send_email_code(
	body: SendEmailCodeRequest,
	request: Request,
	db: Session = Depends(get_db),
	settings: Settings = Depends(get_settings_dep),
) -> Response:
	"""Send a 6-digit code to the given email. Returns `Retry-After` (seconds until resend)."""
	require_allowed_origin(request, settings)
	_enforce_send_code_ip_rate_limit(request, settings)

	try:
		retry_after_seconds, dev_code = send_registration_code(db, body.email, settings, body.locale)
	except AuthError as error:
		headers = {}
		if error.retry_after_seconds is not None:
			headers["Retry-After"] = str(error.retry_after_seconds)
		raise HTTPException(
			status_code=error.status_code,
			detail=error.code,
			headers=headers or None,
		) from error

	headers = {"Retry-After": str(retry_after_seconds)}
	if dev_code is not None:
		headers["X-Dev-Registration-Code"] = dev_code

	return Response(status_code=204, headers=headers)


@router.post(
	"/email/verify-register",
	response_model=UserResponse,
	summary="Verify code and register",
	responses=EMAIL_CODE_ERROR_RESPONSES,
)
def verify_email_register(
	body: VerifyEmailCodeRequest,
	request: Request,
	response: Response,
	db: Session = Depends(get_db),
	settings: Settings = Depends(get_settings_dep),
) -> UserResponse:
	"""Verify the email code, create the account, and start a session."""
	require_allowed_origin(request, settings)

	try:
		user = verify_registration_code(
			db, body.email, body.code, body.display_name, body.password, settings
		)
	except AuthError as error:
		raise HTTPException(status_code=error.status_code, detail=error.code) from error

	token = create_session(db, user, settings)
	return _auth_response(response, user, token, settings)


@router.post(
	"/login",
	response_model=UserResponse,
	summary="Login with email and password",
	responses={401: AUTH_ERROR_RESPONSES[401]},
)
def login(
	body: LoginRequest,
	request: Request,
	response: Response,
	db: Session = Depends(get_db),
	settings: Settings = Depends(get_settings_dep),
) -> UserResponse:
	"""Authenticate and start a session (sets the `wish_session` cookie)."""
	require_allowed_origin(request, settings)
	_enforce_login_rate_limit(request, settings)

	try:
		user = authenticate_user(db, body.email, body.password)
	except AuthError as error:
		raise HTTPException(status_code=error.status_code, detail=error.code) from error

	token = create_session(db, user, settings)
	return _auth_response(response, user, token, settings)


@router.post("/logout", status_code=204, summary="Logout")
def logout(
	request: Request,
	db: Session = Depends(get_db),
	settings: Settings = Depends(get_settings_dep),
) -> Response:
	"""Invalidate the current session and clear the session cookie."""
	require_allowed_origin(request, settings)

	token = request.cookies.get(settings.session_cookie_name)
	delete_session(db, token)

	response = Response(status_code=204)
	_clear_session_cookie(response, settings)
	return response


@router.get(
	"/me",
	response_model=UserResponse,
	summary="Current user",
	responses={401: AUTH_ERROR_RESPONSES[401]},
)
def me(user: User | None = Depends(get_current_user_optional)) -> UserResponse:
	"""Return the authenticated user from the session cookie."""
	if user is None:
		raise HTTPException(status_code=401, detail="not_authenticated")
	return user_to_response(user)
