from fastapi import Depends, HTTPException, Request
from sqlalchemy.orm import Session

from wish_api.config import Settings, get_settings
from wish_api.db.session import get_db
from wish_api.models.user import User
from wish_api.services.auth import get_user_by_session_token


def get_settings_dep() -> Settings:
	return get_settings()


def get_current_user_optional(
	request: Request,
	db: Session = Depends(get_db),
	settings: Settings = Depends(get_settings_dep),
) -> User | None:
	token = request.cookies.get(settings.session_cookie_name)
	return get_user_by_session_token(db, token)


def get_current_user(user: User | None = Depends(get_current_user_optional)) -> User:
	if user is None:
		raise HTTPException(status_code=401, detail="not_authenticated")
	return user
