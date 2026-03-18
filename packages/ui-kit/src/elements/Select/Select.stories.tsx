import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';

const meta = {
	title: 'Elements/Select',
	component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		options: [
			{ value: '01', label: 'Option-Name-01' },
			{ value: '02', label: 'Option-Name-02' },
			{ value: '03', label: 'Option-Name-03' },
			{ value: '04', label: 'Option-Name-04' },
			{ value: '05', label: 'Option-Name-05' },
		],
	},
};
