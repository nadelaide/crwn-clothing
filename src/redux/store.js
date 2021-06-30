import { createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger'; //console logs from redux
import persistStore from 'redux-persist/es/persistStore';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

import createSagaMiddleware from '@redux-saga/core';




const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]; 

//environment variable only accessed by _env - chooses  development, production or test
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger); // pushes logger 
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));//this will spread in all methods/values in this array into this function call as individual arguments

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store); //persistent storage 

export default { store, persistStore };