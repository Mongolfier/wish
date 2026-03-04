import type { Meta, StoryObj } from '@storybook/react';

import { MainMenu } from './MainMenu';

const meta = {
	title: 'Organisms/MainMenu',
	component: MainMenu,
	parameters: {
		// layout: 'centered',
	},
} satisfies Meta<typeof MainMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => <MainMenu />,
	decorators: [
		(Story) => (
			<div style={{ background: 'var(--color-neutrals-900, #171c22)' }}>
				<Story />
			</div>
		),
	],
};
