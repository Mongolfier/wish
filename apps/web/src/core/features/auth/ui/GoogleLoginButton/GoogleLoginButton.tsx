'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Icon } from '@wish/ui-kit';

export function GoogleLoginButton() {
	const locale = useLocale();
	const t = useTranslations('auth');

	return (
		<a
			className="authSocialButton"
			href={`/api/auth/google?locale=${locale}`}
		>
			<Icon
				category="logo"
				name="google"
				width={20}
				height={20}
			/>
			<span>{t('continueWithGoogle')}</span>
		</a>
	);
}
