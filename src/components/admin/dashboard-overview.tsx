import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Users,
    MapPin,
    Calendar,
    DollarSign,
    TrendingUp,
    TrendingDown,
    Plus,
} from 'lucide-react';

export function DashboardOverview() {
    const stats = [
        {
            title: 'Total Users',
            value: '2,847',
            change: '+12%',
            trend: 'up',
            icon: Users,
            description: 'Active users this month',
        },
        {
            title: 'Active Tours',
            value: '156',
            change: '+8%',
            trend: 'up',
            icon: MapPin,
            description: 'Available tour packages',
        },
        {
            title: 'Bookings',
            value: '1,234',
            change: '+23%',
            trend: 'up',
            icon: Calendar,
            description: 'Total bookings this month',
        },
        {
            title: 'Revenue',
            value: '$89,432',
            change: '-2%',
            trend: 'down',
            icon: DollarSign,
            description: 'Monthly revenue',
        },
    ];

    const recentBookings = [
        {
            id: '1',
            customer: 'John Doe',
            tour: 'Himalayan Adventure',
            date: '2024-01-15',
            status: 'confirmed',
            amount: '$2,499',
        },
        {
            id: '2',
            customer: 'Jane Smith',
            tour: 'Tropical Paradise',
            date: '2024-01-14',
            status: 'pending',
            amount: '$3,299',
        },
        {
            id: '3',
            customer: 'Mike Johnson',
            tour: 'Cultural Heritage',
            date: '2024-01-13',
            status: 'confirmed',
            amount: '$1,899',
        },
    ];

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-3xl font-bold tracking-tight'>
                        Dashboard
                    </h2>
                    <p className='text-muted-foreground'>
                        Welcome back! Here's what's happening with your tours.
                    </p>
                </div>
                <Button>
                    <Plus className='h-4 w-4 mr-2' />
                    Add New Tour
                </Button>
            </div>

            {/* Stats Grid */}
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                            <CardTitle className='text-sm font-medium'>
                                {stat.title}
                            </CardTitle>
                            <stat.icon className='h-4 w-4 text-muted-foreground' />
                        </CardHeader>
                        <CardContent>
                            <div className='text-2xl font-bold'>
                                {stat.value}
                            </div>
                            <div className='flex items-center space-x-2 text-xs text-muted-foreground'>
                                <div
                                    className={`flex items-center ${
                                        stat.trend === 'up'
                                            ? 'text-green-600'
                                            : 'text-red-600'
                                    }`}
                                >
                                    {stat.trend === 'up' ? (
                                        <TrendingUp className='h-3 w-3 mr-1' />
                                    ) : (
                                        <TrendingDown className='h-3 w-3 mr-1' />
                                    )}
                                    {stat.change}
                                </div>
                                <span>from last month</span>
                            </div>
                            <p className='text-xs text-muted-foreground mt-1'>
                                {stat.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Recent Activity */}
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-7'>
                <Card className='col-span-4'>
                    <CardHeader>
                        <CardTitle>Recent Bookings</CardTitle>
                        <CardDescription>
                            Latest tour bookings from customers
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className='space-y-4'>
                            {recentBookings.map((booking) => (
                                <div
                                    key={booking.id}
                                    className='flex items-center justify-between p-4 border rounded-lg'
                                >
                                    <div className='space-y-1'>
                                        <p className='text-sm font-medium'>
                                            {booking.customer}
                                        </p>
                                        <p className='text-sm text-muted-foreground'>
                                            {booking.tour}
                                        </p>
                                        <p className='text-xs text-muted-foreground'>
                                            {booking.date}
                                        </p>
                                    </div>
                                    <div className='text-right space-y-1'>
                                        <p className='text-sm font-medium'>
                                            {booking.amount}
                                        </p>
                                        <Badge
                                            variant={
                                                booking.status === 'confirmed'
                                                    ? 'default'
                                                    : 'secondary'
                                            }
                                        >
                                            {booking.status}
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card className='col-span-3'>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>
                            Common administrative tasks
                        </CardDescription>
                    </CardHeader>
                    <CardContent className='space-y-4'>
                        <Button className='w-full justify-start'>
                            <Plus className='h-4 w-4 mr-2' />
                            Create New Tour
                        </Button>
                        <Button
                            variant='outline'
                            className='w-full justify-start bg-transparent'
                        >
                            <Users className='h-4 w-4 mr-2' />
                            Manage Users
                        </Button>
                        <Button
                            variant='outline'
                            className='w-full justify-start bg-transparent'
                        >
                            <Calendar className='h-4 w-4 mr-2' />
                            View All Bookings
                        </Button>
                        <Button
                            variant='outline'
                            className='w-full justify-start bg-transparent'
                        >
                            <MapPin className='h-4 w-4 mr-2' />
                            Tour Analytics
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
