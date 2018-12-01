import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store-config';
import createRouter from 'router5';
//import { reduxPlugin } from 'redux-router5';


import Home from './components/Home';

//router.usePlugin(reduxPlugin(store.dispatch));

const renderApplication = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Home />
    </Provider>,
    document.querySelector('#root')
  );
}

renderApplication(Home);

if (module.hot) {
  module.hot.accept("./components/Home", () => {
    renderApplication();
  });
}