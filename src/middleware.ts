import { NextRequest, NextResponse } from 'next/server';

import { localizationMiddleware } from './middlewares/localization';
import { protectedRoutesMiddleware } from './middlewares/protectedRoutes';

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)'],
};

const middlewareChain = [localizationMiddleware, protectedRoutesMiddleware];

export function middleware(request: NextRequest): NextResponse {
	for (const mw of middlewareChain) {
		const response = mw(request);

		if (response && response.status >= 300 && response.status < 400) {
			return response;
		}
	}

	return NextResponse.next();
}
