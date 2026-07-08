'use client';

import { Link } from '@/i18n/navigation';

import { useRegisterForm } from '../../hooks/useRegisterForm';
import { AuthShell } from '../AuthShell/AuthShell';

import { RegisterCodeStep } from './RegisterCodeStep';
import { RegisterEmailStep } from './RegisterEmailStep';

export function RegisterForm() {
	const form = useRegisterForm();

	if (!form.ready) {
		return null;
	}

	const isEmailStep = form.step === 'email';

	return (
		<AuthShell error={form.error}>
			<form onSubmit={isEmailStep ? form.handleSendCode : form.handleVerify}>
				<h1>{isEmailStep ? form.t('registerTitle') : form.t('codeStepTitle')}</h1>

				{form.info ? <p className="authInfo">{form.info}</p> : null}

				{isEmailStep ? (
					<RegisterEmailStep
						displayName={form.displayName}
						email={form.email}
						error={form.error}
						resendCooldown={form.resendCooldown}
						submitting={form.submitting}
						t={form.t}
						onDisplayNameChange={form.setDisplayName}
						onEmailChange={form.setEmail}
					/>
				) : (
					<RegisterCodeStep
						code={form.code}
						confirmPassword={form.confirmPassword}
						email={form.email}
						error={form.error}
						password={form.password}
						resendCooldown={form.resendCooldown}
						submitting={form.submitting}
						t={form.t}
						onCodeChange={form.setCode}
						onConfirmPasswordChange={form.setConfirmPassword}
						onGoToEmailStep={form.goToEmailStep}
						onPasswordChange={form.setPassword}
						onResendCode={form.handleResendCode}
					/>
				)}
			</form>

			<p className="authSwitch">
				{form.t('haveAccount')} <Link href="/auth">{form.t('loginLink')}</Link>
			</p>
		</AuthShell>
	);
}
