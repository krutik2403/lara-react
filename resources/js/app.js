/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import App from './components/App';
import Home from './components/Home';

render((
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" component={App} />            
        </BrowserRouter>
    </Provider>    
), document.getElementById('app'));