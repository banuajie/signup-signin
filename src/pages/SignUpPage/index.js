import React from "react";
import Footer from "../../components/Footer";
import FormSignUp from "../../components/FormSignUp";
import Header from "../../components/Header";

const SignUpPage = () => {
    return (
        <div className="bg-secondary bg-opacity-10">
            <Header />
            <FormSignUp />
            <Footer />
        </div>
    );
};

export default SignUpPage;
