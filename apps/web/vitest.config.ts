import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	test: {
		globals: true,
		environment: 'happy-dom',
		setupFiles: ['./vitest.setup.ts'],
		include: ['src/**/*.test.{ts,tsx}'],
		css: { modules: { classNameStrategy: 'non-scoped' } },
	},
});
