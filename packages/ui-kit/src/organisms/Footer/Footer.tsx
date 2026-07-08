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
				<div className={css.inner}>
					{contactsSlot ? <div className={css.contacts}>{contactsSlot}</div> : null}
					{copyrightSlot ? (
						<div className={css.bottom}>
							<div
								aria-hidden
								className={css.divider}
							/>
							<p className={css.copyright}>{copyrightSlot}</p>
						</div>
					) : null}
				</div>
			</footer>
		);
	},
);

Footer.displayName = 'Footer';
