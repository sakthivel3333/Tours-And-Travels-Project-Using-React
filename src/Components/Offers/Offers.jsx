// Offers.js
import React, { useState, useEffect } from 'react';
import './Offer.css';
import { useLocation } from 'react-router-dom';
import { MdKingBed, MdBathtub, MdAirportShuttle, MdLocationOn } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { BsArrowRightShort } from "react-icons/bs";
import img from '../../Asset/pexels-davidpeterson-4361073.jpg';
import img2 from '../../Asset/pexels-davidpeterson-4361073.jpg';
import img3 from '../../Asset/486ee0cd5b8c4c4b2bb8300a0b47051c.jpg';
import img4 from '../../Asset/3fad6d537aac84ff7139fd47dac41d29.jpg';
import img5 from '../../Asset/pexels-davidpeterson-4361073.jpg';

const initialOffers = [
  { id: 1, imgSrc: img, destTitle: 'Tony', location: 'USA', price: 8500 },
  { id: 2, imgSrc: img2, destTitle: 'Tony', location: 'INDIA', price: 5500 },
  { id: 3, imgSrc: img3, destTitle: 'Tony', location: 'JAPAN', price: 4500 },
  { id: 4, imgSrc: img4, destTitle: 'Tony', location: 'CHINA', price: 3500 },
  { id: 5, imgSrc: img5, destTitle: 'Tony', location: 'GOA', price: 2500 },
  { id: 6, imgSrc: img5, destTitle: 'Tony', location: 'THAILAND', price: 2500 },
];

const Offers = () => {
  const location = useLocation();
  const isNotHomePage = location.pathname !== '/';

  const [offers, setOffers] = useState(initialOffers);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOrder(value);

    const sortedOffers = [...offers].sort((a, b) => {
      if (value === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setOffers(sortedOffers);
  };

  const handleFilterChange = (e) => {
    const value = e.target.value;
    if (value === 'all') {
      setOffers(initialOffers);
    } else {
      const filteredOffers = initialOffers.filter(offer => offer.location === value);
      setOffers(filteredOffers);
    }
  };

  return (
    <section className={`offer-component offer container section ${isNotHomePage ? 'offer-component--not-home' : ''}`}>
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, voluptatum. COME AND ENJOY THE TOUR </p>
          <div className="filters flex">
            <select value={sortOrder} onChange={handleSortChange}>
              <option value="asc">Sort by Price: Low to High</option>
              <option value="desc">Sort by Price: High to Low</option>
            </select>
            <select onChange={handleFilterChange}>
              <option value="all">All Locations</option>
              <option value="USA">USA</option>
              <option value="INDIA">INDIA</option> 
              <option value="JAPAN">JAPAN</option>
              <option value="CHINA">CHINA</option>
              <option value="GOA">GOA</option>
              <option value="THAILAND">THAILAND</option>
            </select>
          </div>
        </div>
        <div className="mainContent grid">
          {offers.map(({ id, imgSrc, price, location, destTitle }) => (
            <div className="singleOffer" key={id}>
              <div className="destImage">
                <img src={imgSrc} alt={destTitle} />
                <span className="discount">30% Off</span>
              </div>
              <div className="offerBody">
                <div className="price flex">
                  <h4>{price}</h4>
                  <span className="status">For Rent</span>
                </div>
                <div className="amenities flex">
                  <div className="singleAmenities flex">
                    <MdKingBed className="icon" />
                    <small>2 BEDS</small>
                  </div>
                  <div className="singleAmenities flex">
                    <MdBathtub className="icon" />
                    <small>1 BATH</small>
                  </div>
                  <div className="singleAmenities flex">
                    <FaWifi className="icon" />
                    <small>WIFI</small>
                  </div>
                  <div className="singleAmenities flex">
                    <MdAirportShuttle className="icon" />
                    <small>SHUTTLE</small>
                  </div>
                </div>
                <div className="location flex">
                  <MdLocationOn className="icon" />
                  <small>{location}</small>
                </div>
                <button className='btn flex'>
                  View Details
                  <BsArrowRightShort className="icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
