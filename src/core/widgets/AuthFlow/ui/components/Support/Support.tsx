import { useTranslation } from '@/core/shared/i18n/client';

import css from './Support.module.css';

export const Support = () => {
	const { t } = useTranslation(['auth', 'common']);

	return (
		<div className={css.support}>
			<p className={css.supportText}>{t('auth:needHelp')}</p>

            {/* FIXME: get support email from .env or constant */}
            <a href={`mailto:${t('common:links.supportEmail')}`} className={css.supportLink}>
                {t('common:links.supportEmail')}
            </a>
		</div>
	);
};