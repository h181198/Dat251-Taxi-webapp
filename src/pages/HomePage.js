import React from 'react';
import { routes } from '../resources';
import { Header } from '../components/skeleton';
import { NavigationBar } from '../components/NavigationBar';
import { PositionInput, RideSelection } from '../components/forms';
import styled from 'styled-components';

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

const MainStyled = styled.main`
    padding: 0 10px;
`;

const HomePage = () => (
    <MainStyled>
        <Header title="Taxideling" />
        <PositionInput />
        <RideSelection />
        <NavigationBar navItems={navItems} />
    </MainStyled>
);

export default HomePage;