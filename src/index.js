import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import {store, persistor} from './redux/store';


//provider - component class from redux that, once passed the stored object, gives redux store context to the rest of the application - dispatch actions, pull values
ReactDOM.render(
  <Provider store={store}> 
 <BrowserRouter>
 <PersistGate persistor={persistor}>
 <App />
 </PersistGate>
 </BrowserRouter>
 </Provider>,
  document.getElementById('root')
);

