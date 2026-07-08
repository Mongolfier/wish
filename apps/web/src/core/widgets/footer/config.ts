import { type FooterConfig } from './types';

export const contactsConfig: FooterConfig[] = [
	{
		specialists: 'developers',
		list: [
			{
				name: 'dmitry',
				links: [
					{
						icon: { category: 'logo', name: 'github' },
						href: 'https://github.com/Mongolfier',
						labelKey: 'github',
					},
					{
						icon: { category: 'logo', name: 'telegram' },
						href: 'https://t.me/DmitryMumrenkov',
						labelKey: 'telegram',
					},
					{
						icon: { category: 'information', name: 'email-outline' },
						href: 'mailto:dmitrymumrenkov@gmail.com',
						labelKey: 'email',
					},
				],
			},
		],
	},
	{
		specialists: 'devops',
		list: [
			{
				name: 'nikolaj',
				links: [
					{
						icon: { category: 'logo', name: 'github' },
						href: 'https://github.com/Learningsome',
						labelKey: 'github',
					},
					{
						icon: { category: 'logo', name: 'telegram' },
						href: 'https://t.me/melting_sun',
						labelKey: 'telegram',
					},
					{
						icon: { category: 'information', name: 'email-outline' },
						href: 'mailto:nikolajkashirskij@gmail.com',
						labelKey: 'email',
					},
				],
			},
		],
	},
	{
		specialists: 'designers',
		list: [
			{
				name: 'igor',
				links: [
					{
						icon: { category: 'logo', name: 'github' },
						href: 'TBD',
						labelKey: 'github',
					},
					{
						icon: { category: 'logo', name: 'telegram' },
						href: 'https://t.me/ataraxii_dev',
						labelKey: 'telegram',
					},
				],
			},
		],
	},
];
