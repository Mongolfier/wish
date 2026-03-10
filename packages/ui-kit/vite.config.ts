import { parse } from 'node:path';
import { defineConfig, type PluginOption, type UserConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

import { generateIconTypesPlugin } from './src/plugins/generateIconTypesPlugin';

export default defineConfig((): UserConfig => {
	return {
		plugins: [
			svgr({ include: '**/*.svg', svgrOptions: { exportType: 'default' } }) as PluginOption,
			generateIconTypesPlugin({
				iconDir: 'src/assets/icons',
				outputDir: 'src/core/Icon',
			}),
		],
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
