import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { RootBody } from '@/core/app/ui/RootBody/RootBody';
import { routing } from '@/i18n/routing';

import '../globals.css';
import './layout.css';

export const metadata: Metadata = {
	title: 'wish',
};

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<RootBody>
				<NextIntlClientProvider messages={{ nav: messages.nav, home: messages.home }}>
					{children}
				</NextIntlClientProvider>
			</RootBody>
		</html>
	);
}
