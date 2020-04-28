import { GET_STOPS } from '../actionTypes';

const getStops = stops => ({
    type: GET_STOPS,
    list: stops
});

export { getStops };