from urllib.parse import urlencode

from fastapi import APIRouter, Depends, HTTPException, Query, Request
from fastapi.responses import RedirectResponse
from sqlalchemy.orm import Session
from starlette.responses import Response

from wish_api.config import Settings
from wish_api.db.session import get_db
from wish_api.dependencies.auth import get_current_user_optional, get_settings_dep
from wish_api.models.user import User
from wish_api.schemas.auth import (
	AuthConfigResponse,
	LoginRequest,
	RegisterRequest,
	SendEmailCodeRequest,
	UserResponse,
	VerifyEmailCodeRequest,
)
from wish_api.schemas.common import AUTH_ERROR_RESPONSES, EMAIL_CODE_ERROR_RESPONSES
from wish_api.services.auth import (
	AuthError,
	authenticate_user,
	create_session,
	delete_session,
	get_or_create_google_user,
	register_user,
	user_to_response,
)
from wish_api.services.email_code import send_registration_code, verify_registration_code
from wish_api.services.oauth import configure_oauth, oauth

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


@router.post(
	"/register",
	response_model=UserResponse,
	summary="Register with email and password",
	responses=AUTH_ERROR_RESPONSES,
)
def register(
	body: RegisterRequest,
	response: Response,
	db: Session = Depends(get_db),
	settings: Settings = Depends(get_settings_dep),
) -> UserResponse:
	"""Create an account and start a session (sets the `wish_session` cookie)."""
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
	db: Session = Depends(get_db),
	settings: Settings = Depends(get_settings_dep),
) -> Response:
	"""Send a 6-digit code to the given email. Returns `Retry-After` (seconds until resend)."""
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
	response: Response,
	db: Session = Depends(get_db),
	settings: Settings = Depends(get_settings_dep),
) -> UserResponse:
	"""Verify the email code, create the account, and start a session."""
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
	response: Response,
	db: Session = Depends(get_db),
	settings: Settings = Depends(get_settings_dep),
) -> UserResponse:
	"""Authenticate and start a session (sets the `wish_session` cookie)."""
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


@router.get("/config", response_model=AuthConfigResponse, summary="Auth feature flags")
def auth_config(settings: Settings = Depends(get_settings_dep)) -> AuthConfigResponse:
	"""Public auth configuration for the frontend (e.g. whether Google OAuth is enabled)."""
	return AuthConfigResponse(google_oauth_enabled=settings.google_oauth_enabled)


@router.get("/google", summary="Start Google OAuth")
async def google_login(
	request: Request,
	locale: str = Query(default="ru", description="Frontend locale passed through OAuth state"),
	settings: Settings = Depends(get_settings_dep),
) -> Response:
	"""Redirect the browser to Google OAuth. Callback: `GET /api/auth/google/callback`."""
	if not settings.google_oauth_enabled:
		return RedirectResponse(url=_frontend_auth_url(settings, error="google_oauth_disabled", locale=locale))

	configure_oauth(settings)
	return await oauth.google.authorize_redirect(
		request,
		settings.resolved_google_oauth_redirect_uri,
		state=locale,
	)


@router.get("/google/callback", summary="Google OAuth callback", include_in_schema=False)
async def google_callback(
	request: Request,
	db: Session = Depends(get_db),
	settings: Settings = Depends(get_settings_dep),
) -> Response:
	if not settings.google_oauth_enabled:
		return RedirectResponse(url=_frontend_auth_url(settings, error="google_oauth_disabled"))

	configure_oauth(settings)

	try:
		token = await oauth.google.authorize_access_token(request)
	except Exception:
		return RedirectResponse(url=_frontend_auth_url(settings, error="oauth_failed"))

	user_info = token.get("userinfo")
	if not user_info:
		return RedirectResponse(url=_frontend_auth_url(settings, error="oauth_failed"))

	google_id = user_info.get("sub")
	if not google_id:
		return RedirectResponse(url=_frontend_auth_url(settings, error="oauth_failed"))

	user = get_or_create_google_user(
		db,
		google_id=google_id,
		email=user_info.get("email"),
		display_name=user_info.get("name"),
		avatar_url=user_info.get("picture"),
	)

	session_token = create_session(db, user, settings)
	locale = request.query_params.get("state") or settings.frontend_default_locale
	redirect_url = f"{settings.oauth_redirect_base.rstrip('/')}/{locale}"

	response = RedirectResponse(url=redirect_url, status_code=302)
	_set_session_cookie(response, session_token, settings)
	return response


def _frontend_auth_url(settings: Settings, *, error: str, locale: str | None = None) -> str:
	locale = locale or settings.frontend_default_locale
	query = urlencode({"error": error})
	return f"{settings.oauth_redirect_base.rstrip('/')}/{locale}/auth?{query}"
