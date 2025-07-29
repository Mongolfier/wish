export const authRoutes = {
    login: () => '/auth/login',
    register: () => '/auth/register',
    refresh: () => '/auth/refresh',
    flowDetermination: () => `auth/check-auth`,
} as const;
