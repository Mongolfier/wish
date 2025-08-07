import { useState } from 'react';

import { fetchAuthFlow } from '@/core/features/authFlowDetermination/api/fetchAuthFlow';
import { StepEnterEmailResult } from '@/core/widgets/AuthFlow/model/constants/stepsResults';

interface UseAuthFlowDeterminationReturn {
	isLoading: boolean;
	determineFlow: (email: string) => Promise<void>;
	hasError: boolean;
	errorMessage: string;
}

export const useAuthFlowDetermination = (
	onComplete: (flow: StepEnterEmailResult) => void,
): UseAuthFlowDeterminationReturn => {
	const [isLoading, setIsLoading] = useState(false);
	const [hasError, setHasError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const handleError = () => {
		setHasError(true);
		setErrorMessage('common:errors.serverNotAvailableTryAgainLater');
	};

	const determineFlow = async (email: string) => {
		setIsLoading(true);

		try {
			const response = await fetchAuthFlow(email);

			if (!response.ok) {
				handleError();

				return;
			}

			const data = await response.json();

			onComplete(data.data.flow);
		} catch {
			handleError();
		} finally {
			setIsLoading(false);
		}
	};

	return {
		isLoading,
		determineFlow,
		hasError,
		errorMessage,
	};
};
