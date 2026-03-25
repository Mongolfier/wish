import { parse, resolve } from 'node:path';
import { defineConfig, type PluginOption, type UserConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import { generateBarrelPlugin } from './src/plugins/generateBarrelPlugin';
import { generateIconTypesPlugin } from './src/plugins/generateIconTypesPlugin';

export default defineConfig((): UserConfig => {
	return {
		resolve: {
			alias: {
				'@': resolve(__dirname, 'src'),
			},
		},
		plugins: [
			svgr({ include: '**/*.svg', svgrOptions: { exportType: 'default' } }) as PluginOption,
			generateIconTypesPlugin({
				iconDir: 'src/assets/icons',
				outputDir: 'src/core/Icon',
			}),
			generateBarrelPlugin({
				srcDir: 'src',
				outputFile: 'src/index.ts',
				exclude: ['./plugins'],
			}),
		],
		build: {
			emptyOutDir: false,
			lib: {
				entry: resolve(__dirname, 'src/index.ts'),
				formats: ['es'],
				fileName: 'index',
				cssFileName: 'styles',
			},
			rollupOptions: {
				external: ['react', 'react-dom', 'react/jsx-runtime', 'react-select', /@emotion\/.*/],
				output: {
					// Marks the entire bundle as a client boundary so consumers (e.g. Next.js)
					// don't need 'use client' on individual components that use hooks.
					banner: "'use client';",
				},
			},
		},
		css: {
			modules: {
				localsConvention: 'camelCase',
				generateScopedName: (name, filename) => {
					const moduleName = parse(filename).name.replace('.module', '');

					return `wishui-${moduleName}__${name}`;
				},
			},
		},
	};
});
