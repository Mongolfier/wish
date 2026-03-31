import { useTranslations } from 'next-intl';

import { type FooterConfig } from '../../types';

import { ContactPerson } from './ContactPerson';

import css from './FooterContacts.module.css';

interface ContactGroupProps {
	group: FooterConfig;
}

export const ContactGroup = ({ group }: ContactGroupProps) => {
	const t = useTranslations('developers.specialists');
	const title = t(group.specialists);

	return (
		<article aria-labelledby={`${group.specialists}-heading`}>
			<h2 id={`${group.specialists}-heading`}>{title}</h2>

			<ul className={css.personList}>
				{group.list.map((person) => (
					<ContactPerson
						key={person.name}
						person={person}
					/>
				))}
			</ul>
		</article>
	);
};
