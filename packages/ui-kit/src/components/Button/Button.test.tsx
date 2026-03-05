import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '@testing-library/jest-dom';

import { Button } from './Button';

describe('Button', () => {
	it('renders children text', () => {
		render(<Button>Click me</Button>);
		expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
	});

	it('calls onClick handler when clicked', async () => {
		const user = userEvent.setup();
		const handleClick = vi.fn();

		render(<Button onClick={handleClick}>Click me</Button>);
		await user.click(screen.getByRole('button'));

		expect(handleClick).toHaveBeenCalledOnce();
	});

	it('does not call onClick when disabled', async () => {
		const user = userEvent.setup();
		const handleClick = vi.fn();

		render(
			<Button
				disabled
				onClick={handleClick}
			>
				Disabled
			</Button>,
		);
		await user.click(screen.getByRole('button'));

		expect(handleClick).not.toHaveBeenCalled();
	});

	it('applies variant class', () => {
		render(<Button variant="secondary">Secondary</Button>);
		expect(screen.getByRole('button')).toHaveClass('secondary');
	});

	it('applies size class', () => {
		render(<Button size="lg">Large</Button>);
		expect(screen.getByRole('button')).toHaveClass('lg');
	});

	it('merges custom className', () => {
		render(<Button className="custom">With class</Button>);
		expect(screen.getByRole('button')).toHaveClass('custom');
	});

	it('forwards native button attributes', () => {
		render(<Button type="submit">Submit</Button>);
		expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
	});
});
