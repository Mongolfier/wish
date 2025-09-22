"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { useEmailInput } from "@/core/shared/hooks/useEmailInput";
import { useTranslation } from "@/core/shared/i18n/client";
import { StepEnterEmailResult } from "../../../model/constants/stepsResults";
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

  const onSubmit = (data: FormData) => {
    onEmailChange(data.email);
    // For now, we'll assume it's a sign-in flow
    // In the future, this could be replaced with actual API call
    onComplete(StepEnterEmailResult.SignIn);
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

        <button type="submit">
          {t("continue")}
        </button>

        <Support />
      </form>
    </div>
  );
};
