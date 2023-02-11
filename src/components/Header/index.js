import React from "react";

const Header = () => {
    return (
        <>
            <section id="header" className="sticky-top">
                <nav className="navbar bg-success pt-3 pb-3">
                    <div className="container">
                        <p className="navbar-brand my-auto fs-3 text-white">Sign In and Sign Up Aplication</p>
                        <form className="d-flex">
                            <button className="btn btn-danger btn-sm" type="submit">
                                Logout
                            </button>
                        </form>
                    </div>
                </nav>
            </section>
        </>
    );
};

export default Header;
