import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')

const nextConfig: NextConfig = {
  transpilePackages: ['@wish/ui-kit'],
  experimental: {
    reactCompiler: true,
  },
}

export default withNextIntl(nextConfig)
