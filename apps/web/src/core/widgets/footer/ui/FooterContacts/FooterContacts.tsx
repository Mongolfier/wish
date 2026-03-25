'use client';

import { contactsConfig } from '../../config';

import { ContactGroup } from './ContactGroup';

import css from './FooterContacts.module.css';

export const FooterContacts = () => (
	<section
		aria-label="Contacts"
		className={css.container}
	>
		{contactsConfig.map((group) => (
			<ContactGroup
				key={group.specialists}
				group={group}
			/>
		))}
	</section>
);
