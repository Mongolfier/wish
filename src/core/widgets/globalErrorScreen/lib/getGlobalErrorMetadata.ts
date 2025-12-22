import { TFunction } from 'i18next';

export const getGlobalErrorMetadata = (t: TFunction) => {
	return {
		title: t('meta:globalError.title'),
		description: t('meta:globalError.description'),
	};
};
