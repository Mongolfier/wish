export type User = {
	id: string;
	email: string | null;
	display_name: string | null;
	avatar_url: string | null;
};

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

async function parseAuthError(response: Response): Promise<never> {
	const data = (await response.json().catch(() => ({}))) as { detail?: string };
	const retryAfterSeconds = parseRetryAfterHeader(response);
	throw new AuthError(data.detail ?? 'unknown', retryAfterSeconds);
}

export async function fetchMe(): Promise<User | null> {
	const response = await fetch('/api/auth/me', { credentials: 'include' });

	if (response.status === 401) {
		return null;
	}

	if (!response.ok) {
		await parseAuthError(response);
	}

	return response.json() as Promise<User>;
}

export async function login(email: string, password: string): Promise<User> {
	const response = await fetch('/api/auth/login', {
		method: 'POST',
		credentials: 'include',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password }),
	});

	if (!response.ok) {
		await parseAuthError(response);
	}

	return response.json() as Promise<User>;
}

export async function register(email: string, password: string, displayName?: string): Promise<User> {
	const response = await fetch('/api/auth/register', {
		method: 'POST',
		credentials: 'include',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, password, display_name: displayName }),
	});

	if (!response.ok) {
		await parseAuthError(response);
	}

	return response.json() as Promise<User>;
}

export type SendRegistrationCodeResult = {
	retryAfterSeconds: number;
};

export async function sendRegistrationCode(email: string, locale: string): Promise<SendRegistrationCodeResult> {
	const response = await fetch('/api/auth/email/send-code', {
		method: 'POST',
		credentials: 'include',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, locale }),
	});

	if (!response.ok) {
		await parseAuthError(response);
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
	const response = await fetch('/api/auth/email/verify-register', {
		method: 'POST',
		credentials: 'include',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, code, password, display_name: displayName }),
	});

	if (!response.ok) {
		await parseAuthError(response);
	}

	return response.json() as Promise<User>;
}

export async function logout(): Promise<void> {
	await fetch('/api/auth/logout', {
		method: 'POST',
		credentials: 'include',
	});
}
