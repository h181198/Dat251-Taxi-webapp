import { getStopsUrl } from '../api/routes';

const parse = array => array.map(JSON.parse);

const getParsedStops = callback =>
    fetch(getStopsUrl())
    .then(res => res.json())
    .then(parse)
    .then(callback);

export default getParsedStops;