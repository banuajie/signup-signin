import React from "react";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import heart from "../../assets/images/heart.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <section id="footer" className="pt-4 pb-4 bg-success sticky-bottom">
                <div className="container-fluid">
                    <div className="row text-center align-items-center">
                        <div className="col">
                            <Link to="https://github.com/banuajie" target="_blank">
                                <img src={github} alt="Link Github" />
                            </Link>
                        </div>
                        <div className="col">
                            <span className="fs-4 my-auto">
                                Create with <img src={heart} alt="Heart" /> by Banuajie
                            </span>
                        </div>
                        <div className="col">
                            <Link to="https://www.linkedin.com/in/nugraha-banuajie-633410ba/" target="_blank">
                                <img src={linkedin} alt="Link Linkedin" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
