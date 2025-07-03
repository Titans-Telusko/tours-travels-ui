import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/contexts/auth-context';
import { Toaster } from '@/components/ui/sonner';
import LandingPage from '@/pages/landing-page';
import LoginPage from '@/pages/auth/login-page';
import RegisterPage from '@/pages/auth/register-page';
import AdminDashboard from '@/pages/admin/admin-dashboard';
import ProtectedRoute from '@/components/auth/protected-route';

function App() {
    return (
        <ThemeProvider defaultTheme='system' storageKey='titans-tours-theme'>
            <AuthProvider>
                <Router>
                    <div className='min-h-screen bg-background'>
                        <Routes>
                            <Route path='/' element={<LandingPage />} />
                            <Route path='/login' element={<LoginPage />} />
                            <Route
                                path='/register'
                                element={<RegisterPage />}
                            />
                            <Route
                                path='/admin/*'
                                element={
                                    <ProtectedRoute>
                                        <AdminDashboard />
                                    </ProtectedRoute>
                                }
                            />
                            <Route
                                path='*'
                                element={<Navigate to='/' replace />}
                            />
                        </Routes>
                        <Toaster />
                    </div>
                </Router>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
