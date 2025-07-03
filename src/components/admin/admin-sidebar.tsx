'use client';

import { Link, useLocation } from 'react-router-dom';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { useAuth } from '@/contexts/auth-context';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    BarChart3,
    Calendar,
    Home,
    LogOut,
    MapPin,
    Plane,
    Settings,
    Users,
    ChevronUp,
} from 'lucide-react';

const menuItems = [
    {
        title: 'Dashboard',
        url: '/admin',
        icon: BarChart3,
    },
    {
        title: 'Tours',
        url: '/admin/tours',
        icon: MapPin,
    },
    {
        title: 'Bookings',
        url: '/admin/bookings',
        icon: Calendar,
    },
    {
        title: 'Users',
        url: '/admin/users',
        icon: Users,
    },
];

export function AdminSidebar() {
    const { user, logout } = useAuth();
    const location = useLocation();

    return (
        <Sidebar>
            <SidebarHeader>
                <div className='flex items-center space-x-2 px-2 py-4'>
                    <Plane className='h-8 w-8 text-primary' />
                    <div>
                        <h2 className='text-lg font-semibold'>Titans Tours</h2>
                        <p className='text-sm text-muted-foreground'>
                            Admin Panel
                        </p>
                    </div>
                </div>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigation</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {menuItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={
                                            location.pathname === item.url
                                        }
                                    >
                                        <Link to={item.url}>
                                            <item.icon className='h-4 w-4' />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Quick Actions</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link to='/'>
                                        <Home className='h-4 w-4' />
                                        <span>View Website</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton>
                                    <Settings className='h-4 w-4' />
                                    <span>Settings</span>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton className='w-full'>
                                    <Avatar className='h-6 w-6'>
                                        <AvatarImage
                                            src={
                                                user?.avatar ||
                                                '/placeholder.svg'
                                            }
                                        />
                                        <AvatarFallback>
                                            {user?.name
                                                ?.charAt(0)
                                                .toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className='flex-1 text-left'>
                                        <p className='text-sm font-medium'>
                                            {user?.name}
                                        </p>
                                        <p className='text-xs text-muted-foreground'>
                                            {user?.email}
                                        </p>
                                    </div>
                                    <ChevronUp className='h-4 w-4' />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                side='top'
                                className='w-[--radix-popper-anchor-width]'
                            >
                                <DropdownMenuItem>
                                    <Settings className='h-4 w-4 mr-2' />
                                    Account Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={logout}>
                                    <LogOut className='h-4 w-4 mr-2' />
                                    Sign Out
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    );
}
