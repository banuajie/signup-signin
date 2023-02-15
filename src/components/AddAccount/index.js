import React, { useState } from "react";

const AddAccount = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");

    return (
        <>
            <section id="add-account" className="pt-3 pb-3">
                {/* title form add/edit account */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="fs-4 my-auto">Add Account</p>
                        </div>
                    </div>
                </div>

                {/* form add/edit account */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form className="w-50">
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
                                        placeholder="Input Username"
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
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder="Input Password"
                                        value={password}
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }}
                                    />
                                </div>

                                {/* select role */}
                                <div className="mb-4">
                                    <label htmlFor="password" className="form-label">
                                        Role
                                    </label>
                                    <select
                                        className="form-select"
                                        name="role"
                                        value={role}
                                        onChange={(event) => {
                                            setRole(event.target.value);
                                        }}
                                    >
                                        <option value="">Select Role</option>
                                        <option value="Admin">Admin</option>
                                        <option value="Member">Member</option>
                                    </select>
                                </div>

                                {/* button "Add Account" / "Update Account" */}
                                <button type="submit" className="btn btn-success btn-sm" disabled={username === "" || password === "" || role === ""}>
                                    Add Account
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddAccount;
