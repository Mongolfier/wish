from fastapi import APIRouter
from pydantic import BaseModel, Field

router = APIRouter(tags=["health"])


class HealthResponse(BaseModel):
	status: str = Field(description="Service status", examples=["ok"])


@router.get("/health", response_model=HealthResponse, summary="Health check")
def health() -> HealthResponse:
	"""Liveness probe for load balancers and monitoring."""
	return HealthResponse(status="ok")
