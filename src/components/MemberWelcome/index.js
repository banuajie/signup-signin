import React from "react";

const MemberWelcome = () => {
    const getAccountLogin = JSON.parse(window.localStorage.getItem("AccountLogin"));

    return (
        <>
            <section id="member-welcome" className="pt-3 pb-3 vh-100">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <p className="fs-2 my-auto">Landing {getAccountLogin.role}</p>
                            <p className="fs-4 my-auto">Welcome to {getAccountLogin.username} Page</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MemberWelcome;
