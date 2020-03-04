import React from 'react';
import propTypes from 'prop-types';
import NavigationItem from './NavigationItem';
import styled from 'styled-components';

const StyledNav = styled.nav`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
`;

const NavigationBar = ({ navItems }) => (
    <StyledNav>
        {navItems.map(item => <NavigationItem key={item.uri} {...item} />)}
    </StyledNav>
);

NavigationBar.propTypes = {
    navItems: propTypes.arrayOf(propTypes.shape({
        title: propTypes.string.isRequired,
        uri: propTypes.string.isRequired
    })).isRequired
};

export default NavigationBar;