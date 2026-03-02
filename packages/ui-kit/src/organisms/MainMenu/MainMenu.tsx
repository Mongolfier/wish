import React, { type FC, type HTMLAttributes, type RefAttributes } from 'react';
import cn from 'classnames';

import { type ViewType } from './types';

import css from './MainMenu.module.css';

export interface MainMenuProps extends HTMLAttributes<HTMLElement> {
	viewType?: ViewType;
}

export const MainMenu: FC<MainMenuProps & RefAttributes<HTMLElement>> = React.forwardRef<HTMLElement, MainMenuProps>(
	(props, ref) => {
		const { children, viewType = 'default', className, ...headerProps } = props;

		return (
			<header
				{...headerProps}
				ref={ref}
				className={cn(
					css.mainMenu,
					className,
					viewType === 'blurred' && css.blurred,
					viewType === 'hidden' && css.hidden,
				)}
			>
				<div className={css.contentWrapper}>{children}</div>
			</header>
		);
	},
);

MainMenu.displayName = 'MainMenu';
