import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../scss/style.scss';
import store from '../store-config';

import Home from './Home';
import {BrowserRouter as Router} from "react-router-dom";


const renderApplication = () => {
  ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Home/>
        </Router>
    </Provider>,
    document.getElementById('root')
  );
};

renderApplication();

if (module.hot) module.hot.accept("./Home", () => renderApplication());
