//functions that return an object
export const setCurrentUser = user => ({     //an action that holds this value
    type: 'SET_CURRENT_USER', //should never change
    payload: user
});
//always align action's type with reducer's type expectation