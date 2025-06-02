import { type ReactNode, useState, useEffect } from "react";
import { AuthContext } from "../hooks/useAuth";

export interface AuthContextType {
    user: string | null | undefined;
    isLoading: boolean;
    login: (userData: string) => void;
    logout: () => void;
}

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const initializeAuth = () => {
            setIsLoading(false);
        };

        initializeAuth();
    }, []);

    const login = (userData: string) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    if (isLoading) {
        return null;
    }

    return (
        <AuthContext.Provider value={{ user, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};