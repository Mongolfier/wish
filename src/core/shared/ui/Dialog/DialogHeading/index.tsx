import { forwardRef, useId, useLayoutEffect } from 'react';
import classNames from 'classnames';

import { useDialogContext } from '../useDialogContext';

import styles from './index.module.css';

export const DialogHeading = forwardRef<
    HTMLHeadingElement,
    React.HTMLProps<HTMLHeadingElement>
>(function DialogHeading({ children, className, ...props }, ref) {
    const { setLabelId } = useDialogContext();
    const id = useId();

    // Only sets `aria-labelledby` on the Dialog root element
    // if this component is mounted inside it.
    useLayoutEffect(() => {
        setLabelId(id);
        return () => setLabelId(undefined);
    }, [id, setLabelId]);

    return (
        <h2
            {...props}
            className={classNames(styles.DialogHeading, className)}
            ref={ref}
            id={id}
        >
            {children}
        </h2>
    );
});
