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
import listingimg1 from '../Images/Group 1000008373.png'
import listingimg2 from '../Images/49a69f1b-35a3-4cc3-b658-75eee988be93 1.png'
import listingimg5 from '../Images/screencapture-amazon-s.png'
import listingimg3 from '../Images/67221136-fdd5-43bd-8742-3394024599f9 1.png'
import listingimg4 from '../Images/screencapture-amazon-stores-CAPOXO-page-CCF15424-4F34-4B7F-A697-E582AFDE884D-2023-08-09-15_51_08.png'



function ListingImage() {
    return (
        <div>
            <div className="container-fluid home-sec-div1">
                <div className="container abc">
                    <h1 className="amazon-profile-text1" id="profile-text1">
                        <Fade bottom cascade distance="60%">
                            <span className='glow-text12'>Listing</span>{' '}
                            <span className="profile-text1-span1">
                                Image
                            </span>{' '}
                            <span className='glow-text12'>/ A+</span>

                        </Fade>{" "}
                        <br className='d-md-block d-none'/>
                        <Fade bottom cascade distance="60%">
                            or Store <br className='d-md-none d-block'/>Creation
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

                        <h1 className="amazon-wonder-text1" id="wonder-text1">
                            <Fade bottom cascade distance="60%">
                                Why is good Amazon
                            </Fade>
                            <div className="wonder-text-div2">
                                <div className="amazon-wonder-text-div1 d-md-block d-none"></div>
                                <Fade bottom cascade distance="60%">
                                    Creative so Important
                                </Fade>
                            </div>
                        </h1>


                        <div className="image-sec-text2">
                            <div className="row">
                                <div className="col-md-4 col-12">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="107" height="60" viewBox="0 0 107 60" fill="none">
                                            <path d="M94.0752 42.7321C72.4676 64.2857 37.8757 65.6765 14.8458 45.4484C14.0595 44.7579 12.975 43.7244 11.5925 42.3478C6.28548 37.0678 2.60221 33.3868 0.542627 31.3048C-0.434737 30.3162 0.0438344 29.4309 0.908858 28.5614C4.44984 25.0084 7.9983 21.463 11.5543 17.925C12.9218 16.5634 14.0055 15.5306 14.8054 14.8266C36.8377 -4.56336 70.0163 -4.27128 91.7498 15.2738C92.4822 15.9328 93.5592 16.9723 94.9807 18.3923C98.2955 21.7041 101.609 25.0167 104.921 28.33C105.869 29.2781 106.588 30.2488 105.464 31.3677C101.669 35.1573 97.8723 38.9454 94.0752 42.7321ZM91.77 19.8348C70.4343 -1.53241 36.04 -1.62228 14.6189 19.5607C11.0884 23.0507 7.5744 26.5453 4.07686 30.0443C4.06939 30.0516 4.06346 30.0604 4.0594 30.07C4.05535 30.0796 4.05326 30.09 4.05326 30.1005C4.05326 30.1109 4.05535 30.1213 4.0594 30.1309C4.06346 30.1406 4.06939 30.1493 4.07686 30.1566C7.32725 33.4235 10.5806 36.6821 13.837 39.9325C15.2076 41.3016 16.2928 42.3344 17.0927 43.0309C38.7317 61.9176 71.4655 60.7155 91.761 40.4178C95.1702 37.0087 98.5793 33.5965 101.988 30.1814C102.014 30.1559 102.014 30.1297 101.988 30.1027C98.5913 26.6786 95.1852 23.2559 91.77 19.8348Z" fill="#515151" />
                                            <path d="M72.1777 30.105C72.1777 35.1843 70.1599 40.0557 66.5683 43.6474C62.9766 47.239 58.1052 49.2568 53.0259 49.2568C47.9465 49.2568 43.0751 47.239 39.4835 43.6474C35.8918 40.0557 33.874 35.1843 33.874 30.105C33.874 25.0256 35.8918 20.1542 39.4835 16.5626C43.0751 12.9709 47.9465 10.9531 53.0259 10.9531C58.1052 10.9531 62.9766 12.9709 66.5683 16.5626C70.1599 20.1542 72.1777 25.0256 72.1777 30.105ZM68.8704 30.1342C68.8704 25.9313 67.2008 21.9007 64.229 18.9288C61.2571 15.957 57.2264 14.2874 53.0236 14.2874C48.8208 14.2874 44.7901 15.957 41.8183 18.9288C38.8464 21.9007 37.1768 25.9313 37.1768 30.1342C37.1768 32.2152 37.5867 34.2758 38.3831 36.1985C39.1795 38.1211 40.3467 39.868 41.8183 41.3395C44.7901 44.3114 48.8208 45.9809 53.0236 45.9809C55.1046 45.9809 57.1653 45.5711 59.0879 44.7747C61.0105 43.9783 62.7575 42.811 64.229 41.3395C65.7005 39.868 66.8677 38.1211 67.6641 36.1985C68.4605 34.2758 68.8704 32.2152 68.8704 30.1342Z" fill="#515151" />
                                            <path d="M54.6914 38.0092C54.6936 38.353 54.7026 38.6855 54.588 38.9978C54.224 39.9797 53.1658 40.4313 52.2401 39.9213C51.6245 39.5828 51.3242 38.9514 51.3391 38.0272C51.3421 37.8744 51.268 37.7823 51.1167 37.7509C49.1725 37.3584 47.8483 36.2545 47.1443 34.439C46.9406 33.9163 46.88 33.4714 46.9623 33.1044C47.2724 31.7092 49.2002 31.6687 49.7619 33.0707C50.0697 33.8414 50.3303 34.3582 51.1234 34.7334C52.3996 35.3355 55.1924 35.6321 56.0395 34.0885C56.7607 32.7742 55.6598 32.0125 54.5071 31.7249C52.8939 31.322 51.5286 30.9438 50.4112 30.5903C45.6974 29.0984 46.6545 23.2387 51.2358 22.4298C51.3092 22.4178 51.3496 22.3744 51.3571 22.2995C51.3736 22.1572 51.3766 22.0232 51.3661 21.8973C51.1886 19.4843 55.0014 19.3832 54.6801 22.2433C54.6622 22.3961 54.7288 22.4875 54.8801 22.5175C56.4843 22.8365 57.625 23.718 58.302 25.162C58.5387 25.6697 58.6278 26.1109 58.5694 26.4853C58.4054 27.5436 56.8303 27.9884 56.1046 27.2021C56.0567 27.1496 55.8942 26.8336 55.6171 26.2539C55.2636 25.508 54.6135 25.0871 53.6668 24.9912C52.6513 24.8878 51.2762 24.8699 50.5909 25.6383C49.8854 26.4314 50.1775 27.402 51.1998 27.7278C52.9344 28.2783 54.4959 28.5164 56.1878 29.1725C61.0252 31.0509 59.6344 37.088 54.8172 37.8609C54.7333 37.8744 54.6914 37.9239 54.6914 38.0092Z" fill="#68D61C" />
                                        </svg>
                                        <h1 className="images-listing-text1">Enhanced Visibility</h1>
                                        <p className="images-listing-text2">The customers only sees what you show them.</p>
                                    </div>
                                </div>

                                <div className="col-md-4 col-12">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="77" height="66" viewBox="0 0 77 66" fill="none">
                                            <path d="M76.8709 23.0997L64.0452 63.4869C63.3601 65.1001 61.6254 66.0141 59.9747 65.4899C41.2308 59.5384 22.4875 53.5861 3.74498 47.6332C2.98633 47.3922 2.47434 47.187 2.20898 47.0175C0.990035 46.2387 0.460434 44.7797 0.794482 43.3637L13.6147 2.99386C14.3152 1.31479 16.0266 0.48722 17.7716 1.04002C36.7215 7.04249 55.669 13.0524 74.6142 19.0697C76.3304 19.6147 77.2692 21.3056 76.8709 23.0997ZM18.9932 22.1938C20.2733 21.538 21.7912 21.7739 22.7899 22.7235C23.0903 23.0084 23.4869 23.6268 23.9799 24.5786C26.1719 28.8066 28.3613 33.0298 30.5482 37.248C30.5515 37.2545 30.556 37.2603 30.5615 37.2649C30.567 37.2696 30.5734 37.2732 30.5803 37.2754C30.5873 37.2776 30.5945 37.2784 30.6017 37.2777C30.609 37.2771 30.616 37.275 30.6224 37.2716C38.4152 33.2401 46.2142 29.2161 54.0195 25.1995C55.5918 24.3903 57.6554 24.9722 58.4521 26.5065C61.5469 32.4748 64.6372 38.4381 67.7233 44.3964C67.7268 44.4028 67.7321 44.408 67.7385 44.4114C67.7448 44.4149 67.7521 44.4164 67.7593 44.4158C67.7665 44.4152 67.7734 44.4126 67.7792 44.4082C67.7849 44.4038 67.7893 44.3978 67.7917 44.3909C70.0649 37.2356 72.3384 30.0753 74.612 22.9101C74.964 21.8018 74.5935 21.3836 73.5062 21.0383C54.8188 15.1028 36.1308 9.16812 17.4421 3.23408C16.3091 2.87427 15.8759 3.17605 15.513 4.31896C13.0304 12.1305 10.5522 19.9331 8.07812 27.7265C8.05641 27.7949 8.07744 27.8129 8.14121 27.7805C11.7447 25.9162 15.362 24.0539 18.9932 22.1938ZM56.5695 27.6891C56.1268 26.8345 55.4263 26.9289 54.6888 27.3109C41.0723 34.3614 27.4637 41.4072 13.8629 48.4483C13.8011 48.4803 13.8031 48.5068 13.869 48.5277C29.3043 53.4304 44.7543 58.3369 60.219 63.2471C61.3508 63.6065 61.7836 63.3059 62.1461 62.1643C63.7026 57.2686 65.2549 52.3821 66.8029 47.5046C66.8083 47.4877 66.8102 47.4699 66.8087 47.4522C66.8071 47.4344 66.802 47.417 66.7937 47.401C63.3802 40.8173 59.9722 34.2467 56.5695 27.6891ZM21.6723 24.9407C21.3152 24.2533 20.7936 23.7286 19.978 24.151C15.7043 26.3611 11.4295 28.575 7.15343 30.7925C7.11662 30.8122 7.08901 30.8454 7.07644 30.885C5.73098 35.1132 4.38828 39.3427 3.04833 43.5735C2.69637 44.6818 3.06715 45.0947 4.15283 45.4408C6.34039 46.1392 8.52516 46.8334 10.7071 47.5236C10.7323 47.5316 10.7586 47.5346 10.7848 47.5324C10.8109 47.5302 10.8363 47.5228 10.8595 47.5108L28.5639 38.3439C28.5774 38.3368 28.5875 38.3246 28.5922 38.3101C28.5968 38.2955 28.5955 38.2797 28.5886 38.2661C26.282 33.8167 23.9765 29.3749 21.6723 24.9407Z" fill="#515151" />
                                        </svg>
                                        <h1 className="images-listing-text1">Brand Impact</h1>
                                        <p className="images-listing-text2">The customer’s perception is:
                                            bad product image = bad product</p>
                                    </div>
                                </div>


                                <div className="col-md-4 col-12">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="43" viewBox="0 0 31 43" fill="none">
                                            <path d="M9.54762 1.55469H19.6667L14.9048 15.1261H28L13.7143 41.5547L16.0952 22.269H3L9.54762 1.55469Z" stroke="#68D61C" stroke-width="3" />
                                        </svg>
                                        <h1 className="images-listing-text1">Conversion Power</h1>
                                        <p className="images-listing-text2">Images account for around 75%
                                            of the purchase decision.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="container-fluid amazon-home-sec-div3">
                <div className="container">

                    <div className='row listing-img-text-div1'>
                        <div className="col-lg-6 col-12">
                            <div>
                                <h1 className='listing-img-text12'>Listing Image</h1>
                                <p className='listing-img-text22'>Product Images for Amazon  ensures your products always put their best foot forward, captivating shoppers and encouraging clicks.</p>
                                <ul className="images-ul-text1">
                                    <li>Infuse your listing with high-quality, professionally designed images and infographics.</li>
                                    <li>Seamless process from product photography to image editing, providing a polished and refined look for your listings.</li>
                                    <li>Enhance your Amazon success with high-quality images proven to increase customer engagement and conversions.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 d-flex align-items-center justify-content-end">
                            <div>
                                <img src={listingimg1} alt="" className="img-fluid" />
                            </div>
                        </div>

                        <div className='col-lg-6 col-12 d-flex align-items-center justify-content-center'>
                            <div className="row justify-content-center">
                                <img src={listingimg2} alt="" className="img-fluid" />
                                <img src={listingimg3} alt="" className="img-fluid mt-3" />
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-12">
                            <div>
                                <h1 className='listing-img-text12'>A+/EBC Content</h1>
                                <p className='listing-img-text22'>A+ Content Design  will help you elevate your Amazon listings, making them visually engaging and information-rich. With our help, you can highlight the unique features of your product and tell your brand’s story in a compelling way</p>
                                <ul className="images-ul-text1">
                                    <li>I craft standout designs that elevate your Amazon presence.</li>
                                    <li>My engaging content enhances customer interest and increases sales.</li>
                                    <li>I handle the entire process, from design to upload, effortlessly.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 col-12">
                            <div>
                                <h1 className='listing-img-text12'>Store Front</h1>
                                <p className='listing-img-text22'>Storefront Design helps you create an engaging, consistent, and shopper-friendly experience that drives brand recognition and sales.</p>
                                <ul className="images-ul-text1">
                                    <li>Customized, professionally designed Amazon Storefront that truly reflects your brand's identity.</li>
                                    <li>A seamless, easy-to-navigate storefront that enhances customer interaction and encourages more sales.</li>
                                    <li>Distinguish your brand in the crowded Amazon marketplace and attract more loyal customers.</li>
                                </ul>
                            </div>
                        </div>

                        <div className='col-lg-6 col-12 d-flex align-items-center justify-content-center'>
                            <div className=' row justify-content-center'>
                                <img src={listingimg4} alt="" className="img-fluid" />
                                <img src={listingimg5} alt="" className="img-fluid mt-3" />
                            </div>
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
    );
}

export default ListingImage;
