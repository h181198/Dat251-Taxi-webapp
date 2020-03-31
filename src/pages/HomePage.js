import React from 'react';
import { Header } from '../components/skeleton';
import { PositionInput, RideSelection } from '../components/forms';
import styled from 'styled-components';

const MainStyled = styled.main`
    padding: 0 10px;
`;

const HomePage = () => (
    <MainStyled>
        <Header title="Home" />

        <PositionInput />
        <RideSelection />
    </MainStyled>
);

export default HomePage;