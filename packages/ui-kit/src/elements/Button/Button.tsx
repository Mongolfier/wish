import { type ButtonHTMLAttributes, forwardRef, type RefAttributes } from 'react';
import cn from 'classnames';

import { Icon, type IconProps } from '../../core/Icon';

import css from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Visual style of the button
	 * @default 'primary'
	 */
	mode?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';

	/**
	 * Button size
	 * @default 'medium'
	 */
	size?: 'small' | 'medium' | 'large';

	/**
	 * Stretch to full container width
	 * @default false
	 */
	fullWidth?: boolean;

	/**
	 * Icon rendered inside the button
	 */
	icon?: IconProps;

	/**
	 * Icon position relative to label
	 * @default 'prefix'
	 */
	alignIcon?: 'prefix' | 'suffix';

	/**
	 * Show loading spinner and disable interaction
	 * @default false
	 */
	isLoading?: boolean;

	/**
	 * Circular icon-only button (children ignored)
	 * @default false
	 */
	isCircle?: boolean;
}

const modeClassNames = new Map<NonNullable<ButtonProps['mode']>, string>([
	['primary', css.button_primary],
	['secondary', css.button_secondary],
	['tertiary', css.button_third],
	['quaternary', css.button_fourth],
]);

const iconAlignmentClassNames = new Map<NonNullable<ButtonProps['alignIcon']>, string>([
	['prefix', css.iconAlignPrefix],
	['suffix', css.iconAlignSuffix],
]);

const sizeClassNames = new Map<NonNullable<ButtonProps['size']>, string>([
	['small', css.button_small],
	['medium', css.button_medium],
	['large', css.button_large],
]);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			mode = 'primary',
			size = 'medium',
			fullWidth = false,
			icon,
			alignIcon = 'prefix',
			isLoading = false,
			isCircle = false,
			type = 'button',
			disabled,
			className,
			...htmlProps
		},
		ref,
	) => {
		const showIcon = icon != null && !isLoading;
		const iconAlignment = showIcon ? alignIcon : undefined;

		return (
			<button
				{...htmlProps}
				ref={ref}
				type={type}
				disabled={disabled || isLoading}
				aria-busy={isLoading || undefined}
				className={cn(
					css.button,
					className,
					modeClassNames.get(mode),
					sizeClassNames.get(size),
					iconAlignment && iconAlignmentClassNames.get(iconAlignment),
					{
						[css.button_loading]: isLoading,
						[css.button_circle]: isCircle,
						[css.button_fullWidth]: fullWidth,
					},
				)}
			>
				{icon && !isLoading ? (
					<Icon
						{...icon}
						className={cn(css.icon, icon.className)}
						aria-hidden
					/>
				) : null}
				{!isCircle && children ? <span className={css.text}>{children}</span> : null}
				{isLoading ? (
					<span
						className={css.spinner}
						aria-hidden
					/>
				) : null}
			</button>
		);
	},
);

Button.displayName = 'Button';

export type { RefAttributes };
