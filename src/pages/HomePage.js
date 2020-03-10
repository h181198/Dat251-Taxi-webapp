import React from 'react';
import { routes } from '../resources';
import { NavigationBar } from '../components/NavigationBar';
import { Header } from '../components/skeleton';

const navItems = [
    {
        uri: routes.profile,
        title: 'Profile'
    },
    {
        uri: routes.rideOverview,
        title: 'Take a Ride'
    },
]

const HomePage = () => (
    <main>
        <Header title="Home" />
        <NavigationBar navItems={navItems} />
    </main>
);

export default HomePage;