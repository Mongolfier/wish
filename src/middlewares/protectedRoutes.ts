import { NextRequest, NextResponse } from 'next/server';

import { isForbiddenRoute, routes } from '@/core/shared/router';

export function protectedRoutesMiddleware(
    request: NextRequest
): NextResponse | undefined {
    const isAuthUser = request.cookies.has('accessToken');
    const pathname = request.nextUrl.pathname;
    const queryParams = request.nextUrl.search;

    if (isForbiddenRoute(isAuthUser, pathname)) {
        const redirectPathname = isAuthUser ? routes.index : routes.auth.index;
        const url = new URL(`${redirectPathname}${queryParams}`, request.url);

        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}
