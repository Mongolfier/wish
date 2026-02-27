import simpleImportSort from 'eslint-plugin-simple-import-sort';
import prettierPlugin from 'eslint-plugin-prettier';
import sonarjs from 'eslint-plugin-sonarjs';
import prettierConfig from 'prettier-config' with { type: 'json' };

export const typescriptRules = {
	'no-unused-vars': 'off',
	'sonarjs/no-unused-vars': 'off',
	'@typescript-eslint/no-unused-vars': [
		'error',
		{
			vars: 'all',
			args: 'after-used',
			caughtErrors: 'none',
			ignoreRestSiblings: true,
			destructuredArrayIgnorePattern: '^_',
		},
	],
	'@typescript-eslint/ban-ts-comment': 'warn',
};

const config = [
	sonarjs.configs.recommended,
	{
		plugins: {
			'simple-import-sort': simpleImportSort,
			prettier: prettierPlugin,
		},
		rules: {
			'prettier/prettier': ['error', prettierConfig, { usePrettierrc: false }],
			'no-console': 'warn',
			'sonarjs/todo-tag': 'warn',
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						['^react', '^(?!@)\\w', '^@?\\w'],
						['^(@)(/.*|$)'],
						['^\\u0000'],
						['^\\.\\.(?!/?$)', '^\\.\\./?$'],
						['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
						['^.+\\.?(css)$'],
					],
				},
			],
			'simple-import-sort/exports': 'error',
		},
	},
];

export default config;
