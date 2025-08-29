import React, { useRef, useEffect } from "react";
import "./Home.css";
import "./Amzon.css";
import profileimg2 from "../Images/Group 1000008403 (2).png";
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



function Etsy() {
  return (
    <div>
      
          <div className="container-fluid home-sec-div1">
              <div className="container abc">
                  <h1 className="amazon-profile-text1" id="profile-text1">
                      <Fade bottom cascade distance="60%">
                          Optimize & <span className='glow-text12'>Grow</span>
                      </Fade>{' '}
                      <br className="d-lg-block d-none" />
                      <span className="profile-text1-span1">
                          <Fade bottom cascade distance="60%">
                              ETSY
                          </Fade>
                      </span>{" "}
                      <Fade bottom cascade distance="60%">
                          <img
                              src={profileimg2}
                              alt=""
                              className="amazon-profile-img2 d-inline"
                          />
                      </Fade>{" "}
                      <Fade bottom cascade distance="60%">
                          Business
                      </Fade>
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
                      {/* <Fade bottom cascade> */}

                      <h1 className="amazon-wonder-text1" id="wonder-text1">
                          <Fade bottom cascade distance="60%">
                            Explore Endless creativity 
                          </Fade>
                   
                              <Fade bottom cascade distance="60%">
                                  unique finds await on etsy
                              </Fade>
                        
                      </h1>

                      {/* </Fade> */}

                      <div className="amazom-home-sec-text2">
                          <p>
                              Discover the art of handmade and the charm of vintage on our curated Etsy marketplace. Immerse yourself in a world where creativity knows no bounds, and each purchase tells a unique story. Join us in supporting independent artisans and bringing a touch of originality to your life.
                          </p>
                      </div>
                  </div>
              </div>
          </div>

          <div className="container-fluid amazon-home-sec-div3">
              <div className="container">


                  <div className="row amazon-cards-div1">
                      <div className="col-md-4 col-12">
                          <Fade bottom duration={2000}>
                              <div className="card-text-div1 mt-0">
                                  <div className="circle-icon1">
                                      <svg
                                          width="46"
                                          height="46"
                                          viewBox="0 0 46 46"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                      >
                                          <rect width="46" height="46" rx="23" fill="#ADB5BD" />
                                      </svg>
                                  </div>
                                  <div>
                                      <h1 className="amazon-concept-text1">Account Setup</h1>
                                  </div>
                                  <div>
                                      <p className="concept-text2">
                                          We make it easy. We handle the details of your account setup, ensuring a smooth onboarding experience. Trust us to streamline the process, so you can focus on building and growing your presence.
                                      </p>
                                  </div>
                              </div>
                          </Fade>
                      </div>

                      <div className="col-md-4 col-12">
                          <Fade bottom duration={2000} delay={300}>
                              <div className="card-text-div1">
                                  <div className="circle-icon1">
                                      {/* <div className="circle-icon3-div1"></div> */}
                                      <div className="circle-icon3-div2"></div>
                                      <div className="circle-icon3-div3"></div>
                                  </div>
                                  <div>
                                      <h1 className="amazon-concept-text1">Listing</h1>
                                  </div>
                                  <div>
                                      <p className="concept-text2">
                                          We get you noticed. With our 'Listing' service, we simplify the process. We take care of the details to ensure your products or services stand out.                                      </p>
                                  </div>
                              </div>
                          </Fade>
                      </div>

                      <div className="col-md-4 col-12">
                          <Fade bottom duration={2000} delay={500}>
                              <div className="card-text-div1">
                                  <div className="circle-icon1">
                                      <div className="circle-icon3-div1"></div>
                                      <div className="circle-icon3-div2"></div>
                                      <div className="circle-icon3-div3"></div>
                                  </div>
                                  <div>
                                      <h1 className="amazon-concept-text1">Store Creation</h1>
                                  </div>
                                  <div>
                                      <p className="concept-text2">
                                          We bring your vision to life. With our 'Store Creation' service, we simplify the process. We handle all the details to ensure your online store is a true reflection of your brand.
                                      </p>
                                  </div>
                              </div>
                          </Fade>
                      </div>

                      <div className="col-md-4 col-12">
                          <Fade bottom duration={2000} delay={500}>
                              <div className="card-text-div3">
                                  <div className="circle-icon1">
                                      <div className="circle-icon3-div1"></div>
                                      <div className="circle-icon3-div2"></div>
                                      <div className="circle-icon3-div3"></div>
                                  </div>
                                  <div>
                                      <h1 className="amazon-concept-text1">Optimization</h1>
                                  </div>
                                  <div>
                                      <p className="concept-text2">
                                          Empower your presence. With our 'Optimization' service, we streamline the process. We manage all the details to ensure your platform is finely tuned for maximum impact.
                                      </p>
                                  </div>
                              </div>
                          </Fade>
                      </div>

                      <div className="col-md-4 col-12">
                          <Fade bottom duration={2000} delay={500}>
                              <div className="card-text-div3">
                                  <div className="circle-icon1">
                                      <div className="circle-icon3-div1"></div>
                                      <div className="circle-icon3-div2"></div>
                                      <div className="circle-icon3-div3"></div>
                                  </div>
                                  <div>
                                      <h1 className="amazon-concept-text1">Promotion</h1>
                                  </div>
                                  <div>
                                      <p className="concept-text2">
                                          Elevate your exposure. Through our 'Promotion' service, we streamline the process. Every detail is expertly managed to amplify your presence on diverse platforms.
                                      </p>
                                  </div>
                              </div>
                          </Fade>
                      </div>

                      <div className="col-md-4 col-12">
                          <Fade bottom duration={2000} delay={500}>
                              <div className="black-card-text-div3 d-flex justify-content-center align-items-center">
                                  <div className="text-center">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="52"
                                          height="53"
                                          viewBox="0 0 52 53"
                                          fill="black"
                                      >
                                          <path className='path1'
                                              d="M43.3485 14.9889L6.11663 52.2207L0 46.1041L37.2275 8.87223H4.41661V0.220703H52V47.8041H43.3485V14.9889Z"
                                              fill="white"
                                          />
                                      </svg>
                                      <h1 className="amazon-concept-text33">
                                          Book 30 Mints <br className="" />
                                          Free Consultation
                                      </h1>
                                  </div>
                              </div>
                          </Fade>
                      </div>
                  </div>
              </div>
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
  )
}

export default Etsy
