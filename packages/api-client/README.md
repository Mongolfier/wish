# @wish/api-client

Typed HTTP client for the Wish API, generated from the FastAPI OpenAPI schema.

## Regenerate after API changes

From repo root:

```bash
pnpm api:openapi
```

This exports `openapi.json` from the backend, runs `openapi-typescript`, and builds `dist/`.

## Usage

```ts
import { browserApiClient, createApiClient, type components } from '@wish/api-client';

type User = components['schemas']['UserResponse'];

const { data, error, response } = await browserApiClient.POST('/api/auth/login', {
	credentials: 'include',
	body: { email, password },
});
```

- `browserApiClient` — same-origin requests via Next.js `/api` rewrites.
- `createApiClient(baseUrl)` — direct backend URL (SSR, scripts).
