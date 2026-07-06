const STORAGE_KEY = 'wish_register_draft';

export type RegisterDraft = {
	step: 'code';
	email: string;
	displayName: string;
};

export function saveRegisterDraft(draft: RegisterDraft): void {
	sessionStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
}

export function loadRegisterDraft(): RegisterDraft | null {
	const raw = sessionStorage.getItem(STORAGE_KEY);
	if (!raw) {
		return null;
	}

	try {
		const parsed = JSON.parse(raw) as RegisterDraft;
		if (parsed.step === 'code' && parsed.email) {
			return parsed;
		}
	} catch {
		sessionStorage.removeItem(STORAGE_KEY);
	}

	return null;
}

export function clearRegisterDraft(): void {
	sessionStorage.removeItem(STORAGE_KEY);
}

export function syncRegisterStepUrl(step: 'email' | 'code'): void {
	const url = new URL(window.location.href);

	if (step === 'code') {
		url.searchParams.set('step', 'code');
	} else {
		url.searchParams.delete('step');
	}

	window.history.replaceState(window.history.state, '', url.toString());
}

export function readRegisterStepFromUrl(): 'email' | 'code' {
	const params = new URLSearchParams(window.location.search);
	return params.get('step') === 'code' ? 'code' : 'email';
}
