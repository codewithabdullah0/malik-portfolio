import React, { useRef, useEffect } from "react";
import "./Home.css";
import "./Amzon.css";
import profileimg2 from "../Images/Group 1000008403.png";
import LastSec from "./LastSec";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import projectpic1 from "../Images/Group 1000008394.svg";
import logopic1 from '../Images/Group (11).svg'
import logopic2 from '../Images/Group (12).svg'
import logopic3 from '../Images/Group (13).svg'
import logopic4 from '../Images/Group (14).svg'
import logopic5 from '../Images/Group (15).svg'
import logopic6 from '../Images/Group (16).svg'
import ecomercepic from '../Images/image 1849.png'

function Website() {
    return (
        <div>
            <div className="container-fluid home-sec-div1">
                <div className="container abc">
                    <h1 className="amazon-profile-text1" id="profile-text1">
                        <Fade bottom cascade distance="60%">
                            A Fresh <span className='glow-text12'>Perspective</span>
                        </Fade>
                        <br className="d-lg-block d-none" />
                        <Fade bottom cascade distance="60%">
                            on your{' '}
                        </Fade>
                        <span className="profile-text1-span1">
                            <Fade bottom cascade distance="60%">
                                E-Commerce<br className="d-block d-md-none"/> Store
                            </Fade>
                        </span>{" "}
                        </h1>

                    <div className="home-btn-div1 d-flex align-items-center justify-content-center">
                        <Link to="/" className="view-all-btn1">
                            Book 30 minute free consultation
                        </Link>
                    </div>

                    <div className='amazon-logoss-div12 d-md-block d-none'>

                        <div className='home-trustedbrand-div1 '>
                            <div className='row home-trustedbrand-div2'>
                                <div className='home-trustedbrand-text3'>
                                    <img src={logopic3} alt="" />
                                </div>
                                <div className='home-trustedbrand-text3'>
                                    <img src={logopic2} alt="" />
                                </div>
                                <div className='home-trustedbrand-text3'>
                                    <img src={logopic1} alt="" />
                                </div>
                                <div className='home-trustedbrand-text3'>
                                    <img src={logopic4} alt="" />
                                </div>
                                <div className='home-trustedbrand-text3'>
                                    <img src={logopic5} alt="" />
                                </div>
                                <div className='home-trustedbrand-text3'>
                                    <img src={logopic6} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>




            <div className="container-fluid pl-0 pr-0">
                <div className="amazon-sec-div2">
                    <div className="container ">
                   
                        <h1 className="amazon-wonder-text1" id="wonder-text1">
                            <Fade bottom cascade distance="60%">
                                Actionable Advice to
                            </Fade>
                            <div className="wonder-text-div2">
                                <div className="amazon-wonder-text-div1 d-md-block d-none"></div>
                                <Fade bottom cascade distance="60%">
                                    Build Brand Trust
                                </Fade>
                            </div>
                        </h1>

                        <div className="amazom-home-sec-text2">
                            <p>
                                Our team has spent over a decade designing digital experiences for the biggest brands around the world. Now you can get expert advice, at a fraction of the cost.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


<div className="container-fluid ecomerce-img-12 p-0">
    <img src={ecomercepic} className="img-fluid ecommerce-pics-img1" alt="" />
</div>


            <div className="container-fluid amazon-home-sec-div4 pl-0 pr-0">
                <div>

                    <div className="p-0">
                        <div className="project1-div1">
                            <div className="project1-div2">
                                <a href="#" target="_blank" className="project1-link1">
                                    <div className="count-top-div">
                                        <p className="count-top-text1"> 1/3</p>
                                    </div>
                                    <img src={projectpic1} alt="" className="project1-img1" />
                                </a>
                            </div>
                        </div>

                        <div className="project2-div1">
                            <div className="project1-div2">
                                <a href="#" target="_blank" className="project1-link1">
                                    <div className="count-top-div">
                                        <p className="count-top-text1"> 2/3</p>
                                    </div>
                                    <img src={projectpic1} alt="" className="project1-img1" />
                                </a>
                            </div>
                        </div>

                        <div className="project3-div1">
                            <div className="project1-div2">
                                <a href="#" target="_blank" className="project1-link1">
                                    <div className="count-top-div">
                                        <p className="count-top-text1"> 3/3</p>
                                    </div>
                                    <img src={projectpic1} alt="" className="project1-img1" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LastSec></LastSec>
        </div>
    );
}

export default Website;
