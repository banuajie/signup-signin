import axios from "axios";

export const GET_ALL_ACCOUNT = "GET_ALL_ACCOUNT";
export const ADD_NEW_ACCOUNT = "ADD_NEW_ACCOUNT";
export const ADD_NEW_USER = "ADD_NEW_USER";
export const DELETE_ACCOUNT = "DELETE_ACCOUNT";
export const DELETE_USER = "DELETE_USER";
export const DETAIL_ACCOUNT = "DETAIL_ACCOUNT";
export const UPDATE_ACCOUNT = "UPDATE_ACCOUNT";
export const UPDATE_USER = "UPDATE_USER";

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

export const deleteAccount = (id) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: DELETE_ACCOUNT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // delete data
        axios({
            method: "DELETE",
            url: "http://localhost:5000/accounts/" + id,
            timeout: 5000,
        })
            .then((res) => {
                // when success delete data
                dispatch({
                    type: DELETE_ACCOUNT,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                // when success delete data
                dispatch({
                    type: DELETE_ACCOUNT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const deleteUser = (id) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: DELETE_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // delete data
        axios({
            method: "DELETE",
            url: "http://localhost:5000/users/" + id,
            timeout: 5000,
        })
            .then((res) => {
                // when success delete data
                dispatch({
                    type: DELETE_USER,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                // when success delete data
                dispatch({
                    type: DELETE_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const detailAccount = (data) => {
    return (dispatch) => {
        // load detail data account
        dispatch({
            type: DETAIL_ACCOUNT,
            payload: {
                data: data,
            },
        });
    };
};

export const updateAccount = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: UPDATE_ACCOUNT,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // put data
        axios({
            method: "PUT",
            url: "http://localhost:5000/accounts/" + data.id,
            timeout: 5000,
            data: data,
        })
            .then((res) => {
                // when success put data
                dispatch({
                    type: UPDATE_ACCOUNT,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                // when failed put data
                dispatch({
                    type: UPDATE_ACCOUNT,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};

export const updateUser = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: UPDATE_USER,
            payload: {
                loading: true,
                data: false,
                errorMessage: false,
            },
        });

        // put data
        axios({
            method: "PUT",
            url: "http://localhost:5000/users/" + data.id,
            timeout: 5000,
            data: data,
        })
            .then((res) => {
                // when success put data
                dispatch({
                    type: UPDATE_USER,
                    payload: {
                        loading: false,
                        data: res.data,
                        errorMessage: false,
                    },
                });
            })
            .catch((error) => {
                // when success put data
                dispatch({
                    type: UPDATE_USER,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message,
                    },
                });
            });
    };
};
