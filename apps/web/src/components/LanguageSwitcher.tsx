'use client';

import { useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export function LanguageSwitcher() {
	const locale = useLocale();
	const router = useRouter();
	const pathname = usePathname();

	function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
		router.replace(pathname, { locale: e.target.value });
	}

	return (
		<select
			value={locale}
			onChange={onChange}
		>
			{routing.locales.map((loc) => (
				<option
					key={loc}
					value={loc}
				>
					{loc.toUpperCase()}
				</option>
			))}
		</select>
	);
}
