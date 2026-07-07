import { type components, createApiClient } from '@wish/api-client';

export type AuthConfig = components['schemas']['AuthConfigResponse'];

export async function fetchAuthConfig(): Promise<AuthConfig> {
	const apiOrigin = process.env.API_ORIGIN ?? 'http://127.0.0.1:8000';
	const client = createApiClient(apiOrigin);

	try {
		const { data, error } = await client.GET('/api/auth/config', {
			next: { revalidate: 60 },
		});

		if (error || !data) {
			return { google_oauth_enabled: false };
		}

		return data;
	} catch {
		return { google_oauth_enabled: false };
	}
}
