import { apiClient } from './api-client';
import type {
    User,
    LoginResponse,
    RegisterResponse,
    UserRequest,
    LoginRequest,
} from '@/types/auth';

export const authService = {
    async login(username: string, password: string): Promise<LoginResponse> {
        try {
            const loginData: LoginRequest = { username, password };
            const response = await apiClient.post<LoginResponse>(
                '/users/login',
                loginData
            );
            return response;
        } catch (error) {
            console.error('Login error:', error);
            throw new Error('Invalid credentials');
        }
    },

    async register(userData: UserRequest): Promise<RegisterResponse> {
        try {
            const response = await apiClient.post<RegisterResponse>(
                '/users/register',
                userData
            );
            return response;
        } catch (error: any) {
            console.error('Registration error:', error);

            // Handle validation errors from Spring Boot
            if (error.response?.status === 400) {
                const errorData = error.response.data;
                if (errorData.errors) {
                    // Handle field validation errors
                    const fieldErrors = Object.entries(errorData.errors)
                        .map(
                            ([field, messages]) =>
                                `${field}: ${(messages as string[]).join(', ')}`
                        )
                        .join('; ');
                    throw new Error(fieldErrors);
                } else if (errorData.message) {
                    throw new Error(errorData.message);
                }
            }

            throw new Error('Registration failed. Please try again.');
        }
    },

    async getCurrentUser(): Promise<User> {
        try {
            const response = await apiClient.get<User>('/users/profile');
            return response;
        } catch (error) {
            console.error('Get current user error:', error);
            throw new Error('Failed to get user information');
        }
    },

    async refreshToken(): Promise<string> {
        try {
            const response = await apiClient.post<{ token: string }>(
                '/users/refresh-token'
            );
            return response.token;
        } catch (error) {
            console.error('Token refresh error:', error);
            throw new Error('Failed to refresh token');
        }
    },
};
