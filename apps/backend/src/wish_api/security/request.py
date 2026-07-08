from fastapi import HTTPException, Request

from wish_api.config import Settings


def get_client_ip(request: Request) -> str:
	forwarded_for = request.headers.get("X-Forwarded-For")
	if forwarded_for:
		return forwarded_for.split(",")[0].strip()

	if request.client is not None:
		return request.client.host

	return "unknown"


def require_allowed_origin(request: Request, settings: Settings) -> None:
	if not settings.is_production:
		return

	allowed_origins = settings.allowed_origins_list
	origin = request.headers.get("origin")
	if origin:
		if origin in allowed_origins:
			return
		raise HTTPException(status_code=403, detail="invalid_origin")

	referer = request.headers.get("referer")
	if referer:
		for allowed_origin in allowed_origins:
			if referer == allowed_origin or referer.startswith(f"{allowed_origin}/"):
				return

	raise HTTPException(status_code=403, detail="invalid_origin")
