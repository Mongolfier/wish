import { MainLayout } from '@/core/app/ui/MainLayout/MainLayout';

const Layout = ({ children }: LayoutProps<'/[locale]'>) => {
	return <MainLayout>{children}</MainLayout>;
};

export default Layout;
