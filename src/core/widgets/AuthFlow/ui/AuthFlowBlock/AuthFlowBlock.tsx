'use client';

import { useState } from 'react';

import { LanguageSelector } from '@/core/features/LanguageSelector/ui';

import { AuthFlowStep } from '../../model/constants/flowSteps';
import { AuthFlow } from '../AuthFlow/AuthFlow';

import css from './AuthFlowBlock.module.css';

export const AuthFlowBlock = () => {
	const [currentStep, setCurrentStep] = useState<AuthFlowStep | null>(null);

	return (
		<div className={css.authFlowBlock}>
			<div className={css.formWrapper}>
				<AuthFlow onStepChange={setCurrentStep} />
			</div>

			{currentStep === AuthFlowStep.EnterEmail && <LanguageSelector />}
		</div>
	);
};
