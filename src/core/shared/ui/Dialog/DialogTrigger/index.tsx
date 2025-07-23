import { cloneElement, forwardRef, isValidElement } from 'react';
import { useMergeRefs } from '@floating-ui/react';

import { ClickableElement } from '../../ClickableElement/ClickableElement';
import { useDialogContext } from '../useDialogContext';

export interface DialogTriggerProps {
    children: React.ReactNode;
    asChild?: boolean;
}

export const DialogTrigger = forwardRef<
    HTMLElement,
    React.HTMLProps<HTMLElement> & DialogTriggerProps
>(function DialogTrigger({ children, asChild = false, ...props }, propRef) {
    const context = useDialogContext();
    const childrenRef = (children as unknown).ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && isValidElement(children)) {
        return cloneElement(
            children,
            context.getReferenceProps({
                ref,
                ...props,
                ...(children.props as Record<string, unknown>),
            })
        );
    }

    return (
        <ClickableElement
            ref={ref}
            // The user can style the trigger based on the state
            data-state={context.open ? 'open' : 'closed'}
            {...context.getReferenceProps(props)}
        >
            {children}
        </ClickableElement>
    );
});
