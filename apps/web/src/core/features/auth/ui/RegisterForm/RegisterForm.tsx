'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@wish/ui-kit';

import { Link, useRouter } from '@/i18n/navigation';

import { AuthError, sendRegistrationCode, verifyRegistration } from '../../api/authApi';
import { useAuth } from '../../hooks/useAuth';
import {
	clearRegisterDraft,
	loadRegisterDraft,
	readRegisterStepFromUrl,
	saveRegisterDraft,
	syncRegisterStepUrl,
} from '../../lib/registerDraft';
import { AuthShell } from '../AuthShell/AuthShell';

const AUTH_ERROR_CODES = [
	'email_taken',
	'invalid_credentials',
	'oauth_failed',
	'google_oauth_disabled',
	'code_rate_limited',
	'code_expired',
	'invalid_code',
	'code_max_attempts',
	'email_delivery_failed',
	'internal_error',
	'password_mismatch',
	'unknown',
] as const;

function resolveAuthError(t: ReturnType<typeof useTranslations<'auth'>>, code: string) {
	if ((AUTH_ERROR_CODES as readonly string[]).includes(code)) {
		return t(`errors.${code as (typeof AUTH_ERROR_CODES)[number]}`);
	}

	return t('errors.unknown');
}

function restoreDraftFromStorage(
	setStep: (step: 'email' | 'code') => void,
	setEmail: (email: string) => void,
	setDisplayName: (name: string) => void,
	setInfo: (info: string | null) => void,
	t: ReturnType<typeof useTranslations<'auth'>>,
): boolean {
	const urlStep = readRegisterStepFromUrl();
	const draft = loadRegisterDraft();

	if (urlStep !== 'code' || !draft) {
		if (urlStep === 'code') {
			syncRegisterStepUrl('email');
		}
		clearRegisterDraft();
		return false;
	}

	setStep('code');
	setEmail(draft.email);
	setDisplayName(draft.displayName);
	setInfo(t('codeSent', { email: draft.email }));
	return true;
}

