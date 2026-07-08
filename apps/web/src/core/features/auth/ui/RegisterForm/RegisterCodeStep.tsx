import { Button } from '@wish/ui-kit';

type RegisterCodeStepProps = Readonly<{
	email: string;
	code: string;
	password: string;
	confirmPassword: string;
	error: string | null;
	submitting: boolean;
	resendCooldown: number;
	t: ReturnType<typeof import('next-intl').useTranslations<'auth'>>;
	onCodeChange: (value: string) => void;
	onPasswordChange: (value: string) => void;
	onConfirmPasswordChange: (value: string) => void;
	onResendCode: () => void;
	onGoToEmailStep: () => void;
}>;

export function RegisterCodeStep({
	email,
	code,
	password,
	confirmPassword,
	error,
	submitting,
	resendCooldown,
	t,
	onCodeChange,
	onPasswordChange,
	onConfirmPasswordChange,
	onResendCode,
	onGoToEmailStep,
}: RegisterCodeStepProps) {
	return (
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
					onChange={(event) => onCodeChange(event.target.value.replace(/\D/g, '').slice(0, 6))}
					placeholder="123456"
					required
					autoComplete="one-time-code"
					autoFocus
					aria-invalid={error ? true : undefined}
				/>
			</label>

			<label className="authField">
				<span>{t('password')}</span>
				<input
					type="password"
					value={password}
					onChange={(event) => onPasswordChange(event.target.value)}
					placeholder="••••••••"
					minLength={8}
					required
					autoComplete="new-password"
					aria-invalid={error ? true : undefined}
				/>
				<small>{t('passwordHint')}</small>
			</label>

			<label className="authField">
				<span>{t('confirmPassword')}</span>
				<input
					type="password"
					value={confirmPassword}
					onChange={(event) => onConfirmPasswordChange(event.target.value)}
					placeholder="••••••••"
					minLength={8}
					required
					autoComplete="new-password"
					aria-invalid={error ? true : undefined}
				/>
			</label>

			<Button
				type="submit"
				disabled={submitting || code.length !== 6 || password.length < 8 || confirmPassword.length < 8}
				isLoading={submitting}
			>
				{t('submitRegister')}
			</Button>

			<Button
				type="button"
				mode="secondary"
				disabled={submitting || resendCooldown > 0}
				onClick={onResendCode}
			>
				{resendCooldown > 0 ? t('resendCodeIn', { seconds: resendCooldown }) : t('resendCode')}
			</Button>

			<button
				type="button"
				className="authBackLink"
				onClick={onGoToEmailStep}
			>
				{t('changeEmail')}
			</button>
		</>
	);
}
