import { readdirSync, statSync } from 'fs';
import { basename, join } from 'path';

/**
 * @typedef {Object} IconsStructure
 * @property {String} folder - наименование папки (root, если лежит в корне)
 * @property {String[]} icons - перечисление иконок без .svg
 */

/**
 * Собираем все иконки из папки assets/icons и превращаем названия папок и файлов в структуру
 *
 * @return {IconsStructure[]}
 */

export function collectIcons(iconsDirectory) {
	const result = [];

	const items = readdirSync(iconsDirectory);

	items.forEach((item) => {
		const fullPath = join(iconsDirectory, item);
		const stats = statSync(fullPath);

		if (stats.isDirectory()) {
			const icons = readdirSync(fullPath).filter((file) => file.endsWith('.svg'));
			if (icons.length > 0) {
				result.push({
					folder: item,
					icons: icons.map((icon) => basename(icon, '.svg')),
				});
			}
		} else if (item.endsWith('.svg')) {
			const folderName = 'root';
			const icons = result.find((r) => r.folder === folderName) || { folder: folderName, icons: [] };
			if (!result.includes(icons)) {
				result.push(icons);
			}
			icons.icons.push(basename(item, '.svg'));
		}
	});

	return result;
}
