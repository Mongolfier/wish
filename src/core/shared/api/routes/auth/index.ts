export const authRoutes = {
    login: () => '/auth/login',
    register: () => '/auth/register',
    refresh: () => '/auth/refresh',
    flowDetermination: (email: string) => `auth/check-user/${email}`,
} as const;
