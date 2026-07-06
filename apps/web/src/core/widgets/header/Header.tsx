import { MainMenu } from '@wish/ui-kit';

import { AuthNav } from '@/core/features/auth';
import { LanguageSelector } from '@/core/features/languageSelector';

import { WishLogo } from './ui/WishLogo';

import css from './Header.module.css';

export type HeaderProps = React.HTMLAttributes<HTMLElement>;

export const Header = (props: HeaderProps) => {
	return (
		<MainMenu {...props}>
			<WishLogo />

			<div className={css.actions}>
				<LanguageSelector />
				<AuthNav />
			</div>
		</MainMenu>
	);
};
