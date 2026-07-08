import { LoginForm } from '@/core/features/auth';

import './page.css';

type AuthPageProps = {
	searchParams: Promise<{ error?: string }>;
};

export default async function AuthPage({ searchParams }: Readonly<AuthPageProps>) {
	const { error } = await searchParams;

	return <LoginForm errorCode={error} />;
}
