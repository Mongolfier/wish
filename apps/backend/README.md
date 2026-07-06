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

| Variable                    | Default                                          | Description                                         |
| --------------------------- | ------------------------------------------------ | --------------------------------------------------- |
| `DATABASE_URL`              | `sqlite:///./wish.db`                            | SQLAlchemy database URL                             |
| `SECRET_KEY`                | _(dev default)_                                  | Session signing secret (min 32 chars in production) |
| `ALLOWED_ORIGINS`           | `http://localhost:3000`                          | Comma-separated CORS allowed origins                |
| `OAUTH_REDIRECT_BASE`       | `http://localhost:3000`                          | Public Next.js URL (post-login redirect)            |
| `GOOGLE_OAUTH_REDIRECT_URI` | `{OAUTH_REDIRECT_BASE}/api/auth/google/callback` | **Register in Google Console**                      |
| `GOOGLE_CLIENT_ID`          | —                                                | Google OAuth client ID                              |
| `GOOGLE_CLIENT_SECRET`      | —                                                | Google OAuth client secret                          |
| `SMTP_HOST`                 | —                                                | SMTP server (Selectel: `smtp.mail.selcloud.ru`)     |
| `SMTP_PORT`                 | `1127`                                           | `1127` = SSL, `1126` = STARTTLS                     |
| `SMTP_USER`                 | —                                                | SMTP login                                          |
| `SMTP_PASSWORD`             | —                                                | SMTP API key / password                             |
| `SMTP_FROM`                 | —                                                | Sender address on verified domain                   |

Copy `.env.example` to `.env` and fill in Google credentials.

### Google OAuth setup

1. [Google Cloud Console](https://console.cloud.google.com/apis/credentials) → Create OAuth 2.0 Client ID (Web application)
2. **Authorized redirect URIs** — add exactly:
   ```
   http://localhost:3000/api/auth/google/callback
   ```
3. Paste **Client ID** and **Client secret** into `apps/backend/.env`
4. Restart API: `pnpm api:dev`

The callback goes through Next.js rewrite (`/api/*` → FastAPI), so the redirect URI uses port **3000**, not 8000.

### Selectel SMTP (email codes)

**Important:** Selectel mail relay accepts SMTP **only from servers inside Selectel infrastructure**. From your local machine it will fail — use `SMTP_DEV_LOG_CODES=true` for local development (code is printed in API logs).

1. Verify domain in [Selectel panel](https://my.selectel.ru/) — add DNS TXT at `@`:
   ```
   @ TXT "97584fb7-0524-4215-9a20-622d27cbb6fd"
   ```
2. Configure `apps/backend/.env` (see `.env.example`):
   - `SMTP_HOST=smtp.mail.selcloud.ru`
   - `SMTP_PORT=1127` (SSL) with fallback `SMTP_FALLBACK_PORT=1126` (STARTTLS)
   - `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM=noreply@wish-time.ru`
   - `SMTP_DEV_LOG_CODES=true` — **local dev only** (logs code when SMTP fails)
   - `SMTP_DEV_LOG_CODES=false` — **production on Selectel VPS**
3. Restart API after changing `.env`

When `SMTP_DEV_LOG_CODES=true`, after clicking «Отправить код» check the API terminal for:
`dev registration code for user@example.com: 123456`

## Auth API

| Method | Path                              | Description                             |
| ------ | --------------------------------- | --------------------------------------- |
| POST   | `/api/auth/register`              | Register with email/password            |
| POST   | `/api/auth/login`                 | Login with email/password               |
| POST   | `/api/auth/logout`                | Logout                                  |
| GET    | `/api/auth/me`                    | Current user                            |
| POST   | `/api/auth/email/send-code`       | Send 6-digit registration code to email |
| POST   | `/api/auth/email/verify-register` | Verify code and create account          |
| GET    | `/api/auth/google`                | Google OAuth redirect                   |
| GET    | `/api/auth/google/callback`       | Google OAuth callback                   |

Google redirect URI: `GOOGLE_OAUTH_REDIRECT_URI` → `http://localhost:3000/api/auth/google/callback`

## Docker

From repository root (Docker daemon required):

```bash
docker compose up --build api
```

Next.js can target this API via `API_ORIGIN=http://127.0.0.1:8000` (default in [`apps/web/next.config.ts`](../web/next.config.ts) rewrites).
