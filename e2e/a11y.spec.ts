import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

type AxeViolation = Awaited<ReturnType<InstanceType<typeof AxeBuilder>['analyze']>>['violations'][number];
const routes = [
	{ path: '/ru', name: 'home ru' },
	{ path: '/en', name: 'home en' },
	{ path: '/ru/auth', name: 'auth ru' },
	{ path: '/en/auth', name: 'auth en' },
	{ path: '/ru/auth/register', name: 'register ru' },
	{ path: '/en/auth/register', name: 'register en' },
] as const;

for (const route of routes) {
	test(`${route.name} has no axe violations`, async ({ page }, testInfo) => {
		await page.goto(route.path);
		await page.waitForLoadState('networkidle');

		const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();

		if (results.incomplete.length > 0) {
			testInfo.annotations.push({
				type: 'axe-incomplete',
				description: `${results.incomplete.length} rule(s) need manual review on ${route.path}`,
			});
		}

		expect(results.violations, formatViolations(route.path, results.violations)).toEqual([]);
	});
}

function formatViolations(path: string, violations: AxeViolation[]) {
	if (violations.length === 0) {
		return '';
	}

	const lines = violations.map((v) => {
		const nodes = v.nodes
			.map((n) => n.target.join(' '))
			.slice(0, 3)
			.join('; ');
		return `[${v.impact}] ${v.id}: ${v.description} (${nodes})`;
	});

	return `Axe violations on ${path}:\n${lines.join('\n')}`;
}
