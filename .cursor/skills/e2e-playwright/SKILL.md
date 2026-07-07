---
name: e2e-playwright
description: >-
  Writes and runs Playwright end-to-end tests for wish in e2e/. Use when adding
  user flow tests, regression tests, or debugging pnpm test:e2e failures.
---

# E2E (Playwright)

Config: `playwright.config.ts` (repo root). Tests: `e2e/**/*.spec.ts`.

## Commands

```bash
pnpm test:e2e              # all browsers, starts dev server
pnpm test:e2e:ui           # interactive UI mode
pnpm exec playwright test e2e/home.spec.ts   # single file
pnpm exec playwright show-report             # last HTML report
```

## Environment

- **baseURL:** `http://localhost:3000`
- **webServer:** `pnpm dev` (builds ui-kit + Next); reuses existing server locally, fresh in CI
- **Browsers:** chromium, firefox, webkit (3 projects)
- **CI:** 2 retries, 1 worker; local: parallel

Ensure port **3000** is free, or dev server already running.

## Write a test

```ts
import { expect, test } from '@playwright/test';

test.describe('Feature name', () => {
	test('does something', async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveTitle(/wish/i);
	});
});
```

Place files in `e2e/` with `.spec.ts` suffix.

## Locale-aware app

Default locale is **`ru`**. Middleware may redirect `/` → `/ru/...`.

- Prefer `page.goto('/')` — app handles locale routing
- For explicit locale: `page.goto('/en/auth')` or `page.goto('/ru/auth')`
- Assert visible text via roles/locators, not hardcoded copy when testing both locales

## Locator tips

```ts
page.getByRole('button', { name: /войти|log in/i });
page.locator('nav');
page.getByTestId('...'); // add data-testid in components when needed
```

## When to use e2e vs unit tests

| E2E                                | Unit (Vitest)                 |
| ---------------------------------- | ----------------------------- |
| Full page load, navigation         | Pure functions, hooks logic   |
| Header/footer visible              | Route constants, utils        |
| Cross-locale routing               | Component with mocked deps    |
| API + UI integration (real server) | MSW-mocked fetch in web tests |

Unit tests live in `apps/web/src/**/*.test.ts(x)` — faster, run in pre-push.

## Debugging

```bash
pnpm exec playwright test --debug
pnpm exec playwright test --headed
```

Trace on first retry (`trace: 'on-first-retry'`). Check report after failure.

## Verify

```bash
pnpm test:e2e
```

For ui-kit-only changes, e2e may still pass — run when web behavior or routes change.
