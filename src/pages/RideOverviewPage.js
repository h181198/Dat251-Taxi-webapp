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
        uri: routes.profile,
        title: 'Profil'
    },
]

const RideOverviewPage = () => (
    <div>
        <Header title="Ta en tur" />
        <NavigationBar navItems={navItems} />
    </div>);

export default RideOverviewPage;