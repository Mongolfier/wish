from collections.abc import Generator

from sqlalchemy import create_engine, event
from sqlalchemy.orm import Session, sessionmaker

from wish_api.config import get_settings

settings = get_settings()

connect_args: dict[str, object] = {}
if settings.database_url.startswith("sqlite"):
	connect_args = {"check_same_thread": False, "timeout": 30}

engine = create_engine(settings.database_url, connect_args=connect_args)


@event.listens_for(engine, "connect")
def _configure_sqlite(dbapi_connection, _connection_record) -> None:
	if not settings.database_url.startswith("sqlite"):
		return

	cursor = dbapi_connection.cursor()
	cursor.execute("PRAGMA foreign_keys=ON")
	cursor.execute("PRAGMA journal_mode=WAL")
	cursor.close()
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


def get_db() -> Generator[Session, None, None]:
	db = SessionLocal()
	try:
		yield db
	finally:
		db.close()
