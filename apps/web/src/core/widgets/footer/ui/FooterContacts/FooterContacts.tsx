'use client';

import { SocialLink } from '@wish/ui-kit';

import { contactsConfig } from '../../config';

import css from './FooterContacts.module.css';

export const FooterContacts = () => {
	return (
		<section
			aria-label="Contacts"
			className={css.container}
		>
			{contactsConfig.map((config) => (
				<article
					key={config.specialists}
					aria-labelledby={`${config.specialists}-heading`}
				>
					<h2 id={`${config.specialists}-heading`}>{config.specialists}</h2>
					<ul>
						{config.list.map((item) => (
							<li key={item.name}>
								<h3>{item.name}</h3>
								<nav aria-label={`${item.name} contacts`}>
									<ul className={css.links}>
										{item.links.map((link) => (
											<li key={link.icon.name}>
												<SocialLink
													icon={link.icon}
													href={link.link}
												/>
											</li>
										))}
									</ul>
								</nav>
							</li>
						))}
					</ul>
				</article>
			))}
		</section>
	);
};
