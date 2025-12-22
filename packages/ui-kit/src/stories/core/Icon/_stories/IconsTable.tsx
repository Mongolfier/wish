import cn from 'classnames';

import { Icon } from '../Icon';

import { iconsList } from './iconsList';

import css from './IconsTable.module.css';

export const IconsTable = () => {
	return (
		<div className={css.wrapper}>
			{iconsList.map((iconsCategory) => (
				<table key={iconsCategory.folder}>
					<caption className={css.caption}>
						Папка <code>{iconsCategory.folder}</code>
					</caption>
					<thead>
						<tr>
							<th className={css.tableHeadCell}>Иконка</th>
							<th className={css.tableHeadCell}>Имя иконки</th>
						</tr>
					</thead>
					<tbody>
						{iconsCategory.icons.map((icon) => {
							return (
								<tr key={icon}>
									<td className={cn(css.tableCell)}>
										<div className={css.cell}>
											<Icon
												// @ts-expect-error typing problem
												name={icon}
												// @ts-expect-error typing problem
												category={iconsCategory.folder === 'root' ? undefined : iconsCategory.folder}
												{...getSizes(iconsCategory.folder, icon)}
												className={cn({ [css.spinner]: icon === 'spinner' })}
											/>
										</div>
									</td>
									<td className={css.tableCell}>{icon}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			))}
		</div>
	);
};

function getSizes(folder: string, icon: string): { width: number; height: number } {
	if (customIconSizes[icon]) {
		return customIconSizes[icon];
	}

	if (folder === 'game-rating') {
		return {
			width: 56,
			height: 56,
		};
	}

	return {
		width: 24,
		height: 24,
	};
}

const customIconSizes: Record<string, { width: number; height: number }> = {
	slide: { width: 68, height: 9 },
	pagination_m: { width: 32, height: 16 },
	pagination_s: { width: 24, height: 12 },
	'base-logo': { width: 170, height: 24 },
	age12: { width: 48, height: 56 },
};
