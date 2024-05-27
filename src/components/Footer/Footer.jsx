import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="contact-us">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <div className="footer-social-icons">
            <a href="https://x.com/" target="_blank">
              <img src={assets.facebook_icon} alt="" />
            </a>
            <a href="https://ro.linkedin.com/" target="_blank">
              <img src={assets.linkedin_icon} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in touch</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright © {new Date().getFullYear()} Tomato.com - All rights are
        reserved
      </p>
    </div>
  );
};

export default Footer;
