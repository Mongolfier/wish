import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';

const meta = {
	title: 'Elements/Loader',
	component: Loader,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		className: 'small',
		width: 44,
		height: 44,
		style: {
			color: '#197DEB',
		},
	},
};
