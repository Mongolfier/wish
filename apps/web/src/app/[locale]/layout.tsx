import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import '../globals.css'
import './layout.css'

export const metadata: Metadata = {
  title: 'wish',
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()
  const t = await getTranslations('nav')

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={{ nav: messages.nav }}>
          <div className="wrapper">
            <nav className="appNav">
              <Link href="/">{t('home')}</Link>
              <Link href="/auth">{t('login')}</Link>
              <LanguageSwitcher />
            </nav>
            {children}
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
