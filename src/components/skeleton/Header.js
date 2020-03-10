import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.header`
    padding: 10px 20px;
`;

const StyledHeading = styled.h1`
    margin: 5px;
`;

const Header = ({ title }) => (
    <StyledHeader>
        <StyledHeading>{ title }</StyledHeading>
    </StyledHeader>
);

Header.propTypes = {
    title: propTypes.string.isRequired
};

export default Header;
