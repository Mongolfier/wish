import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { HomeContent } from './HomeContent'

export default async function HomePage() {
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={{ home: messages.home }}>
      <HomeContent />
    </NextIntlClientProvider>
  )
}
