import { Routes, Route } from 'react-router-dom';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/admin/admin-sidebar';
import { DashboardOverview } from '@/components/admin/dashboard-overview';
import { ToursManagement } from '@/components/admin/tours-management';
import { UsersManagement } from '@/components/admin/users-management';
import { BookingsManagement } from '@/components/admin/bookings-management';
import { AdminHeader } from '@/components/admin/admin-header';

const AdminDashboard = () => {
    return (
        <SidebarProvider>
            <div className='flex min-h-screen w-full'>
                <AdminSidebar />
                <div className='flex-1'>
                    <AdminHeader />
                    <main className='flex-1 p-6'>
                        <Routes>
                            <Route path='/' element={<DashboardOverview />} />
                            <Route
                                path='/tours'
                                element={<ToursManagement />}
                            />
                            <Route
                                path='/users'
                                element={<UsersManagement />}
                            />
                            <Route
                                path='/bookings'
                                element={<BookingsManagement />}
                            />
                        </Routes>
                    </main>
                </div>
            </div>
        </SidebarProvider>
    );
};

export default AdminDashboard;
