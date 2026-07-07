---
name: monorepo-dev
description: >-
  Runs and debugs the wish pnpm monorepo: dev servers, builds, tests, and package
  filters. Use when starting development, fixing build errors, or choosing which
  commands to run in @wish/web, @wish/ui-kit, or @wish/backend.
---

# Monorepo Dev

Root: `c:\projects\wish`. Package manager: **pnpm 10+**, Node **20+**.

## Workspace packages

| Package               | Path                 | Purpose                    |
| --------------------- | -------------------- | -------------------------- |
| `@wish/web`           | `apps/web`           | Next.js 15 app             |
| `@wish/backend`       | `apps/backend`       | FastAPI (Python 3.11+, uv) |
| `@wish/ui-kit`        | `packages/ui-kit`    | Shared React library       |
| `eslint-config`, etc. | `packages/configs/*` | Shared tooling             |

## Build order

**Web depends on built ui-kit** (`tsconfig` paths → `packages/ui-kit/dist`).

```bash
pnpm build:ui-kit          # always first when ui-kit changed
pnpm --filter @wish/web build
# or
pnpm build                 # ui-kit + web
```

## Common commands (from repo root)

| Task               | Command                                            |
| ------------------ | -------------------------------------------------- |
| Web dev            | `pnpm dev` (builds ui-kit once, then Next)         |
| Watch ui-kit + web | `pnpm dev:watch`                                   |
| Backend API        | `pnpm api:dev` → http://localhost:8000/docs        |
| Storybook          | `pnpm storybook`                                   |
| Lint all           | `pnpm lint`                                        |
| Lint CSS           | `pnpm lint:css`                                    |
| Format             | `pnpm format`                                      |
| Unit tests         | `pnpm test:run`                                    |
| E2E                | `pnpm test:e2e` (starts `pnpm dev` via Playwright) |

## Filter by package

```bash
pnpm --filter @wish/web dev
pnpm --filter @wish/ui-kit build
pnpm --filter @wish/backend test:run
pnpm --filter @wish/web test:run
```

## Backend setup (first time)

```bash
cd apps/backend && uv sync --extra dev
pnpm api:dev
```

Without uv: see `apps/backend/README.md` (`dev:pip`, `test:pip`).

## API ↔ Web proxy

Next rewrites `/api/*` → `API_ORIGIN` (default `http://127.0.0.1:8000`). Start backend before testing API calls from web.

## Pre-push hook (`.husky/pre-push`)

Runs automatically on push:

```
pnpm lint → pnpm lint:css → pnpm format → pnpm test:run
```

Run manually before push to catch failures early.

## Docker (optional)

```bash
docker compose up --build api     # backend on :8000
docker compose up --build         # nginx + app + storybook + api
```

Next standalone build: `ENVIRONMENT=docker`.

## Troubleshooting

| Symptom                               | Fix                                          |
| ------------------------------------- | -------------------------------------------- |
| Web can't find `@wish/ui-kit` exports | `pnpm build:ui-kit`                          |
| Stale types from ui-kit               | Rebuild ui-kit, restart Next dev             |
| E2E fails to start                    | Port 3000 free; or run `pnpm dev` separately |
| Backend import errors                 | `uv sync --extra dev` in `apps/backend`      |
