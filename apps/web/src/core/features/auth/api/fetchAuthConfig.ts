export type AuthConfig = {
	google_oauth_enabled: boolean;
};

export async function fetchAuthConfig(): Promise<AuthConfig> {
	const apiOrigin = process.env.API_ORIGIN ?? 'http://127.0.0.1:8000';

	try {
		const response = await fetch(`${apiOrigin}/api/auth/config`, {
			next: { revalidate: 60 },
		});

		if (!response.ok) {
			return { google_oauth_enabled: false };
		}

		return (await response.json()) as AuthConfig;
	} catch {
		return { google_oauth_enabled: false };
	}
}
