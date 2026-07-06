import { useId } from 'react';
import ReactSelect, { type GroupBase, type Props } from 'react-select';

export interface SelectProps<
	Option = unknown,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>,
> extends Props<Option, IsMulti, Group> {}

export const Select = <
	Option = unknown,
	IsMulti extends boolean = false,
	Group extends GroupBase<Option> = GroupBase<Option>,
>(
	props: SelectProps<Option, IsMulti, Group>,
) => {
	const reactId = useId();
	const { instanceId, ...rest } = props;

	return (
		<ReactSelect
			{...rest}
			instanceId={instanceId ?? reactId.replace(/:/g, '')}
		/>
	);
};
