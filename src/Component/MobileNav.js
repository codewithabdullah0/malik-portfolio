import React, { useState } from "react";
import "./NavBar.css";
import TextAnimation from "react-text-animations";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


function MobileNav() {
    const [openbtn, setopenbtn] = useState(false);

    return (
        <>
            <div className="container-fluid navbar-div1 ">
                <div id="myNav" className={`${openbtn ? "overlay" : "overlay1"}`}>
                    <div>
                        <Link to='/' className="logo-text1">
                            Malik
                        {/* <TextAnimation.Slide
                            target="QASIM"
                            text={["QASIM", "DESIGNER"]}
                            cname="logo-text1"
                            animation={{
                                duration: 1000,
                                delay: 2000,
                                timingFunction: "ease-out",
                            }}
                        >
                            IAM QASIM
                        </TextAnimation.Slide> */}
                        </Link>
                    </div>
                    <a
                        href="javascript:void(0)"
                        class="closebtn"
                        onClick={() => {
                            setopenbtn(!openbtn);
                        }}
                    >
                        &times;
                    </a>
                    <div class="overlay-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-12 nav-text-div1 ">
                                    <Link
                                        to="/"
                                        className=" nav-text1"
                                        onClick={() => {
                                            setopenbtn(!openbtn);
                                        }}
                                    >
                                        Home <span>01</span>
                                    </Link>

                                    <Link
                                        to="/about"
                                        className=" nav-text1"
                                        onClick={() => {
                                            setopenbtn(!openbtn);
                                        }}
                                    >
                                        About <span>02</span>
                                    </Link>
                                    
                                    <HashLink
                                        class="nav-text1"
                                        to="/#services"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={600}
                                        onClick={() => {
                                            setopenbtn(!openbtn);
                                        }}
                                    >
                                        Services <span>03</span>
                                    </HashLink>
                                </div>
                                <div className="col-lg-6 col-12  nav-text-div1">
                                   
                                    <Link
                                        to="/contact"
                                        className=" nav-text1"
                                        onClick={() => {
                                            setopenbtn(!openbtn);
                                        }}
                                    >
                                        Contact <span>04</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <Link to='/' className="logo-text2">
                        Malik
                  
                    </Link>
                </div>

                <div className=" d-flex justify-content-end ">
                    <span
                        className="navbar-btn1  "
                        onClick={() => {
                            setopenbtn(!openbtn);
                        }}
                    >
                        &#9776;{" "}
                    </span>
                </div>
            </div>
        </>
    );
}

export default MobileNav;
