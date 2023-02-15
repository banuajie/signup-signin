import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ListAccount from "../../components/ListAccount";

const LandingAdminPage = () => {
    return (
        <div className="bg-secondary bg-opacity-10">
            <Header />
            <ListAccount />
            <Footer />
        </div>
    );
};

export default LandingAdminPage;
