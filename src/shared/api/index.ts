import { ApiClient } from './ApiClient';
import type { RequestInterceptor, ResponseInterceptor } from './types';

// Example request interceptor that adds an auth token
const authInterceptor: RequestInterceptor = {
    onRequest: async (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            return {
                ...config,
                headers: {
                    ...config.headers,
                    Authorization: `Bearer ${token}`,
                },
            };
        }
        return config;
    },
};

// Example response interceptor that handles common errors
const errorInterceptor: ResponseInterceptor = {
    onResponseError: async (error) => {
        if (error.status === 401) {
            // Handle unauthorized error (e.g., redirect to login)
            localStorage.removeItem('token');
            window.location.href = '/auth';
        }
        return Promise.reject(error);
    },
};

// Create API instance
export const api = new ApiClient({
    baseURL: import.meta.env.VITE_API_URL || 'https://api.example.com',
    headers: {
        'Accept': 'application/json',
    },
    requestInterceptors: [authInterceptor],
    responseInterceptors: [errorInterceptor],
});

// Example of typed API endpoints
interface User {
    id: string;
    username: string;
    email: string;
}

interface LoginCredentials {
    username: string;
    password: string;
}

interface LoginResponse {
    token: string;
    user: User;
}

export const authApi = {
    login: (credentials: LoginCredentials) => 
        api.post<LoginResponse>('/auth/login', credentials),
    
    getCurrentUser: () => 
        api.get<User>('/auth/me'),
    
    logout: () => 
        api.post('/auth/logout'),
};

// You can create more API modules for different features
export const usersApi = {
    getUserById: (id: string) => 
        api.get<User>(`/users/${id}`),
    
    updateUser: (id: string, data: Partial<User>) => 
        api.patch<User>(`/users/${id}`, data),
    
    deleteUser: (id: string) => 
        api.delete(`/users/${id}`),
}; 