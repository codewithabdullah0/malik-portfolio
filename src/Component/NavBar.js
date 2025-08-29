import React, { useState } from "react";
import "./NavBar.css";
import TextAnimation from "react-text-animations";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function NavBar() {
  // const [openbtn, setopenbtn] = useState(false);
  // const [drop, setdrop] = useState(true)
  // const [drops, setdrops] = useState(true)

  return (
    <>

      {/* desktop navbar ############# */}


      <nav class="navbar navbar-div1 navbar-expand-lg navbar-light ">
        <div>
          <Link to='/' className="desk-logo-text2">
            Malik

          </Link>
        </div>

        <div
          class="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav desk-navbar-ul ">

            <li className="nav-item active desk-nav-li1" >
              <Link
                class="nav-link"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item active desk-nav-li1" >
              {/* <Link
                class="nav-link"
                to="#services"
              >
                Services
              </Link> */}
              <HashLink
                class="nav-link"
                to="/#services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={600}
              >
                Services
              </HashLink>
            </li>


            <li className="nav-item active desk-nav-li1" >
              <Link
                class="nav-link"
                to="/about"
              >
                About
              </Link>
            </li>



            <li className="nav-item active desk-nav-li1" >
              <Link
                class="nav-link"
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className='d-flex  justify-content-end icons-div11'>
          <div>
            <a href='mailto:hello@ahtisham.com'>
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <circle cx="16.545" cy="16.545" r="16.545" fill="#B6FD85" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 11C8.89543 11 8 11.8954 8 13V22C8 23.1046 8.89543 24 10 24H24C25.1046 24 26 23.1046 26 22V13C26 11.8954 25.1046 11 24 11H10ZM24.1604 13.1444C23.964 12.7797 23.5091 12.6433 23.1444 12.8396L17 16.1482L10.8556 12.8396C10.4909 12.6433 10.036 12.7797 9.83965 13.1444C9.64327 13.5091 9.77972 13.964 10.1444 14.1604L16.6444 17.6604C16.8664 17.7799 17.1336 17.7799 17.3556 17.6604L23.8556 14.1604C24.2203 13.964 24.3567 13.5091 24.1604 13.1444Z" fill="black" />
              </svg>
            </a>
          </div>

          <div>
            <a href='https://dribbble.com/imqasim' target='_blank'>
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">
                <circle cx="16.5" cy="16.5" r="14.5" fill="black" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 16.5C0 7.38733 7.38733 0 16.5 0C25.6127 0 33 7.38733 33 16.5C33 25.6127 25.6127 33 16.5 33C7.38733 33 0 25.6127 0 16.5ZM11.6603 13.666H7.9211V24.901H11.6603V13.666ZM11.9067 10.1906C11.8824 9.08902 11.0947 8.25 9.81544 8.25C8.53627 8.25 7.7 9.08902 7.7 10.1906C7.7 11.2694 8.51159 12.1325 9.7669 12.1325H9.79082C11.0947 12.1325 11.9067 11.2694 11.9067 10.1906ZM25.1456 18.4592C25.1456 15.0083 23.3009 13.4022 20.8403 13.4022C18.855 13.4022 17.9662 14.4926 17.4699 15.2576V13.6663H13.7301C13.7794 14.7205 13.7301 24.9013 13.7301 24.9013H17.4699V18.6267C17.4699 18.2909 17.4941 17.956 17.593 17.7156C17.8632 17.0448 18.4786 16.3503 19.5116 16.3503C20.8652 16.3503 21.4063 17.3805 21.4063 18.8902V24.901H25.1454L25.1456 18.4592Z" fill="#B6FD85" />
              </svg>
            </a>
          </div>
        </div>


      </nav>








    </>
  );
}

export default NavBar;
