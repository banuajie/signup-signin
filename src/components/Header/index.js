import React from "react";
import { useLocation, useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <section id="header" className="sticky-top">
                <nav className="navbar bg-success pt-3 pb-3">
                    <div className="container">
                        <p className="navbar-brand my-auto fs-3 text-white">Sign In and Sign Up Aplication</p>
                        <form
                            className="d-flex"
                            onSubmit={(event) => {
                                event.preventDefault();

                                // navigate to sign in page after click button "Logout"
                                navigate("/sign-in-page");
                            }}
                        >
                            <button className="btn btn-danger btn-sm" type="submit" hidden={location.pathname === "/" || location.pathname === "/sign-in-page"}>
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
