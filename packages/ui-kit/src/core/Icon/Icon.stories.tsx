import type { Meta, StoryObj } from '@storybook/react';

import { iconsList } from './_stories/iconsList';
import { Icon } from './Icon';

const categoryOptions = iconsList.map(({ folder }) => (folder === 'root' ? '' : folder));
const nameOptions = iconsList.flatMap(({ icons }) => icons);

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
		category: {
			options: categoryOptions,
			control: {
				type: 'select',
				labels: { '': '(root)' },
			},
		},
		name: {
			options: nameOptions,
			control: { type: 'select' },
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
