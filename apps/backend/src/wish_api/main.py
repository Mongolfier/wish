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
from wish_api.routers import auth, health
from wish_api.services.oauth import configure_oauth

logger = logging.getLogger(__name__)
settings = get_settings()


@asynccontextmanager
async def lifespan(_app: FastAPI):
	Base.metadata.create_all(bind=engine)
	configure_oauth(settings)
	yield


app = FastAPI(
	title="Wish API",
	version="0.1.0",
	docs_url="/docs",
	redoc_url="/redoc",
	openapi_url="/openapi.json",
	lifespan=lifespan,
)


@app.exception_handler(IntegrityError)
async def integrity_error_handler(_request: Request, exc: IntegrityError) -> JSONResponse:
	logger.exception("Database integrity error")
	return JSONResponse(status_code=409, content={"detail": "email_taken"})


@app.exception_handler(OperationalError)
async def operational_error_handler(_request: Request, exc: OperationalError) -> JSONResponse:
	logger.exception("Database operational error")
	return JSONResponse(status_code=503, content={"detail": "database_unavailable"})


@app.exception_handler(ResponseValidationError)
async def response_validation_error_handler(
	_request: Request,
	exc: ResponseValidationError,
) -> JSONResponse:
	logger.exception("Response validation error: %s", exc)
	return JSONResponse(status_code=500, content={"detail": "internal_error"})


@app.exception_handler(Exception)
async def unhandled_error_handler(_request: Request, exc: Exception) -> JSONResponse:
	logger.exception("Unhandled error")
	return JSONResponse(status_code=500, content={"detail": "internal_error"})


app.add_middleware(
	SessionMiddleware,
	secret_key=settings.secret_key,
	https_only=settings.cookie_secure,
	same_site=settings.cookie_samesite,
)

app.add_middleware(
	CORSMiddleware,
	allow_origins=settings.allowed_origins_list,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)

app.include_router(health.router, prefix="/api")
app.include_router(auth.router, prefix="/api")
