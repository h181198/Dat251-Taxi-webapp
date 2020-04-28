import { createBrowserHistory } from 'history';
import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router';
import { HomePage } from '../pages';

const PageContainer = () => (
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path="/home" component={HomePage} />
            <Redirect to="/home" />
        </Switch>
    </Router>
);

export default PageContainer;
