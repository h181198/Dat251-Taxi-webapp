import React from 'react';
import { routes } from '../resources';
import { Header } from '../components/skeleton';
import { NavigationBar } from '../components/NavigationBar';

const navItems = [
    {
        uri: routes.home,
        title: 'Hjem'
    },
    {
        uri: routes.rideOverview,
        title: 'Ta en tur'
    },
]

const ProfilePage = () => (
    <div>
        <Header title="Profil" />
        <NavigationBar navItems={navItems} />
    </div>
);

export default ProfilePage;
