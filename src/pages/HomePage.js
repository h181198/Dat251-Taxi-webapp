import React from 'react';
import { routes } from '../resources';
import { Header } from '../components/skeleton';
import { NavigationBar } from '../components/NavigationBar';
import { PositionInput, RideSelection } from '../components/forms';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useEffect, useCallback } from 'react';
import getStops from '../api/getStops';
import { getStops as getStopsAction } from '../redux/actionCreators';

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

const HomePage = () => {
    const dispatch = useDispatch();

    const storeStops = useCallback(list => dispatch(getStopsAction(list)), [dispatch]);

    useEffect(() => {
        getStops(storeStops);
    }, [dispatch, storeStops]);

    return (
        <MainStyled>
            <Header title="Taxideling" />
            <PositionInput />
            <RideSelection />
            <NavigationBar navItems={navItems} />
        </MainStyled>
    );
};

export default HomePage;