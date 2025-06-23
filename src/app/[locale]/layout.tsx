import { dir } from 'i18next';
import { RootBody } from '@/core/app/ui/RootBody';
import { Header } from '@/core/features/Header/ui';

import '../globals.css';

export default async function RootLayout({
    children,
    params,
}: {
    readonly children: React.ReactElement | React.ReactElement[];
    readonly params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    return (
        <html
            lang={locale}
            dir={dir(locale)}
        >
            <RootBody>
                <Header />
                {children}
            </RootBody>
        </html>
    );
}
