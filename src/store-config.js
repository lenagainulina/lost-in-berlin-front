import { createStore, applyMiddleware } from 'redux'
import businessReducers from './reducers/business-reducers'
import thunk from 'redux-thunk';

const store = createStore(businessReducers, applyMiddleware(thunk));

export default store;