import axios from "axios";

export const GET_ALL_ACCOUNT = "GET_ALL_ACCOUNT";
export const ADD_NEW_ACCOUNT = "ADD_NEW_ACCOUNT";
export const ADD_NEW_USER = "ADD_NEW_USER";

export const getAllAccount = () => {
    return (dispatch) => {
        // loading
        dispatch({
            type: GET_ALL_ACCOUNT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // get data
        axios({
            method: "GET",
            url: "http://localhost:5000/accounts",
            timeout: 5000,
        })
            .then((res) => {
                // when success get data
                dispatch({
                    type: GET_ALL_ACCOUNT,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                // when failed get data
                dispatch({
                    type: GET_ALL_ACCOUNT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const addNewAccount = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: ADD_NEW_ACCOUNT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // post data
        axios({
            method: "POST",
            url: "http://localhost:5000/accounts",
            timeout: 5000,
            data: data,
        })
            .then((res) => {
                // when success post data
                dispatch({
                    type: ADD_NEW_ACCOUNT,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                // when failed post data
                dispatch({
                    type: ADD_NEW_ACCOUNT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const addNewUser = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: ADD_NEW_USER,
            payload: {
                loading: true,
                data: false,
                messageError: false,
            },
        });

        // post data
        axios({
            method: "POST",
            url: "http://localhost:5000/users",
            timeout: 5000,
            data: data,
        })
            .then((res) => {
                // when success post data
                dispatch({
                    type: ADD_NEW_USER,
                    payload: {
                        loading: false,
                        data: res.data,
                        messageError: false,
                    },
                });
            })
            .catch((error) => {
                // when failed post data
                dispatch({
                    type: ADD_NEW_USER,
                    payload: {
                        loading: false,
                        data: false,
                        messageError: error.message,
                    },
                });
            });
    };
};
