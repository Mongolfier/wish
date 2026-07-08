import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react';

import { Button, type ButtonProps } from './Button';

const meta = {
	title: 'Elements/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	args: {
		onClick: fn(),
		children: 'Button',
	},
	argTypes: {
		onClick: { description: 'Click handler' },
		mode: {
			control: 'select',
			options: ['primary', 'secondary', 'tertiary', 'quaternary'],
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
		},
	},
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
	args: {
		mode: 'primary',
		size: 'medium',
	},
};

export const Secondary: Story = {
	args: {
		mode: 'secondary',
		size: 'medium',
	},
	render: (args) => (
		<div style={{ background: '#0b1016', padding: 32, borderRadius: 12 }}>
			<Button {...args} />
		</div>
	),
};

export const Tertiary: Story = {
	args: {
		mode: 'tertiary',
		size: 'medium',
	},
	render: (args) => (
		<div style={{ background: '#0b1016', padding: 32, borderRadius: 12 }}>
			<Button {...args} />
		</div>
	),
};

export const Quaternary: Story = {
	args: {
		mode: 'quaternary',
		size: 'medium',
	},
};

export const WithIcon: Story = {
	args: {
		mode: 'primary',
		children: 'Sign in',
		icon: { category: 'entrance', name: 'user' },
	},
};

export const Loading: Story = {
	args: {
		mode: 'primary',
		isLoading: true,
		children: 'Saving…',
	},
};

export const FullWidth: Story = {
	args: {
		mode: 'primary',
		fullWidth: true,
		children: 'Continue',
	},
	render: (args) => (
		<div style={{ width: 320 }}>
			<Button {...args} />
		</div>
	),
};

export const AllModes: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 280 }}>
			<Button mode="primary">Primary</Button>
			<div
				style={{
					background: '#0b1016',
					padding: 16,
					borderRadius: 12,
					display: 'flex',
					flexDirection: 'column',
					gap: 12,
				}}
			>
				<Button mode="secondary">Secondary</Button>
				<Button mode="tertiary">Tertiary</Button>
			</div>
			<Button mode="quaternary">Quaternary</Button>
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
			<Button size="small">Small</Button>
			<Button size="medium">Medium</Button>
			<Button size="large">Large</Button>
		</div>
	),
};

export const Circle: Story = {
	args: {
		isCircle: true,
		size: 'medium',
		mode: 'secondary',
		icon: { category: 'actions', name: 'search' },
		'aria-label': 'Search',
	},
	render: (args) => (
		<div style={{ background: '#0b1016', padding: 32, borderRadius: 12 }}>
			<Button {...args} />
		</div>
	),
};

export const Disabled: Story = {
	args: {
		disabled: true,
		children: 'Disabled',
	},
};
