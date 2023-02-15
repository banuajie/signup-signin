import React from "react";
import AddAccount from "../../components/AddAccount";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListAccount from "../../components/ListAccount";

const LandingAdminPage = () => {
    return (
        <div className="bg-secondary bg-opacity-10">
            <Header />
            <AddAccount />
            <ListAccount />
            <Footer />
        </div>
    );
};

export default LandingAdminPage;
