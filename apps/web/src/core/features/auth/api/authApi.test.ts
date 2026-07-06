import { http, HttpResponse } from 'msw';
import { describe, expect, it } from 'vitest';

import { server } from '@/mocks/server';

import { sendRegistrationCode, verifyRegistration } from './authApi';

describe('authApi', () => {
	it('sends code and completes registration', async () => {
		await expect(sendRegistrationCode('user@example.com', 'ru')).resolves.toMatchObject({
			retryAfterSeconds: 60,
		});

		const user = await verifyRegistration('user@example.com', '123456', 'password123', 'Test User');

		expect(user.email).toBe('user@example.com');
		expect(user.display_name).toBe('Test User');
	});

	it('throws AuthError on invalid verification code', async () => {
		server.use(
			http.post(
				'/api/auth/email/send-code',
				() => new HttpResponse(null, { status: 204, headers: { 'Retry-After': '60' } }),
			),
			http.post('/api/auth/email/verify-register', () =>
				HttpResponse.json({ detail: 'invalid_code' }, { status: 400 }),
			),
		);

		await expect(verifyRegistration('user@example.com', '000000', 'password123')).rejects.toMatchObject({
			code: 'invalid_code',
		});
	});

	it('throws AuthError on invalid login', async () => {
		server.use(
			http.post('/api/auth/login', () => HttpResponse.json({ detail: 'invalid_credentials' }, { status: 401 })),
		);

		const { login } = await import('./authApi');

		await expect(login('user@example.com', 'wrong')).rejects.toMatchObject({
			code: 'invalid_credentials',
		});
	});
});
