import type { Meta, StoryObj } from '@storybook/react';

import { SocialLink } from './SocialLink';

const meta = {
	title: 'Elements/SocialLink',
	component: SocialLink,
	argTypes: {
		onClick: {
			description: 'Function called when the button is clicked',
		},
		ref: {
			control: false,
			description: 'Ref to the button DOM element for direct access',
		},
	},
} satisfies Meta<typeof SocialLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => (
		<div style={{ backgroundColor: 'black', padding: '50px' }}>
			<SocialLink {...args} />
		</div>
	),
	args: {
		style: { color: 'white' },
		icon: {
			category: 'logo',
			name: 'apple',
		},
		href: '#',
	},
};
