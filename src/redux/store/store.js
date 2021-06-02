import rootReducers from '../reducers';
import {createStore, applyMiddleware, compose, } from "redux";
import thunk from "redux-thunk";
import promise from 'redux-promise-middleware';

const middleware = [ promise, thunk];

let composeEnhancers = null;
if (process.env.NODE_ENV === 'development') {
    composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
} else {
    composeEnhancers = compose;
}
const enhancer = composeEnhancers(applyMiddleware(...middleware),);

const store = createStore(rootReducers, enhancer);

export default store;
