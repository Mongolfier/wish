"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useEmailInput } from "@/core/shared/hooks/useEmailInput";
import { useTranslation } from "@/core/shared/i18n/client";
import { StepEnterEmailResult } from "../../../model/constants/stepsResults";
import { useAuthFlowDetermination } from "../../../hooks/useAuthFlowDetermination";
import { Support } from "../../components/Support/Support";

export interface StepEnterEmailProps {
  onComplete: (result: StepEnterEmailResult) => void;
  onEmailChange: (email: string) => void;
  email: string;
}

interface FormData {
  email: string;
}

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export const StepEnterEmail = ({
  onComplete,
  onEmailChange,
  email,
}: StepEnterEmailProps) => {
  const { t } = useTranslation(["auth"]);

  // Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(emailSchema),
    defaultValues: { email },
  });

  const { handleInputChange } = useEmailInput({
    onEmailChange: (newEmail) => {
      setValue("email", newEmail);
    },
  });

  const {
    determineFlow,
    isLoading,
    hasError: hasDeterminationError,
    errorMessage: determinationErrorMessage,
  } = useAuthFlowDetermination(onComplete);

  const onSubmit = (data: FormData) => {
    if (isLoading) return;
    onEmailChange(data.email);
    determineFlow(data.email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">{t("email")}</label>
        <input
          type="email"
          id="email"
          {...register("email")}
          onChange={handleInputChange}
          placeholder={t("enterEmail")}
        />

        {errors.email && <span className="error">{errors.email.message}</span>}

        {hasDeterminationError && (
          <span className="error">{determinationErrorMessage}</span>
        )}

        <button type="submit" disabled={isLoading}>
          {isLoading ? t("loading") : t("continue")}
        </button>

        <Support />
      </form>
    </div>
  );
};
