import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router';
import { HomePage, ProfilePage, RideOverviewPage } from '../pages';
import { createBrowserHistory } from 'history';

const PageContainer = () => (
    <main>
        <Router history={createBrowserHistory()}>
            <Switch>
                <Route exact path="/home" component={HomePage} />
                <Route path="/profile/" component={ProfilePage} />
                <Route exact path="/rides" component={RideOverviewPage} />
                <Redirect to="/home" />
            </Switch>
        </Router>
    </main>
);

export default PageContainer;
