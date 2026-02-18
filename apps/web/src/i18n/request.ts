import { getRequestConfig } from 'next-intl/server'
import { routing, namespaces } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  if (!locale || !routing.locales.includes(locale as typeof routing.defaultLocale)) {
    locale = routing.defaultLocale
  }

  const loaded = await Promise.all(
    namespaces.map(async (ns) => {
      const mod = (await import(`../../locales/${locale}/${ns}.json`)).default
      return [ns, mod] as const
    }),
  )

  return {
    locale,
    messages: Object.fromEntries(loaded),
  }
})
