import { forwardRef } from 'react';
import classNames from 'classnames';

import { ClickableElement } from '../../ClickableElement/ClickableElement';
import { useDialogContext } from '../useDialogContext';

import styles from './index.module.css';

export const DialogClose = forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(function DialogClose({ className, ...props }, ref) {
    const { setOpen } = useDialogContext();

    function handleClick(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ): void {
        setOpen(false);
        props.onClick?.(event);
    }

    return (
        <ClickableElement
            className={classNames(styles.DialogClose, className)}
            {...props}
            ref={ref}
            onClick={handleClick}
        >
            X
        </ClickableElement>
    );
});
