import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
	output: process.env.ENVIRONMENT === 'docker' ? 'standalone' : undefined,
	experimental: {
		reactCompiler: true,
		optimizePackageImports: ['@wish/ui-kit'],
	},
	async rewrites() {
		const apiOrigin = process.env.API_ORIGIN ?? 'http://127.0.0.1:8000';
		return [
			{
				source: '/api/:path*',
				destination: `${apiOrigin}/api/:path*`,
			},
		];
	},
};

export default withNextIntl(nextConfig);
