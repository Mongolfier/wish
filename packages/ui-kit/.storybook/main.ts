import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	addons: ['@storybook/addon-docs'],
	async viteFinal(config) {
		return {
			...config,
			build: {
				...config.build,
				rollupOptions: {
					...config.build?.rollupOptions,
					output: {
						...config.build?.rollupOptions?.output,
						manualChunks(id) {
							if (id.includes('@storybook')) {
								return 'storybook-vendor';
							}

							if (id.includes('react-dom') || id.includes('react/')) {
								return 'react-vendor';
							}

							if (id.includes('node_modules')) {
								return 'vendor';
							}
						},
					},
				},
			},
		};
	},
};

export default config;
