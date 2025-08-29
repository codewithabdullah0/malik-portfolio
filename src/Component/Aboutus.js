import React from 'react'
import Fade from "react-reveal/Fade";
import './Aboutus.css'
import aboutprofilepic from '../Images/image 1848 (2).png'
import { Link } from 'react-router-dom';
import animpic from "../Images/anim2.svg";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import LastSec from './LastSec';

function Aboutus() { 
  return (
    <div>
      <div className='conatiner-fluid about-us-div1'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 col-12 d-md-block d-none'>
              <img src={aboutprofilepic} className='img-fluid' alt="" />
            </div>
            <div className='col-lg-6 col-12 d-flex align-items-center pl-md-4 pl-0 about-us-div2 '>
              <div>
                <h1 className="about-us-text1 " >
                  <Fade bottom cascade distance="60%">
                    i'm{' '}
                  </Fade>
                  <span className="about-us-text1-span1">
                    <Fade bottom cascade distance="60%">
                      MALIK
                    </Fade>
                  </span>
                </h1>
                <h1 className="about-us-text2" >
                  <Fade bottom cascade distance="60%">
                    ECommerce{' '}
                  </Fade>
                  <br className='d-md-none d-block' />
                  <span className="about-us-text2-span1">
                    <Fade bottom cascade distance="60%">
                      specialist
                    </Fade>
                  </span>
                </h1>

                <div className="about-us-btn-div1 d-flex align-items-center justify-content-center">
                  <Link to="/" className="about-us-btn1">
                    Book 30 minute free consultation
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-6 col-12 d-block d-md-none mt-5'>
              <img src={aboutprofilepic} className='img-fluid' alt="" />
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid pl-0 pr-0">
        <div className="animation-div1">
          <img src={animpic} alt="" className="animtaion-pic1" />
        </div>
        <div className="home-sec-div2">
          <div className="container ">
            <div className="row">
              <div className="col-md-8 col-12">
                <div>
                  <p className="about-jacob-text3">
                    Focused and resourceful PPC Expert with a strong record of client satisfaction and successful project completion. Thorough knowledge base and practical skill in effective PPC, SEO techniques and strategies. Able to function well as an independent worker or as part of a professional systems management team.
                  </p>
                  <p className="about-jacob-text3" >
                    I partner with Amazon, Walmart, and eBay Sellers to help them increase sales and realise their success in eCommerce Selling Business by generating data-driven PPC and SEO strategies.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className='d-md-flex  align-items-center about-us-years-div12'>
                  <div>
                    <p className='about-us-years-text1'>Years of Experience</p>
                    <h1 className='about-us-years-text2'>10</h1>
                  </div>
                  <div>
                    <p className='about-us-years-text1'>Projects Done</p>
                    <h1 className='about-us-years-text2'>70+</h1>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <LastSec></LastSec>
    </div>
  )
}

export default Aboutus
