import React from 'react';
import { routes } from '../resources';

const RideOverviewPage = () => (
    <div>
        <h1>Rides Page</h1>

        <ul>
            <li>
                <a href={routes.home}>Home</a>
            </li>
            <li>
                <a href={routes.profile}>Profile</a>
            </li>
        </ul>
    </div>);

export default RideOverviewPage;