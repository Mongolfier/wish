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
						link: 'https://github.com/Mongolfier',
					},
					{
						icon: { category: 'logo', name: 'telegram' },
						link: 'https://t.me/DmitryMumrenkov',
					},
					{
						icon: { category: 'information', name: 'email-outline' },
						link: 'mailto:dmitrymumrenkov@gmail.com',
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
						link: 'https://github.com/Learningsome',
					},
					{
						icon: { category: 'logo', name: 'telegram' },
						link: 'https://t.me/melting_sun',
					},
					{
						icon: { category: 'information', name: 'email-outline' },
						link: 'mailto:nikolajkashirskij@gmail.com',
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
						link: 'TBD',
					},
					{
						icon: { category: 'logo', name: 'telegram' },
						link: 'https://t.me/ataraxii_dev',
					},
				],
			},
		],
	},
];
