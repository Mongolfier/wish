import { useMemo, useState } from 'react';
import { useClick, useDismiss, useFloating, useInteractions, useRole } from '@floating-ui/react';

export interface DialogOptions {
	initialOpen?: boolean;
	closeOnOutsidePress?: boolean | ((event: MouseEvent) => boolean);
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
}

export function useDialog({
	initialOpen = false,
	closeOnOutsidePress = false,
	open: controlledOpen,
	onOpenChange: setControlledOpen,
}: DialogOptions = {}) {
	const [uncontrolledOpen, setUncontrolledOpen] = useState(initialOpen);
	const [labelId, setLabelId] = useState<string | undefined>();
	const [descriptionId, setDescriptionId] = useState<string | undefined>();

	const open = controlledOpen ?? uncontrolledOpen;
	const setOpen = setControlledOpen ?? setUncontrolledOpen;

	const data = useFloating({
		open,
		onOpenChange: setOpen,
	});

	const context = data.context;

	const click = useClick(context, {
		enabled: controlledOpen == null,
	});
	const dismiss = useDismiss(context, {
		outsidePress: closeOnOutsidePress,
	});
	const role = useRole(context);

	const interactions = useInteractions([click, dismiss, role]);

	return useMemo(
		() => ({
			open,
			setOpen,
			...interactions,
			...data,
			labelId,
			descriptionId,
			setLabelId,
			setDescriptionId,
		}),
		[open, setOpen, interactions, data, labelId, descriptionId],
	);
}
