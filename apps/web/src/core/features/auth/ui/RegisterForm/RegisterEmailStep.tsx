import { Button } from '@wish/ui-kit';

type RegisterEmailStepProps = Readonly<{
	displayName: string;
	email: string;
	error: string | null;
	submitting: boolean;
	resendCooldown: number;
	t: ReturnType<typeof import('next-intl').useTranslations<'auth'>>;
	onDisplayNameChange: (value: string) => void;
	onEmailChange: (value: string) => void;
}>;

export function RegisterEmailStep({
	displayName,
	email,
	error,
	submitting,
	resendCooldown,
	t,
	onDisplayNameChange,
	onEmailChange,
}: RegisterEmailStepProps) {
	return (
		<>
			<label className="authField">
				<span>{t('displayName')}</span>
				<input
					type="text"
					value={displayName}
					onChange={(event) => onDisplayNameChange(event.target.value)}
					placeholder={t('displayNamePlaceholder')}
					autoComplete="name"
					aria-invalid={error ? true : undefined}
				/>
			</label>

			<label className="authField">
				<span>{t('email')}</span>
				<input
					type="email"
					value={email}
					onChange={(event) => onEmailChange(event.target.value)}
					placeholder="you@example.com"
					required
					autoComplete="email"
					aria-invalid={error ? true : undefined}
				/>
			</label>

			<Button
				type="submit"
				disabled={submitting || resendCooldown > 0}
				isLoading={submitting}
			>
				{resendCooldown > 0 ? t('sendCodeIn', { seconds: resendCooldown }) : t('sendCode')}
			</Button>
		</>
	);
}
