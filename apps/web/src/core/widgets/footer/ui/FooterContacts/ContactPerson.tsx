import { SocialLink } from '@wish/ui-kit';

import { type ContactPersonConfig } from '../../types';

import css from './FooterContacts.module.css';

interface ContactPersonProps {
	person: ContactPersonConfig;
}

export const ContactPerson = ({ person }: ContactPersonProps) => (
	<li>
		<h3>{person.name}</h3>
		<nav aria-label={`${person.name} contacts`}>
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
