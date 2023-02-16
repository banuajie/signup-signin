import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewAccount, addNewUser, getAllAccount, updateAccount, updateUser } from "../../actions/actionsAccount";

const AddAccount = () => {
    const dispatch = useDispatch();
    const { addNewAccountResult, addNewUserResult, getAllAccountResult, deleteAccountResult, deleteUserResult, detailAccountResult, updateAccountResult, updateUserResult } = useSelector((state) => state.AccountReducer);

    const [id, setId] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [errorUsername, setErrorUsername] = useState(false);
    const [tryCreateAccount, setTryCreateAccount] = useState(false);

    // generated id account
    const generatedId = () => {
        return Date.now();
    };

    const resetForm = () => {
        setId("");
        setUsername("");
        setPassword("");
        setRole("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (id) {
            // check username data
            for (let i = 0; i < getAllAccountResult.length; i++) {
                if (username === getAllAccountResult[i].username && username !== detailAccountResult.username) {
                    // set error username to true if username is already to used
                    return setErrorUsername(true);
                } else {
                    // update data account
                    dispatch(updateAccount({ id: id, username: username, password: password, role: role }));
                }
            }

            // set error username to false
            setErrorUsername(false);
        } else {
            // check username data
            for (let i = 0; i < getAllAccountResult.length; i++) {
                if (getAllAccountResult[i].username === username) {
                    // set error username to true if username is already to used
                    return setErrorUsername(true);
                }
            }

            // set error username to false
            setErrorUsername(false);

            // set tryCreateAccount to true
            setTryCreateAccount(true);
        }
    };

    useEffect(() => {
        if (tryCreateAccount === true) {
            // add new account
            dispatch(addNewAccount({ id: generatedId(), username: username, password: password, role: role }));
        }
    }, [tryCreateAccount]);

    useEffect(() => {
        if (addNewAccountResult && tryCreateAccount) {
            // add new user when success add new account
            dispatch(addNewUser({ id: addNewAccountResult.id, username: addNewAccountResult.username }));

            // set tryCreateAccount to false
            setTryCreateAccount(false);
        }
    }, [addNewAccountResult]);

    useEffect(() => {
        if (addNewUserResult) {
            // reset form after success add account
            resetForm();
        }
    }, [addNewUserResult]);

    useEffect(() => {
        if (deleteAccountResult || deleteUserResult) {
            // reset form after success delete user
            resetForm();
        }
    }, [deleteAccountResult, deleteUserResult]);

    useEffect(() => {
        // show detail account after click button "Edit"
        if (detailAccountResult) {
            setId(detailAccountResult.id);
            setUsername(detailAccountResult.username);
            setPassword(detailAccountResult.password);
            setRole(detailAccountResult.role);
        }
    }, [detailAccountResult]);

    const handleCancelUpdate = (event) => {
        event.preventDefault();

        // reset form after click button "Cancel Update"
        resetForm();

        // set errorUsername to false after click button "Cancel Update"
        setErrorUsername(false);

        // refresh table after click button "Cancel Update"
        dispatch(getAllAccount());
    };

    useEffect(() => {
        if (updateAccountResult) {
            // update username after success update data account
            dispatch(updateUser({ id: updateAccountResult.id, username: updateAccountResult.username }));
        }
    }, [updateAccountResult]);

    useEffect(() => {
        if (updateUserResult) {
            // reset form after success update user data
            resetForm();
        }
    }, [updateUserResult]);

    return (
        <>
            <section id="add-account" className="pt-3 pb-3">
                {/* title form add/edit account */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="fs-4 my-auto">{id ? "Edit Account" : "Add Account"}</p>
                        </div>
                    </div>
                </div>

                {/* form add/edit account */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <form onSubmit={(event) => handleSubmit(event)} className="w-50">
                                {/* input id (disabled) */}
                                {id && (
                                    <div className="mb-3">
                                        <label htmlFor="username" className="form-label">
                                            Account ID
                                        </label>
                                        <input type="text" className="form-control" id="id" name="id" value={id} disabled />
                                    </div>
                                )}

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

                                {errorUsername && (
                                    <div className="mb-3">
                                        <p className="fs-6 my-auto" style={{ color: "red" }}>
                                            Your Username is Already Used...
                                        </p>
                                    </div>
                                )}

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
                                    {id ? "Update Account" : "Add Account"}
                                </button>

                                {/* button "Cancel Update" */}
                                {id && (
                                    <button className="btn btn-warning btn-sm ms-3" onClick={(event) => handleCancelUpdate(event)}>
                                        Cancel Update
                                    </button>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddAccount;
