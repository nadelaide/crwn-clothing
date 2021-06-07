//represents overall reducer

import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

export default combineReducers({
    user: userReducer //one giant object that can now be used with redux
});