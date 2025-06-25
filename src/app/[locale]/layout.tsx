import { dir } from "i18next";
import { RootBody } from "@/core/app/ui/RootBody";
import { Header } from "@/core/features/Header/ui";
import { I18nProvider } from "@/core/shared/i18n/client";
import { ClientCookiesProvider } from "@/core/app/providers/ClientCookiesProvider/ClientCookiesProvider";

import "../globals.css";

export default async function RootLayout({
  children,
  params,
}: {
  readonly children: React.ReactElement | React.ReactElement[];
  readonly params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} dir={dir(locale)}>
      <ClientCookiesProvider>
        <I18nProvider>
          <RootBody>
            <Header />
            {children}
          </RootBody>
        </I18nProvider>
      </ClientCookiesProvider>
    </html>
  );
}
