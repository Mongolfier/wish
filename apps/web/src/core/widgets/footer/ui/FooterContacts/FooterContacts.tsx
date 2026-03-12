import { Fragment } from 'react';

import { contactsConfig } from '../../config';

export const FooterContacts = () => {
	return (
		<section>
			{contactsConfig.map((config) => (
				<div key={config.specialists}>
					<h2>{config.specialists}</h2>
					<ul>
						{config.list.map((item) => (
							<Fragment key={item.name}>
								<h3>{item.name}</h3>
								<ul key={item.name}>
									{item.links.map((link) => (
										<li key={link.name}>
											<a href={link.link}>{link.name}</a>
										</li>
									))}
								</ul>
							</Fragment>
						))}
					</ul>
				</div>
			))}
		</section>
	);
};
