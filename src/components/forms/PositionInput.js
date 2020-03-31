import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setTravelPoint } from '../../redux/dispatchers';

const FormGroup = styled.div`
    margin: 20px 0;
`;

const SelectStyled = styled.select`
    display: block;
    border: 1px solid #aaa;
    padding: 5px;
    margin: 5px 0;
`;

const PositionInput = () => {
    const dispatch = useDispatch();
    const stops = useSelector(state => state.stop.list);
    const pickUpId = useSelector(state => state.stop.selected.pickUp);
    const destinationId = useSelector(state => state.stop.selected.destination);

    const handleFromChange = e => {
        e.preventDefault();
        const stopId = e.target.value;
        setTravelPoint(dispatch, stopId, destinationId);
    }

    const handleDestinationChange = e => {
        e.preventDefault();
        const stopId = e.target.value;
        setTravelPoint(dispatch, pickUpId, stopId);
    }

    return (
        <form>
            <FormGroup>
                <label htmlFor="from">Fra</label>
                <SelectStyled id="from" onChange={handleFromChange} value={pickUpId}>
                    <option value={-1}>Velg stoppeplass</option>
                    {stops.map(stop => (
                        <option value={stop.id} selected={stop.pickUpSelected} key={stop.id}>{stop.name}</option>
                    ))}
                </SelectStyled>
            </FormGroup>
            <FormGroup>
                <label htmlFor="desitination">Til</label>

                <SelectStyled id="desitination" onChange={handleDestinationChange} value={destinationId}>
                    <option value={-1}>Velg stoppeplass</option>
                    {stops.map(stop => (
                        <option value={stop.id} selected={stop.destinationSelected} key={stop.id}>{stop.name}</option>
                    ))}
                </SelectStyled>
            </FormGroup>
        </form>
    );
}

export default PositionInput;
