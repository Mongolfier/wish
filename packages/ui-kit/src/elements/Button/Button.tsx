import { type ButtonHTMLAttributes, type FC, forwardRef, type PropsWithChildren, type RefAttributes } from 'react';
import cn from 'classnames';

import type { IconProps } from '../../core/Icon';

import css from './Button.module.css';

export interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
	/**
	 * Style of button
	 * @default 'primary'
	 */
	mode?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';

	/**
	 * Size of button
	 * @default 'small'
	 */
	size?: 'small' | 'medium' | 'large';

	/**
	 * Icon in button
	 */
	icon?: IconProps;

	/**
	 * Icon position in button
	 * @default prefix
	 */
	alignIcon?: 'prefix' | 'suffix';

	/**
	 * Loading
	 * @default false
	 */
	isLoading?: boolean;

	/**
	 * Circle button (without text)
	 * @default false
	 */
	isCircle?: boolean;
}

const modeClassNames = new Map<ButtonProps['mode'], string>([
	['primary', css.button_primary],
	['secondary', css.button_secondary],
	['tertiary', css.button_third],
	['quaternary', css.button_fourth],
]);

const iconAlignmentClassNames = new Map<ButtonProps['alignIcon'], string>([
	['prefix', css.iconAlignPrefix],
	['suffix', css.iconAlignSuffix],
]);

const sizeClassNames = new Map<ButtonProps['size'], string>([
	['small', css.button_small],
	['medium', css.button_medium],
	['large', css.button_large],
]);

export const Button: FC<ButtonProps & RefAttributes<HTMLButtonElement>> = forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const {
			children,
			mode = 'primary',
			size = 'small',
			icon,
			alignIcon = 'prefix',
			isLoading,
			isCircle,
			type = 'button',
			disabled,
			...htmlProps
		} = props;

		const iconAlignment = icon && !isLoading ? alignIcon : undefined;

		return (
			<button
				{...htmlProps}
				ref={ref}
				className={cn(
					css.button,
					htmlProps.className,
					modeClassNames.get(mode),
					sizeClassNames.get(size),
					iconAlignmentClassNames.get(iconAlignment),
					{
						[css.button_loading]: isLoading,
						[css.button_circle]: isCircle,
					},
				)}
				type={type}
				disabled={disabled || isLoading}
			>
				{!isCircle && <span className={css.text}>{children}</span>}
			</button>
		);
	},
);

Button.displayName = 'Button';
