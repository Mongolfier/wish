from authlib.integrations.starlette_client import OAuth

from wish_api.config import Settings, get_settings

oauth = OAuth()


def configure_oauth(settings: Settings | None = None) -> None:
	settings = settings or get_settings()

	if not settings.google_oauth_enabled:
		return

	oauth.register(
		name="google",
		client_id=settings.google_client_id,
		client_secret=settings.google_client_secret,
		server_metadata_url="https://accounts.google.com/.well-known/openid-configuration",
		client_kwargs={"scope": "openid email profile"},
		redirect_uri=settings.resolved_google_oauth_redirect_uri,
	)
