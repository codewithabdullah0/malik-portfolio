import React from 'react'
import './Footer.css'
import animpic from "../Images/anim2.svg";
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div>
            <div className='container-fluid pl-0 pr-0'>
                {/* <div className="animation-div1">
                    <img src={animpic} alt="" className="animtaion-pic1" />
                </div> */}
                <div className='dark-footer-div1'>
                    <div className='container  dark-footer-div2'>
                        <div className='row'>
                            <div className='col-md-6 col-12'>
                                <div>
                                    <h1 className='dark-footer-text1'>Ahtisham. </h1>
                                    <p className='dark-footer-text2'>I am specialised in PPC, Listing <br className='d-sm-block d-none' /> Optimisation, Product Ranking, <br className='d-sm-block d-none' /> Campaign Creation & account <br className='d-sm-block d-none' /> Management.</p>
                                </div>
                            </div>
                            <div className='col-md-6 col-12'>
                                <div className='d-flex dark-footer-div3'>
                                    <div>
                                        <h1 className='dark-footer-text3'>PAGES</h1>
                                        <Link to='/'>
                                            <p className='dark-footer-text4'>HOME</p>
                                        </Link>
                                        <Link to='/about'>
                                            <p className='dark-footer-text4'>ABOUT</p>
                                        </Link>
                                        <Link to='/contact'>
                                            <p className='dark-footer-text4'>CONTACT</p>
                                        </Link>
                                    </div>
                                    <div>
                                        <h1 className='dark-footer-text3'>CONTACT</h1>
                                        <p className='dark-footer-text5'>hello@ahtisham.com</p>
                                        <p className='dark-footer-text5'>+44 20 1234 5678</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>


                <div className='footer-bottom-div1 container text-center'>
                    <div className='footer-bottom-div2'>
                    </div>
                    <div>
                            <div className='row footer-bottom-div3' >
                            <div className='col-md-6 col-12 d-flex justify-content-md-start justify-content-center'>
                                    <p className='footer-bottom-text1'>© Ahtisham — Powered by</p>
                            </div>
                                <div className='col-md-6 col-12 d-flex justify-content-md-end justify-content-center'>
                                    <p className='footer-bottom-text2'>Designed by <span>Flograb</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>


        </div>
    )
}

export default Footer
