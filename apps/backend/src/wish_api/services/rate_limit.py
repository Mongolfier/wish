from collections import defaultdict
from datetime import UTC, datetime, timedelta
from threading import Lock


class RateLimiter:
	def __init__(self) -> None:
		self._events: dict[str, list[datetime]] = defaultdict(list)
		self._lock = Lock()

	def check(self, key: str, limit: int, window_seconds: int) -> int | None:
		"""Return retry-after seconds when limited, otherwise record the attempt."""
		now = datetime.now(UTC)
		cutoff = now - timedelta(seconds=window_seconds)

		with self._lock:
			times = [timestamp for timestamp in self._events[key] if timestamp > cutoff]
			if len(times) >= limit:
				oldest = min(times)
				retry_after = int((oldest + timedelta(seconds=window_seconds) - now).total_seconds()) + 1
				return max(retry_after, 1)

			times.append(now)
			self._events[key] = times
			return None

	def reset(self) -> None:
		with self._lock:
			self._events.clear()


rate_limiter = RateLimiter()
