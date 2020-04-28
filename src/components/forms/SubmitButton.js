import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100px;
    padding: 12px;
    color: #000000;
    margin: 12px;

    border-radius: 8px;
    border-color: #3b63b3;

    :hover {
        background-color: #3b63b3;
    }
`;

export const SubmitButton = ({ id, text }) => (
    <StyledButton type="submit" id={id}>{ text }</StyledButton>
);

SubmitButton.propTypes = {
    text: propTypes.string.isRequired,
    id: propTypes.string.isRequired,
};