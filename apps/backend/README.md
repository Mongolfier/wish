# Wish API

FastAPI service. OpenAPI / Swagger UI: http://localhost:8000/docs

## Prerequisites

- Python 3.11+
- [uv](https://docs.astral.sh/uv/) (recommended) or pip + venv

## Setup

```bash
cd apps/backend
uv sync --extra dev
```

Without uv:

```bash
cd apps/backend
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -e ".[dev]"
```

## Run

From repo root:

```bash
pnpm api:dev
```

From this directory (with uv):

```bash
pnpm dev
```

With pip/venv only (after `pip install -e ".[dev]"`):

```bash
pnpm dev:pip
pnpm test:pip
```

## Environment

| Variable           | Default                 | Description                          |
| ------------------ | ----------------------- | ------------------------------------ |
| `ALLOWED_ORIGINS`  | `http://localhost:3000` | Comma-separated CORS allowed origins |

## Docker

From repository root (Docker daemon required):

```bash
docker compose up --build api
```

Next.js can target this API via `API_ORIGIN=http://127.0.0.1:8000` (default in [`apps/web/next.config.ts`](../web/next.config.ts) rewrites).
