import { InitOptions } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

const fallbackLng = 'ru';
export const normalizedFallbackLng = fallbackLng.toLowerCase();

const languages = [fallbackLng, 'en'];
export const normalizedLanguages = languages.map((lang) => lang.toLowerCase());

export const defaultNS = 'translations';
export const cookieName = 'locale' as const;

export function getI18nConfig(lng: string = fallbackLng, ns: string | string[] = defaultNS): InitOptions {
	return {
		supportedLngs: normalizedLanguages,
		fallbackLng,
		lowerCaseLng: true,
		lng,
		fallbackNS: defaultNS,
		defaultNS,
		ns,
		backend: {
			backends: [
				resourcesToBackend((lng: string, ns: string) => import(`../../../../public/locales/${lng}/${ns}.json`))
			],
		},
	};
}
