"""Export OpenAPI schema for @wish/api-client generation."""

from __future__ import annotations

import json
import sys
from pathlib import Path

BACKEND_ROOT = Path(__file__).resolve().parents[1]
REPO_ROOT = BACKEND_ROOT.parent.parent
OUTPUT = REPO_ROOT / "packages" / "api-client" / "openapi.json"

sys.path.insert(0, str(BACKEND_ROOT / "src"))

from wish_api.main import app  # noqa: E402


def main() -> None:
	OUTPUT.parent.mkdir(parents=True, exist_ok=True)
	schema = app.openapi()
	OUTPUT.write_text(json.dumps(schema, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
	print(f"Wrote {OUTPUT}")


if __name__ == "__main__":
	main()
