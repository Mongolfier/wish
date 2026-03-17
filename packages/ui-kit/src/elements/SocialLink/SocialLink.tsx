import { type AnchorHTMLAttributes, forwardRef } from 'react';
import cn from 'classnames';

import { Icon, type IconProps } from '../../core/Icon';

import css from './SocialLink.module.css';

export interface SocialLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	/**
	 * Social network icon
	 */
	icon: IconProps;
	iconClassName?: string;
}
export const SocialLink = forwardRef<HTMLAnchorElement, SocialLinkProps>((props, ref) => {
	const { icon, iconClassName, target = '_blank', rel = 'noopener noreferrer', ...linkProps } = props;

	return (
		<a
			{...linkProps}
			ref={ref}
			target={target}
			rel={rel}
			className={css.socialLink}
		>
			<Icon
				{...icon}
				className={cn(css.icon, iconClassName)}
			/>
		</a>
	);
});
