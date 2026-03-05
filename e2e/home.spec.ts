import { expect, test } from '@playwright/test';

test.describe('Home page', () => {
	test('loads successfully', async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveTitle(/wish/i);
	});

	test('has main navigation', async ({ page }) => {
		await page.goto('/');
		const nav = page.locator('nav');
		await expect(nav).toBeVisible();
	});
});
