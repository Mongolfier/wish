---
name: pre-push-checks
description: >-
  Runs local quality gates before git push in the wish monorepo: lint, CSS lint,
  format, and tests matching .husky/pre-push. Use before pushing, opening a PR,
  or when the user asks to run pre-push or CI-like checks locally.
---

# Pre-push Checks

Git hook: `.husky/pre-push` — runs automatically on `git push`.

## What the hook runs (in order)

```bash
pnpm lint
pnpm lint:css
pnpm format
pnpm test:run
```

All from **repo root**. Equivalent manual run:

```bash
pnpm lint && pnpm lint:css && pnpm format && pnpm test:run
```

## What each step covers

| Step            | Scope                                                          |
| --------------- | -------------------------------------------------------------- |
| `pnpm lint`     | ESLint in all workspaces (`apps/web`, `packages/ui-kit`, etc.) |
| `pnpm lint:css` | Stylelint on CSS in web and ui-kit                             |
| `pnpm format`   | Prettier write on `**/*.{ts,tsx,js,jsx,json,css,md}`           |
| `pnpm test:run` | Vitest across web + ui-kit (root `vitest.config.ts` projects)  |

**Note:** `pnpm format` **modifies files**. Review `git diff` after running manually — the hook may leave formatted changes unstaged.

## When to run extra checks

The hook does **not** run build or e2e. Add before risky changes:

| Change type             | Extra command                          |
| ----------------------- | -------------------------------------- |
| ui-kit or imports       | `pnpm build:ui-kit` then `pnpm build`  |
| Routing / layout / i18n | `pnpm --filter @wish/web build`        |
| User-facing flow        | `pnpm test:e2e`                        |
| Backend                 | `pnpm --filter @wish/backend test:run` |
| Docker / standalone     | `ENVIRONMENT=docker pnpm build`        |

## Fix failures

1. Read the failing command output — stop at first failure when fixing manually
2. **Lint** — fix ESLint errors in reported file
3. **lint:css** — fix Stylelint in `*.css` / `*.module.css`
4. **format** — usually auto-fixed; stage formatted files
5. **test:run** — fix or update tests; colocate as `*.test.ts(x)` under `src/`

## Scoped checks (faster iteration)

```bash
pnpm --filter @wish/web lint
pnpm --filter @wish/ui-kit test:run
```

Run full pre-push sequence before push to match CI/hook behavior.
