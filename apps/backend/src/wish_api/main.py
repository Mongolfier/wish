from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from wish_api.config import get_settings
from wish_api.routers import health

settings = get_settings()

app = FastAPI(
	title="Wish API",
	version="0.1.0",
	docs_url="/docs",
	redoc_url="/redoc",
	openapi_url="/openapi.json",
)

app.add_middleware(
	CORSMiddleware,
	allow_origins=settings.allowed_origins_list,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)

app.include_router(health.router, prefix="/api")
