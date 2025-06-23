import { useMemo, useTransition, useEffect, useState } from 'react';
import { usePathname, useRouter, useParams } from 'next/navigation';

import { useTranslation } from '@/core/shared/i18n/client';
import { normalizedLanguages, normalizedFallbackLng } from '@/core/shared/i18n/config';

export type Language = {
	title: string;
	abbr: string;
	code: string;
};

export const useLanguageSelect = () => {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();
	const [isPending, startTransition] = useTransition();
	const { t, i18n } = useTranslation('lang');
	
	const [isClient, setIsClient] = useState(false);

	const currentLocale = params?.locale || normalizedFallbackLng;
	const normalizedCurrentLocale = Array.isArray(currentLocale) ? currentLocale[0] : currentLocale;

	useEffect(() => {
		setIsClient(true);
	}, []);

	const changeLanguage = (locale: Language) => {
		if (normalizedCurrentLocale === locale.code) {
			return;
		}

		const newPath = pathname.replace(/^\/([^/]+)/, `/${locale.code}`);
		startTransition(() => {
			i18n.changeLanguage(locale.code);
			router.push(newPath);
		});
	};

	const languageList: Language[] = useMemo(() => {
		if (!isClient) {
			return [];
		}
		
		return normalizedLanguages.map((language) => ({
			title: t(`lang:${language}`),
			abbr: t(`lang:abbrs.${language}`),
			code: language,
		}));
	}, [t, isClient]);

	const currentLanguage: Language = useMemo(() => {
		if (!isClient) {
			return {
				title: '',
				abbr: '',
				code: normalizedCurrentLocale,
			};
		}
		
		return {
			title: t(`lang:${normalizedCurrentLocale}`),
			abbr: t(`lang:abbrs.${normalizedCurrentLocale}`),
			code: normalizedCurrentLocale,
		};
	}, [normalizedCurrentLocale, t, isClient]);

	return {
		changeLanguage,
		languageList,
		currentLanguage,
		isPending,
		isClient,
	};
};
