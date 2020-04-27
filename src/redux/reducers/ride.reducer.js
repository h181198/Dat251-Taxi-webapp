import initialState from "../initialState";
import * as actions from "../actionTypes";

const ride = (state = initialState.ride, action) => {
  switch (action.type) {
    case actions.SET_TRAVEL_POINTS:
      const { pickUpId, destinationId } = action;

      const available = state.list.filter(
        ({ startId, stopId }) =>
          (pickUpId === -1 || pickUpId === startId) &&
          (destinationId === -1 || destinationId === stopId)
      );

      return {
        ...state,
        available,
      };
    default:
      return state;
  }
};

export default ride;
