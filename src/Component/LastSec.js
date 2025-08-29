import React from 'react'
import logo1 from "../Images/logo1.svg";
import logo2 from "../Images/logo2.svg";
import logo3 from "../Images/logo3.svg";
import logo4 from "../Images/logo4.svg";
import logo5 from "../Images/logo5.svg";
import Marquee from "react-fast-marquee";
import profileimg from "../Images/Muhammad Qasim 3.png";
import { Link } from 'react-router-dom';
import Fade from "react-reveal/Fade";
import logopic1 from '../Images/Group (11).svg'
import logopic2 from '../Images/Group (12).svg'
import logopic3 from '../Images/Group (13).svg'
import logopic4 from '../Images/Group (14).svg'
import logopic5 from '../Images/Group (15).svg'
import logopic6 from '../Images/Group (16).svg' 


function LastSec() {
  return (
    <>
      
          <div className="container-fluid home-sec-div5">
              <div className="container">
                  <div className='text-center'>
                      <h1 className="haveproject-text1">
                          {" "}
                          <Fade bottom cascade distance='55%'></Fade>  <Fade bottom cascade distance='55%'>Do You want to <br className='d-md-block d-none' />BOOST YOUR</Fade> 
                              <span className='d-sm-inline have-project-span'> <Fade bottom cascade distance='55%'>SALES?</Fade> </span>
                              <Fade bottom cascade distance='55%'>
                              </Fade>
                      </h1>
                      <div className=" d-flex align-items-center justify-content-center mt-4">
                          <Link to="/" className="view-all-btn1">
                              Book 30 minute free consultation
                          </Link>
                      </div>
                  </div>

                  {/* <div className="agency-div1">
                      <p className="agency-text1">I worked with different Agencies</p>

                      <div>
                          <div className="row work-company-maindiv mt-4">
                              <Marquee>
                                  <div className=" work-col-div">
                                      <a href="" target="_blank">
                                          <div className="work-company-div1 ">
                                              <div>
                                                  <img
                                                      src={logo1}
                                                      className="img-fluid company-logo1"
                                                      alt=""
                                                  />
                                              </div>
                                          </div>
                                      </a>
                                  </div>

                                  <div className=" work-col-div">
                                      <a href="" target="_blank">
                                          <div className="work-company-div1">
                                              <div>
                                                  <img
                                                      src={logo2}
                                                      className="img-fluid company-logo1"
                                                      alt=""
                                                  />
                                              </div>
                                          </div>
                                      </a>
                                  </div>

                                  <div className=" work-col-div">
                                      <a href="" target="_blank">
                                          <div className="work-company-div1">
                                              <div>
                                                  <img
                                                      src={logo3}
                                                      className="img-fluid company-logo1"
                                                      alt=""
                                                  />
                                              </div>
                                          </div>
                                      </a>
                                  </div>

                                  <div className=" work-col-div">
                                      <a href="" target="_blank">
                                          <div className="work-company-div1">
                                              <div>
                                                  <img
                                                      src={logo4}
                                                      className="img-fluid company-logo1"
                                                      alt=""
                                                  />
                                              </div>
                                          </div>
                                      </a>
                                  </div>

                                  <div className=" work-col-div">
                                      <a href="" target="_blank">
                                          <div className="work-company-div1">
                                              <div>
                                                  <img
                                                      src={logo5}
                                                      className="img-fluid company-logo1"
                                                      alt=""
                                                  />
                                              </div>
                                          </div>
                                      </a>
                                  </div>
                              </Marquee>
                          </div>
                      </div>
                  </div> */}

                  <div className='last-sec-logos-div12'>
                      <div>
                          {/* <h1 className='home-trustedbrand-text1'>TRUSTED BRANS I WORKED WITH</h1> */}
                      </div>
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


    </>
  )
}

export default LastSec
