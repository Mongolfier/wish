import { useState } from "react";

interface UseLoginReturn {
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  hasError: boolean;
  errorMessage: string;
}

export const useLogin = (): UseLoginReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleError = (
    message: string = "common:errors.serverNotAvailableTryAgainLater"
  ) => {
    setHasError(true);
    setErrorMessage(message);
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setHasError(false);
    setErrorMessage("");

    try {
      // TODO: Replace with actual API call
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          handleError("auth:errors.invalidCredentials");
        } else {
          handleError();
        }
        return;
      }

      const data = await response.json();
      // Handle successful login
      console.log("Login successful:", data);
    } catch {
      handleError();
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    login,
    hasError,
    errorMessage,
  };
};
