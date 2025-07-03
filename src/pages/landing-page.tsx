'use client';

import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/theme-toggle';
import { useAuth } from '@/contexts/auth-context';
import { Link } from 'react-router-dom';
import {
    MapPin,
    Star,
    Users,
    Calendar,
    Shield,
    Award,
    Plane,
} from 'lucide-react';

const LandingPage = () => {
    const { isAuthenticated, user } = useAuth();

    const features = [
        {
            icon: MapPin,
            title: 'Global Destinations',
            description:
                'Explore 500+ destinations across 50+ countries with our expert guides.',
        },
        {
            icon: Shield,
            title: 'Safe & Secure',
            description:
                'Your safety is our priority with 24/7 support and insurance coverage.',
        },
        {
            icon: Award,
            title: 'Award Winning',
            description:
                'Recognized as the best travel agency for 3 consecutive years.',
        },
        {
            icon: Users,
            title: 'Expert Guides',
            description:
                'Professional local guides with deep knowledge of destinations.',
        },
    ];

    const popularTours = [
        {
            id: 1,
            title: 'Himalayan Adventure',
            location: 'Nepal',
            duration: '14 days',
            price: '$2,499',
            rating: 4.9,
            image: '/placeholder.svg?height=200&width=300',
            category: 'Adventure',
        },
        {
            id: 2,
            title: 'Tropical Paradise',
            location: 'Maldives',
            duration: '7 days',
            price: '$3,299',
            rating: 4.8,
            image: '/placeholder.svg?height=200&width=300',
            category: 'Beach',
        },
        {
            id: 3,
            title: 'Cultural Heritage',
            location: 'India',
            duration: '10 days',
            price: '$1,899',
            rating: 4.7,
            image: '/placeholder.svg?height=200&width=300',
            category: 'Culture',
        },
    ];

    return (
        <div className='min-h-screen'>
            {/* Header */}
            <header className='border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex h-16 items-center justify-between'>
                        <div className='flex items-center space-x-2'>
                            <Plane className='h-8 w-8 text-primary' />
                            <span className='text-2xl font-bold text-primary'>
                                Titans Tours
                            </span>
                        </div>

                        <nav className='hidden md:flex items-center space-x-8'>
                            <Link
                                to='#tours'
                                className='text-sm font-medium hover:text-primary transition-colors'
                            >
                                Tours
                            </Link>
                            <Link
                                to='#about'
                                className='text-sm font-medium hover:text-primary transition-colors'
                            >
                                About
                            </Link>
                            <Link
                                to='#contact'
                                className='text-sm font-medium hover:text-primary transition-colors'
                            >
                                Contact
                            </Link>
                        </nav>

                        <div className='flex items-center space-x-4'>
                            <ThemeToggle />
                            {isAuthenticated ? (
                                <div className='flex items-center space-x-2'>
                                    <span className='text-sm'>
                                        Welcome, {user?.name}
                                    </span>
                                    {user?.role === 'admin' && (
                                        <Button asChild size='sm'>
                                            <Link to='/admin'>Dashboard</Link>
                                        </Button>
                                    )}
                                </div>
                            ) : (
                                <div className='flex items-center space-x-2'>
                                    <Button variant='ghost' size='sm' asChild>
                                        <Link to='/login'>Login</Link>
                                    </Button>
                                    <Button size='sm' asChild>
                                        <Link to='/register'>Sign Up</Link>
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className='relative py-20 lg:py-32 overflow-hidden'>
                <div className='absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10' />
                <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative'>
                    <div className='text-center max-w-4xl mx-auto'>
                        <Badge variant='secondary' className='mb-4'>
                            🌟 Trusted by 50,000+ Travelers
                        </Badge>
                        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6'>
                            Discover the World with{' '}
                            <span className='text-primary'>Titans Tours</span>
                        </h1>
                        <p className='text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
                            Embark on extraordinary journeys to breathtaking
                            destinations. Create memories that last a lifetime
                            with our expertly crafted tours.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                            <Button size='lg' className='text-lg px-8 py-6'>
                                Explore Tours
                            </Button>
                            <Button
                                size='lg'
                                variant='outline'
                                className='text-lg px-8 py-6 bg-transparent'
                            >
                                Plan Custom Trip
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className='py-20 bg-muted/50'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                            Why Choose Titans Tours?
                        </h2>
                        <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                            We're committed to providing exceptional travel
                            experiences with unmatched service quality.
                        </p>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className='text-center border-0 shadow-lg hover:shadow-xl transition-shadow'
                            >
                                <CardHeader>
                                    <div className='mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4'>
                                        <feature.icon className='h-8 w-8 text-primary' />
                                    </div>
                                    <CardTitle className='text-xl'>
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className='text-base'>
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Popular Tours Section */}
            <section id='tours' className='py-20'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='text-center mb-16'>
                        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                            Popular Tours
                        </h2>
                        <p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
                            Discover our most loved destinations and
                            experiences.
                        </p>
                    </div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {popularTours.map((tour) => (
                            <Card
                                key={tour.id}
                                className='overflow-hidden hover:shadow-xl transition-shadow'
                            >
                                <div className='relative'>
                                    <img
                                        src={tour.image || '/placeholder.svg'}
                                        alt={tour.title}
                                        className='w-full h-48 object-cover'
                                    />
                                    <Badge className='absolute top-4 left-4'>
                                        {tour.category}
                                    </Badge>
                                </div>
                                <CardHeader>
                                    <div className='flex justify-between items-start'>
                                        <div>
                                            <CardTitle className='text-xl mb-2'>
                                                {tour.title}
                                            </CardTitle>
                                            <div className='flex items-center text-muted-foreground mb-2'>
                                                <MapPin className='h-4 w-4 mr-1' />
                                                <span className='text-sm'>
                                                    {tour.location}
                                                </span>
                                            </div>
                                        </div>
                                        <div className='text-right'>
                                            <div className='flex items-center mb-1'>
                                                <Star className='h-4 w-4 text-yellow-400 mr-1' />
                                                <span className='text-sm font-medium'>
                                                    {tour.rating}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center text-muted-foreground'>
                                            <Calendar className='h-4 w-4 mr-1' />
                                            <span className='text-sm'>
                                                {tour.duration}
                                            </span>
                                        </div>
                                        <div className='text-right'>
                                            <span className='text-2xl font-bold text-primary'>
                                                {tour.price}
                                            </span>
                                            <span className='text-sm text-muted-foreground'>
                                                /person
                                            </span>
                                        </div>
                                    </div>
                                    <Button className='w-full mt-4'>
                                        Book Now
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-20 bg-primary text-primary-foreground'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8 text-center'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>
                        Ready for Your Next Adventure?
                    </h2>
                    <p className='text-xl mb-8 max-w-2xl mx-auto opacity-90'>
                        Join thousands of satisfied travelers who have
                        discovered the world with Titans Tours.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                        <Button
                            size='lg'
                            variant='secondary'
                            className='text-lg px-8 py-6'
                        >
                            Browse All Tours
                        </Button>
                        <Button
                            size='lg'
                            variant='outline'
                            className='text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent'
                        >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className='bg-background border-t py-12'>
                <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='grid md:grid-cols-4 gap-8'>
                        <div>
                            <div className='flex items-center space-x-2 mb-4'>
                                <Plane className='h-6 w-6 text-primary' />
                                <span className='text-xl font-bold'>
                                    Titans Tours
                                </span>
                            </div>
                            <p className='text-muted-foreground'>
                                Creating unforgettable travel experiences since
                                2010.
                            </p>
                        </div>
                        <div>
                            <h3 className='font-semibold mb-4'>Quick Links</h3>
                            <ul className='space-y-2 text-muted-foreground'>
                                <li>
                                    <Link
                                        to='#'
                                        className='hover:text-primary transition-colors'
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='#'
                                        className='hover:text-primary transition-colors'
                                    >
                                        Tours
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='#'
                                        className='hover:text-primary transition-colors'
                                    >
                                        Destinations
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='#'
                                        className='hover:text-primary transition-colors'
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-semibold mb-4'>Support</h3>
                            <ul className='space-y-2 text-muted-foreground'>
                                <li>
                                    <Link
                                        to='#'
                                        className='hover:text-primary transition-colors'
                                    >
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='#'
                                        className='hover:text-primary transition-colors'
                                    >
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='#'
                                        className='hover:text-primary transition-colors'
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to='#'
                                        className='hover:text-primary transition-colors'
                                    >
                                        Cancellation
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-semibold mb-4'>Contact Info</h3>
                            <ul className='space-y-2 text-muted-foreground'>
                                <li>📧 info@titanstours.com</li>
                                <li>📞 +1 (555) 123-4567</li>
                                <li>📍 123 Travel Street, NY 10001</li>
                            </ul>
                        </div>
                    </div>
                    <div className='border-t mt-8 pt-8 text-center text-muted-foreground'>
                        <p>
                            &copy; 2024 Titans Tours & Travels. All rights
                            reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
