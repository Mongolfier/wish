import type { Meta, StoryObj } from '@storybook/react';

import { SocialLink } from './SocialLink';

const meta = {
	title: 'Elements/SocialLink',
	component: SocialLink,
	argTypes: {
		onClick: {
			description: 'Функция, вызываемая при клике на кнопку',
		},
		ref: {
			control: false,
			description: 'Ссылка на DOM-элемент кнопки для прямого доступа',
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
		icon: {
			category: 'logo',
			name: 'apple',
		},
		href: '#',
	},
};
