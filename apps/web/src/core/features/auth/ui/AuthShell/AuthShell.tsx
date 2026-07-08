'use client';

import { type PropsWithChildren } from 'react';

type AuthShellProps = PropsWithChildren<{
	error?: string | null;
}>;

export function AuthShell({ children, error }: AuthShellProps) {
	return (
		<div className="authPage">
			<div className="authForm">
				{children}

				{error ? <p className="authError">{error}</p> : null}
			</div>
		</div>
	);
}
