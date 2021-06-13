//represents overall reducer

import { combineReducers } from "redux";
import storage from 'redux-persist/lib/storage'; //local storage
import { persistReducer } from 'redux-persist';

import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from './shop/shop.reducer';

const persistConfig = {
    key: 'root',
    storage, 
    whitelist: ['cart'] // an array containing string names of reducer we want to store --only cart since user is handled by firebase
}

const rootReducer = combineReducers({
    user: userReducer, //one giant object that can now be used with redux - handled by firebase
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer); //applying persistence to modified version of rootReducer.