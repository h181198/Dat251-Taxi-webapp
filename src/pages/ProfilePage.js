import React from 'react';
import { routes } from '../resources';

const ProfilePage = () => (
    <div>
        <h1>Profile Page</h1>

        <ul>
            <li>
                <a href={routes.home}>Home</a>
            </li>
            <li>
                <a href={routes.rideOverview}>Rides</a>
            </li>
        </ul>
    </div>
);

export default ProfilePage;
