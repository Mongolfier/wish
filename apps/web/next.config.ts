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
		const rewrites = [
			{
				source: '/api/:path*',
				destination: `${apiOrigin}/api/:path*`,
			},
		];

		if (process.env.NODE_ENV === 'development') {
			rewrites.push(
				{
					source: '/docs',
					destination: `${apiOrigin}/docs`,
				},
				{
					source: '/redoc',
					destination: `${apiOrigin}/redoc`,
				},
				{
					source: '/openapi.json',
					destination: `${apiOrigin}/openapi.json`,
				},
			);
		}

		return rewrites;
	},
};

export default withNextIntl(nextConfig);
