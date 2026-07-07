import type { PropsWithChildren } from 'react';

import { MainLayout } from '@/core/app/ui/MainLayout/MainLayout';

const Layout = ({ children }: PropsWithChildren) => {
	return <MainLayout>{children}</MainLayout>;
};

export default Layout;
