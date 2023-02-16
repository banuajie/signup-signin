import { ADD_NEW_ACCOUNT, ADD_NEW_USER, DELETE_ACCOUNT, DELETE_USER, GET_ALL_ACCOUNT } from "../../actions/actionsAccount";

const initialState = {
    getAllAccountLoading: false,
    getAllAccountResult: false,
    getAllAccountError: false,

    addNewAccountLoading: false,
    addNewAccountResult: false,
    addNewAccountError: false,

    addNewUserLoading: false,
    addNewUserResult: false,
    addNewUserError: false,

    deleteAccountLoading: false,
    deleteAccountResult: false,
    deleteAccountError: false,

    deleteUserLoading: false,
    deleteUserResult: false,
    deleteUserError: false,
};

const AccountReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ACCOUNT:
            return {
                ...state,
                getAllAccountLoading: action.payload.loading,
                getAllAccountResult: action.payload.data,
                getAllAccountError: action.payload.errorMessage,
            };

        case ADD_NEW_ACCOUNT:
            return {
                ...state,
                addNewAccountLoading: action.payload.loading,
                addNewAccountResult: action.payload.data,
                addNewAccountError: action.payload.errorMessage,
            };

        case ADD_NEW_USER:
            return {
                ...state,
                addNewUserLoading: action.payload.loading,
                addNewUserResult: action.payload.data,
                addNewUserError: action.payload.errorMessage,
            };

        case DELETE_ACCOUNT:
            return {
                deleteAccountLoading: action.payload.loading,
                deleteAccountResult: action.payload.data,
                deleteAccountError: action.payload.errorMessage,
            };

        case DELETE_USER:
            return {
                ...state,
                deleteUserLoading: action.payload.loading,
                deleteUserResult: action.payload.data,
                deleteUserError: action.payload.errorMessage,
            };

        default:
            return state;
    }
};

export default AccountReducer;
