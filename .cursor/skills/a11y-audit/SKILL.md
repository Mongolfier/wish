---
name: a11y-audit
description: >-
  Audits frontend accessibility (a11y) in the wish monorepo: WCAG-oriented code
  review, Playwright+axe scans, keyboard/focus checks. Use when the user asks
  for accessibility review, a11y audit, проверка доступности, /a11y-audit, WCAG,
  or axe testing on @wish/web and @wish/ui-kit.
---

# Accessibility Audit (A11y)

Two modes depending on what the user wants.

## Choose mode

| User intent | Mode | Action |
| ----------- | ---- | ------ |
| Review **my changes** / PR / specific component | **Diff review** | Code review + targeted axe on affected routes |
| Review **the app** / full audit / before release | **App audit** | Launch `a11y-audit` agent (below) |
| Run **automated scan only** | **Axe e2e** | `pnpm test:a11y` |
| Unclear | Ask once: changes or whole app? | — |

---

## Mode A: Diff review

1. Identify changed files under `apps/web/` and `packages/ui-kit/`.
2. Review against [CHECKLIST.md](CHECKLIST.md) — focus sections matching the change (forms, links, modals, etc.).
3. Map UI changes → routes to scan (see **Routes to scan** below).
4. Run axe on those routes:

```bash
pnpm test:a11y
# or single route:
pnpm exec playwright test e2e/a11y.spec.ts -g "auth"
```

5. Report findings; fix only if the user asks.

---

## Mode B: Application audit (`/a11y-audit`)

Launch exactly one agent:

- Invoke `/a11y-audit` or delegate to `.cursor/agents/a11y-audit.md`
- `readonly: true`
- `run_in_background: false` unless asked for background
- `description: "A11y Audit"`

Prompt shape:

```text
Repository: c:\projects\wish

Scope:
<full frontend | web only | ui-kit only | specific flows — default: full frontend>

Routes / flows:
<optional: /ru/auth, footer, etc.>

Custom instructions:
<only if the user gave specific audit instructions>
```

After the agent finishes, summarize:

- **Verdict** in one line: PASS / NEEDS WORK / FAIL
- **Findings table** — Severity | Location | WCAG criterion (if known) | Issue | Suggested fix
- **Top 3 actions** if verdict is not PASS

Do not fix unless the user explicitly asks.

---

## Automated scan (axe + Playwright)

Tests: `e2e/a11y.spec.ts`. Config: root `playwright.config.ts`.

```bash
pnpm test:a11y              # all a11y specs, starts dev server
pnpm exec playwright test e2e/a11y.spec.ts --project=chromium
pnpm exec playwright show-report
```

Axe reports **violations** (fail test) and **incomplete** (logged, not failing — review manually).

---

## Routes to scan

Default locale is **`ru`**. Scan both locales for i18n-sensitive UI.

| Route | Why |
| ----- | --- |
| `/ru`, `/en` | Home, header, footer |
| `/ru/auth`, `/en/auth` | Forms, buttons, errors |
| `/ru/auth/register`, `/en/auth/register` | Registration flow |

Add routes when new pages ship.

---

## Manual checks (when axe is clean)

Quick keyboard pass on changed UI:

- Tab order logical; no keyboard traps
- `:focus-visible` visible on links, buttons, inputs
- Form errors announced (associated `label` / `aria-describedby` / live region)
- Icon-only controls have accessible name (`aria-label` or visible text)
- Color contrast sufficient for text and focus rings (especially on dark footer/header)

---

## Wish-specific hotspots

Prioritize in reviews:

| Area | Path |
| ---- | ---- |
| Auth forms | `apps/web/src/core/features/auth/` |
| Footer contacts | `apps/web/src/core/widgets/footer/` |
| Header / nav | `apps/web/src/core/widgets/header/`, `packages/ui-kit/src/organisms/MainMenu/` |
| Primitives | `packages/ui-kit/src/elements/Button/`, `Link/`, `SocialLink/` |
| i18n strings | `apps/web/locales/*/`, visible `alt` / `aria-label` must not hardcode one locale in components |

---

## Report template

```markdown
# A11y Audit — [scope]

**Verdict:** PASS | NEEDS WORK | FAIL

## Automated (axe)
- Routes scanned: …
- Violations: N

## Findings

| Severity | Location | Issue | Fix |
| -------- | -------- | ----- | --- |
| Critical | file:line | … | … |

## Top actions
1. …
```

**Severity:** Critical (blocks users), High (WCAG A fail), Medium (AA / UX), Low (enhancement).

---

## Adding a11y to CI / pre-push

Optional — not in hook by default. After stable `test:a11y`:

- Add job in GitHub Actions mirroring `pnpm test:a11y`
- Or run manually before release / large UI PRs

---

## Additional resources

- Full checklist: [CHECKLIST.md](CHECKLIST.md)
- E2E conventions: `.cursor/skills/e2e-playwright/SKILL.md`
- UI kit patterns: `.cursor/skills/add-ui-kit-component/SKILL.md`
