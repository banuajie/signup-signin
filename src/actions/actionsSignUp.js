import axios from "axios";

export const CHECK_USER_BY_USERNAME = "CHECK_USER_BY_USERNAME";
export const CREATE_NEW_ACCOUNT = "CREATE_NEW_ACCOUNT";
export const CREATE_NEW_USER = "CREATE_NEW_USER";
export const GET_ALL_USERS = "GET_ALL_USERS";

export const checkUserByUsername = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: CHECK_USER_BY_USERNAME,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // get data
        axios({
            method: "GET",
            url: `http://localhost:5000/users?username=${data.username}`,
            timeout: 5000,
            data: data,
        })
            .then((res) => {
                // when success get data
                dispatch({
                    type: CHECK_USER_BY_USERNAME,
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
                    type: CHECK_USER_BY_USERNAME,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const createNewAccount = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: CREATE_NEW_ACCOUNT,
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
                    type: CREATE_NEW_ACCOUNT,
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
                    type: CREATE_NEW_ACCOUNT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const createNewUser = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: CREATE_NEW_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
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
                    type: CREATE_NEW_USER,
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
                    type: CREATE_NEW_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const getAllUsers = () => {
    return (dispatch) => {
        // loading
        dispatch({
            type: GET_ALL_USERS,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // get data
        axios({
            method: "GET",
            url: "http://localhost:5000/users",
            timeout: 5000,
        })
            .then((res) => {
                // when success get data
                dispatch({
                    type: GET_ALL_USERS,
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
                    type: GET_ALL_USERS,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
