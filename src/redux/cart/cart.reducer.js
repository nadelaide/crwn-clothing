import CartActionTypes from './cart.types'

const INITIAL_STATE = {
    hidden: true //want to hide dropdown when customer first comes to website
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        //selectively render. use a toggle vs a set, bc true or false.
        case CartActionTypes.TOGGLE_CART_HIDDEN:
        return {
            ...state,
            hidden: !state.hidden 
        };
        default:
            return state;
    }
};

export default cartReducer;