import { type ButtonHTMLAttributes, forwardRef } from 'react';
import classNames from 'classnames';

import styles from './ClickableElement.module.css';

export const ClickableElement = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLElement>>((props, ref) => {
	const otherProps: ButtonHTMLAttributes<Element> = {
		...props,
		className: classNames(props.className, styles.ClickableElement),
		type: 'button',
		'aria-disabled': props.disabled ?? undefined,
		children: undefined,
	};

	return (
		<button
			ref={ref}
			{...otherProps}
		>
			{props.children}
		</button>
	);
});
ClickableElement.displayName = 'ClickableElement';
