import { describe, expect, it } from 'vitest';

import { routes } from './routes';

describe('routes', () => {
	it('has index route pointing to root', () => {
		expect(routes.index).toBe('/');
	});

	it('contains all expected route keys', () => {
		expect(Object.keys(routes)).toContain('index');
	});
});
