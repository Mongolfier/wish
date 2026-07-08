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
		href: '#',
		children: 'Link text',
	},
	argTypes: {
		onClick: { description: 'Callback fired when the link is clicked' },
		href: { description: 'URL to navigate to when the link is clicked' },
		Component: { control: false },
		variant: {
			control: 'select',
			options: ['default', 'accent', 'muted', 'inverse'],
		},
		underline: {
			control: 'select',
			options: ['none', 'hover', 'always'],
		},
	},
} satisfies Meta<LinkProps>;

export default meta;
type Story = StoryObj<LinkProps>;

export const Accent: Story = {
	args: {
		variant: 'accent',
		size: 'small',
	},
};

export const Default: Story = {
	args: {
		variant: 'default',
		size: 'small',
	},
};

export const Muted: Story = {
	args: {
		variant: 'muted',
		size: 'small',
	},
};

export const Inverse: Story = {
	args: {
		variant: 'inverse',
		size: 'small',
	},
	render: (args) => (
		<div style={{ background: '#0b1016', padding: 24, borderRadius: 12 }}>
			<Link {...args} />
		</div>
	),
};

export const UnderlineAlways: Story = {
	args: {
		variant: 'accent',
		underline: 'always',
	},
};

export const UnderlineNone: Story = {
	args: {
		variant: 'accent',
		underline: 'none',
	},
};

export const ExtraSmall: Story = {
	args: {
		size: 'extraSmall',
	},
};

export const Medium: Story = {
	args: {
		size: 'medium',
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const AllVariants: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
			<Link
				variant="accent"
				href="#"
			>
				Accent link
			</Link>
			<Link
				variant="default"
				href="#"
			>
				Default link
			</Link>
			<Link
				variant="muted"
				href="#"
			>
				Muted link
			</Link>
			<div style={{ background: '#0b1016', padding: 16, borderRadius: 12 }}>
				<Link
					variant="inverse"
					href="#"
				>
					Inverse link
				</Link>
			</div>
		</div>
	),
};
