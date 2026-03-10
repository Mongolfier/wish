import { Footer as FooterUI } from '@wish/ui-kit';

export type FooterProps = React.HTMLAttributes<HTMLElement>;

export const Footer = (props: FooterProps) => {
	const currentYear = new Date().getFullYear();

	const copyright = `© Wish, 2025-${currentYear}`;

	return (
		<FooterUI
			{...props}
			copyrightSlot={copyright}
		></FooterUI>
	);
};
