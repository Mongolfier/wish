import { useTranslations } from 'next-intl';
import { SocialLink } from '@wish/ui-kit';

import { type ContactPersonConfig } from '../../types';

import css from './FooterContacts.module.css';

interface ContactPersonProps {
	person: ContactPersonConfig;
}

export const ContactPerson = ({ person }: ContactPersonProps) => {
	const t = useTranslations('developers');
	const displayName = t(`names.${person.name}`);

	return (
		<li className={css.person}>
			<h3 className={css.personName}>{displayName}</h3>

			<nav aria-label={t('contactsNav', { name: displayName })}>
				<ul className={css.links}>
					{person.links.map((link) => (
						<li key={`${link.labelKey}-${link.href}`}>
							<SocialLink
								aria-label={t(`social.${link.labelKey}`)}
								className={css.socialLink}
								href={link.href}
								icon={link.icon}
								iconClassName={css.socialIcon}
							/>
						</li>
					))}
				</ul>
			</nav>
		</li>
	);
};
