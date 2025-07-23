'use client';

import type { SingleValue } from 'react-select';
import Select from 'react-select';

import { useLanguageSelect } from '../hooks/useLanguageSelect';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface LanguageSelectorProps {}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const LanguageSelector = (_props: LanguageSelectorProps) => {
    const {
        changeLanguage,
        currentLanguage,
        languageList,
        isPending,
        isClient,
    } = useLanguageSelect();

    if (!isClient) {
        return null;
    }

    const handleChange = (newValue: SingleValue<typeof currentLanguage>) => {
        if (newValue) {
            changeLanguage(newValue);
        }
    };

    return (
        <Select
            onChange={handleChange}
            value={currentLanguage}
            options={languageList}
            isDisabled={isPending}
            getOptionLabel={option => option.title}
            getOptionValue={option => option.title}
        />
    );
};
