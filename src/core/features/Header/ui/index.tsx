import Link from 'next/link';

import { Logo } from "@/core/shared/ui/Logo/Logo";
import { LanguageSelector } from "../../LanguageSelector/ui";
import { routes } from '@/core/shared/router';
import { getServerTranslation } from '@/core/shared/i18n';

import css from './index.module.css';
import { Auth } from '../../Auth/Auth';

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
                    <button className={css.button}>{t('header:aboutService')}</button>
                    <Auth />
                </div>
            </div>
        </header>
    )
}