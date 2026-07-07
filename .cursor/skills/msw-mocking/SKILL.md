---
name: msw-mocking
description: >-
  Mocks HTTP API in @wish/web tests and dev using MSW v2. Use when stubbing
  /api routes in Vitest, adding handlers, or testing components that fetch the
  backend.
---

# MSW Mocking

Package: `apps/web`. MSW **v2** (`msw` in devDependencies).

Mock layout:

```
apps/web/src/mocks/
├── handlers.ts    # shared route handlers
├── server.ts      # Node — Vitest
└── browser.ts     # browser — optional dev mocking
```

## Add a handler

Edit `handlers.ts`:

```ts
import { http, HttpResponse } from 'msw';

export const handlers = [
	http.get('/api/health', () => {
		return HttpResponse.json({ status: 'ok' });
	}),
	http.post('/api/auth/login', async ({ request }) => {
		const body = await request.json();
		return HttpResponse.json({ token: 'mock-token' });
	}),
];
```

Paths match Next.js rewrite: browser/tests call **`/api/...`**, not `localhost:8000`.

## Vitest setup (Node server)

Wire MSW in `apps/web/vitest.setup.ts`:

```ts
import '@testing-library/jest-dom/vitest';
import { afterAll, afterEach, beforeAll } from 'vitest';

import { server } from './src/mocks/server';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
```

Per-test override:

```ts
import { http, HttpResponse } from 'msw';
import { server } from '@/mocks/server';

server.use(http.get('/api/health', () => HttpResponse.json({ status: 'down' }, { status: 503 })));
```

## Example component test

```tsx
import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
	it('shows ok when API healthy', async () => {
		render(<MyComponent />);
		await waitFor(() => {
			expect(screen.getByText(/ok/i)).toBeInTheDocument();
		});
	});
});
```

Colocate tests as `*.test.ts(x)` under `src/` (see `vitest.config.ts`).

## Browser worker (optional dev)

`browser.ts` exports `worker` for in-browser mocking. Start in app entry only when needed (not production):

```ts
if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
	const { worker } = await import('@/mocks/browser');
	await worker.start({ onUnhandledRequest: 'bypass' });
}
```

## Real backend vs MSW

| MSW (unit/integration tests) | Real API                               |
| ---------------------------- | -------------------------------------- |
| Fast, deterministic          | `pnpm api:dev` + fetch in e2e          |
| Vitest + happy-dom           | Playwright hits running Next + backend |

E2E tests (`e2e/`) do not use MSW — they use the real stack or Next rewrites.

## Verify

```bash
pnpm --filter @wish/web test:run
pnpm --filter @wish/web lint
```

Add handlers before writing tests that depend on API responses.
