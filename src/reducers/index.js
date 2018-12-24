import BusinessReducer from './business-reducer';
import OrdersReducer from './order-reducer';
import { router5Reducer } from 'redux-router5'

import { combineReducers } from 'redux'

console.log('BusinessReducer', BusinessReducer)
console.log('OrdersReducer', OrdersReducer)

const reducers = combineReducers({
    business: BusinessReducer,
    orders: OrdersReducer,
    router: router5Reducer
});

export default reducers;

