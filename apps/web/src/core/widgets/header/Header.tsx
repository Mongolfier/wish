import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export type HeaderProps = React.HTMLAttributes<HTMLElement>;

export const Header = (props: HeaderProps) => {
	return (
		<header {...props}>
			<h1>Wish</h1>
			<LanguageSwitcher />
		</header>
	);
};
