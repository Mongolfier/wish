import { http, HttpResponse } from 'msw';

const users = new Map<string, { id: string; email: string; display_name: string; password: string }>();
const pendingCodes = new Map<string, string>();

export const handlers = [
	http.get('/api/health', () => {
		return HttpResponse.json({ status: 'ok' });
	}),

	http.get('/api/auth/config', () => {
		return HttpResponse.json({ google_oauth_enabled: true });
	}),

	http.get('/api/auth/me', ({ cookies }) => {
		const sessionUserId = cookies.wish_session;

		if (!sessionUserId || !users.has(sessionUserId)) {
			return HttpResponse.json({ detail: 'not_authenticated' }, { status: 401 });
		}

		const user = users.get(sessionUserId)!;

		return HttpResponse.json({
			id: user.id,
			email: user.email,
			display_name: user.display_name,
			avatar_url: null,
		});
	}),

	http.post('/api/auth/email/send-code', async ({ request }) => {
		const body = (await request.json()) as { email: string };
		const normalizedEmail = body.email.toLowerCase();
		const existing = [...users.values()].find((user) => user.email === normalizedEmail);

		if (existing) {
			return HttpResponse.json({ detail: 'email_taken' }, { status: 409 });
		}

		pendingCodes.set(normalizedEmail, '123456');
		return new HttpResponse(null, { status: 204, headers: { 'Retry-After': '60' } });
	}),

	http.post('/api/auth/email/verify-register', async ({ request }) => {
		const body = (await request.json()) as {
			email: string;
			code: string;
			password: string;
			display_name?: string;
		};
		const normalizedEmail = body.email.toLowerCase();
		const expectedCode = pendingCodes.get(normalizedEmail);

		if (!expectedCode || body.code !== expectedCode) {
			return HttpResponse.json({ detail: 'invalid_code' }, { status: 400 });
		}

		const id = crypto.randomUUID();
		users.set(id, {
			id,
			email: normalizedEmail,
			display_name: body.display_name ?? normalizedEmail.split('@')[0],
			password: body.password,
		});
		pendingCodes.delete(normalizedEmail);

		return HttpResponse.json(
			{
				id,
				email: normalizedEmail,
				display_name: body.display_name ?? normalizedEmail.split('@')[0],
				avatar_url: null,
			},
			{
				headers: {
					'Set-Cookie': `wish_session=${id}; Path=/; HttpOnly; SameSite=Lax`,
				},
			},
		);
	}),

	http.post('/api/auth/register', async ({ request }) => {
		const body = (await request.json()) as {
			email: string;
			password: string;
			display_name?: string;
		};

		const normalizedEmail = body.email.toLowerCase();
		const existing = [...users.values()].find((user) => user.email === normalizedEmail);

		if (existing) {
			return HttpResponse.json({ detail: 'email_taken' }, { status: 409 });
		}

		const id = crypto.randomUUID();
		users.set(id, {
			id,
			email: normalizedEmail,
			display_name: body.display_name ?? normalizedEmail.split('@')[0],
			password: body.password,
		});

		return HttpResponse.json(
			{
				id,
				email: normalizedEmail,
				display_name: body.display_name ?? normalizedEmail.split('@')[0],
				avatar_url: null,
			},
			{
				headers: {
					'Set-Cookie': `wish_session=${id}; Path=/; HttpOnly; SameSite=Lax`,
				},
			},
		);
	}),

	http.post('/api/auth/login', async ({ request }) => {
		const body = (await request.json()) as { email: string; password: string };
		const normalizedEmail = body.email.toLowerCase();
		const user = [...users.values()].find(
			(entry) => entry.email === normalizedEmail && entry.password === body.password,
		);

		if (!user) {
			return HttpResponse.json({ detail: 'invalid_credentials' }, { status: 401 });
		}

		return HttpResponse.json(
			{
				id: user.id,
				email: user.email,
				display_name: user.display_name,
				avatar_url: null,
			},
			{
				headers: {
					'Set-Cookie': `wish_session=${user.id}; Path=/; HttpOnly; SameSite=Lax`,
				},
			},
		);
	}),

	http.post('/api/auth/logout', () => {
		return new HttpResponse(null, {
			status: 204,
			headers: {
				'Set-Cookie': 'wish_session=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax',
			},
		});
	}),
];
