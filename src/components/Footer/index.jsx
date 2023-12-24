import React from "react";
import { Link } from "react-router-dom";
import { AppStore, GooglePlay, Logo } from "../../assets/icons";

const index = () => {
  return (
    <footer>
      <ul>
        <li>
          <li>
            <Link>
              <Logo />
              <h1 className="brand__logo">Brand</h1>
            </Link>
            <p>
              Best information about the company gies here but now lorem ipsum
              is
            </p>
           <div></div>
          </li>
          <li>
            <h3>About</h3>
            <Link>About Us</Link>
            <Link>Find store</Link>
            <Link>Categories</Link>
            <Link>Blogs</Link>
          </li>
          <li>
            <h3>Partnership</h3>
            <Link>About Us</Link>
            <Link>Find store</Link>
            <Link>Categories</Link>
            <Link>Blogs</Link>
          </li>
          <li>
            <h3>Information</h3>
            <Link>Help Center</Link>
            <Link>Money Refund</Link>
            <Link>Shipping</Link>
            <Link>Contact us</Link>
          </li>
          <li>
            <h3>For users</h3>
            <Link>Login</Link>
            <Link>Register</Link>
            <Link>Settings</Link>
            <Link>My Orders</Link>
          </li>
          <li>
            <h3>Get app</h3>
            <Link><AppStore/></Link>
            <Link><GooglePlay/></Link>
          </li>
        </li>
      </ul>
    </footer>
  );
};

export default index;
