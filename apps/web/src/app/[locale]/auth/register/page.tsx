import { RegisterForm } from '@/core/features/auth';
import { fetchAuthConfig } from '@/core/features/auth/api/fetchAuthConfig';

import '../page.css';

export default async function RegisterPage() {
	const authConfig = await fetchAuthConfig();

	return <RegisterForm googleOAuthEnabled={authConfig.google_oauth_enabled} />;
}
