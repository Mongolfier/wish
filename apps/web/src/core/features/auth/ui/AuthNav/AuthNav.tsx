'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@wish/ui-kit';

import { Link } from '@/i18n/navigation';

import { useAuth } from '../../hooks/useAuth';

import css from './AuthNav.module.css';

export function AuthNav() {
	const t = useTranslations('nav');
	const { user, loading, logout } = useAuth();

	if (loading) {
		return null;
	}

	if (user) {
		return (
			<div className={css.authNav}>
				<span className={css.authNavUser}>{user.display_name ?? user.email}</span>
				<Button
					mode="secondary"
					size="small"
					onClick={() => {
						logout();
					}}
				>
					{t('logout')}
				</Button>
			</div>
		);
	}

	return (
		<Link
			className={css.authNavLink}
			href="/auth"
		>
			{t('login')}
		</Link>
	);
}
