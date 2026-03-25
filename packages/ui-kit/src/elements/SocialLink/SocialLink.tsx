import { type AnchorHTMLAttributes } from 'react';
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

export const SocialLink = ({
	icon,
	iconClassName,
	target = '_blank',
	rel = 'noopener noreferrer',
	...linkProps
}: SocialLinkProps) => (
	<a
		{...linkProps}
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

SocialLink.displayName = 'SocialLink';
