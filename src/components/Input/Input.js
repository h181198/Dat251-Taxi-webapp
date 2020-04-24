import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledLabel = styled.label`
    display: block;
    margin: 12px;
`;

const StyledInput = styled.input`
    display: block;
    width: 200px;
    height: 24px;
    margin: 12px;
    padding: 8px;
    text-size: 1em;

    border-radius: 8px;
    border: 1px solid #aeb3bd;
`;

const Input = ({ dropdownItems, label, name, placeholder }) => (
    <div>
        <StyledLabel htmlFor={name}>{label}</StyledLabel>
        <StyledInput placeholder={placeholder} list={name}/>
        <datalist id={name}>
            {dropdownItems.map(item => <option key={item.value} {...item} />)}
        </datalist>
    </div>
);

Input.propTypes = {
    label: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    placeholder: propTypes.string.isRequired,
    dropdownItems: propTypes.arrayOf(propTypes.shape({
        value: propTypes.string.isRequired,
    })).isRequired
};

export default Input;