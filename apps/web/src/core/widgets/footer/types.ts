export interface FooterConfig {
	specialists: 'developers' | 'devops' | 'designers';
	list: {
		name: string;
		links: {
			name: string;
			link: string;
		}[];
	}[];
}
