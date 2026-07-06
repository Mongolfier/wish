import uuid
from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, String, UniqueConstraint, func
from sqlalchemy.orm import Mapped, mapped_column, relationship

from wish_api.db.base import Base


class User(Base):
	__tablename__ = "users"

	id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
	email: Mapped[str | None] = mapped_column(String(320), unique=True, index=True)
	password_hash: Mapped[str | None] = mapped_column(String(255))
	display_name: Mapped[str | None] = mapped_column(String(255))
	avatar_url: Mapped[str | None] = mapped_column(String(2048))
	created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
	updated_at: Mapped[datetime] = mapped_column(
		DateTime(timezone=True),
		server_default=func.now(),
		onupdate=func.now(),
	)

	identities: Mapped[list["UserIdentity"]] = relationship(back_populates="user", cascade="all, delete-orphan")
	sessions: Mapped[list["Session"]] = relationship(back_populates="user", cascade="all, delete-orphan")


class UserIdentity(Base):
	__tablename__ = "user_identities"
	__table_args__ = (UniqueConstraint("provider", "provider_id", name="uq_provider_identity"),)

	id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
	user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True)
	provider: Mapped[str] = mapped_column(String(32))
	provider_id: Mapped[str] = mapped_column(String(255))

	user: Mapped["User"] = relationship(back_populates="identities")


class Session(Base):
	__tablename__ = "sessions"

	id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
	user_id: Mapped[uuid.UUID] = mapped_column(ForeignKey("users.id", ondelete="CASCADE"), index=True)
	token_hash: Mapped[str] = mapped_column(String(64), unique=True, index=True)
	expires_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))
	created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())

	user: Mapped["User"] = relationship(back_populates="sessions")
