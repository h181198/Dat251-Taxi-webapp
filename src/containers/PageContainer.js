import { createBrowserHistory } from 'history';
import React from 'react';
import { Redirect, Route, Router, Switch } from 'react-router';
import { HomePage } from '../pages';

const StoreContext = React.createContext({});

const PageContainer = () => (
    <Router history={createBrowserHistory()}>
        <StoreContext.Provider>
            <Switch>
                <Route exact path="/home" component={HomePage} />
                <Redirect to="/home" />
            </Switch>
        </StoreContext.Provider>
    </Router>
);

export default PageContainer;
