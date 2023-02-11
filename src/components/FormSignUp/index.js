import React, { useState } from "react";
import password_show from "../../assets/images/password_show.png";
import password_hide from "../../assets/images/password_hide.png";

const FormSignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <>
            <section id="form-sign-up" className="pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form className="w-25 mx-auto bg-success p-3 rounded-3 bg-opacity-10">
                                {/* title form */}
                                <div className="mb-3 text-center">
                                    <p className="fs-3 my-auto">Sign Up Form</p>
                                </div>

                                {/* input username */}
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
                                        Username
                                    </label>
                                    <input type="text" className="form-control" id="username" />
                                </div>

                                {/* input password */}
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <div className="row">
                                        <div className="col-10">
                                            <input type={showPassword ? "text" : "password"} className="form-control" id="password" />
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
                                            <input type={showConfirmPassword ? "text" : "password"} className="form-control" id="confirm-password" />
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

                                {/* button sign up */}
                                <button type="submit" className="btn btn-success  w-100">
                                    Sign Up
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FormSignUp;
