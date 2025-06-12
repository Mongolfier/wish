import { apiRequest } from '../api';

interface LoginCredentials {
    username: string;
    password: string;
}

interface LoginResponse {
    token?: string;
}

export const authService = {
    async login(credentials: LoginCredentials): Promise<LoginResponse> {
        try {
            const response = await apiRequest({
                endpoint: '/auth/login',
                method: 'POST',
                data: credentials
            }) as LoginResponse;
            return response;
        } catch (error) {
            console.error('Login error:', error);
            throw new Error('Login failed');
        }
    }
}; 