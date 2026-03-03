import Link from 'next/link';

import { routes } from '@/core/shared/router';

import css from './WishLogo.module.css';

export const WishLogo = () => {
	return (
		<Link
			href={routes.index}
			prefetch={false}
		>
			<div className={css.logoWrapper}>
				<span className={css.ellipse} />
				<span className={css.logo}>Wish</span>
			</div>
		</Link>
	);
};
