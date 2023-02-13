import { CHECK_USER_BY_USERNAME, CREATE_NEW_ACCOUNT, CREATE_NEW_USER, GET_ALL_USERS } from "../../actions/actionsSignUp";

const initialState = {
    checkUserByUsernameLoading: false,
    checkUserByUsernameResult: false,
    checkUserByUsernameError: false,

    createNewAccountLoading: false,
    createNewAccountResult: false,
    createNewAccountError: false,

    createNewUserLoading: false,
    createNewUserResult: false,
    createNewUserError: false,

    getAllUsersLoading: false,
    getAllUsersResult: false,
    getAllUsersError: false,
};

const SignUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_USER_BY_USERNAME:
            return {
                ...state,
                checkUserByUsernameLoading: action.payload.loading,
                checkUserByUsernameResult: action.payload.data,
                checkUserByUsernameError: action.payload.errorMessage,
            };

        case CREATE_NEW_ACCOUNT:
            return {
                ...state,
                createNewAccountLoading: action.payload.loading,
                createNewAccountResult: action.payload.data,
                createNewAccountError: action.payload.errorMessage,
            };

        case CREATE_NEW_USER:
            return {
                ...state,
                createNewUserLoading: action.payload.loading,
                createNewUserResult: action.payload.data,
                createNewUserError: action.payload.errorMessage,
            };

        case GET_ALL_USERS:
            return {
                ...state,
                getAllUsersLoading: action.payload.loading,
                getAllUsersResult: action.payload.data,
                getAllUsersError: action.payload.errorMessage,
            };

        default:
            return state;
    }
};

export default SignUpReducer;
