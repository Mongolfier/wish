import { readdirSync, statSync } from 'node:fs';
import { join, parse } from 'node:path';

export interface IconFolder {
	folder: string;
	icons: string[];
}

/**
 * Собираем все иконки из папки assets/icons и превращаем названия папок и файлов в структуру
 *
 * @param {string} iconsDirectory - Путь к папке с иконками
 * @return {IconFolder[]} Структура иконки
 */

export function collectIcons(iconsDirectory: string): IconFolder[] {
	const result: IconFolder[] = [];
	const rootIcons: string[] = [];

	const entries = readdirSync(iconsDirectory);

	for (const entry of entries) {
		const fullPath = join(iconsDirectory, entry);
		const stat = statSync(fullPath);

		if (stat.isDirectory()) {
			const icons = readdirSync(fullPath)
				.filter((file) => parse(file).ext === '.svg')
				.map((file) => parse(file).name);

			if (icons.length > 0) {
				result.push({ folder: entry, icons });
			}
		} else if (parse(entry).ext === '.svg') {
			rootIcons.push(parse(entry).name);
		}
	}

	if (rootIcons.length > 0) {
		result.unshift({ folder: 'root', icons: rootIcons });
	}

	return result;
}
