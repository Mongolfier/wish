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
		<li>
			<h3>{displayName}</h3>

			<nav aria-label={`${displayName} contacts`}>
				<ul className={css.links}>
					{person.links.map((link) => (
						<li key={link.href}>
							<SocialLink
								icon={link.icon}
								href={link.href}
							/>
						</li>
					))}
				</ul>
			</nav>
		</li>
	);
};
