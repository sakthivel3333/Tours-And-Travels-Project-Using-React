import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 className="title">Plan Your Trip With Fly</h1>
          <p className="subtitle">Travel to Your favourite city with respect for the environment</p>
          <button className="btn">
            <Link to="/popular">Explore Now</Link>
          </button>
        </div>
        <div className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder="Dream Destination" id="location" />
          </div>
          <div className="disDiv">
            <label htmlFor="distance">Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              placeholderText="DD/MM/YYYY"
              className="datePickerInput"
            />
          </div>
          <div className="priceDiv">
            <label htmlFor="price">Price</label>
            <input type="text" placeholder="$140" id="price" />
          </div>
          <button className="btn">Search</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
