"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { useEmailInput } from "@/core/shared/hooks/useEmailInput";
import { useTranslation } from "@/core/shared/i18n/client";
import css from "./AuthCard.module.css";
import { useLogin } from "../../../hooks/useLogin";
import { useRegister } from "../../../hooks/useRegister";

export interface AuthCardProps {
    onSuccess?: () => void;
}

interface LoginFormData {
    email: string;
    password: string;
}

interface RegisterFormData {
    email: string;
    password: string;
    confirmPassword: string;
}

const loginSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export const AuthCard = ({ onSuccess }: AuthCardProps) => {
    const { t } = useTranslation(["auth"]);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [email, setEmail] = useState("");

    const { login, isLoading: isLoginLoading, hasError: hasLoginError, errorMessage: loginErrorMessage } = useLogin();
    const { register, isLoading: isRegisterLoading, hasError: hasRegisterError, errorMessage: registerErrorMessage } = useRegister();

    const loginForm = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email, password: "" },
    });

    const registerForm = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        defaultValues: { email, password: "", confirmPassword: "" },
    });

    const { handleInputChange: handleLoginEmailChange } = useEmailInput({
        onEmailChange: (newEmail) => {
            loginForm.setValue("email", newEmail);
            setEmail(newEmail);
        },
    });

    const { handleInputChange: handleRegisterEmailChange } = useEmailInput({
        onEmailChange: (newEmail) => {
            registerForm.setValue("email", newEmail);
            setEmail(newEmail);
        },
    });

    const handleLoginSubmit = async (data: LoginFormData) => {
        if (isLoginLoading) return;
        await login(data.email, data.password);
        onSuccess?.();
    };

    const handleRegisterSubmit = async (data: RegisterFormData) => {
        if (isRegisterLoading) return;
        await register(data.email, data.password);
        onSuccess?.();
    };

    const switchToRegister = () => {
        setIsLoginMode(false);
        registerForm.setValue("email", email);
    };

    const switchToLogin = () => {
        setIsLoginMode(true);
        loginForm.setValue("email", email);
    };

    const isLoading = isLoginLoading || isRegisterLoading;
    const hasError = hasLoginError || hasRegisterError;
    const errorMessage = loginErrorMessage || registerErrorMessage;

    return (
        <div className={css.authCard}>
            <div className={css.header}>
                <h2>{isLoginMode ? t("signIn") : t("signUp")}</h2>
            </div>

            {isLoginMode ? (
                <form onSubmit={loginForm.handleSubmit(handleLoginSubmit)} className={css.form}>
                    <div className={css.field}>
                        <label htmlFor="login-email">{t("email")}</label>
                        <input
                            type="email"
                            id="login-email"
                            {...loginForm.register("email")}
                            onChange={handleLoginEmailChange}
                            placeholder={t("enterEmail")}
                        />
                        {loginForm.formState.errors.email && (
                            <span className={css.error}>{loginForm.formState.errors.email.message}</span>
                        )}
                    </div>

                    <div className={css.field}>
                        <label htmlFor="login-password">{t("password")}</label>
                        <input
                            type="password"
                            id="login-password"
                            {...loginForm.register("password")}
                            placeholder={t("enterPassword")}
                        />
                        {loginForm.formState.errors.password && (
                            <span className={css.error}>{loginForm.formState.errors.password.message}</span>
                        )}
                    </div>

                    {hasError && (
                        <span className={css.error}>{errorMessage}</span>
                    )}

                    <button type="submit" disabled={isLoading} className={css.submitButton}>
                        {isLoading ? t("loading") : t("signIn")}
                    </button>

                    <div className={css.switchMode}>
                        <span>{t("newUser")}</span>
                        <button
                            type="button"
                            onClick={switchToRegister}
                            className={css.switchButton}
                        >
                            {t("signUp")}
                        </button>
                    </div>
                </form>
            ) : (
                <form onSubmit={registerForm.handleSubmit(handleRegisterSubmit)} className={css.form}>
                    <div className={css.field}>
                        <label htmlFor="register-email">{t("email")}</label>
                        <input
                            type="email"
                            id="register-email"
                            {...registerForm.register("email")}
                            onChange={handleRegisterEmailChange}
                            placeholder={t("enterEmail")}
                        />
                        {registerForm.formState.errors.email && (
                            <span className={css.error}>{registerForm.formState.errors.email.message}</span>
                        )}
                    </div>

                    <div className={css.field}>
                        <label htmlFor="register-password">{t("password")}</label>
                        <input
                            type="password"
                            id="register-password"
                            {...registerForm.register("password")}
                            placeholder={t("enterPassword")}
                        />
                        {registerForm.formState.errors.password && (
                            <span className={css.error}>{registerForm.formState.errors.password.message}</span>
                        )}
                    </div>

                    <div className={css.field}>
                        <label htmlFor="register-confirm-password">{t("confirmPassword")}</label>
                        <input
                            type="password"
                            id="register-confirm-password"
                            {...registerForm.register("confirmPassword")}
                            placeholder={t("confirmPassword")}
                        />
                        {registerForm.formState.errors.confirmPassword && (
                            <span className={css.error}>{registerForm.formState.errors.confirmPassword.message}</span>
                        )}
                    </div>

                    {hasError && (
                        <span className={css.error}>{errorMessage}</span>
                    )}

                    <button type="submit" disabled={isLoading} className={css.submitButton}>
                        {isLoading ? t("loading") : t("signUp")}
                    </button>

                    <div className={css.switchMode}>
                        <span>{t("haveAccount")}</span>
                        <button
                            type="button"
                            onClick={switchToLogin}
                            className={css.switchButton}
                        >
                            {t("signIn")}
                        </button>
                    </div>
                </form>
            )}

            {/* <Support /> */}
        </div>
    );
};
