import {
	type AnchorHTMLAttributes,
	type ElementType,
	type ForwardedRef,
	forwardRef,
	type HTMLAttributes,
	type ReactNode,
} from 'react';
import cn from 'classnames';

import css from './Link.module.css';

export type LinkProps<Props extends HTMLAttributes<HTMLElement> = AnchorHTMLAttributes<HTMLAnchorElement>> = Props & {
	/**
	 * HTML-tag or component for render
	 * Next uses <Link /> instead of a regular <a />
	 * @default 'a'
	 */
	Component?: ElementType;

	/**
	 * Link content
	 */
	children?: ReactNode;

	/**
	 * @default small
	 */
	size: 'extraSmall' | 'small' | 'medium';
	disabled?: boolean;
};

const LinkInner = <Props extends HTMLAttributes<HTMLElement> = AnchorHTMLAttributes<HTMLAnchorElement>>(
	{ children, Component = 'a', size = 'small', disabled, ...componentProps }: LinkProps<Props>,
	ref: ForwardedRef<HTMLElement>,
) => {
	return (
		<Component
			{...componentProps}
			ref={ref}
			className={cn(css.link, componentProps?.className, css[size], {
				[css.disabled]: disabled,
			})}
			disabled={disabled}
		>
			{children}
		</Component>
	);
};

export const Link = forwardRef(LinkInner) as {
	<Props extends HTMLAttributes<HTMLElement> = AnchorHTMLAttributes<HTMLAnchorElement>>(
		props: LinkProps<Props> & { ref?: ForwardedRef<HTMLElement> },
	): ReturnType<typeof LinkInner>;
	displayName?: string;
};

Link.displayName = 'Link';
