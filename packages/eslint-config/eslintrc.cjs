const { resolve } = require('node:path');
const prettier = require('prettier-config');

module.exports = {
  extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended-legacy',
    'prettier'
  ],
  plugins: [
    'sonarjs',
    'simple-import-sort',
    '@typescript-eslint',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
  },
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			parserOptions: {
				project: ['./tsconfig.json'],
			},
		},
	],
  rules: {
    'prettier/prettier': [
      'error',
      prettier,
      {
        'usePrettierrc': false
      }
    ],
    'no-console': 'warn',
		'no-unused-vars': 'off',
		'sonarjs/no-unused-vars': 'off',
		'sonarjs/todo-tag': 'warn',
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
    'simple-import-sort/imports': ['error', {
      groups: [
        // Packages `react` related packages come first.
        ['^react', '^(?!@)\\w', '^@?\\w'],
        // Internal packages.
        ['^(@)(/.*|$)'],
        // Side effect imports.
        ['^\\u0000'],
        // Parent imports. Put `..` last.
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        // Other relative imports. Put same-folder imports and `.` last.
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        // Style imports.
        ['^.+\\.?(css)$']
      ]
    }],
    'simple-import-sort/exports': 'error'
  }
};
