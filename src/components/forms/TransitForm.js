import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const FormGroup = styled.div`
    margin: 20px 0;
`;

const SelectStyled = styled.select`
    display: block;
    border: 1px solid #aaa;
    padding: 5px;
    margin: 5px 0;
`;

const TransitForm = () => {
    const stops = useSelector(state => state.stop.list);

    return (
        <form>
            <FormGroup>
                <label htmlFor="start">Start</label>
                <SelectStyled id="start">
                    {stops.map(({id, name}) => (
                        <option key={id}>{name}</option>
                    ))}
                </SelectStyled>
            </FormGroup>
            <FormGroup>
                <label htmlFor="stop">Stopp</label>
                <SelectStyled id="stop">
                    {stops.map(({id, name}) => (
                        <option key={id}>{name}</option>
                    ))}
                </SelectStyled>
            </FormGroup>
        </form>
    );
}

export default TransitForm;
