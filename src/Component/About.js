import React from "react";
import profileimg from "../Images/Muhammad Qasim 3.png";
import profileimg2 from "../Images/profile3.jpeg";
import animpic from "../Images/anim2.svg";
import "./About.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import profilepic5 from "../Images/profile5.png";
import followlog1 from "../Images/367593_linkedin_business_network_social_icon (3).svg";
import followlog2 from "../Images/5296523_be_behance_design community_portfolio_behance logo_icon.svg";
import followlog3 from "../Images/104501_twitter_bird_icon.svg";
import followlog4 from "../Images/104498_facebook_icon.svg";
import followlog5 from "../Images/5305164_play_video_youtube_youtube logo_icon.svg";
import followlog6 from "../Images/4691240_instagram_icon.svg";
import LastSec from "./LastSec";
import Fade from "react-reveal/Fade";
import { Link } from 'react-router-dom'
import agencypics1 from '../Images/Group 1000001833.svg'
import agencypics2 from '../Images/Group 1000008174.svg'
import agencypics3 from '../Images/Group 1000001818.svg'
import agencypics4 from '../Images/Group (1).svg'
import project1 from "../Images/Group 1000008197.png";
import project2 from "../Images/Group 1000008200.png";
import project3 from "../Images/Group 1000008199.png";
import project4 from "../Images/Group 1000008207.png";
import arrowpic from "../Images/arror.svg";
import TechStack from "./TechStack";





