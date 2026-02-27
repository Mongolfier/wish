import type { PropsWithChildren } from 'react';

import { Footer } from '@/core/widgets/footer/Footer';
import { Header } from '@/core/widgets/header/Header';

import css from './MainLayout.module.css';

export interface MainLayoutProps extends PropsWithChildren {}

export const MainLayout = (props: MainLayoutProps) => {
	return (
		<>
			<Header />
			{props.children}
			<Footer />
		</>
	);
};
