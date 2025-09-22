import { FallbackNs } from 'react-i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { createInstance, FlatNamespace, i18n, KeyPrefix, Namespace } from 'i18next';
import Backend from 'i18next-chained-backend';
import { cookies } from 'next/headers';

import { cookieName, getI18nConfig, normalizedFallbackLng as fallbackLng } from './config';

let i18nextInstancePromise: Promise<i18n> | null = null;

const initI18next = async () => {
	// on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
	const i18nInstance = createInstance();
	await i18nInstance.use(initReactI18next).use(Backend).init(getI18nConfig());

	return i18nInstance;
};

type $Tuple<T> = readonly [T?, ...T[]];
type $FirstNamespace<Ns extends Namespace> = Ns extends readonly unknown[] ? Ns[0] : Ns;

export async function getServerTranslation<
	Ns extends FlatNamespace | $Tuple<FlatNamespace>,
	KPrefix extends KeyPrefix<
		FallbackNs<Ns extends FlatNamespace ? FlatNamespace : $FirstNamespace<FlatNamespace>>
	> = undefined,
>(ns?: Ns, options: { keyPrefix?: KPrefix } = {}) {
	const cookieStore = await cookies();
	const lng = cookieStore.get(cookieName)?.value ?? fallbackLng;

	if (!i18nextInstancePromise) {
		i18nextInstancePromise = initI18next();
	}

	const i18nextInstance = await i18nextInstancePromise;

	if (i18nextInstance.language !== lng) {
		await i18nextInstance.changeLanguage(lng);
	}

	if (ns) {
		await i18nextInstance.loadNamespaces(Array.isArray(ns) ? ns : [ns]);
	}

	return {
		t: Array.isArray(ns)
			? i18nextInstance.getFixedT(lng, ns[0], options.keyPrefix || undefined)
			: i18nextInstance.getFixedT(lng, ns as FlatNamespace, options.keyPrefix || undefined),
		i18n: i18nextInstance,
	};
}