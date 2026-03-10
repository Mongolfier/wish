import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

const meta = {
	title: 'Core/Icon',
	component: Icon,
	parameters: {
		layout: 'centered',
	},
	args: {
		category: 'entrance',
		name: 'user',
	},
	argTypes: {
		name: {
			control: 'text',
		},
	},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExampleIcon: Story = {
	args: {
		width: 44,
		height: 44,
		name: 'user',
		category: 'entrance',
		style: { color: '#fff' },
	},
};
