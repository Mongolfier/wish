export type FooterProps = React.HTMLAttributes<HTMLElement>;

export const Footer = (props: FooterProps) => {
	const currentYear = new Date().getFullYear();

	return <footer {...props}>{currentYear}</footer>;
};
