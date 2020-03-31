import initialState from "../initialState";
import * as actions from '../actionTypes';

const stop = (state = initialState.stop, action) => {
    switch (action.type) {
        case actions.SET_TRAVEL_POINTS:
            return {
                ...state,
                selected: {
                    pickUp: action.pickUpId,
                    destination: action.destinationId
                },
                list: state.list.map(stop => ({
                    ...stop,
                    pickUpSelected: action.pickUpId === stop.id,
                    destinationSelected: action.destinationId === stop.id
                }))
            };
        default:
            return state;
    }
}

export default stop;