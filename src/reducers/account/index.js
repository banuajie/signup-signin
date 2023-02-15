import { ADD_NEW_ACCOUNT, ADD_NEW_USER, GET_ALL_ACCOUNT } from "../../actions/actionsAccount";

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

        default:
            return state;
    }
};

export default AccountReducer;
