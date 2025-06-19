import { InitOptions } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

const fallbackLng = 'ru';
export const normalizedFallbackLng = fallbackLng.toLowerCase();

// Порядок важен
const languages = [fallbackLng, 'en'];
export const normalizedLanguages = languages.map((lang) => lang.toLowerCase());

export const defaultNS = 'app';

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
				resourcesToBackend((lng: string, ns: string) => fetch(`/locales/${lng}/${ns}.json`).then(res => res.json()))
			],
		},
	};
}
