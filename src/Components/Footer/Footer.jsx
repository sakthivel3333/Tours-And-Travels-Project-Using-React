import React from "react";
import "./Footer.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";

const Footer = () => {
  return (
    <div className="footer unique-footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo flex">
              <h1 className='flex'><MdOutlineTravelExplore className="icon" />
                Fly
              </h1>
            </a>
          </div>
          <div className="socials flex">
            <ImFacebook className="icon"/>
            <BsTwitter className="icon"/>
            <AiFillInstagram className="icon"/>
          </div>
        </div>
        <div className="footerLinks">
          <span className="linkTitle"> 
            Information
          </span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel </a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>
        <div className="footerLinks">
          <span className="linkTitle"> 
            Contact Us
          </span>
          <span className='phone'>+5456756</span>
          <span className='email'>vijay@email.com</span>
        </div>
        <div className="news">
          <span className="newstitle">
            Newsletter
          </span>
          <p> Subscribe to the free newsletter and stay up to date</p>
          <div className="emailBox">
            <input type="email" placeholder="Enter your email" className="emailInput" />
            <button className="sendBtn">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
