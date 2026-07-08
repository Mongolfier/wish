import { type IconProps } from '@wish/ui-kit';

export interface ContactLink {
	icon: IconProps;
	href: string;
	labelKey: 'github' | 'telegram' | 'email';
}

export interface ContactPersonConfig {
	name: string;
	links: ContactLink[];
}

export interface FooterConfig {
	specialists: 'developers' | 'devops' | 'designers';
	list: ContactPersonConfig[];
}
