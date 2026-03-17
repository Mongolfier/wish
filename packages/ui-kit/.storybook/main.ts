import type { StorybookConfig } from '@storybook/react-vite';
import type { Plugin, PluginOption, UserConfig } from 'vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	addons: ['@storybook/addon-docs'],
	async viteFinal(config) {
		const normalizePlugins = (plugins: UserConfig['plugins']): Plugin[] => {
			const list = (plugins ?? []) as PluginOption[];
			return list.flat().filter(Boolean) as Plugin[];
		};

		const filteredPlugins = normalizePlugins(config.plugins).filter((plugin) => {
			const name = plugin?.name ?? '';
			// Vitest (especially browser mode) can inject a mocker entry into Vite builds.
			// That entry breaks static Storybook builds (infinite loader / runtime errors).
			return !/vitest|mocker/i.test(name);
		});

		return {
			...config,
			plugins: filteredPlugins,
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
