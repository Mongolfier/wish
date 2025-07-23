'use client';

import { useForm } from 'react-hook-form';
import { Trans } from 'react-i18next';
import Link from 'next/link';

import { useTranslation } from '@/core/shared/i18n/client';
import { routes } from '@/core/shared/router';
import { useSignIn } from './useSignIn';

import css from './SignIn.module.css';

export interface SignInFormData {
    email: string;
    password: string;
}

export const SignIn = () => {
    const form = useForm<SignInFormData>({
        mode: 'onSubmit',
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const signIn = useSignIn(form);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = form;

    const { t } = useTranslation('signIn');

    const onSubmit = async ({
        email,
        password,
    }: SignInFormData): Promise<void> => {
        const trimmedEmail = email.trim();

        await signIn({ username: trimmedEmail, password });
    };

    return (
        <main className={css.signIn}>
            <h1>{t('signIn:title')}</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label className={css.label}>
                    <span className={css.labelText}>{t('signIn:email')}</span>

                    { }
                    <input
                        type='text'
                        aria-invalid={errors.email ? 'true' : 'false'}
                        {...register('email')}
                    />
                </label>

                <label className={css.label}>
                    <span className={css.labelText}>
                        {t('signIn:password')}
                    </span>

                    { }
                    <input
                        type='password'
                        aria-invalid={errors.password ? 'true' : 'false'}
                        {...register('password')}
                    />
                </label>
                <button disabled={isSubmitting} type='submit'>
                    {t('signIn:signIn')}
                </button>
            </form>

            <Trans
                i18nKey={'signIn:goToSignUp'}
                components={{ SignUpLink: <Link href={routes.auth.signUp} /> }}
            />
        </main>
    );
};
