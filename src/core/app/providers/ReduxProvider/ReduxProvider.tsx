'use client';

import { Provider } from 'react-redux';

import { makeStore } from '../../store/redux/store';

interface ReduxProviderProps {
	readonly children: React.ReactNode;
}

const store = makeStore();

export function ReduxProvider({ children }: ReduxProviderProps) {
	return <Provider store={store}>{children}</Provider>;
}
