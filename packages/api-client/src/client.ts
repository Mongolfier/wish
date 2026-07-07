import createClient from 'openapi-fetch';

import type { paths } from './schema.js';

export type { components, operations, paths } from './schema.js';

export function createApiClient(baseUrl = '') {
	return createClient<paths>({ baseUrl });
}

/** Browser / Next.js client — requests go through same-origin `/api` rewrites. */
export const browserApiClient = createApiClient('');
