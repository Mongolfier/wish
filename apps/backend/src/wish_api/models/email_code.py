import uuid
from datetime import datetime

from sqlalchemy import DateTime, Integer, String, func
from sqlalchemy.orm import Mapped, mapped_column

from wish_api.db.base import Base


class EmailVerificationCode(Base):
	__tablename__ = "email_verification_codes"

	id: Mapped[uuid.UUID] = mapped_column(primary_key=True, default=uuid.uuid4)
	email: Mapped[str] = mapped_column(String(320), index=True)
	code_hash: Mapped[str] = mapped_column(String(64))
	purpose: Mapped[str] = mapped_column(String(32))
	attempts: Mapped[int] = mapped_column(Integer, default=0)
	expires_at: Mapped[datetime] = mapped_column(DateTime(timezone=True))
	created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), server_default=func.now())
