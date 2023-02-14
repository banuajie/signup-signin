import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FormSignIn from "../../components/FormSignIn";

const SignInPage = () => {
    return (
        <div className="bg-secondary bg-opacity-10">
            <Header />
            <FormSignIn />
            <Footer />
        </div>
    );
};

export default SignInPage;
