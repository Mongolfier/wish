import { useCookies } from 'react-cookie';

import { cookieName } from './config';

export function useLocaleCookie() {
	const [cookies, setCookieOrigin] = useCookies<
		'locale',
		{
			locale: string;
		}
	>([cookieName]);

	function setCookie(value: Parameters<typeof setCookieOrigin>[1], options?: Parameters<typeof setCookieOrigin>[2]) {
		return setCookieOrigin(cookieName, value, options);
	}

	return [cookies.locale, setCookie] as const;
}
