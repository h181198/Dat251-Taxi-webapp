import { combineReducers } from 'redux';
import stop from './stop.reducer';
import ride from './ride.reducer';

const reducer = combineReducers({
    stop,
    ride
});

export default reducer;