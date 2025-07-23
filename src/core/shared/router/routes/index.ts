import { authRoutes } from './auth';

export const routes = {
    index: '/',
    auth: authRoutes,
} as const;
