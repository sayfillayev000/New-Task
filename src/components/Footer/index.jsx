import React from "react";
import { Link } from "react-router-dom";
import { AppStore, Facebook, GooglePlay, Instagram, Linkedin, Logo, Twitter, Youtube } from "../../assets/icons";
import './footer.scss'


const index = () => {
  return (
    <footer className="footer">
      <ul className="footer__lists container">
        <li className="footer__logo">
          <Link>
            <Logo />
            <h1 className="brand__logo">Brand</h1>
          </Link>
          <p>
            Best information about the company gies here but now lorem ipsum is
          </p>
          <div className="conpaniya">
            <Link><Facebook/></Link>
            <Link><Twitter/></Link>
            <Link><Linkedin/></Link>
            <Link><Instagram/></Link>
            <Link><Youtube/></Link>
          </div>
        </li>
        <li className="footer__info">
          <h3>About</h3>
          <Link>About Us</Link>
          <Link>Find store</Link>
          <Link>Categories</Link>
          <Link>Blogs</Link>
        </li>
        <li className="footer__info">
          <h3>Partnership</h3>
          <Link>About Us</Link>
          <Link>Find store</Link>
          <Link>Categories</Link>
          <Link>Blogs</Link>
        </li>
        <li className="footer__info">
          <h3>Information</h3>
          <Link>Help Center</Link>
          <Link>Money Refund</Link>
          <Link>Shipping</Link>
          <Link>Contact us</Link>
        </li>
        <li className="footer__info">
          <h3>For users</h3>
          <Link>Login</Link>
          <Link>Register</Link>
          <Link>Settings</Link>
          <Link>My Orders</Link>
        </li>
        <li className="footer__get_app">
          <h3>Get app</h3>
          <Link>
            <AppStore />
          </Link>
          <Link>
            <GooglePlay />
          </Link>
     
        </li>

      </ul>
    </footer>
  );
};

export default index;
