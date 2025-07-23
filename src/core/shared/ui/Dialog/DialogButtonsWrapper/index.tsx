import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './index.module.css';

export type DialogButtonsWrapperProps = PropsWithChildren & {
    className?: string;
};

export const DialogButtonsWrapper: FC<DialogButtonsWrapperProps> = ({
    className,
    children,
}) => (
    <div className={cn(styles.DialogButtonsWrapper, className)}>{children}</div>
);
