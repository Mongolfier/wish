import { FormEvent, useCallback } from 'react';


interface UseEmailInputProps {
	onEmailChange: (value: string) => void;
}

interface UseEmailInputReturn {
	handleInputChange: (e: FormEvent<HTMLInputElement>) => void;
}

export const useEmailInput = ({ onEmailChange }: UseEmailInputProps): UseEmailInputReturn => {
	const handleInputChange = useCallback(
		(e: FormEvent<HTMLInputElement>) => {
			const value = e.currentTarget.value;
			const valueWithoutSpaces = value.replace(/\s/g, '');
			onEmailChange(valueWithoutSpaces);
		},
		[onEmailChange],
	);

	return {
		handleInputChange,
	};
};
