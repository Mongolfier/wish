import acceptLanguage from 'accept-language';
import { NextRequest, NextResponse } from 'next/server';

import {
    cookieName,
    normalizedFallbackLng as fallbackLng,
    normalizedLanguages as languages,
} from '@/core/shared/i18n/config';

acceptLanguage.languages(languages);

export function localizationMiddleware(req: NextRequest) {
    let lng: string | null = null;

    const pathnameLng = req.nextUrl.pathname.split('/')[1].toLowerCase();

    if (pathnameLng && languages.includes(pathnameLng)) {
        lng = pathnameLng;
    }

    if (!lng && req.cookies.get(cookieName)?.value.toLowerCase()) {
        const cookieLng = acceptLanguage
            .get(req.cookies.get(cookieName)?.value)
            ?.toLowerCase();
        if (cookieLng && languages.includes(cookieLng)) {
            lng = cookieLng;
        }
    }

    if (!lng) {
        const browserLng = acceptLanguage
            .get(req.headers.get('Accept-Language'))
            ?.toLowerCase();

        if (browserLng && languages.includes(browserLng)) {
            lng = browserLng;
        }
    }

    if (!lng) {
        lng = fallbackLng;
    }

    if (
        lng &&
        req.cookies.get(cookieName)?.value.toLowerCase() &&
        lng !== req.cookies.get(cookieName)?.value.toLowerCase()
    ) {
        // const response = NextResponse.redirect(
        // 	new URL(`${req.nextUrl.pathname}${req.nextUrl.search}`, req.url),
        // );
        req.cookies.set(cookieName, lng);
        // return response;
    }

    if (
        !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
        !req.nextUrl.pathname.startsWith('/_next')
    ) {
        const response = NextResponse.redirect(
            new URL(
                `/${lng.toLowerCase()}${req.nextUrl.pathname}${req.nextUrl.search}`,
                req.url
            )
        );
        response.cookies.set(cookieName, lng);
        return response;
    }

    const response = NextResponse.next();
    return response;
}
