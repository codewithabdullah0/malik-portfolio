import React from 'react'
import './Contact.css'
import Fade from "react-reveal/Fade";
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <>
        <div className='container-fluid'>
            <div className='contact-div1'>
                <div className='row h-100'>
                    <div className='col-lg-5 col-12 h-100 for-responsive-div12'>
                          <div className='contact-text-div1'>
                              <h1 className='contact-text1' ><Fade bottom cascade distance='60%'>contact</Fade></h1>
                              <p className='contact-text2'>Reach out through the form and I'll get back to you in the next 24 hours.</p>

                              <div>
                                <div className='contact-card-div'>
                                      <h1 className='contact-card-text1'>Send me an email</h1>
                                      <p className='contact-card-text2'>weeqasim@gmail.com</p>
                                </div>
                                  <div className='contact-card-div'>
                                      <h1 className='contact-card-text1'>Give me a call</h1>
                                      <p className='contact-card-text2'>+92  313  5596055</p>
                                  </div>
                                  <div className='contact-card-div1'>
                                    <Link to='/works' className='contact-port-btn1'> Book Meeting</Link>
                                  </div>
                              </div>
                        </div>
                    </div>

                    <div className='col-lg-7 col-12 form-main-div'>
                        <div className='col-sm-11 col-12'>
                            <form action="">
                                <div className='col-12'>
                                      <input type="text" name="fname" class="form-control contact-input-field1" placeholder="Full Name"  />
                                </div>
                                  <div className='col-12 form-input-div2'>
                                      <input type="email" name="email" class="form-control contact-input-field1" placeholder="Email Address" />
                                  </div>
                                  <div className='col-12 form-input-div2'>
                                      <input type="number" name="phone" class="form-control contact-input-field1" placeholder="Phone Number" />
                                  </div>
                                  <div className='col-12 form-input-div2'>
                                      <textarea  name="description" class="form-control contact-input-field1"  rows={4} placeholder="Message..." ></textarea>
                                  </div>
                                  <a href="#" className="contact-us-btn1">
                                      {" "}
                                      Send
                                  </a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact
