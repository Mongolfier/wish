import { createContext, useContext } from "react";

export interface AuthContextType {
    user: string | null | undefined;
    isLoading: boolean;
    login: (userData: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};