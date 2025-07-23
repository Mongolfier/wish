const rootPath = '/auth';

export const authRoutes = {
    index: rootPath,
    signIn: `${rootPath}/sign-in`,
    signUp: `${rootPath}/sign-up`,
} as const;
