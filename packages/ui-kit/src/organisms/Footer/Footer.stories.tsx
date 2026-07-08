import type { Meta, StoryObj } from '@storybook/react';

import { SocialLink } from '../../elements/SocialLink';

import { Footer } from './Footer';

const mockContacts = (
	<section
		aria-label="Contacts"
		style={{
			display: 'grid',
			gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
			gap: 24,
			width: '100%',
		}}
	>
		{[
			{ title: 'Developers', name: 'Dmitry' },
			{ title: 'DevOps', name: 'Nikolaj' },
			{ title: 'Designers', name: 'Igor' },
		].map(({ title, name }) => (
			<article
				key={title}
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: 12,
					padding: 24,
					background: 'rgb(255 255 255 / 2%)',
					border: '1px solid rgb(255 255 255 / 10%)',
					borderRadius: 16,
				}}
			>
				<h2
					style={{
						margin: 0,
						fontSize: 12,
						fontWeight: 600,
						color: '#75b1f3',
						textTransform: 'uppercase',
						letterSpacing: '0.08em',
					}}
				>
					{title}
				</h2>
				<p style={{ margin: 0, fontWeight: 600, color: '#fff' }}>{name}</p>
				<div style={{ display: 'flex', gap: 8 }}>
					<SocialLink
						href="#"
						icon={{ category: 'logo', name: 'github' }}
						style={{ width: 40, height: 40 }}
					/>
					<SocialLink
						href="#"
						icon={{ category: 'logo', name: 'telegram' }}
						style={{ width: 40, height: 40 }}
					/>
				</div>
			</article>
		))}
	</section>
);

const meta = {
	title: 'Organisms/Footer',
	component: Footer,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Footer
			contactsSlot={mockContacts}
			copyrightSlot="© Wish, 2025-2026"
		/>
	),
};

export const CopyrightOnly: Story = {
	render: () => <Footer copyrightSlot="© Wish, 2025-2026" />,
};
