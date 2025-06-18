import { routes } from './routes';

export const unauthenticatedForbiddenRoutes: string[] = [];
export const authenticatedForbiddenRoutes: string[] = [routes.auth.index];

export const isForbiddenRoute = (isAuthUser: boolean, pathname: string) => {
	if (isAuthUser) {
		return authenticatedForbiddenRoutes.some((route) => pathname.includes(route));
	}

	return unauthenticatedForbiddenRoutes.some((route) => pathname.includes(route));
};
