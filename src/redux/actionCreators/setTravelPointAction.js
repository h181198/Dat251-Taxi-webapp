import * as actions from "../actionTypes";

const setTravelPointAction = (pickUpId, destinationId, departureTime) => ({
  type: actions.SET_TRAVEL_POINTS,
  pickUpId,
  destinationId,
  departureTime,
});

export default setTravelPointAction;
