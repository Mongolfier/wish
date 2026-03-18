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
	return <ReactSelect {...props} />;
};
