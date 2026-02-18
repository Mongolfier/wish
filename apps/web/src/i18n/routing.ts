import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['ru', 'en'],
  defaultLocale: 'ru',
  localeDetection: true,
})

export const namespaces = ['nav', 'home', 'auth'] as const
export type Namespace = (typeof namespaces)[number]
