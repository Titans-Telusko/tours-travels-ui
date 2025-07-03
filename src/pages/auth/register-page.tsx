'use client';

import type React from 'react';

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/auth-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ThemeToggle } from '@/components/theme-toggle';
import { Loader2, Plane, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';
import type { UserRequest } from '@/types/auth';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '', // This will be the email
        password: '',
        confirmPassword: '',
        phone: '',
        age: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const { register } = useAuth();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const validateForm = (): string | null => {
        // Name validation
        if (!formData.name.trim()) {
            return 'Name field should not be empty';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.username)) {
            return 'Enter valid email address';
        }

        // Password validation
        if (!formData.password) {
            return 'Password cannot be empty';
        }

        if (formData.password.length < 8 || formData.password.length > 20) {
            return 'Password must be between 8 and 20 characters';
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=]).*$/;
        if (!passwordRegex.test(formData.password)) {
            return 'Password must contain at least one uppercase letter, one number, and one special character';
        }

        // Confirm password
        if (formData.password !== formData.confirmPassword) {
            return 'Passwords do not match';
        }

        // Phone validation
        if (!formData.phone) {
            return 'Phone number is required';
        }

        const phoneNumber = Number.parseInt(formData.phone);
        if (isNaN(phoneNumber) || formData.phone.length !== 10) {
            return 'Phone number must be exactly 10 digits';
        }

        // Age validation
        if (!formData.age) {
            return 'Age is required';
        }

        const age = Number.parseInt(formData.age);
        if (isNaN(age) || age < 5 || age > 80) {
            return 'Age should be between 5 and 80';
        }

        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        // Client-side validation
        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            setIsLoading(false);
            return;
        }

        try {
            const userData: UserRequest = {
                name: formData.name.trim(),
                username: formData.username.trim(),
                password: formData.password,
                phone: Number.parseInt(formData.phone),
                age: Number.parseInt(formData.age),
            };

            await register(userData);
            toast.success('Registration successful!');
            navigate('/admin');
        } catch (err: any) {
            const errorMessage =
                err.message || 'Registration failed. Please try again.';
            setError(errorMessage);
            toast.error('Registration failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-4'>
            <div className='absolute top-4 right-4'>
                <ThemeToggle />
            </div>

            <Card className='w-full max-w-md'>
                <CardHeader className='text-center'>
                    <div className='flex items-center justify-center space-x-2 mb-4'>
                        <Plane className='h-8 w-8 text-primary' />
                        <span className='text-2xl font-bold text-primary'>
                            Titans Tours
                        </span>
                    </div>
                    <CardTitle className='text-2xl'>Create Account</CardTitle>
                    <CardDescription>
                        Join us and start your travel journey
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className='space-y-4'>
                        {error && (
                            <Alert variant='destructive'>
                                <AlertDescription>{error}</AlertDescription>
                            </Alert>
                        )}

                        <div className='space-y-2'>
                            <Label htmlFor='name'>Full Name *</Label>
                            <Input
                                id='name'
                                name='name'
                                type='text'
                                placeholder='Enter your full name'
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='username'>Email *</Label>
                            <Input
                                id='username'
                                name='username'
                                type='email'
                                placeholder='Enter your email'
                                value={formData.username}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                            />
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='phone'>Phone Number *</Label>
                            <Input
                                id='phone'
                                name='phone'
                                type='tel'
                                placeholder='Enter 10-digit phone number'
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                                maxLength={10}
                            />
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='age'>Age *</Label>
                            <Input
                                id='age'
                                name='age'
                                type='number'
                                placeholder='Enter your age (5-80)'
                                value={formData.age}
                                onChange={handleChange}
                                required
                                disabled={isLoading}
                                min={5}
                                max={80}
                            />
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='password'>Password *</Label>
                            <div className='relative'>
                                <Input
                                    id='password'
                                    name='password'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Create a password'
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                />
                                <Button
                                    type='button'
                                    variant='ghost'
                                    size='sm'
                                    className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    disabled={isLoading}
                                >
                                    {showPassword ? (
                                        <EyeOff className='h-4 w-4' />
                                    ) : (
                                        <Eye className='h-4 w-4' />
                                    )}
                                </Button>
                            </div>
                            <p className='text-xs text-muted-foreground'>
                                Password must be 8-20 characters with at least
                                one uppercase letter, one number, and one
                                special character
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <Label htmlFor='confirmPassword'>
                                Confirm Password *
                            </Label>
                            <div className='relative'>
                                <Input
                                    id='confirmPassword'
                                    name='confirmPassword'
                                    type={
                                        showConfirmPassword
                                            ? 'text'
                                            : 'password'
                                    }
                                    placeholder='Confirm your password'
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                />
                                <Button
                                    type='button'
                                    variant='ghost'
                                    size='sm'
                                    className='absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent'
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                    disabled={isLoading}
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className='h-4 w-4' />
                                    ) : (
                                        <Eye className='h-4 w-4' />
                                    )}
                                </Button>
                            </div>
                        </div>

                        <Button
                            type='submit'
                            className='w-full'
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                                    Creating account...
                                </>
                            ) : (
                                'Create Account'
                            )}
                        </Button>
                    </form>

                    <div className='mt-6 text-center'>
                        <p className='text-sm text-muted-foreground'>
                            Already have an account?{' '}
                            <Link
                                to='/login'
                                className='text-primary hover:underline'
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default RegisterPage;
