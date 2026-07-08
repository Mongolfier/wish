'use client';

import { useId } from 'react';
import { useTranslations } from 'next-intl';
import { Select } from '@wish/ui-kit';

import { type LanguageOption, useLanguageSelector } from '../../hooks/useLanguageSelector';

import css from './LanguageSelector.module.css';

export const LanguageSelector = () => {
	const t = useTranslations('nav');
	const inputId = useId();
	const { changeLanguage, currentLanguage, languageOptions } = useLanguageSelector();

	return (
		<div className={css.wrapper}>
			<label
				className={css.label}
				htmlFor={inputId}
			>
				{t('language')}
			</label>
			<Select<LanguageOption>
				inputId={inputId}
				value={currentLanguage}
				options={languageOptions}
				onChange={changeLanguage}
				isSearchable={false}
			/>
		</div>
	);
};
