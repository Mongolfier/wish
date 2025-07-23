import { forwardRef, useId, useLayoutEffect } from 'react';
import classNames from 'classnames';

import { useDialogContext } from '../useDialogContext';

import styles from './index.module.css';

export const DialogDescription = forwardRef<
    HTMLParagraphElement,
    React.HTMLProps<HTMLParagraphElement>
>(function DialogDescription({ children, className, ...props }, ref) {
    const { setDescriptionId } = useDialogContext();
    const id = useId();

    // Only sets `aria-describedby` on the Dialog root element
    // if this component is mounted inside it.
    useLayoutEffect(() => {
        setDescriptionId(id);
        return () => setDescriptionId(undefined);
    }, [id, setDescriptionId]);

    return (
        <p
            {...props}
            className={classNames(styles.DialogDescription, className)}
            ref={ref}
            id={id}
        >
            {children}
        </p>
    );
});
