---
name: security-audit
description: >-
  Audits security of the wish monorepo: auth, API, secrets, Docker/nginx, and
  dependencies. Use when the user asks for security review, security audit,
  проверка безопасности, /security-audit, or application security check. For
  diff-only review of local changes, also handles /review-security.
---

# Security Audit

Two modes depending on what the user wants.

## Choose mode

| User intent                                            | Mode                            | Action                                    |
| ------------------------------------------------------ | ------------------------------- | ----------------------------------------- |
| Review **my changes** / PR / uncommitted diff          | **Diff review**                 | Launch `security-review` subagent (below) |
| Review **the application** / full audit / auth / infra | **App audit**                   | Launch `security-audit` agent (below)     |
| Unclear                                                | Ask once: changes or whole app? | —                                         |

---

## Mode A: Diff review (`/review-security`)

Use when the user wants security review of **code changes** (branch, PR, or uncommitted).

Launch exactly one `security-review` subagent:

- `readonly: true`
- `run_in_background: false` unless asked for background
- `description: "Security Review"`
- `subagent_type: "security-review"`

Prompt shape:

```text
Full Repository Path: c:\projects\wish
Diff: branch changes
Custom Instructions: <only if user gave specific instructions>
```

Use `uncommitted changes` instead of `branch changes` when the user asks to review only local/dirty changes.

After the subagent finishes, summarize:

- One-line status: findings count or "no issues"
- If findings exist — markdown table: **Severity | Location (file:line) | Finding**
- Do not fix unless the user asks

---

## Mode B: Application audit (`/security-audit`)

Use when the user wants to check **application security** holistically.

Launch exactly one agent:

- Invoke `/security-audit` or delegate to `.cursor/agents/security-audit.md`
- `readonly: true`
- `run_in_background: false` unless asked for background
- `description: "Security Audit"`

Prompt shape:

```text
Repository: c:\projects\wish

Scope:
<full app | auth | api | infra | frontend | dependencies — default: full app>

Focus areas:
<optional: specific flows, files, or concerns from the user>

Custom instructions:
<only if the user gave specific audit instructions>
```

After the subagent finishes, summarize for the user:

- **Verdict** in one line: SECURE / NEEDS ATTENTION / AT RISK
- **Findings table** — all rows if AT RISK; only High+ if NEEDS ATTENTION; skip if SECURE
- **Top 3 actions** if verdict is not SECURE

Do not fix findings unless the user explicitly asks.

---

## Wish-specific hotspots

Prioritize these paths in app audits:

**Auth:** `apps/backend/src/wish_api/routers/auth.py`, `services/auth.py`, `dependencies/auth.py`

**Config & secrets:** `apps/backend/src/wish_api/config.py`, `apps/backend/.env.prod`, `.github/workflows/`

**Infra:** `docker-compose.yml`, `.nginx/nginx.conf`

**Frontend boundary:** `apps/web/next.config.ts`, `apps/web/src/middleware.ts`, `apps/web/src/core/features/auth/`

---

## Optional: dependency scan

When the user asks to include dependency checks, run from repo root:

```bash
pnpm audit --audit-level=moderate
```

For Python (if `pip-audit` is available in backend venv):

```bash
cd apps/backend && uv run pip-audit
```

Include results in the audit report; do not block the audit if tools are missing.
