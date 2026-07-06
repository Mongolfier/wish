import { LoginForm } from '@/core/features/auth';
import { fetchAuthConfig } from '@/core/features/auth/api/fetchAuthConfig';

import './page.css';

type AuthPageProps = {
	searchParams: Promise<{ error?: string }>;
};

export default async function AuthPage({ searchParams }: Readonly<AuthPageProps>) {
	const [{ error }, authConfig] = await Promise.all([searchParams, fetchAuthConfig()]);

	return (
		<LoginForm
			errorCode={error}
			googleOAuthEnabled={authConfig.google_oauth_enabled}
		/>
	);
}
