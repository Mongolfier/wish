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
	 * HTML tag or component (e.g. Next.js Link)
	 * @default 'a'
	 */
	Component?: ElementType;

	children?: ReactNode;

	/**
	 * @default 'small'
	 */
	size?: 'extraSmall' | 'small' | 'medium';

	/**
	 * Visual style
	 * @default 'accent'
	 */
	variant?: 'default' | 'accent' | 'muted' | 'inverse';

	/**
	 * Underline behaviour
	 * @default 'hover'
	 */
	underline?: 'none' | 'hover' | 'always';

	disabled?: boolean;
};

const variantClassNames = {
	default: css.variant_default,
	accent: css.variant_accent,
	muted: css.variant_muted,
	inverse: css.variant_inverse,
} as const;

const underlineClassNames = {
	none: css.underline_none,
	hover: css.underline_hover,
	always: css.underline_always,
} as const;

const LinkInner = <Props extends HTMLAttributes<HTMLElement> = AnchorHTMLAttributes<HTMLAnchorElement>>(
	{
		children,
		Component = 'a',
		size = 'small',
		variant = 'accent',
		underline = 'hover',
		disabled,
		className,
		...componentProps
	}: LinkProps<Props>,
	ref: ForwardedRef<HTMLElement>,
) => {
	return (
		<Component
			{...componentProps}
			ref={ref}
			className={cn(
				css.link,
				css[size],
				variantClassNames[variant],
				underlineClassNames[underline],
				{
					[css.disabled]: disabled,
				},
				className,
			)}
			aria-disabled={disabled || undefined}
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
