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
import { Plus, Search, MoreHorizontal, Edit, Trash2, Eye } from 'lucide-react';

export function ToursManagement() {
    const [searchTerm, setSearchTerm] = useState('');

    const tours = [
        {
            id: '1',
            title: 'Himalayan Adventure',
            destination: 'Nepal',
            duration: '14 days',
            price: '$2,499',
            status: 'active',
            bookings: 45,
            rating: 4.9,
        },
        {
            id: '2',
            title: 'Tropical Paradise',
            destination: 'Maldives',
            duration: '7 days',
            price: '$3,299',
            status: 'active',
            bookings: 32,
            rating: 4.8,
        },
        {
            id: '3',
            title: 'Cultural Heritage',
            destination: 'India',
            duration: '10 days',
            price: '$1,899',
            status: 'draft',
            bookings: 0,
            rating: 0,
        },
        {
            id: '4',
            title: 'Safari Experience',
            destination: 'Kenya',
            duration: '12 days',
            price: '$2,799',
            status: 'active',
            bookings: 28,
            rating: 4.7,
        },
    ];

    const filteredTours = tours.filter(
        (tour) =>
            tour.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            tour.destination.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-3xl font-bold tracking-tight'>
                        Tours Management
                    </h2>
                    <p className='text-muted-foreground'>
                        Manage your tour packages and destinations
                    </p>
                </div>
                <Button>
                    <Plus className='h-4 w-4 mr-2' />
                    Add New Tour
                </Button>
            </div>

            {/* Search and Filters */}
            <Card>
                <CardHeader>
                    <CardTitle>Search Tours</CardTitle>
                    <CardDescription>
                        Find and manage your tour packages
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='flex items-center space-x-2'>
                        <div className='relative flex-1'>
                            <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
                            <Input
                                placeholder='Search tours by name or destination...'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className='pl-8'
                            />
                        </div>
                        <Button variant='outline'>Filter</Button>
                    </div>
                </CardContent>
            </Card>

            {/* Tours Table */}
            <Card>
                <CardHeader>
                    <CardTitle>All Tours ({filteredTours.length})</CardTitle>
                    <CardDescription>
                        Complete list of your tour packages
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Tour</TableHead>
                                <TableHead>Destination</TableHead>
                                <TableHead>Duration</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Bookings</TableHead>
                                <TableHead>Rating</TableHead>
                                <TableHead className='text-right'>
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredTours.map((tour) => (
                                <TableRow key={tour.id}>
                                    <TableCell className='font-medium'>
                                        {tour.title}
                                    </TableCell>
                                    <TableCell>{tour.destination}</TableCell>
                                    <TableCell>{tour.duration}</TableCell>
                                    <TableCell>{tour.price}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                tour.status === 'active'
                                                    ? 'default'
                                                    : 'secondary'
                                            }
                                        >
                                            {tour.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{tour.bookings}</TableCell>
                                    <TableCell>
                                        {tour.rating > 0
                                            ? `⭐ ${tour.rating}`
                                            : 'No ratings'}
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
                                                <DropdownMenuItem>
                                                    <Edit className='mr-2 h-4 w-4' />
                                                    Edit Tour
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className='text-red-600'>
                                                    <Trash2 className='mr-2 h-4 w-4' />
                                                    Delete Tour
                                                </DropdownMenuItem>
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
