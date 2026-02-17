import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@wish/ui-kit'],
  experimental: {
    reactCompiler: true,
  },
}

export default nextConfig
