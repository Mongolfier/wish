import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconsTable } from './IconsTable';

const meta = {
	component: IconsTable,
} satisfies Meta<typeof IconsTable>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
