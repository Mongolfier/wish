import type { PropsWithChildren } from 'react';

import { Footer } from '@/core/widgets/footer/Footer';
import { Header } from '@/core/widgets/header/Header';

import css from './MainLayout.module.css';

export interface MainLayoutProps extends PropsWithChildren {
	hideHeader?: boolean;
	hideFooter?: boolean;
}

export const MainLayout = (props: MainLayoutProps) => {
	return (
		<>
			{!props.hideHeader && <Header className={css.header} />}
			<main className={css.content}>{props.children}</main>
			{!props.hideFooter && <Footer className={css.footer} />}
		</>
	);
};
