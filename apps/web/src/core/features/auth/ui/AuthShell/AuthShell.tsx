'use client';

import { type PropsWithChildren } from 'react';
import { useTranslations } from 'next-intl';

import { GoogleLoginButton } from '../GoogleLoginButton/GoogleLoginButton';

type AuthShellProps = PropsWithChildren<{
	error?: string | null;
	googleOAuthEnabled?: boolean;
}>;

export function AuthShell({ children, error, googleOAuthEnabled = false }: AuthShellProps) {
	const t = useTranslations('auth');

	return (
		<div className="authPage">
			<div className="authForm">
				{children}

				{error ? <p className="authError">{error}</p> : null}

				{googleOAuthEnabled ? (
					<>
						<div className="authDivider">
							<span>{t('orContinueWith')}</span>
						</div>

						<GoogleLoginButton />
					</>
				) : null}
			</div>
		</div>
	);
}
