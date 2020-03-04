import React from 'react';
import propTypes from 'prop-types';

const Header = ({}) => (
    <header>
        <h1>Taxideling</h1>
    </header>
);

Header.propTypes = {
    title: propTypes.string.isRequired
};

export default Header;
