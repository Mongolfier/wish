import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta = {
	title: 'Organisms/Footer',
	component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => <Footer copyrightSlot={'© 2025-2026 MyWish'} />,
};
