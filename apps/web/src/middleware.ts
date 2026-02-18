import { type NextRequest, NextResponse } from 'next/server'
import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const segments = pathname.split('/')
  const firstSegment = segments[1]

  const looksLikeLocale = firstSegment && /^[a-z]{2,3}(-[a-z0-9]{2,8})*$/i.test(firstSegment)
  const isSupportedLocale = routing.locales.includes(firstSegment as typeof routing.locales[number])

  if (looksLikeLocale && !isSupportedLocale) {
    const rest = segments.slice(2).join('/')
    const url = request.nextUrl.clone()
    url.pathname = `/${routing.defaultLocale}${rest ? `/${rest}` : ''}`
    return NextResponse.redirect(url)
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)', '/'],
}
