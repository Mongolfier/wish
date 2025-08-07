"use client";

import { routes } from "@/core/shared/router";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo } from "react";
import { AuthFlowStep } from "../../model/constants/flowSteps";
import { useAuthFlow } from "./useAuthFlow";
import { StepEnterEmail } from "../steps/StepEnterEmail/StepEnterEmail";

import css from "./AuthFlow.module.css";

interface AuthFlowProps {
  onStepChange?: (step: AuthFlowStep) => void;
}

export const AuthFlow = ({ onStepChange }: AuthFlowProps) => {
  const router = useRouter();

  const onAuthSuccess = useCallback(() => {
    router.push(routes.index);
  }, [router]);

  const {
    currentStep,
    email,
    handleResetToEnterEmailStep,
    handleSetCurrentEmail,
    handleStepEnterEmailComplete,
    handleStepFinishSignUpComplete,
    showBackButton,
  } = useAuthFlow({ onSuccess: onAuthSuccess });

  useEffect(() => {
    onStepChange?.(currentStep);
  }, [currentStep, onStepChange]);

  const authStep = useMemo(() => {
    switch (currentStep) {
      case AuthFlowStep.EnterEmail:
        return (
          <StepEnterEmail
            email={email}
            onEmailChange={handleSetCurrentEmail}
            onComplete={handleStepEnterEmailComplete}
          />
        );
      default:
        return null;
    }
  }, []);

  return <div>{authStep}</div>;
};
