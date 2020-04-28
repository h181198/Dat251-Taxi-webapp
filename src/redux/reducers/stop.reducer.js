import initialState from "../initialState";
import * as actions from "../actionTypes";

const stop = (state = initialState.stop, action) => {
  switch (action.type) {
    case actions.GET_STOPS:
      const { list } = action;

      const stops = list.map((stop, index) => ({
        ...stop,
        key: index,
      }));

      return {
        ...state,
        list: stops,
      };

    case actions.SET_TRAVEL_POINTS:
      return {
        ...state,
        selected: {
          pickUp: action.pickUpId,
          destination: action.destinationId,
          departureTime: action.departureTime,
        },
        list: state.list.map((stop, index) => ({
          ...stop,
          pickUpSelected: action.pickUpId === index,
          destinationSelected: action.destinationId === index,
        })),
      };
    default:
      return state;
  }
};

export default stop;
