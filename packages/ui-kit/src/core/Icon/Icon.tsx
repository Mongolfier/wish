import { type FC, type SVGProps, useEffect, useState } from 'react';

import { type Icons } from './icons.types';

export type IconProps = Icons & SVGProps<SVGSVGElement>;

export const Icon: FC<IconProps> = (props: IconProps) => {
	const { name, category, ...svgProps } = props;
	const [IconComponent, setIconComponent] = useState<FC<SVGProps<SVGSVGElement>> | null>(null);

	useEffect(() => {
		(async () => {
			if (!name) {
				setIconComponent(null);
				return;
			}

			try {
				let icon: { default: FC<SVGProps<SVGSVGElement>> };

				if (category) {
					icon = await import(`../../assets/icons/${category}/${name}.svg`);
				} else {
					icon = await import(`../../assets/icons/${name}.svg`);
				}

				setIconComponent(() => icon.default);
			} catch {
				const errorMessage = [`Icon "${name}" not found`];

				if (category) {
					errorMessage.push(`in category "${category}"`);
				}

				// eslint-disable-next-line no-console
				console.error(errorMessage.join(' '));
			}
		})();
	}, [category, name]);

	return IconComponent ? <IconComponent {...svgProps} /> : <svg {...svgProps} />;
};
