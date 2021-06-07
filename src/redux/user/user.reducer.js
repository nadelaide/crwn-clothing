import { UserActionTypes } from "./user.types";

//like instantiating state in our class component 
const INITIAL_STATE = {
    currentUser: null
}


const userReducer = (state = INITIAL_STATE, action) => { //state = sets a default parameter if ever state is not found
    switch (action.type) { //depending on the type action, switch will check what happens next
        case UserActionTypes.SET_CURRENT_USER:
            return { //what userReducer is transformed into
                ...state,
                currentUser: action.payload
            }

        default:
            return state; 
    }
}

export default userReducer;

