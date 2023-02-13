import React, { useEffect, useState } from "react";
import password_show from "../../assets/images/password_show.png";
import password_hide from "../../assets/images/password_hide.png";
import { useDispatch, useSelector } from "react-redux";
import { checkUserByUsername, createNewAccount, createNewUser, getAllUsers } from "../../actions/actionsSignUp";
import { useNavigate } from "react-router";

const FormSignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { checkUserByUsernameLoading, checkUserByUsernameResult, createNewAccountResult, createNewUserResult } = useSelector((state) => state.SignUpReducer);

    const [id, setId] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loadingSignUp, setLoadingSignUp] = useState(false);
    const [errorUsername, setErrorUsername] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorSignUp, setErrorSignUp] = useState(false);
    const [trySignUp, setTrySignUp] = useState(false);

    useEffect(() => {
        // get all data users
        dispatch(getAllUsers());
    }, [dispatch]);

    useEffect(() => {
        // check password and confirm password
        if (password !== confirmPassword) {
            if (password !== "" && confirmPassword === "") {
                setErrorPassword(false);
            } else if (password === "" && confirmPassword !== "") {
                setErrorPassword(false);
            } else {
                setErrorPassword(true);
            }
        } else {
            setErrorPassword(false);
        }
    }, [password, confirmPassword]);

    const handleSignUp = (event) => {
        event.preventDefault();

        // check user validation on sign up
        dispatch(checkUserByUsername({ username: username }));

        // set trySignUp to true
        setTrySignUp(true);
    };

    const generatedId = () => {
        // generated account id
        return Date.now();
    };

    const resetFormSignUp = () => {
        // reset sign up form
        setId("");
        setUsername("");
        setPassword("");
        setConfirmPassword("");
    };

    useEffect(() => {
        const checkUsernameSignUp = () => {
            if (checkUserByUsernameResult.length === 0) {
                // set setErrorUsername to false when username is correct
                setErrorUsername(false);

                if (username === "" || password === "" || confirmPassword === "") {
                    return;
                } else {
                    // create new account
                    dispatch(createNewAccount({ id: generatedId(), username: username, password: password, role: "Member" }));
                }

                // reset form sign up after create new account
                resetFormSignUp();
            } else {
                if (checkUserByUsernameLoading) {
                    // show loading
                    setLoadingSignUp(true);
                } else {
                    // show loading
                    setLoadingSignUp(false);

                    // set setErrorUsername to true when username already to used
                    setErrorUsername(true);
                }
            }
        };

        if (trySignUp === true) {
            checkUsernameSignUp();
        }
    }, [trySignUp, checkUserByUsernameLoading, checkUserByUsernameResult, dispatch, id, username, password, confirmPassword]);

    useEffect(() => {
        // create new user
        if (createNewAccountResult && trySignUp === true) {
            // create new user
            dispatch(createNewUser({ id: createNewAccountResult.id, username: createNewAccountResult.username }));

            // set trySignUp to false after success create new user
            setTrySignUp(false);

            // hide loading
            setLoadingSignUp(false);

            // navigate to sign in page after success sign up / create account
            navigate("/sign-in-page");
        }
    }, [createNewAccountResult, trySignUp, dispatch, createNewUserResult, navigate]);

    return (
        <>
            <section id="form-sign-up" className="d-flex justify-content-center align-items-center vh-100">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form onSubmit={(event) => handleSignUp(event)} className="w-25 mx-auto bg-success p-3 rounded-3 bg-opacity-10">
                                {/* title form */}
                                <div className="mb-3 text-center">
                                    <p className="fs-3 my-auto">Sign Up Form</p>
                                </div>

                                {/* input username */}
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="username"
                                        name="username"
                                        value={username}
                                        onChange={(event) => {
                                            setUsername(event.target.value);
                                        }}
                                    />
                                </div>

                                {/* input password */}
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <div className="row">
                                        <div className="col-10">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                className="form-control"
                                                id="password"
                                                name="password"
                                                value={password}
                                                onChange={(event) => {
                                                    setPassword(event.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="col-2 align-self-center">
                                            <img
                                                src={showPassword ? password_hide : password_show}
                                                alt="View Password"
                                                className="w-100"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    setShowPassword(!showPassword);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* input confirm password */}
                                <div className="mb-4">
                                    <label htmlFor="confirm-password" className="form-label">
                                        Confirm Password
                                    </label>
                                    <div className="row">
                                        <div className="col-10">
                                            <input
                                                type={showConfirmPassword ? "text" : "password"}
                                                className="form-control"
                                                id="confirm-password"
                                                name="confirm-password"
                                                value={confirmPassword}
                                                onChange={(event) => {
                                                    setConfirmPassword(event.target.value);
                                                }}
                                            />
                                        </div>
                                        <div className="col-2 align-self-center">
                                            <img
                                                src={showConfirmPassword ? password_hide : password_show}
                                                alt="View Password"
                                                className="w-100"
                                                style={{ cursor: "pointer" }}
                                                onClick={() => {
                                                    setShowConfirmPassword(!showConfirmPassword);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* message error password */}
                                {errorPassword && (
                                    <div className="mb-4">
                                        <p className="fs-6 my-auto text-danger">Please Check Again Your Password...</p>
                                    </div>
                                )}

                                {/* message error username */}
                                {errorUsername && (
                                    <div className="mb-4">
                                        <p className="fs-6 my-auto text-danger">Your Username is Already Used...</p>
                                    </div>
                                )}

                                {loadingSignUp && (
                                    <div className="mb-4">
                                        <p className="fs-6 my-auto">Loading...</p>
                                    </div>
                                )}

                                {/* button sign up */}
                                <button type="submit" className="btn btn-success  w-100 mb-3" disabled={username === "" || password === "" || confirmPassword === "" || errorPassword}>
                                    Sign Up
                                </button>

                                <div>
                                    <p
                                        className="fs-6 my-auto text-secondary text-center"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            navigate("/sign-in-page");
                                        }}
                                    >
                                        I Have Already Account
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FormSignUp;
