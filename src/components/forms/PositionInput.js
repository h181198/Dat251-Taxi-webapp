import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setTravelPoint } from "../../redux/dispatchers";
import { SubmitButton } from "./SubmitButton";

const FormGroup = styled.div`
  margin: 20px 0;
`;

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
    var baseUrl;
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      baseUrl = "http://localhost:45087";
    } else {
      baseUrl = "https://dat250-taxi-sharing.herokuapp.com";
    }
    fetch(baseUrl + "/api/ride", requestOptions)
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
        <StyledLabel htmlFor="from">Fra</StyledLabel>
        <StyledInput
          placeholder="Velg startholdeplass"
          list="fromList"
          onChange={handleFromChange}
        />
        <datalist id="fromList">
          {stops.map((stop, index) => (
            <option
              value={stop.name}
              selected={stop.pickUpSelected}
              key={index}
            />
          ))}
        </datalist>
      </FormGroup>
      <FormGroup>
        <StyledLabel htmlFor="destination">Til</StyledLabel>
        <StyledInput
          placeholder="Velg stoppholdeplass"
          list="destinationList"
          onChange={handleDestinationChange}
        />
        <datalist id="destinationList">
          {stops.map((stop, index) => (
            <option
              value={stop.name}
              selected={stop.pickUpSelected}
              key={index}
            />
          ))}
        </datalist>
      </FormGroup>
      <FormGroup>
        <StyledLabel htmlFor="timeOfDeparture">
          Avgang (YYYY-MM-DD'T'HH:mm)
        </StyledLabel>
        <StyledInput
          id="timeOfDeparture"
          onChange={handleDepartueChange}
        ></StyledInput>
      </FormGroup>
      <FormGroup>
        <SubmitButton text="Lag tur" id="submitButton" />
      </FormGroup>
    </form>
  );
};

export default PositionInput;
