import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { AuthForm } from './AuthForm';

import './page.css';

export default async function AuthPage() {
	const messages = await getMessages();

	return (
		<NextIntlClientProvider messages={{ auth: messages.auth }}>
			<AuthForm />
		</NextIntlClientProvider>
	);
}
