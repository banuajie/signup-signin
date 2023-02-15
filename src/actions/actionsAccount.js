import axios from "axios";

export const GET_ALL_ACCOUNT = "GET_ALL_ACCOUNT";

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
