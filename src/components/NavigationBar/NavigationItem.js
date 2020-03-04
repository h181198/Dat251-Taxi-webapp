import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledAnchor = styled.a`
    text-decoration: none;
    color: #333;
    padding: 20px;
`; 

const NavigationItem = ({ title, uri }) => (
    <div>
        <StyledAnchor href={uri}>{title}</StyledAnchor>
    </div>
);

NavigationItem.propTypes = {
    title: propTypes.string.isRequired,
    uri: propTypes.string.isRequired
};

export default NavigationItem;
