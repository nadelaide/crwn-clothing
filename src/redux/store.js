import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'; //console logs from redux

import rootReducer from './root-reducer';

const middlewares = [logger]; 

const store = createStore(rootReducer, applyMiddleware(...middlewares))//this will spread in all methods/values in this array into this function call as individual arguments


export default store;