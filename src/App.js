import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import NavBar from './Component/NavBar';
import Work from './Component/Work';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from './Component/ScrolltoTop'
import Contact from './Component/Contact';
import { gsap, Power3 } from 'gsap';
import { useEffect } from 'react';
import { useState } from 'react';
import { Dots } from 'react-preloaders';
import { HashLoader } from 'react-spinners';
import MobileNav from './Component/MobileNav'
import Footer from './Component/Footer';
import Amazon from './Component/Amazon';
import Walmart from './Component/Walmart';
import Aboutus from './Component/Aboutus';
import Etsy from './Component/Etsy.js';
import Ebay from './Component/Ebay.js';
import Website from './Component/Website.js';
import ListingImage from './Component/ListingImage.js';

function App() {

  let tl = new gsap.timeline();
  let ease = Power3.easeOut;

  const [loading, setloading] = useState(true);
  useEffect(() => {
    setloading(true)

    setTimeout(()=>{
      setloading(false)
    }, 3000)
  }, [])

  return (
    <div className='app hero'>
      {
        loading ? <div className='container-fluid loading-div1'><HashLoader color='#101118'/></div>: <BrowserRouter>

          <ScrollToTop></ScrollToTop>

          <div className='d-sm-block  d-none ' >
            <NavBar></NavBar>
          </div>

          <div className='d-sm-none  d-block' >
            <MobileNav ></MobileNav>
          </div>
          
          <Routes>

            <Route path="/" element={<Home timeline={tl} ></Home>} />
            <Route path="/amazon" element={<Amazon></Amazon>} />
            <Route path="/walmart" element={<Walmart></Walmart>} />
            <Route path="/etsy" element={<Etsy></Etsy>} />
            <Route path="/ebay" element={<Ebay></Ebay>} />

            <Route path="/ecommerce" element={<Website></Website>} />
            <Route path="/listing-images" element={<ListingImage></ListingImage>} />



            {/* <Route path="/aboutus" element={<About></About>} /> */}
            <Route path="/about" element={<Aboutus></Aboutus>} />
            <Route path="/contact" element={<Contact></Contact>} />
          </Routes>

          <Footer></Footer>

        </BrowserRouter>
      }
      
    </div>
  );
}

export default App;






// https://goodluck.agency/login-register/
// mail: sekar@goodluck.agency
// password: 8K68xkTtC4TLNXx


// https://goodluck.agency/wp-admin/
// mail: abdullah.05776@gmail.com
// password: NOTHING ABDULLAH @890
