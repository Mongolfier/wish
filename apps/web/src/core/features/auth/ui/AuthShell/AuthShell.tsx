'use client';

import { type PropsWithChildren } from 'react';

type AuthShellProps = PropsWithChildren<{
	error?: string | null;
}>;

export function AuthShell({ children, error }: AuthShellProps) {
	return (
		<div className="authPage">
			<div className="authForm">
				{error ? (
					<p
						className="authError"
						role="alert"
					>
						{error}
					</p>
				) : null}
				{children}
			</div>
		</div>
	);
}
