import { type JSX, type PropsWithChildren } from 'react';

import { type DialogOptions, useDialog } from './useDialog';
import { DialogContext } from './useDialogContext';

export { DialogContext, useDialog };

export { DialogClose } from './DialogClose';
export { DialogContent } from './DialogContent';
export { DialogDescription } from './DialogDescription';
export { DialogHeading } from './DialogHeading';
export { DialogTrigger, type DialogTriggerProps } from './DialogTrigger';

export type DialogProps = PropsWithChildren<DialogOptions>;

export function Dialog({ children, ...options }: DialogProps): JSX.Element {
    const dialog = useDialog(options);

    return (
        <DialogContext.Provider value={dialog}>
            {children}
        </DialogContext.Provider>
    );
}