function About() {
  return (
    <div>
      <div className="container-fluid about-sec-div1">
        <div className="container">
          <h1 className="profile-text1">
            <Fade bottom cascade distance='60%'>
              i'm award-</Fade> <Fade bottom cascade distance='60%'><img src={profileimg} alt="" className="profile-img1" /></Fade>{" "}
            <span className="profile-text1-span1">
              <Fade bottom cascade distance='60%'>winning,</Fade> <br className="d-lg-block d-none" />
              <Fade bottom cascade distance='60%'>digital</Fade>{" "}
            </span>{" "}
            <Fade bottom cascade distance='60%'>
              <img
                src={profileimg2}
                alt=""
                className="profile-img2"
              /></Fade> <Fade bottom cascade distance='60%'>Designer</Fade>
          </h1>

          <div className="home-btn-div1 d-flex align-items-center justify-content-center">
            <Link to="/works" className="view-all-btn1">
              <svg className="btn-svg11" xmlns="http://www.w3.org/2000/svg" width="56" height='56' viewBox="0 0 60 60" fill="none">
                <circle cx="27" cy="27" r="27" fill="#F0F2F5" />
              </svg>
              View Portfolio
            </Link>
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
              <div className="col-md-4 col-12">
                <div>
                  <p className="about-jacob-text2"><Fade bottom cascade distance='45%'>Muhammad</Fade></p>
                  <h1 className="about-jacob-text1"><Fade bottom cascade distance='60%'>Qasim</Fade></h1>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div>
                  <p className="about-jacob-text3">
                    I am a passionate and creative digital designer with a focus on branding, UI UX design, and marketing creatives. With a keen eye for detail and a deep understanding of design principles, I strive to create captivating and meaningful experiences that leave a lasting impression.
                  </p>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div>
                  <p className="about-jacob-text3">
                    My expertise lies in crafting cohesive brand identities, developing intuitive user interfaces, and delivering compelling marketing materials. Combining my technical skills with a strong sense of aesthetics, I bring ideas to life and help brands establish a strong and impactful presence in the digital landscape.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-ach-main-div">
              <div>
                <h1 className="about-ach-text1"><Fade bottom cascade distance='60%'>achievements</Fade></h1>
              </div>
              <div className="row about-ach-div1">
                <div className="col-md-4 col-12">
                  <h1 className="about-year-text1 mb-4">Years of Experience</h1>
                  <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                    {({ isVisible }) => (
                      <div style={{ height: 100 }}>
                        {isVisible ? (
                          <CountUp
                            end={10}
                            duration={3}
                            className="about-year-text2"
                            start={1}
                          />
                        ) : null}
                      </div>
                    )}
                  </VisibilitySensor>
                </div>

                <div className="col-md-4 col-12">
                  <h1 className="about-year-text1 mb-4">Projects Done</h1>
                  <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                    {({ isVisible }) => (
                      <div style={{ height: 100 }}>
                        {isVisible ? (
                          <CountUp
                            end={200}
                            duration={5}
                            className="about-year-text2"
                            suffix=" +"
                            start={1}
                          />
                        ) : null}
                      </div>
                    )}
                  </VisibilitySensor>
                </div>

                <div className="col-md-4 col-12">
                  <h1 className="about-year-text1 mb-4">Agencies I Worked</h1>
                  <VisibilitySensor partialVisibility offset={{ bottom: 50 }}>
                    {({ isVisible }) => (
                      <div style={{ height: 100 }}>
                        {isVisible ? (
                          <CountUp
                            end={4}
                            duration={4}
                            className="about-year-text2"
                            start={1}
                          />
                        ) : null}
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid home-sec-div3">
        <div className="container">
          <div>
            <h1 className="what-text1"><Fade bottom cascade distance='60%'>Agencies I Worked With.</Fade></h1>
          </div>

          <div className="row card-div1">
            <div className="col-md-6 col-12 mt-sm-0 mt-4">
              <div className="card-text1-divs1">
                <div className='agency-for-reponsive'>
                  <img src={agencypics1} className="agency-img-div11" alt="" />
                  <h1 className="agency-text21">Graphic & UI UX Designer</h1>
                  <p className="agency-text22">Nov 2022 - Present</p>
                  <h1><a href="https://www.graphicszoo.com/"  target="_blank" className="agency-text23"><svg className="mr-2" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9944 5.80512C21.9429 6.04557 21.9028 6.29175 21.8456 6.5322C21.6166 7.45392 21.1758 8.26114 20.506 8.93668C18.943 10.5111 17.3801 12.0854 15.8 13.6369C13.8077 15.5891 10.6475 15.6235 8.59228 13.7399C8.54076 13.6941 8.48923 13.6426 8.44916 13.6025C9.1018 12.9556 9.743 12.3201 10.4014 11.6675C10.7048 11.9423 11.0769 12.1656 11.5177 12.2629C12.4337 12.4575 13.2581 12.2858 13.9337 11.616C15.4508 10.1103 16.9622 8.59319 18.4736 7.07607C19.172 6.37762 19.4182 5.53032 19.1434 4.57998C18.8743 3.63536 18.2331 3.03996 17.2713 2.82241C16.4183 2.62776 15.6455 2.84531 15.0157 3.45216C14.1856 4.24793 13.3784 5.07233 12.5711 5.891C12.4509 6.01122 12.3593 6.0284 12.199 5.97115C11.2086 5.6162 10.1953 5.4559 9.14761 5.6162C9.11326 5.62192 9.07891 5.62192 9.03883 5.62192C9.01593 5.62192 8.99876 5.6162 8.95296 5.61047C9.01021 5.5475 9.05601 5.49598 9.10181 5.45018C10.3842 4.16778 11.6609 2.89111 12.9433 1.60872C13.8192 0.727072 14.8611 0.1832 16.1034 0.0400755C16.1378 0.0343505 16.1664 0.0171749 16.2008 0C16.5614 0 16.9164 0 17.2771 0C17.3171 0.0114499 17.3572 0.0343505 17.3973 0.0400755C19.5213 0.303424 21.2846 1.83772 21.8284 3.91588C21.8971 4.18496 21.9429 4.45403 22.0002 4.7231C21.9944 5.0895 21.9944 5.44445 21.9944 5.80512Z" fill="#ADB5BD" />
                    <path d="M13.5718 8.40052C12.9134 9.04744 12.2722 9.68864 11.6196 10.3356C11.2475 9.98634 10.7838 9.75161 10.2571 9.68291C9.46701 9.57986 8.73421 9.74589 8.15599 10.3127C6.58735 11.8584 5.01871 13.4099 3.48441 14.9842C2.11042 16.3926 2.79742 18.6997 4.70956 19.1577C5.63128 19.381 6.43277 19.1119 7.1026 18.4478C7.88692 17.675 8.66551 16.8907 9.43839 16.1121C9.54144 16.009 9.62158 15.9804 9.76471 16.0319C10.7838 16.4212 11.8314 16.593 12.9134 16.4098C12.9363 16.404 12.9535 16.4098 13.0108 16.4098C12.965 16.467 12.9363 16.5071 12.902 16.5472C11.6024 17.8467 10.32 19.1635 8.99756 20.4459C7.50907 21.8886 5.72288 22.358 3.74204 21.7512C1.78982 21.1558 0.558952 19.7875 0.129579 17.7895C-0.242545 16.0491 0.186828 14.4575 1.4177 13.1694C3.00352 11.5092 4.63513 9.88901 6.28965 8.29747C7.42319 7.20972 8.83726 6.8147 10.3945 6.9521C11.5108 7.04943 12.4955 7.4559 13.3485 8.1887C13.423 8.2574 13.4974 8.33182 13.5718 8.40052Z" fill="#6C757D" />
                  </svg>  graphicszoo.com
                  </a></h1>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-12">
              <div className="card-text1-divs1">
                <div className='agency-for-reponsive'>
                  <img src={agencypics2} className="agency-img-div11" alt="" />
                  <h1 className="agency-text21">Sr. UI UX Designer</h1>
                  <p className="agency-text22">Feb 2022 - Jul 2022</p>
                  <h1><a href="https://www.halfpastnine.io/" target="_blank" className="agency-text23"><svg className="mr-2" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9944 5.80512C21.9429 6.04557 21.9028 6.29175 21.8456 6.5322C21.6166 7.45392 21.1758 8.26114 20.506 8.93668C18.943 10.5111 17.3801 12.0854 15.8 13.6369C13.8077 15.5891 10.6475 15.6235 8.59228 13.7399C8.54076 13.6941 8.48923 13.6426 8.44916 13.6025C9.1018 12.9556 9.743 12.3201 10.4014 11.6675C10.7048 11.9423 11.0769 12.1656 11.5177 12.2629C12.4337 12.4575 13.2581 12.2858 13.9337 11.616C15.4508 10.1103 16.9622 8.59319 18.4736 7.07607C19.172 6.37762 19.4182 5.53032 19.1434 4.57998C18.8743 3.63536 18.2331 3.03996 17.2713 2.82241C16.4183 2.62776 15.6455 2.84531 15.0157 3.45216C14.1856 4.24793 13.3784 5.07233 12.5711 5.891C12.4509 6.01122 12.3593 6.0284 12.199 5.97115C11.2086 5.6162 10.1953 5.4559 9.14761 5.6162C9.11326 5.62192 9.07891 5.62192 9.03883 5.62192C9.01593 5.62192 8.99876 5.6162 8.95296 5.61047C9.01021 5.5475 9.05601 5.49598 9.10181 5.45018C10.3842 4.16778 11.6609 2.89111 12.9433 1.60872C13.8192 0.727072 14.8611 0.1832 16.1034 0.0400755C16.1378 0.0343505 16.1664 0.0171749 16.2008 0C16.5614 0 16.9164 0 17.2771 0C17.3171 0.0114499 17.3572 0.0343505 17.3973 0.0400755C19.5213 0.303424 21.2846 1.83772 21.8284 3.91588C21.8971 4.18496 21.9429 4.45403 22.0002 4.7231C21.9944 5.0895 21.9944 5.44445 21.9944 5.80512Z" fill="#ADB5BD" />
                    <path d="M13.5718 8.40052C12.9134 9.04744 12.2722 9.68864 11.6196 10.3356C11.2475 9.98634 10.7838 9.75161 10.2571 9.68291C9.46701 9.57986 8.73421 9.74589 8.15599 10.3127C6.58735 11.8584 5.01871 13.4099 3.48441 14.9842C2.11042 16.3926 2.79742 18.6997 4.70956 19.1577C5.63128 19.381 6.43277 19.1119 7.1026 18.4478C7.88692 17.675 8.66551 16.8907 9.43839 16.1121C9.54144 16.009 9.62158 15.9804 9.76471 16.0319C10.7838 16.4212 11.8314 16.593 12.9134 16.4098C12.9363 16.404 12.9535 16.4098 13.0108 16.4098C12.965 16.467 12.9363 16.5071 12.902 16.5472C11.6024 17.8467 10.32 19.1635 8.99756 20.4459C7.50907 21.8886 5.72288 22.358 3.74204 21.7512C1.78982 21.1558 0.558952 19.7875 0.129579 17.7895C-0.242545 16.0491 0.186828 14.4575 1.4177 13.1694C3.00352 11.5092 4.63513 9.88901 6.28965 8.29747C7.42319 7.20972 8.83726 6.8147 10.3945 6.9521C11.5108 7.04943 12.4955 7.4559 13.3485 8.1887C13.423 8.2574 13.4974 8.33182 13.5718 8.40052Z" fill="#6C757D" />
                  </svg>  halfpastnine.com
                  </a></h1>
                </div>
              </div>
            </div>


            <div className="col-md-6 col-12 ">
              <div className="card-text1-divs12">
                <div className='agency-for-reponsive'>
                  <img src={agencypics4} className="agency-img-div11" alt="" />
                  <h1 className="agency-text21">Graphic & UI UX Designer</h1>
                  <p className="agency-text22">Oct 2021 - Feb 2022</p>
                  <h1><a href="https://advanceamz.com/" target='_blank' className="agency-text23"><svg className="mr-2" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9944 5.80512C21.9429 6.04557 21.9028 6.29175 21.8456 6.5322C21.6166 7.45392 21.1758 8.26114 20.506 8.93668C18.943 10.5111 17.3801 12.0854 15.8 13.6369C13.8077 15.5891 10.6475 15.6235 8.59228 13.7399C8.54076 13.6941 8.48923 13.6426 8.44916 13.6025C9.1018 12.9556 9.743 12.3201 10.4014 11.6675C10.7048 11.9423 11.0769 12.1656 11.5177 12.2629C12.4337 12.4575 13.2581 12.2858 13.9337 11.616C15.4508 10.1103 16.9622 8.59319 18.4736 7.07607C19.172 6.37762 19.4182 5.53032 19.1434 4.57998C18.8743 3.63536 18.2331 3.03996 17.2713 2.82241C16.4183 2.62776 15.6455 2.84531 15.0157 3.45216C14.1856 4.24793 13.3784 5.07233 12.5711 5.891C12.4509 6.01122 12.3593 6.0284 12.199 5.97115C11.2086 5.6162 10.1953 5.4559 9.14761 5.6162C9.11326 5.62192 9.07891 5.62192 9.03883 5.62192C9.01593 5.62192 8.99876 5.6162 8.95296 5.61047C9.01021 5.5475 9.05601 5.49598 9.10181 5.45018C10.3842 4.16778 11.6609 2.89111 12.9433 1.60872C13.8192 0.727072 14.8611 0.1832 16.1034 0.0400755C16.1378 0.0343505 16.1664 0.0171749 16.2008 0C16.5614 0 16.9164 0 17.2771 0C17.3171 0.0114499 17.3572 0.0343505 17.3973 0.0400755C19.5213 0.303424 21.2846 1.83772 21.8284 3.91588C21.8971 4.18496 21.9429 4.45403 22.0002 4.7231C21.9944 5.0895 21.9944 5.44445 21.9944 5.80512Z" fill="#ADB5BD" />
                    <path d="M13.5718 8.40052C12.9134 9.04744 12.2722 9.68864 11.6196 10.3356C11.2475 9.98634 10.7838 9.75161 10.2571 9.68291C9.46701 9.57986 8.73421 9.74589 8.15599 10.3127C6.58735 11.8584 5.01871 13.4099 3.48441 14.9842C2.11042 16.3926 2.79742 18.6997 4.70956 19.1577C5.63128 19.381 6.43277 19.1119 7.1026 18.4478C7.88692 17.675 8.66551 16.8907 9.43839 16.1121C9.54144 16.009 9.62158 15.9804 9.76471 16.0319C10.7838 16.4212 11.8314 16.593 12.9134 16.4098C12.9363 16.404 12.9535 16.4098 13.0108 16.4098C12.965 16.467 12.9363 16.5071 12.902 16.5472C11.6024 17.8467 10.32 19.1635 8.99756 20.4459C7.50907 21.8886 5.72288 22.358 3.74204 21.7512C1.78982 21.1558 0.558952 19.7875 0.129579 17.7895C-0.242545 16.0491 0.186828 14.4575 1.4177 13.1694C3.00352 11.5092 4.63513 9.88901 6.28965 8.29747C7.42319 7.20972 8.83726 6.8147 10.3945 6.9521C11.5108 7.04943 12.4955 7.4559 13.3485 8.1887C13.423 8.2574 13.4974 8.33182 13.5718 8.40052Z" fill="#6C757D" />
                  </svg> advanceamz.com
                  </a></h1>
                </div>
              </div>
            </div>


            <div className="col-md-6 col-12">
              <div className="card-text1-divs12">
                <div className='agency-for-reponsive'>
                  <img src={agencypics3} className="agency-img-div11" alt="" />
                  <h1 className="agency-text21">Graphic & UI UX Designer</h1>
                  <p className="agency-text22">Nov 2016 - Aug 2021</p>
                  <h1><a href="https://brainsouls.com/" target='_blank' className="agency-text23"><svg className="mr-2" width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9944 5.80512C21.9429 6.04557 21.9028 6.29175 21.8456 6.5322C21.6166 7.45392 21.1758 8.26114 20.506 8.93668C18.943 10.5111 17.3801 12.0854 15.8 13.6369C13.8077 15.5891 10.6475 15.6235 8.59228 13.7399C8.54076 13.6941 8.48923 13.6426 8.44916 13.6025C9.1018 12.9556 9.743 12.3201 10.4014 11.6675C10.7048 11.9423 11.0769 12.1656 11.5177 12.2629C12.4337 12.4575 13.2581 12.2858 13.9337 11.616C15.4508 10.1103 16.9622 8.59319 18.4736 7.07607C19.172 6.37762 19.4182 5.53032 19.1434 4.57998C18.8743 3.63536 18.2331 3.03996 17.2713 2.82241C16.4183 2.62776 15.6455 2.84531 15.0157 3.45216C14.1856 4.24793 13.3784 5.07233 12.5711 5.891C12.4509 6.01122 12.3593 6.0284 12.199 5.97115C11.2086 5.6162 10.1953 5.4559 9.14761 5.6162C9.11326 5.62192 9.07891 5.62192 9.03883 5.62192C9.01593 5.62192 8.99876 5.6162 8.95296 5.61047C9.01021 5.5475 9.05601 5.49598 9.10181 5.45018C10.3842 4.16778 11.6609 2.89111 12.9433 1.60872C13.8192 0.727072 14.8611 0.1832 16.1034 0.0400755C16.1378 0.0343505 16.1664 0.0171749 16.2008 0C16.5614 0 16.9164 0 17.2771 0C17.3171 0.0114499 17.3572 0.0343505 17.3973 0.0400755C19.5213 0.303424 21.2846 1.83772 21.8284 3.91588C21.8971 4.18496 21.9429 4.45403 22.0002 4.7231C21.9944 5.0895 21.9944 5.44445 21.9944 5.80512Z" fill="#ADB5BD" />
                    <path d="M13.5718 8.40052C12.9134 9.04744 12.2722 9.68864 11.6196 10.3356C11.2475 9.98634 10.7838 9.75161 10.2571 9.68291C9.46701 9.57986 8.73421 9.74589 8.15599 10.3127C6.58735 11.8584 5.01871 13.4099 3.48441 14.9842C2.11042 16.3926 2.79742 18.6997 4.70956 19.1577C5.63128 19.381 6.43277 19.1119 7.1026 18.4478C7.88692 17.675 8.66551 16.8907 9.43839 16.1121C9.54144 16.009 9.62158 15.9804 9.76471 16.0319C10.7838 16.4212 11.8314 16.593 12.9134 16.4098C12.9363 16.404 12.9535 16.4098 13.0108 16.4098C12.965 16.467 12.9363 16.5071 12.902 16.5472C11.6024 17.8467 10.32 19.1635 8.99756 20.4459C7.50907 21.8886 5.72288 22.358 3.74204 21.7512C1.78982 21.1558 0.558952 19.7875 0.129579 17.7895C-0.242545 16.0491 0.186828 14.4575 1.4177 13.1694C3.00352 11.5092 4.63513 9.88901 6.28965 8.29747C7.42319 7.20972 8.83726 6.8147 10.3945 6.9521C11.5108 7.04943 12.4955 7.4559 13.3485 8.1887C13.423 8.2574 13.4974 8.33182 13.5718 8.40052Z" fill="#6C757D" />
                  </svg>  brainsouls.com
                  </a></h1>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row cards-div1">
            <div className="col-md-4 col-12">
              <Fade bottom duration={3000}>
              <div className="card-text-div1">
                <div>
                  <h1 className="exper-text1">ui/ux designer</h1>
                  <h1 className="exper-text2">Adobe 2006 - 2012</h1>
                  <hr className="ach-hr" />
                </div>
                <div>
                  <p className="exper-text4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, quis viverra ornare libero vitae.
                  </p>
                </div>
              </div>
              </Fade>
            </div>

            <div className="col-md-4 col-12">
              <Fade bottom duration={3000}>
              <div className="card-text-div2">
                <div>
                  <h1 className="exper-text1">senior interface developer</h1>
                  <h1 className="exper-text2">Adobe 2006 - 2012</h1>
                  <hr className="ach-hr" />
                </div>
                <div>
                  <p className="exper-text4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, quis viverra ornare libero vitae.
                  </p>
                </div>
              </div>
              </Fade>
            </div>

            <div className="col-md-4 col-12 mt-md-4 mt-0">
              <Fade bottom duration={3000}>
              <div className="card-text-div3">
                <div>
                  <h1 className="exper-text1">full-stack developer</h1>
                  <h1 className="exper-text2">Adobe 2006 - 2012</h1>
                  <hr className="ach-hr" />
                </div>
                <div>
                  <p className="exper-text4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, quis viverra ornare libero vitae.
                  </p>
                </div>
              </div>
              </Fade>
            </div>
          </div> */}
        </div>
      </div>

      {/* <div className="container-fluid about-sec-div4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 for-responsive-div1">
              <img src={profilepic5} alt="" className="profile5" />
            </div>
            <div className="col-lg-6 col-12 d-flex align-items-center for-responsive-div1">
              <div className="follow-div1 d-flex align-items-center">
                <div className="follow-div2">
                  <h1 className="follows-text2">follow me </h1>
                  <p className="follows-text3">
                    I'm Jacob James, a designer who works with startups looking
                    to push creative boundaries.
                  </p>
                  <hr className="follow-hr" />
                  <div className="row follow-logo-div">
                    <img src={followlog1} alt="" className="follow-logos" />
                    <img src={followlog2} alt="" className="follow-logos" />
                    <img src={followlog3} alt="" className="follow-logos" />
                    <img src={followlog4} alt="" className="follow-logos" />
                    <img src={followlog5} alt="" className="follow-logos" />
                    <img src={followlog6} alt="" className="follow-logos" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
<div className='mb-sm-5 mb-4'>
  <TechStack></TechStack>
</div>
      

      <div className="container-fluid home-sec-div4 pl-0 pr-0">
        <div>
          <div className="container">
            <h1 className="selected-text1"><Fade bottom cascade distance='60%'>Selected works</Fade></h1>
            <div className="back-div1"></div>
            <p className="selected-para1">
              <Link to="/about" className="home-more-text1">
                More about me <img src={arrowpic} alt="" />
              </Link>
            </p>
          </div>

          <div className="project-main-div p-0">
            <div className="project1-div1">
              <div className="project1-div2">
                <a href="https://www.behance.net/gallery/164844189/Sheikh-Chargha-Branding-Social-Media-App-Design" target='_blank' className="project1-link1">
                  <div className="count-top-div">
                    <p className="count-top-text1"> 1/4</p>
                  </div>
                  <img src={project1} alt="" className="project1-img1" />

                </a>
              </div>
            </div>

            <div className="project2-div1">
              <div className="project1-div2">
                <a href="https://www.behance.net/gallery/164844083/Payever-SaaS-Product-Design" target='_blank' className="project1-link1">
                  <div className="count-top-div">
                    <p className="count-top-text1"> 2/4</p>
                  </div>
                  <img src={project2} alt="" className="project1-img1" />
                  {/* <div className="project-name-div">
                    <h1 className="project-name-text1"> kickfy</h1>
                  </div> */}
                </a>
              </div>
            </div>

            <div className="project3-div1">
              <div className="project1-div2">
                <a href="https://www.behance.net/gallery/164843931/HalfPastNine-Brand-Guideline-and-Social-Media-Design" target='_blank' className="project1-link1">
                  <div className="count-top-div">
                    <p className="count-top-text1"> 3/4</p>
                  </div>
                  <img src={project3} alt="" className="project1-img1" />
                  {/* <div className="project-name-div">
                    <h1 className="project-name-text1"> Bikefy</h1>
                  </div> */}
                </a>
              </div>
            </div>

            <div className="project2-div1">
              <div className="project1-div2">
                <a href="https://www.behance.net/gallery/164843331/Talk-Asia-VoIP-Branding-CRM-System-and-Social-Media" target='_blank' className="project1-link1">
                  <div className="count-top-div">
                    <p className="count-top-text1"> 4/4</p>
                  </div>
                  <img src={project4} alt="" className="project1-img1" />
                  {/* <div className="project-name-div">
                    <h1 className="project-name-text1"> NetFy</h1>
                  </div> */}
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

export default About;
