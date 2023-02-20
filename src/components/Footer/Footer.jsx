import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="allfooter">
        <div className="topfooter col-lg-12 d-flex justify-space-between">
          <div className="topleft col-lg-4">
            <ul>
              <Link to="/">
                <li>FAQ</li>
              </Link>
              <Link to="/">
                <li>CONTACT</li>
              </Link>
              <Link to="/">
                <li>BLOG</li>
              </Link>
              <Link to="/">
                <li>LOYALTY PROGRAM</li>
              </Link>
              <Link to="/">
                <li>SITEMAP</li>
              </Link>
            </ul>
          </div>
          <div className="topcenter col-lg-4">
            <ul>
              <Link to="/">
                <li>PRESS</li>
              </Link>
              <Link to="/">
                <li>TERMS</li>
              </Link>
              <Link to="/">
                <li>PRIVACY</li>
              </Link>
              <Link to="/">
                <li>SHIPPING & RETURNS</li>
              </Link>
            </ul>
          </div>
          <div className="topright col-lg-4">
            <h5>Be in the Know.</h5>
            <ul>
              <Link to="/">
                <li>
                  <i class="fa-brands fa-twitter"></i>
                </li>
              </Link>
              <Link to="/">
                <li>
                  <i class="fa-brands fa-facebook-f"></i>
                </li>
              </Link>
              <Link to="/">
                <li>
                  <i class="fa-brands fa-pinterest-p"></i>
                </li>
              </Link>
              <Link to="/">
                <li>
                  <i class="fa-brands fa-instagram"></i>
                </li>
              </Link>
              <Link to="/">
                <li>
                  <i class="fa-brands fa-tiktok"></i>
                </li>
              </Link>
            </ul>
            <div className="emailinput">
              <input
                className="col-lg-6 col-12 text-left"
                type="email"
                placeholder="Email Address"
              />
              <button className="text-end col-lg-6 col-12">SUBSCRIBE</button>
            </div>
            <p>Get updates, coupons, and news from Partake!</p>
          </div>
        </div>
        <div className="bottomfooter col-lg-12">
          <ul className="d-flex">
            <li><i class="fa-solid fa-wheat-awn-circle-exclamation"></i></li>
            <li><i class="fa-solid fa-u"></i></li>
            <li><i class="fa-brands fa-readme"></i></li>
            <li><i class="fa-regular fa-heart"></i></li>
            <li><i class="fa-solid fa-b"></i></li>
          </ul>
          <div className="copyright">Copyright © 2023 <Link to='/'>Partake Foods</Link></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
