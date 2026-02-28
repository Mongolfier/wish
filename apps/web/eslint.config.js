import { globalIgnores } from 'eslint/config';
import eslintConfig, { typescriptRules } from 'eslint-config';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';

export default [
	globalIgnores(['dist', '.next', 'next-env.d.ts']),
	...eslintConfig,
	js.configs.recommended,
	...tseslint.configs.recommended,
	reactHooks.configs.flat.recommended,
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		rules: {
			...typescriptRules,
			'@typescript-eslint/no-empty-object-type': 'warn',
		},
	},
];
