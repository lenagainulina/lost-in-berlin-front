import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk';
import { router5Middleware } from 'redux-router5';

function createStoreConfig(router) {
    return createStore(reducers, applyMiddleware(thunk, router5Middleware(router)))
    debugger;
};

export default createStoreConfig;