import axios from "axios";

export const SIGN_IN = "SIGN_IN";

export const signIn = (data) => {
    return (dispatch) => {
        // loading
        dispatch({
            type: SIGN_IN,
            payload: {
                loading: true,
                data: false,
                messageError: false,
            },
        });

        // get data
        axios({
            method: "GET",
            url: `http://localhost:5000/accounts?username=${data.username}&password=${data.password}`,
            timeout: 5000,
            data: data,
        })
            .then((res) => {
                // when success get data
                dispatch({
                    type: SIGN_IN,
                    payload: {
                        loading: false,
                        data: res.data,
                        messageError: false,
                    },
                });
            })
            .catch((error) => {
                // when failed get data
                dispatch({
                    type: SIGN_IN,
                    payload: {
                        loading: false,
                        data: false,
                        messageError: error.message,
                    },
                });
            });
    };
};
