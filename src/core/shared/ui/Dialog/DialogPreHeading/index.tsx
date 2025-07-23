import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

import styles from './index.module.css';

export const DialogPreHeading: FC<
    PropsWithChildren & { className?: string }
> = ({ children, className }) => (
    <div className={cn(styles.DialogPreHeading, className)}>{children}</div>
);
