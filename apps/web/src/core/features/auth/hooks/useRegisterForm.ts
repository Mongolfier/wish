import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';

import { useRouter } from '@/i18n/navigation';

import { AuthError, sendRegistrationCode, verifyRegistration } from '../api/authApi';
import {
	clearRegisterDraft,
	loadRegisterDraft,
	readRegisterStepFromUrl,
	saveRegisterDraft,
	syncRegisterStepUrl,
} from '../lib/registerDraft';

import { useAuth } from './useAuth';

const AUTH_ERROR_CODES = [
	'email_taken',
	'invalid_credentials',
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
): void {
	const urlStep = readRegisterStepFromUrl();
	const draft = loadRegisterDraft();

	if (urlStep !== 'code' || !draft) {
		if (urlStep === 'code') {
			syncRegisterStepUrl('email');
		}
		clearRegisterDraft();
		return;
	}

	setStep('code');
	setEmail(draft.email);
	setDisplayName(draft.displayName);
	setInfo(t('codeSent', { email: draft.email }));
}

function applyAuthError(
	caught: unknown,
	t: ReturnType<typeof useTranslations<'auth'>>,
	setError: (message: string) => void,
	startResendCooldown: (seconds: number) => void,
) {
	const codeError = caught instanceof AuthError ? caught.code : 'unknown';

	if (caught instanceof AuthError && caught.retryAfterSeconds) {
		startResendCooldown(caught.retryAfterSeconds);
	}

	setError(resolveAuthError(t, codeError));
}

export function useRegisterForm() {
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
			applyAuthError(caught, t, setError, startResendCooldown);
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
			applyAuthError(caught, t, setError, startResendCooldown);
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
			applyAuthError(caught, t, setError, startResendCooldown);
		} finally {
			setSubmitting(false);
		}
	};

	return {
		ready,
		step,
		displayName,
		email,
		code,
		password,
		confirmPassword,
		error,
		info,
		submitting,
		resendCooldown,
		t,
		setDisplayName,
		setEmail,
		setCode,
		setPassword,
		setConfirmPassword,
		goToEmailStep,
		handleSendCode,
		handleVerify,
		handleResendCode,
	};
}
