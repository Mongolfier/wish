import { MainMenu } from '@wish/ui-kit';

import { LanguageSelector } from '@/core/features/languageSelector';

import { WishLogo } from './ui/WishLogo';

export type HeaderProps = React.HTMLAttributes<HTMLElement>;

export const Header = (props: HeaderProps) => {
	return (
		<MainMenu {...props}>
			<WishLogo />

			<LanguageSelector />
		</MainMenu>
	);
};
