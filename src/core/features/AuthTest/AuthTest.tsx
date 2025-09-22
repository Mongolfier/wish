"use client";

import { AuthCard } from "@/core/widgets/AuthFlow/ui/steps/AuthCard/AuthCard";

export const AuthTestPage = () => {
    const handleAuthSuccess = () => {
        console.log("Authentication successful!");
        // Здесь можно добавить логику перенаправления или обновления состояния
    };

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        }}>
            <AuthCard onSuccess={handleAuthSuccess} />
        </div>
    );
};
