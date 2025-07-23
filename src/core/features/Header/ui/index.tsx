import Link from 'next/link';

import { getServerTranslation } from '@/core/shared/i18n';
import { routes } from '@/core/shared/router';
import { Logo } from '@/core/shared/ui/Logo/Logo';

import { LanguageSelector } from '../../LanguageSelector/ui';

import css from './index.module.css';

export const Header = async () => {
    const { t } = await getServerTranslation('header');

    return (
        <header className={css.header}>
            <div className={css.headerWrapper}>
                <Link href={routes.index}>
                    <Logo />
                </Link>
                <div className={css.buttonsWrapper}>
                    <LanguageSelector />
                    <button className={css.button}>
                        {t('header:aboutService')}
                    </button>
                    <Link href={routes.auth.signIn}>{t('header:login')}</Link>
                </div>
            </div>
        </header>
    );
};
