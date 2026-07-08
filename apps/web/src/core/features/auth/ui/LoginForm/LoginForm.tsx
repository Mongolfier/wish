'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@wish/ui-kit';

import { Link, useRouter } from '@/i18n/navigation';

import { AuthError, login } from '../../api/authApi';
import { useAuth } from '../../hooks/useAuth';
import { AuthShell } from '../AuthShell/AuthShell';

type LoginFormProps = {
	errorCode?: string;
};

const AUTH_ERROR_CODES = ['email_taken', 'invalid_credentials', 'unknown'] as const;

function resolveAuthError(t: ReturnType<typeof useTranslations<'auth'>>, code: string) {
	if ((AUTH_ERROR_CODES as readonly string[]).includes(code)) {
		return t(`errors.${code as (typeof AUTH_ERROR_CODES)[number]}`);
	}

	return t('errors.unknown');
}

export function LoginForm({ errorCode }: Readonly<LoginFormProps>) {
	const router = useRouter();
	const t = useTranslations('auth');
	const { refresh } = useAuth();
	const initialError = useMemo(() => (errorCode ? resolveAuthError(t, errorCode) : null), [errorCode, t]);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState<string | null>(initialError);
	const [submitting, setSubmitting] = useState(false);

	const handleSubmit = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		setError(null);
		setSubmitting(true);

		try {
			await login(email, password);
			await refresh();
			router.push('/');
		} catch (caught) {
			const code = caught instanceof AuthError ? caught.code : 'unknown';
			setError(resolveAuthError(t, code));
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<AuthShell error={error}>
			<form onSubmit={handleSubmit}>
				<h1>{t('loginTitle')}</h1>

				<label className="authField">
					<span>{t('email')}</span>
					<input
						type="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						placeholder="you@example.com"
						required
						autoComplete="email"
					/>
				</label>

				<label className="authField">
					<span>{t('password')}</span>
					<input
						type="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						placeholder="••••••••"
						required
						autoComplete="current-password"
					/>
				</label>

				<Button
					type="submit"
					disabled={submitting}
				>
					{t('submitLogin')}
				</Button>
			</form>

			<p className="authSwitch">
				{t('noAccount')} <Link href="/auth/register">{t('registerLink')}</Link>
			</p>
		</AuthShell>
	);
}