export function RegisterForm({ googleOAuthEnabled = false }: Readonly<{ googleOAuthEnabled?: boolean }>) {
	const router = useRouter();
	const locale = useLocale();
	const t = useTranslations('auth');
	const { refresh } = useAuth();
	const [ready, setReady] = useState(false);
	const [step, setStep] = useState<'email' | 'code'>('email');
	const [displayName, setDisplayName] = useState('');
	const [email, setEmail] = useState('');
	const [code, setCode] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [error, setError] = useState<string | null>(null);
	const [info, setInfo] = useState<string | null>(null);
	const [submitting, setSubmitting] = useState(false);
	const [resendCooldown, setResendCooldown] = useState(0);

	useEffect(() => {
		restoreDraftFromStorage(setStep, setEmail, setDisplayName, setInfo, t);
		setReady(true);
	}, [t]);

	useEffect(() => {
		if (resendCooldown <= 0) {
			return;
		}

		const timer = window.setInterval(() => {
			setResendCooldown((current) => Math.max(0, current - 1));
		}, 1000);

		return () => window.clearInterval(timer);
	}, [resendCooldown]);

	const startResendCooldown = (seconds: number) => {
		if (seconds > 0) {
			setResendCooldown(seconds);
		}
	};

	const goToCodeStep = (nextEmail: string, nextDisplayName: string, retryAfterSeconds: number) => {
		saveRegisterDraft({
			step: 'code',
			email: nextEmail,
			displayName: nextDisplayName,
		});
		syncRegisterStepUrl('code');
		setStep('code');
		setEmail(nextEmail);
		setDisplayName(nextDisplayName);
		setCode('');
		setPassword('');
		setConfirmPassword('');
		setError(null);
		setInfo(t('codeSent', { email: nextEmail }));
		startResendCooldown(retryAfterSeconds);
	};

	const goToEmailStep = () => {
		clearRegisterDraft();
		syncRegisterStepUrl('email');
		setStep('email');
		setCode('');
		setPassword('');
		setConfirmPassword('');
		setInfo(null);
		setError(null);
	};

	const handleSendCode = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		setError(null);
		setInfo(null);
		setSubmitting(true);

		try {
			const { retryAfterSeconds } = await sendRegistrationCode(email, locale);
			goToCodeStep(email.trim(), displayName.trim(), retryAfterSeconds);
		} catch (caught) {
			const codeError = caught instanceof AuthError ? caught.code : 'unknown';
			if (caught instanceof AuthError && caught.retryAfterSeconds) {
				startResendCooldown(caught.retryAfterSeconds);
			}
			setError(resolveAuthError(t, codeError));
		} finally {
			setSubmitting(false);
		}
	};

	const handleVerify = async (event: { preventDefault: () => void }) => {
		event.preventDefault();
		setError(null);

		if (password !== confirmPassword) {
			setError(t('errors.password_mismatch'));
			return;
		}

		setSubmitting(true);

		try {
			await verifyRegistration(email, code, password, displayName || undefined);
			clearRegisterDraft();
			syncRegisterStepUrl('email');
			await refresh();
			router.push('/');
		} catch (caught) {
			const codeError = caught instanceof AuthError ? caught.code : 'unknown';
			setError(resolveAuthError(t, codeError));
		} finally {
			setSubmitting(false);
		}
	};

	const handleResendCode = async () => {
		setError(null);
		setInfo(null);
		setSubmitting(true);

		try {
			const { retryAfterSeconds } = await sendRegistrationCode(email, locale);
			startResendCooldown(retryAfterSeconds);
			setInfo(t('codeResent', { email }));
		} catch (caught) {
			const codeError = caught instanceof AuthError ? caught.code : 'unknown';
			if (caught instanceof AuthError && caught.retryAfterSeconds) {
				startResendCooldown(caught.retryAfterSeconds);
			}
			setError(resolveAuthError(t, codeError));
		} finally {
			setSubmitting(false);
		}
	};

	if (!ready) {
		return null;
	}

	return (
		<AuthShell
			error={error}
			googleOAuthEnabled={googleOAuthEnabled}
		>
			<form onSubmit={step === 'email' ? handleSendCode : handleVerify}>
				<h1>{step === 'email' ? t('registerTitle') : t('codeStepTitle')}</h1>

				{info ? <p className="authInfo">{info}</p> : null}

				{step === 'email' ? (
					<>
						<label className="authField">
							<span>{t('displayName')}</span>
							<input
								type="text"
								value={displayName}
								onChange={(event) => setDisplayName(event.target.value)}
								placeholder={t('displayNamePlaceholder')}
								autoComplete="name"
							/>
						</label>

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

						<Button
							type="submit"
							disabled={submitting || resendCooldown > 0}
						>
							{resendCooldown > 0 ? t('sendCodeIn', { seconds: resendCooldown }) : t('sendCode')}
						</Button>
					</>
				) : (
					<>
						<p className="authSummary">
							<span>{t('email')}</span>
							<strong>{email}</strong>
						</p>

						<label className="authField">
							<span>{t('verificationCode')}</span>
							<input
								type="text"
								inputMode="numeric"
								pattern="\d{6}"
								maxLength={6}
								value={code}
								onChange={(event) => setCode(event.target.value.replace(/\D/g, '').slice(0, 6))}
								placeholder="123456"
								required
								autoComplete="one-time-code"
								autoFocus
							/>
						</label>

						<label className="authField">
							<span>{t('password')}</span>
							<input
								type="password"
								value={password}
								onChange={(event) => setPassword(event.target.value)}
								placeholder="••••••••"
								minLength={8}
								required
								autoComplete="new-password"
							/>
							<small>{t('passwordHint')}</small>
						</label>

						<label className="authField">
							<span>{t('confirmPassword')}</span>
							<input
								type="password"
								value={confirmPassword}
								onChange={(event) => setConfirmPassword(event.target.value)}
								placeholder="••••••••"
								minLength={8}
								required
								autoComplete="new-password"
							/>
						</label>

						<Button
							type="submit"
							disabled={submitting || code.length !== 6 || password.length < 8 || confirmPassword.length < 8}
						>
							{t('submitRegister')}
						</Button>

						<Button
							type="button"
							mode="secondary"
							disabled={submitting || resendCooldown > 0}
							onClick={handleResendCode}
						>
							{resendCooldown > 0 ? t('resendCodeIn', { seconds: resendCooldown }) : t('resendCode')}
						</Button>

						<button
							type="button"
							className="authBackLink"
							onClick={goToEmailStep}
						>
							{t('changeEmail')}
						</button>
					</>
				)}
			</form>

			<p className="authSwitch">
				{t('haveAccount')} <Link href="/auth">{t('loginLink')}</Link>
			</p>
		</AuthShell>
	);
}
