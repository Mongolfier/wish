import { apiRequest } from '../api';

interface LoginCredentials {
    login: string;
    password: string;
}

interface LoginResponse {
    token?: string;
    // Add other response fields as needed based on your API response
}

export const authService = {
    async login(credentials: LoginCredentials): Promise<LoginResponse> {
        try {
            const response = await apiRequest({
                endpoint: '/login',
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