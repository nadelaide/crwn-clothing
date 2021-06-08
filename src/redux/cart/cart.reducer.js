import CartActionTypes from './cart.types';
import {addItemToCart} from './cart.utils';

const INITIAL_STATE = {
    hidden: true, //want to hide dropdown when customer first comes to website
    cartItems: [] // adding items into array, depending on feature
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //selectively render. use a toggle vs a set, bc true or false.
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden 
            };

        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload) 
            };
        default:
            return state;
    }
};

export default cartReducer;