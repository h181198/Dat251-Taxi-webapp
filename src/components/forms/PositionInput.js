import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setTravelPoint, setDepartureTime } from "../../redux/dispatchers";

const FormGroup = styled.div`
  margin: 20px 0;
`;

const SelectStyled = styled.select`
  display: block;
  border: 1px solid #aaa;
  padding: 5px;
  margin: 5px 0;
`;

const TextInputStyled = styled.input`
  display: block;
  border: 1px solid #aaa;
  padding: 5px;
  margin: 5px 0;
`;

const PositionInput = () => {
  const dispatch = useDispatch();
  const stops = useSelector((state) => state.stop.list);
  const pickUpId = useSelector((state) => state.stop.selected.pickUp);
  const destinationId = useSelector((state) => state.stop.selected.destination);
  const departureTime = useSelector(
    (state) => state.stop.selected.departureTime
  );

  const handleFromChange = (e) => {
    e.preventDefault();
    const stopId = e.target.value;
    setTravelPoint(dispatch, stopId, destinationId, departureTime);
  };

  const handleDestinationChange = (e) => {
    e.preventDefault();
    const stopId = e.target.value;
    setTravelPoint(dispatch, pickUpId, stopId, departureTime);
  };

  const handleDepartueChange = (e) => {
    e.preventDefault();
    const dt = e.target.value;
    setTravelPoint(dispatch, pickUpId, destinationId, dt);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    //TODO: Do not use console log as debug statements :)
    console.log(pickUpId);
    console.log(destinationId);
    console.log(departureTime);

    //TODO: Post to https://dat250-taxi-sharing.herokuapp.com/api/ride
    // Simple POST request with a JSON body using fetch
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        startId: pickUpId,
        stopId: destinationId,
        timeOfDeparture: departureTime,
      }),
    };
    fetch("http://localhost:45087/api/ride", requestOptions)
      .then((response) => {
        console.log(response);
        response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <FormGroup>
        <label htmlFor="from">Fra</label>
        <SelectStyled id="from" onChange={handleFromChange} value={pickUpId}>
          <option value={-1}>Velg stoppeplass</option>
          {stops.map((stop) => (
            <option
              value={stop.id}
              selected={stop.pickUpSelected}
              key={stop.id}
            >
              {stop.name}
            </option>
          ))}
        </SelectStyled>
      </FormGroup>
      <FormGroup>
        <label htmlFor="desitination">Til</label>

        <SelectStyled
          id="desitination"
          onChange={handleDestinationChange}
          value={destinationId}
        >
          <option value={-1}>Velg stoppeplass</option>
          {stops.map((stop) => (
            <option
              value={stop.id}
              selected={stop.destinationSelected}
              key={stop.id}
            >
              {stop.name}
            </option>
          ))}
        </SelectStyled>
      </FormGroup>
      <FormGroup>
        <label htmlFor="timeOfDeparture">Avgang (YYYY-MM-DD'T'HH:mm)</label>
        <TextInputStyled
          id="timeOfDeparture"
          onChange={handleDepartueChange}
        ></TextInputStyled>
      </FormGroup>
      <FormGroup>
        <label htmlFor="submitButton">Lag tur</label>
        <button type="submit" id="submitButton">
          SEND
        </button>
      </FormGroup>
    </form>
  );
};

export default PositionInput;
