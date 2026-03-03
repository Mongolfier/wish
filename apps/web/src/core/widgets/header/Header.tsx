import { LanguageSwitcher } from '@/components/LanguageSwitcher';

import { WishLogo } from './ui/WishLogo';

export type HeaderProps = React.HTMLAttributes<HTMLElement>;

export const Header = (props: HeaderProps) => {
	return (
		<header {...props}>
			<h1>
				<WishLogo />
			</h1>
			<LanguageSwitcher />
		</header>
	);
};
