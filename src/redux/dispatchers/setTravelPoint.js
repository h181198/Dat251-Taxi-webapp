import { setTravelPointAction } from '../actionCreators';

const setTravelPoint = (dispatch, pickUpId, destinationId) =>
    dispatch(setTravelPointAction(parseInt(pickUpId || -1, 10), parseInt(destinationId || -1, 10)));

export default setTravelPoint;