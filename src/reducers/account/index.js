import { GET_ALL_ACCOUNT } from "../../actions/actionsAccount";

const initialState = {
    getAllAccountLoading: false,
    getAllAccountResult: false,
    getAllAccountError: false,
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

        default:
            return state;
    }
};

export default AccountReducer;
