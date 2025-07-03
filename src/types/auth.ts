export interface User {
    id: string;
    name: string;
    username: string;
    role: 'admin' | 'user';
    avatar?: string;
    phone?: number;
    age?: number;
    createdAt?: string;
}

export interface UserRequest {
    name: string;
    username: string; // This will be the email field
    password: string;
    phone: number;
    age: number;
}

export interface LoginRequest {
    username: string; // email
    password: string;
}

export interface LoginResponse {
    token: string;
    user: User;
}

export interface RegisterResponse {
    token: string;
    user: User;
}

export interface ApiError {
    message: string;
    errors?: Record<string, string[]>;
}
