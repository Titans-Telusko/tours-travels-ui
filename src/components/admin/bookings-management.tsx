'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Search, MoreHorizontal, Eye, Check, X, Calendar } from 'lucide-react';

export function BookingsManagement() {
    const [searchTerm, setSearchTerm] = useState('');

    const bookings = [
        {
            id: 'BK001',
            customer: 'John Doe',
            email: 'john@example.com',
            tour: 'Himalayan Adventure',
            bookingDate: '2024-01-15',
            travelDate: '2024-03-15',
            status: 'confirmed',
            amount: '$2,499',
            guests: 2,
        },
        {
            id: 'BK002',
            customer: 'Jane Smith',
            email: 'jane@example.com',
            tour: 'Tropical Paradise',
            bookingDate: '2024-01-14',
            travelDate: '2024-02-20',
            status: 'pending',
            amount: '$3,299',
            guests: 1,
        },
        {
            id: 'BK003',
            customer: 'Mike Johnson',
            email: 'mike@example.com',
            tour: 'Cultural Heritage',
            bookingDate: '2024-01-13',
            travelDate: '2024-04-10',
            status: 'confirmed',
            amount: '$1,899',
            guests: 3,
        },
        {
            id: 'BK004',
            customer: 'Sarah Wilson',
            email: 'sarah@example.com',
            tour: 'Safari Experience',
            bookingDate: '2024-01-12',
            travelDate: '2024-05-05',
            status: 'cancelled',
            amount: '$2,799',
            guests: 2,
        },
    ];

    const filteredBookings = bookings.filter(
        (booking) =>
            booking.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.tour.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'confirmed':
                return 'default';
            case 'pending':
                return 'secondary';
            case 'cancelled':
                return 'destructive';
            default:
                return 'secondary';
        }
    };

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-3xl font-bold tracking-tight'>
                        Bookings Management
                    </h2>
                    <p className='text-muted-foreground'>
                        Manage customer bookings and reservations
                    </p>
                </div>
                <Button>
                    <Calendar className='h-4 w-4 mr-2' />
                    Export Bookings
                </Button>
            </div>

            {/* Search and Filters */}
            <Card>
                <CardHeader>
                    <CardTitle>Search Bookings</CardTitle>
                    <CardDescription>
                        Find bookings by customer, tour, or booking ID
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='flex items-center space-x-2'>
                        <div className='relative flex-1'>
                            <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
                            <Input
                                placeholder='Search bookings...'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className='pl-8'
                            />
                        </div>
                        <Button variant='outline'>Filter</Button>
                    </div>
                </CardContent>
            </Card>

            {/* Bookings Table */}
            <Card>
                <CardHeader>
                    <CardTitle>
                        All Bookings ({filteredBookings.length})
                    </CardTitle>
                    <CardDescription>
                        Complete list of customer bookings
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Booking ID</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Tour</TableHead>
                                <TableHead>Booking Date</TableHead>
                                <TableHead>Travel Date</TableHead>
                                <TableHead>Guests</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className='text-right'>
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredBookings.map((booking) => (
                                <TableRow key={booking.id}>
                                    <TableCell className='font-medium'>
                                        {booking.id}
                                    </TableCell>
                                    <TableCell>
                                        <div>
                                            <p className='font-medium'>
                                                {booking.customer}
                                            </p>
                                            <p className='text-sm text-muted-foreground'>
                                                {booking.email}
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell>{booking.tour}</TableCell>
                                    <TableCell>{booking.bookingDate}</TableCell>
                                    <TableCell>{booking.travelDate}</TableCell>
                                    <TableCell>{booking.guests}</TableCell>
                                    <TableCell className='font-medium'>
                                        {booking.amount}
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={getStatusColor(
                                                booking.status
                                            )}
                                        >
                                            {booking.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className='text-right'>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant='ghost'
                                                    className='h-8 w-8 p-0'
                                                >
                                                    <MoreHorizontal className='h-4 w-4' />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align='end'>
                                                <DropdownMenuItem>
                                                    <Eye className='mr-2 h-4 w-4' />
                                                    View Details
                                                </DropdownMenuItem>
                                                {booking.status ===
                                                    'pending' && (
                                                    <>
                                                        <DropdownMenuItem className='text-green-600'>
                                                            <Check className='mr-2 h-4 w-4' />
                                                            Confirm Booking
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem className='text-red-600'>
                                                            <X className='mr-2 h-4 w-4' />
                                                            Cancel Booking
                                                        </DropdownMenuItem>
                                                    </>
                                                )}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
