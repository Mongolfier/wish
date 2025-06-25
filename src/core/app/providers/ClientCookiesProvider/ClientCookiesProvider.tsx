'use client';

import { ReactNode } from 'react';
import { CookiesProvider } from 'react-cookie';

interface ClientCookiesProviderProps {
	readonly children: ReactNode;
}

export function ClientCookiesProvider({ children }: ClientCookiesProviderProps) {
	return <CookiesProvider>{children}</CookiesProvider>;
}
