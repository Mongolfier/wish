import { type HTMLAttributes } from 'react';

import css from './StepTitleWrapper.module.css';

interface StepTitleWrapperProps extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactElement | React.ReactElement[];
}

export const StepTitleWrapper = ({ children, ...props }: StepTitleWrapperProps) => {
	return (
		<div
			className={css.stepTitleWrapper}
			{...props}
		>
			{children}
		</div>
	);
};