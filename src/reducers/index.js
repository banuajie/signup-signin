import { combineReducers } from "redux";
import SignUpReducer from "./signup";
import SignInReducer from "./signin";
import AccountReducer from "./account";

export default combineReducers({
    SignUpReducer,
    SignInReducer,
    AccountReducer,
});
