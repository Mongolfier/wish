import { type IconProps } from '@wish/ui-kit';

export interface ContactLink {
	icon: IconProps;
	href: string;
}

export interface ContactPersonConfig {
	name: string;
	links: ContactLink[];
}

export interface FooterConfig {
	specialists: 'developers' | 'devops' | 'designers';
	list: ContactPersonConfig[];
}
