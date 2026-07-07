from contextlib import asynccontextmanager
import logging

from fastapi import FastAPI, Request
from fastapi.exceptions import ResponseValidationError
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from sqlalchemy.exc import IntegrityError, OperationalError
from starlette.middleware.sessions import SessionMiddleware

from wish_api.config import get_settings
from wish_api.db.base import Base
from wish_api.db.session import engine
from wish_api.openapi import API_DESCRIPTION, OPENAPI_TAGS
from wish_api.routers import auth, health
from wish_api.services.oauth import configure_oauth

logger = logging.getLogger(__name__)


def create_app() -> FastAPI:
	settings = get_settings()

	@asynccontextmanager
	async def lifespan(_app: FastAPI):
		Base.metadata.create_all(bind=engine)
		configure_oauth(settings)
		yield

	docs_url = "/docs" if settings.docs_enabled else None
	redoc_url = "/redoc" if settings.docs_enabled else None
	openapi_url = "/openapi.json" if settings.docs_enabled else None

	application = FastAPI(
		title="Wish API",
		description=API_DESCRIPTION,
		version="0.1.0",
		docs_url=docs_url,
		redoc_url=redoc_url,
		openapi_url=openapi_url,
		openapi_tags=OPENAPI_TAGS,
		lifespan=lifespan,
	)

	@application.exception_handler(IntegrityError)
	async def integrity_error_handler(_request: Request, exc: IntegrityError) -> JSONResponse:
		logger.exception("Database integrity error")
		return JSONResponse(status_code=409, content={"detail": "email_taken"})

	@application.exception_handler(OperationalError)
	async def operational_error_handler(_request: Request, exc: OperationalError) -> JSONResponse:
		logger.exception("Database operational error")
		return JSONResponse(status_code=503, content={"detail": "database_unavailable"})

	@application.exception_handler(ResponseValidationError)
	async def response_validation_error_handler(
		_request: Request,
		exc: ResponseValidationError,
	) -> JSONResponse:
		logger.exception("Response validation error: %s", exc)
		return JSONResponse(status_code=500, content={"detail": "internal_error"})

	@application.exception_handler(Exception)
	async def unhandled_error_handler(_request: Request, exc: Exception) -> JSONResponse:
		logger.exception("Unhandled error")
		return JSONResponse(status_code=500, content={"detail": "internal_error"})

	application.add_middleware(
		SessionMiddleware,
		secret_key=settings.secret_key,
		https_only=settings.cookie_secure,
		same_site=settings.cookie_samesite,
	)

	application.add_middleware(
		CORSMiddleware,
		allow_origins=settings.allowed_origins_list,
		allow_credentials=True,
		allow_methods=["*"],
		allow_headers=["*"],
	)

	application.include_router(health.router, prefix="/api")
	application.include_router(auth.router, prefix="/api")

	return application


app = create_app()
