import React from 'react';
import ReactDom from 'react-dom';
import { PageContainer } from './containers';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = document.getElementById('root');
ReactDom.render(
    <Provider store={store} >
        <PageContainer />
    </Provider>,
    root
);
