import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
  const [active, setActive] = useState('navBar');
  const [headerClass, setHeaderClass] = useState('header activeHeader');
  const [dropdownActive, setDropdownActive] = useState(false);

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const closeNav = () => {
    setActive('navBar');
  };

  const addBg = () => {
    if (window.scrollY >= 10) {
      setHeaderClass('header');
    } else {
      setHeaderClass('header activeHeader');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', addBg);
    return () => {
      window.removeEventListener('scroll', addBg);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  return (
    <section className='navBarSection'>
      <div className={headerClass}>
        <div className="logoDiv">
          <Link to="/" className="logo">
            <h1 className='flex'>
              <MdOutlineTravelExplore className="icon" /> Tours And Travels
            </h1>
          </Link>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/Home" className="navlink">Home</Link>
            </li>
            <li className="navItem">
              <Link to="/Offers" className="navlink">Offers</Link>
            </li>
            <li className="navItem">
              <Link to="/blog" className="navlink">Blog</Link>
            </li>
            <li className="navItem dropdown" onClick={toggleDropdown}>
              <span className="navlink">Destination</span>
              {dropdownActive && (
                <ul className="dropdownMenu">
                  <li><Link to="/profile" className="dropdownLink">Profile</Link></li>
                  <li><Link to="/booking" className="dropdownLink">My Booking</Link></li>
                  <li><Link to="/wishlist" className="dropdownLink">Wishlist</Link></li>
                </ul>
              )}
            </li>
            <div className="headerBtns flex">
              <button className='btn loginBtn'>
                <Link to="/login">Log in</Link>
              </button>
              <button className='btn signupBtn'>
                <Link to="/signup">Sign Up</Link>
              </button>
            </div>
          </ul>
          <div onClick={closeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
