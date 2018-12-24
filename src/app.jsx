import './scss/style.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store-config';
import { stringify } from 'query-string';
import { RouterProvider } from 'react-router5'

import createStoreConfig from './store-config';
import createRouter from './create-router';

import Root from './components/Root';

const router = createRouter();
const store = createStoreConfig(router);

const renderApplication = () => {
  ReactDOM.render(
    <Provider store={store}>
      <RouterProvider router={router}>
        <Root />
      </RouterProvider>
    </Provider>,
    document.querySelector('#root')
  );
}

router.start((err, state) => {
  debugger;
  renderApplication(Root);
})

if (module.hot) {
  module.hot.accept("./components/Root", () => {
    router.start((err, state) => {
      renderApplication();
    })
  });
}