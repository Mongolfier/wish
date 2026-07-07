import { browserApiClient, type components } from '@wish/api-client';

export type User = components['schemas']['UserResponse'];

export class AuthError extends Error {
	constructor(
		public code: string,
		public retryAfterSeconds?: number,
	) {
		super(code);
		this.name = 'AuthError';
	}
}

function parseRetryAfterHeader(response: Response): number | undefined {
	const value = response.headers.get('Retry-After');
	if (!value) {
		return undefined;
	}

	const parsed = Number.parseInt(value, 10);
	return Number.isFinite(parsed) && parsed > 0 ? parsed : undefined;
}

function throwAuthError(error: unknown, response: Response): never {
	const detail =
		typeof error === 'object' && error !== null && 'detail' in error && typeof error.detail === 'string'
			? error.detail
			: 'unknown';
	const retryAfterSeconds = parseRetryAfterHeader(response);
	throw new AuthError(detail, retryAfterSeconds);
}

export async function fetchMe(): Promise<User | null> {
	const { data, error, response } = await browserApiClient.GET('/api/auth/me', {
		credentials: 'include',
	});

	if (response.status === 401) {
		return null;
	}

	if (error) {
		throwAuthError(error, response);
	}

	return data!;
}

export async function login(email: string, password: string): Promise<User> {
	const { data, error, response } = await browserApiClient.POST('/api/auth/login', {
		credentials: 'include',
		body: { email, password },
	});

	if (error) {
		throwAuthError(error, response);
	}

	return data!;
}

export async function register(email: string, password: string, displayName?: string): Promise<User> {
	const { data, error, response } = await browserApiClient.POST('/api/auth/register', {
		credentials: 'include',
		body: { email, password, display_name: displayName },
	});

	if (error) {
		throwAuthError(error, response);
	}

	return data!;
}

export type SendRegistrationCodeResult = {
	retryAfterSeconds: number;
};

export async function sendRegistrationCode(email: string, locale: string): Promise<SendRegistrationCodeResult> {
	const { error, response } = await browserApiClient.POST('/api/auth/email/send-code', {
		credentials: 'include',
		body: { email, locale },
	});

	if (error) {
		throwAuthError(error, response);
	}

	return {
		retryAfterSeconds: parseRetryAfterHeader(response) ?? 60,
	};
}

export async function verifyRegistration(
	email: string,
	code: string,
	password: string,
	displayName?: string,
): Promise<User> {
	const { data, error, response } = await browserApiClient.POST('/api/auth/email/verify-register', {
		credentials: 'include',
		body: { email, code, password, display_name: displayName },
	});

	if (error) {
		throwAuthError(error, response);
	}

	return data!;
}

export async function logout(): Promise<void> {
	await browserApiClient.POST('/api/auth/logout', {
		credentials: 'include',
	});
}
