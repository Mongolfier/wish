import { useState } from "react";

interface UseRegisterReturn {
  isLoading: boolean;
  register: (email: string, password: string) => Promise<void>;
  hasError: boolean;
  errorMessage: string;
}

export const useRegister = (): UseRegisterReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleError = (
    message: string = "common:errors.serverNotAvailableTryAgainLater"
  ) => {
    setHasError(true);
    setErrorMessage(message);
  };

  const register = async (email: string, password: string) => {
    setIsLoading(true);
    setHasError(false);
    setErrorMessage("");

    try {
      // TODO: Replace with actual API call
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        if (response.status === 409) {
          handleError("auth:errors.emailAlreadyExists");
        } else {
          handleError();
        }
        return;
      }

      const data = await response.json();
      // Handle successful registration
      console.log("Registration successful:", data);
    } catch {
      handleError();
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    register,
    hasError,
    errorMessage,
  };
};
