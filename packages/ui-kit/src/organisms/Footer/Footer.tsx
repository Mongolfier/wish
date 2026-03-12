import { type FC, forwardRef, type HTMLAttributes, type ReactNode, type RefAttributes } from 'react';
import cn from 'classnames';

import css from './Footer.module.css';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
	copyrightSlot?: ReactNode;
	contactsSlot?: ReactNode;
}
export const Footer: FC<FooterProps & RefAttributes<HTMLElement>> = forwardRef<HTMLElement, FooterProps>(
	({ className, copyrightSlot, contactsSlot, ...props }, ref) => {
		return (
			<footer
				{...props}
				className={cn(css.footer, className)}
				ref={ref}
			>
				<div className={css.mainWrapper}>
					<div className={css.copyrightSlot}>{copyrightSlot}</div>
					<div className={css.contactsSlot}>{contactsSlot}</div>
				</div>
			</footer>
		);
	},
);
Footer.displayName = 'Footer';
