import { useTranslation } from "react-i18next";
import Select from 'react-select'

interface Option {
    label: string;
    value: string;
}

export const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const supportedLngs = i18n.options.supportedLngs as string[];
    const options: Option[] = supportedLngs.filter((lng: string) => lng !== 'cimode').map((lng: string) => ({ label: lng, value: lng }));
    const value = options.find((option: Option) => option.value === i18n.language);

    function toggleLanguage(option: Option | null) {
        if (!option) return;

        void i18n.changeLanguage(option.value);
    }

    return (
        <Select
            options={options}
            value={value}
            onChange={toggleLanguage}
        />
    )
}