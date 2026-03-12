import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

import { Link, type LinkProps } from './Link';

const meta = {
	title: 'Elements/Link',
	component: Link,
	parameters: {
		layout: 'centered',
		docs: {
			page: null,
		},
	},
	args: {
		onClick: fn(),
	},
	argTypes: {
		onClick: {
			description: 'Callback fired when the link is clicked',
		},
		href: {
			description: 'URL to navigate to when the link is clicked',
		},
		Component: {
			control: false,
		},
	},
} satisfies Meta<LinkProps>;

export default meta;
type Story = StoryObj<LinkProps>;

const Default: Story = {
	args: {
		children: 'Text',
		href: '#',
		size: 'small',
	},
};

export const ExtraSmall: Story = {
	...Default,
	args: {
		...Default.args,
		size: 'extraSmall',
	},
	render: (args) => {
		return <Link {...args} />;
	},
};

export const Small: Story = {
	...Default,
	args: {
		...Default.args,
		size: 'small',
	},
	render: (args) => {
		return <Link {...args} />;
	},
};

export const Medium: Story = {
	...Default,
	args: {
		...Default.args,
		size: 'medium',
	},
	render: (args) => {
		return <Link {...args} />;
	},
};
