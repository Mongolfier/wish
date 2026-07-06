'use client';

import { createContext, type PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react';

import { fetchMe, logout as logoutRequest, type User } from '../api/authApi';

type AuthContextValue = {
	user: User | null;
	loading: boolean;
	logout: () => Promise<void>;
	refresh: () => Promise<User | null>;
	setUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: Readonly<PropsWithChildren>) {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	const refresh = useCallback(async () => {
		const currentUser = await fetchMe();
		setUser(currentUser);
		return currentUser;
	}, []);

	useEffect(() => {
		let active = true;

		fetchMe()
			.then((currentUser) => {
				if (active) {
					setUser(currentUser);
				}
			})
			.finally(() => {
				if (active) {
					setLoading(false);
				}
			});

		return () => {
			active = false;
		};
	}, []);

	const logout = useCallback(async () => {
		await logoutRequest();
		setUser(null);
	}, []);

	return <AuthContext.Provider value={{ user, loading, logout, refresh, setUser }}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used within AuthProvider');
	}

	return context;
}
