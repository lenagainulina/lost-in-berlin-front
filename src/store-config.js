import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import businessReducers from './reducers/business-reducers';

export default createStore(businessReducers, applyMiddleware(thunk));
/*
const store = createStore(businessReducers, applyMiddleware(thunk));

export default store;
*/