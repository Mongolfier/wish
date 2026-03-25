'use client';

import { Select } from '@wish/ui-kit';

import { type LanguageOption, useLanguageSelector } from '../../hooks/useLanguageSelector';

export const LanguageSelector = () => {
	const { changeLanguage, currentLanguage, languageOptions } = useLanguageSelector();

	return (
		<Select<LanguageOption>
			value={currentLanguage}
			options={languageOptions}
			onChange={changeLanguage}
			isSearchable={false}
		/>
	);
};
