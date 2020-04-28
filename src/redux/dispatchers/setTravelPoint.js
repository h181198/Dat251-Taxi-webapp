import { setTravelPointAction } from "../actionCreators";

const setTravelPoint = (dispatch, pickUpId, destinationId, departureTime) =>
  dispatch(
    setTravelPointAction(
      parseInt(pickUpId || -1, 10),
      parseInt(destinationId || -1, 10),
      departureTime
    )
  );

export default setTravelPoint;
