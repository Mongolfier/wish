import { forwardRef } from 'react';
import classNames from 'classnames';
import { FloatingFocusManager, FloatingOverlay, FloatingPortal, useMergeRefs } from '@floating-ui/react';

import { useDialogContext } from '../useDialogContext';

import styles from './index.module.css';

export type DialogContentProps = React.HTMLProps<HTMLDivElement> & {
	overlayClassName?: string;
};

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>((props, propRef) => {
	const { context: floatingContext, ...context } = useDialogContext();
	const ref = useMergeRefs([context.refs.setFloating, propRef]);

	if (!floatingContext.open) return null;

	const { ...floatingProps } = context.getFloatingProps(props);

	return (
		<FloatingPortal>
			<FloatingOverlay
				className={classNames(styles.overlay, props.overlayClassName)}
				lockScroll={true}
			>
				<FloatingFocusManager context={floatingContext}>
					<div
						ref={ref}
						aria-labelledby={context.labelId}
						aria-describedby={context.descriptionId}
						{...floatingProps}
						className={classNames(styles.content, floatingProps.className as string)}
					>
						{props.children}
					</div>
				</FloatingFocusManager>
			</FloatingOverlay>
		</FloatingPortal>
	);
});
DialogContent.displayName = 'DialogContent';
