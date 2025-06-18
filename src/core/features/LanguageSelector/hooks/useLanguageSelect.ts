import { useMemo, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { useTranslation } from '@/core/shared/i18n/client';
import { normalizedLanguages } from '@/core/shared/i18n/config';

export type Language = {
	title: string;
	abbr: string;
	code: string;
};

export const useLanguageSelect = () => {
	const router = useRouter();
	const pathname = usePathname();
	const [isPending, startTransition] = useTransition();
	const { t, i18n } = useTranslation('lang');

	const changeLanguage = (locale: Language) => {
		if (i18n.language === locale.code) {
			return;
		}

		const newPath = pathname.replace(/^\/([^/]+)/, `/${locale.code}`);
		startTransition(() => {
			i18n.changeLanguage(locale.code);
			router.push(newPath);
		});
	};

	const languageList: Language[] = useMemo(() => {
		return normalizedLanguages.map((language) => ({
			title: t(`lang:${language}`),
			abbr: t(`lang:abbrs.${language}`),
			code: language,
		}));
	}, [t]);

	const currentLanguage: Language = useMemo(() => {
		return {
			title: t(`lang:${i18n.language}`),
			abbr: t(`lang:abbrs.${i18n.language}`),
			code: i18n.language,
		};
	}, [i18n.language, t]);

	return {
		changeLanguage,
		languageList,
		currentLanguage,
		isPending,
	};
};
