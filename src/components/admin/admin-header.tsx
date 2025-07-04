import { SidebarTrigger } from '@/components/ui/sidebar';
import { ThemeToggle } from '@/components/theme-toggle';
import { Separator } from '@/components/ui/separator';

export function AdminHeader() {
    return (
        <header className='flex h-16 shrink-0 items-center gap-2 border-b px-4'>
            <SidebarTrigger className='-ml-1' />
            <Separator orientation='vertical' className='mr-2 h-4' />
            <div className='flex-1'>
                <h1 className='text-lg font-semibold'>Admin Dashboard</h1>
            </div>
            <ThemeToggle />
        </header>
    );
}
