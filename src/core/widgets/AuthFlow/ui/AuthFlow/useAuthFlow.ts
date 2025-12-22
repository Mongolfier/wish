import { useCallback, useState } from "react";
import { AuthFlowStep } from "../../model/constants/flowSteps";
import {
  StepEnterEmailResult,
  StepFinishSignUpResult,
} from "../../model/constants/stepsResults";
import { WITHOUT_BACK_BUTTON_STEPS } from "../../model/constants/withoutBackButtonSteps";

interface UseAuthFlowProps {
  onSuccess: () => void;
}
export const useAuthFlow = ({ onSuccess }: UseAuthFlowProps) => {
  const [currentStep, setCurrentStep] = useState<AuthFlowStep>(
    AuthFlowStep.AuthType
  );

  const [email, setEmail] = useState<string>("");

  const handleResetToAuthTypeStep = useCallback(() => {
    setCurrentStep(AuthFlowStep.AuthType);
  }, []);

  const handleSetCurrentEmail = useCallback((email: string) => {
    setEmail(email);
  }, []);

  const handleStepEnterEmailComplete = useCallback(
    (result: StepEnterEmailResult) => {
      switch (result) {
        case StepEnterEmailResult.Registration:
          setCurrentStep(AuthFlowStep.EnterSignUpPassword);
          break;
        case StepEnterEmailResult.SignIn:
          setCurrentStep(AuthFlowStep.EnterSignInPassword);
          break;
      }
    },
    []
  );

  const handleStepFinishSignUpComplete = useCallback(
    async (result: { code: StepFinishSignUpResult }) => {
      if (result.code === StepFinishSignUpResult.Success) {
        onSuccess();
      }
    },
    [onSuccess]
  );

  return {
    currentStep,
    email,
    handleResetToAuthTypeStep,
    handleSetCurrentEmail,
    handleStepEnterEmailComplete,
    handleStepFinishSignUpComplete,
    showBackButton: !WITHOUT_BACK_BUTTON_STEPS.includes(currentStep),
  };
};
