import { type IconProps } from '@wish/ui-kit';

export interface FooterConfig {
	specialists: 'developers' | 'devops' | 'designers';
	list: {
		name: string;
		links: {
			icon: IconProps;
			link: string;
		}[];
	}[];
}
