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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import {
    Search,
    MoreHorizontal,
    Edit,
    Trash2,
    UserPlus,
    Mail,
} from 'lucide-react';

export function UsersManagement() {
    const [searchTerm, setSearchTerm] = useState('');

    const users = [
        {
            id: '1',
            name: 'John Doe',
            email: 'john@example.com',
            role: 'user',
            status: 'active',
            joinDate: '2024-01-15',
            bookings: 3,
            avatar: '/placeholder.svg?height=32&width=32',
        },
        {
            id: '2',
            name: 'Jane Smith',
            email: 'jane@example.com',
            role: 'user',
            status: 'active',
            joinDate: '2024-01-10',
            bookings: 1,
            avatar: '/placeholder.svg?height=32&width=32',
        },
        {
            id: '3',
            name: 'Admin User',
            email: 'admin@titans.com',
            role: 'admin',
            status: 'active',
            joinDate: '2023-12-01',
            bookings: 0,
            avatar: '/placeholder.svg?height=32&width=32',
        },
        {
            id: '4',
            name: 'Mike Johnson',
            email: 'mike@example.com',
            role: 'user',
            status: 'inactive',
            joinDate: '2024-01-05',
            bookings: 0,
            avatar: '/placeholder.svg?height=32&width=32',
        },
    ];

    const filteredUsers = users.filter(
        (user) =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='space-y-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='text-3xl font-bold tracking-tight'>
                        Users Management
                    </h2>
                    <p className='text-muted-foreground'>
                        Manage user accounts and permissions
                    </p>
                </div>
                <Button>
                    <UserPlus className='h-4 w-4 mr-2' />
                    Add New User
                </Button>
            </div>

            {/* Search and Filters */}
            <Card>
                <CardHeader>
                    <CardTitle>Search Users</CardTitle>
                    <CardDescription>
                        Find and manage user accounts
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className='flex items-center space-x-2'>
                        <div className='relative flex-1'>
                            <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
                            <Input
                                placeholder='Search users by name or email...'
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className='pl-8'
                            />
                        </div>
                        <Button variant='outline'>Filter</Button>
                    </div>
                </CardContent>
            </Card>

            {/* Users Table */}
            <Card>
                <CardHeader>
                    <CardTitle>All Users ({filteredUsers.length})</CardTitle>
                    <CardDescription>
                        Complete list of registered users
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Join Date</TableHead>
                                <TableHead>Bookings</TableHead>
                                <TableHead className='text-right'>
                                    Actions
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredUsers.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <div className='flex items-center space-x-3'>
                                            <Avatar className='h-8 w-8'>
                                                <AvatarImage
                                                    src={
                                                        user.avatar ||
                                                        '/placeholder.svg'
                                                    }
                                                />
                                                <AvatarFallback>
                                                    {user.name
                                                        .charAt(0)
                                                        .toUpperCase()}
                                                </AvatarFallback>
                                            </Avatar>
                                            <span className='font-medium'>
                                                {user.name}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                user.role === 'admin'
                                                    ? 'default'
                                                    : 'secondary'
                                            }
                                        >
                                            {user.role}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <Badge
                                            variant={
                                                user.status === 'active'
                                                    ? 'default'
                                                    : 'destructive'
                                            }
                                        >
                                            {user.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{user.joinDate}</TableCell>
                                    <TableCell>{user.bookings}</TableCell>
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
                                                    <Mail className='mr-2 h-4 w-4' />
                                                    Send Email
                                                </DropdownMenuItem>
                                                <DropdownMenuItem>
                                                    <Edit className='mr-2 h-4 w-4' />
                                                    Edit User
                                                </DropdownMenuItem>
                                                <DropdownMenuItem className='text-red-600'>
                                                    <Trash2 className='mr-2 h-4 w-4' />
                                                    Delete User
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
