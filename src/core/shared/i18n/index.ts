import { FallbackNs } from 'react-i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { createInstance, FlatNamespace, KeyPrefix, Namespace } from 'i18next';
import Backend from 'i18next-chained-backend';
import { cookies } from 'next/headers';

import { cookieName, getI18nConfig, normalizedFallbackLng as fallbackLng } from './config';

const initI18next = async (lng: string, ns: string | string[]) => {
	// on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
	const i18nInstance = createInstance();
	await i18nInstance.use(initReactI18next).use(Backend).init(getI18nConfig(lng, ns));
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

	const i18nextInstance = await initI18next(lng, Array.isArray(ns) ? (ns as string[]) : (ns as string));

	return {
		t: Array.isArray(ns)
			? i18nextInstance.getFixedT(lng, ns[0], options.keyPrefix || undefined)
			: i18nextInstance.getFixedT(lng, ns as FlatNamespace, options.keyPrefix || undefined),
		i18n: i18nextInstance,
	};
}
