import { UseFormReturn } from "react-hook-form";

import { useTranslation } from "@/core/shared/i18n/client";

import { SignInFormData } from "./SignIn";

export const useSignIn = (form: UseFormReturn<SignInFormData>) => {
  const { setError, clearErrors } = form;

  const { t } = useTranslation("auth");

  async function signIn(params: SignInFormData) {
    const { email, password } = params;

    clearErrors();

    const result = await signInAction({ email, password });
  }

  return signIn;
};
