import React from 'react';
import { routes } from '../resources';

const HomePage = () => (
    <div>
        <h1>Home Page</h1>

        <ul>
            <li>
                <a href={routes.rideOverview}>Rides</a>
            </li>
            <li>
                <a href={routes.profile}>Profile</a>
            </li>
        </ul>
    </div>
);

export default HomePage;