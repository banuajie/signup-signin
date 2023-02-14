import { combineReducers } from "redux";
import SignUpReducer from "./signup";
import SignInReducer from "./signin";

export default combineReducers({
    SignUpReducer,
    SignInReducer,
});
