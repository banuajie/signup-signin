import { SIGN_IN } from "../../actions/actionsSignIn";

const initialState = {
    signInLoading: false,
    signInResult: false,
    signInError: false,
};

const SignInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                signInLoading: action.payload.loading,
                signInResult: action.payload.data,
                signInError: action.payload.errorMessage,
            };

        default:
            return state;
    }
};

export default SignInReducer;
