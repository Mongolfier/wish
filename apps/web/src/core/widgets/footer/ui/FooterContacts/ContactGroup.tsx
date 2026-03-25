import { type FooterConfig } from '../../types';

import { ContactPerson } from './ContactPerson';

import css from './FooterContacts.module.css';

interface ContactGroupProps {
	group: FooterConfig;
}

export const ContactGroup = ({ group }: ContactGroupProps) => (
	<article aria-labelledby={`${group.specialists}-heading`}>
		<h2 id={`${group.specialists}-heading`}>{group.specialists}</h2>
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
