'use client';

import { AuthProvider } from '@/core/features/auth/context/AuthProvider';

export function Providers({ children }: Readonly<React.PropsWithChildren>) {
	return <AuthProvider>{children}</AuthProvider>;
}
