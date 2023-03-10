import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAccount, deleteUser, detailAccount, getAllAccount } from "../../actions/actionsAccount";

const ListAccount = () => {
    const dispatch = useDispatch();
    const { getAllAccountLoading, getAllAccountResult, getAllAccountError, addNewUserResult, deleteAccountResult, deleteUserResult, updateUserResult } = useSelector((state) => state.AccountReducer);

    useEffect(() => {
        // get all data account when first time open landing page
        dispatch(getAllAccount());
    }, [dispatch]);

    useEffect(() => {
        if (addNewUserResult) {
            // refresh table list account after success add new user
            dispatch(getAllAccount());
        }
    }, [addNewUserResult]);

    useEffect(() => {
        if (deleteAccountResult || deleteUserResult) {
            // refresh table list account after success delete user
            dispatch(getAllAccount());
        }
    }, [deleteAccountResult, deleteUserResult]);

    useEffect(() => {
        if (updateUserResult) {
            // refresh table list account after success update user data
            dispatch(getAllAccount());
        }
    }, [updateUserResult]);

    return (
        <>
            <section id="list-account" className="pt-3 pb-3">
                {/* title table list account */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="fs-4 my-auto">List Account</p>
                        </div>
                    </div>
                </div>

                {/* table list account */}
                {getAllAccountResult ? (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <table className="table table-success table-striped table-hover table-bordered">
                                    <thead>
                                        <tr className="text-center">
                                            <th className="col-1">#</th>
                                            <th className="col-2">Account ID</th>
                                            <th className="col-2">Username</th>
                                            <th className="col-2">Password</th>
                                            <th className="col-2">Role</th>
                                            <th className="col-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {getAllAccountResult.map((item) => {
                                            return (
                                                <tr key={item.id}>
                                                    <th className="text-center">{getAllAccountResult.indexOf(item) + 1}</th>
                                                    <td className="text-center">{item.id}</td>
                                                    <td className="text-center">{item.username}</td>
                                                    <td className="text-center">{item.username === "admin" || item.username === "member" ? "xxxxxxxxxx" : item.password}</td>
                                                    <td className="text-center">{item.role}</td>
                                                    <td>
                                                        <div className="row">
                                                            <div className="col">
                                                                <button className="btn btn-info btn-sm w-100" disabled={item.username === "admin" || item.username === "member"} onClick={() => dispatch(detailAccount(item))}>
                                                                    Edit
                                                                </button>
                                                            </div>
                                                            <div className="col">
                                                                <button
                                                                    className="btn btn-danger btn-sm w-100"
                                                                    disabled={item.username === "admin" || item.username === "member"}
                                                                    onClick={() => {
                                                                        dispatch(deleteAccount(item.id));
                                                                        dispatch(deleteUser(item.id));
                                                                    }}
                                                                >
                                                                    Delete
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                ) : getAllAccountLoading ? (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="fs-4 my-auto">Loading...</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="fs-4 my-auto">{getAllAccountError ? getAllAccountError : "Empty data"}</p>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};

export default ListAccount;
