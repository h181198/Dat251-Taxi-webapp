import * as actions from '../actionTypes';

const setTravelPointAction = (pickUpId, destinationId) => ({
    type: actions.SET_TRAVEL_POINTS,
    pickUpId,
    destinationId
});

export default setTravelPointAction;