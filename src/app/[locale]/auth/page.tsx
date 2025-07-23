import { redirect } from 'next/navigation';

import { routes } from '@/core/shared/router';

export default function AuthPage() {
    redirect(routes.auth.signIn);
}
