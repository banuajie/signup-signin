import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import password_show from "../../assets/images/password_show.png";
import password_hide from "../../assets/images/password_hide.png";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../actions/actionsSignIn";

const FormSignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { signInLoading, signInResult } = useSelector((state) => state.SignInReducer);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loadingSignIn, setLoadingSignIn] = useState(false);
    const [errorSignIn, setErrorSignIn] = useState(false);

    const handleSignIn = (event) => {
        event.preventDefault();

        // try to sign in
        dispatch(signIn({ username: username, password: password }));
    };

    useEffect(() => {
        if (username === "" || password === "") {
            // set errorSignIn to false when username or password is empty
            setErrorSignIn(false);

            // set loading to false when username or password is empty
            setLoadingSignIn(false);
        } else if (signInLoading) {
            // set errorSignIn to false sign in process
            setErrorSignIn(false);

            // set loading to true when sign in process
            setLoadingSignIn(true);
        } else if (signInResult.length > 0) {
            // set errorSignIn to false when sign in success
            setErrorSignIn(false);

            // set loading to false when sign in success
            setLoadingSignIn(false);

            // navigate to homepage when sign in success
            console.log("navigate to homepage");
        } else {
            // set loading to false when sign in error
            setLoadingSignIn(false);

            // set errorSignIn to true when sign in error
            setErrorSignIn(true);
        }
    }, [signInLoading, signInResult]);

    return (
        <>
            <section id="form-sign-in" className="d-flex justify-content-center align-items-center vh-100 ">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form onSubmit={(event) => handleSignIn(event)} className="w-25 mx-auto bg-success p-3 rounded-3 bg-opacity-10">
                                {/* title form */}
                                <div className="mb-3 text-center">
                                    <p className="fs-3 my-auto">Sign In Form</p>
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
                                <div className="mb-4">
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

                                {/* message error sign in */}
                                {errorSignIn && (
                                    <div className="mb-4">
                                        <p className="fs-6 my-auto text-danger">Incorrect username or password...</p>
                                    </div>
                                )}

                                {/* loading sign in */}
                                {loadingSignIn && (
                                    <div className="mb-4">
                                        <p className="fs-6 my-auto">Loading...</p>
                                    </div>
                                )}

                                {/* button sign up */}
                                <button type="submit" className="btn btn-success  w-100 mb-3" disabled={username === "" || password === ""}>
                                    Sign In
                                </button>

                                <div>
                                    <p
                                        className="fs-6 my-auto text-secondary text-center"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => {
                                            navigate("/");
                                        }}
                                    >
                                        Create New Account
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

export default FormSignIn;
