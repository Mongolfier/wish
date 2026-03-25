import { useMemo } from 'react';
import { useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

const LANGUAGE_LABELS: Record<string, string> = {
	ru: 'Русский',
	en: 'English',
};

export interface LanguageOption {
	label: string;
	value: string;
}

export const useLanguageSelector = () => {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	const languageOptions: LanguageOption[] = useMemo(
		() =>
			routing.locales.map((lang) => ({
				label: LANGUAGE_LABELS[lang] ?? lang,
				value: lang,
			})),
		[],
	);

	const currentLanguage: LanguageOption = useMemo(
		() => ({
			label: LANGUAGE_LABELS[locale] ?? locale,
			value: locale,
		}),
		[locale],
	);

	const changeLanguage = (option: LanguageOption | null) => {
		if (!option || option.value === locale) return;
		router.replace(pathname, { locale: option.value });
	};

	return {
		changeLanguage,
		languageOptions,
		currentLanguage,
	};
};
