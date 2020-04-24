import React from 'react';
import { routes } from '../resources';
import { Header } from '../components/skeleton';
import { Input } from '../components/Input';
import { NavigationBar } from '../components/NavigationBar';
import { SubmitButton } from '../components/Buttons';

const navItems = [
    {
        uri: routes.profile,
        title: 'Profil'
    },
    {
        uri: routes.rideOverview,
        title: 'Ta en tur'
    },
]

const dropdownItems = [
    {
        value: 'Bergen Busstasjon',
    },
    {
        value: 'Oasen Terminal',
    },
    {
        value: 'Åsane Terminal',
    },
    {
        value: 'Loddefjord Terminal',
    },
    {
        value: 'Lagunen Terminal',
    },
]

const HomePage = () => (
    <main>
        <Header title="Taxideling" />
        <form name="travelForm" method="post" href="#">
            <Input label="Til:" name="To" placeholder="Velg startholdeplass" dropdownItems={dropdownItems}></Input>
            <Input label="Fra:" name="From" placeholder="Velg stoppholdeplass" dropdownItems={dropdownItems}></Input>
            <SubmitButton text="Søk" />
        </form>
        <NavigationBar navItems={navItems} />
    </main>
);

export default HomePage;