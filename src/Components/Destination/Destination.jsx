import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Data/data';
import './DestinationDetail.css';
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 
import CommentSection from '../Comment/CommentSection';

const renderStars = (rating) => {
  return Array.from({ length: 5 }, (_, i) => (
    <FaStar key={i} className={i < Math.floor(rating) ? "filled-star" : "empty-star"} />
  ));
};

const DestinationDetail = () => {
  const { id } = useParams();
  const destination = Data.find(dest => dest.id === parseInt(id));

  const [adultCount, setAdultCount] = useState(3);
  const [youthCount, setYouthCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(4);
  const [selectedDate, setSelectedDate] = useState(null); 
  const [selectedTime, setSelectedTime] = useState(null); 
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const adultPrice = 282;
  const youthPrice = 168;
  const childrenPrice = 80;

  const calculateTotal = () => {
    return (adultCount * adultPrice) + (youthCount * youthPrice) + (childrenCount * childrenPrice);
  };

  if (!destination) {
    return <div>Destination not found!</div>;
  }

  const rating = 4.8;
  const reviewCount = 269;

  const openFullscreenImage = (imgSrc) => {
    setFullscreenImage(imgSrc);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  return (
    <section className="destination-detail">
      <div className="destination-content">
        <div className="destination-info">
          <p>{destination.details.description}</p>
          <ul className="destination-details">
            <li className="title-location">
              <span className="rating">
                {renderStars(rating)}
                {rating.toFixed(1)} ({reviewCount})
              </span>
              <CiLocationOn style={{ fontSize: '1.2em', verticalAlign: 'middle', marginRight: '5px' }} />
              <span>{destination.destTitle}</span>
            </li>
            <li>{destination.location}</li>
          </ul>
        </div>
        <div className="image-section">
          <div className="image-container">
            <img src={destination.imgSrc} alt={destination.destTitle} className="destination-image" />
          </div>
          <div className="additional-images">
            {destination.additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Additional ${index + 1}`}
                className="additional-image"
                onClick={() => openFullscreenImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="details">
          <div className="detail-item">
            <span className="icon">&#128337;</span>
            <span className="label">Duration:</span>
            <span className="value">{destination.details.duration}</span>
          </div>
          <div className="detail-item">
            <span className="icon">&#128101;</span>
            <span className="label">Group Size:</span>
            <span className="value">{destination.details.groupSize}</span>
          </div>
          <div className="detail-item">
            <span className="icon">&#127879;</span>
            <span className="label">Ages:</span>
            <span className="value">{destination.details.ages}</span>
          </div>
          <div className="detail-item">
            <span className="icon">&#127760;</span>
            <span className="label">Languages:</span>
            <span className="value">{destination.details.languages}</span>
          </div>
        </div>
        <div className="tour-overview">
          <h2>Tour Overview</h2>
          <p>{destination.overview}</p>
        </div>
        <div className="tour-overview">
          <h2>Highlights</h2>
          <p>{destination.Highlight}</p>
        </div>
        <div className="ticket-booking">
          <div className="price-from">From $1,200</div>
          <div className="date-time-picker">
            <div className="date-picker">
              <label>From</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="MMMM d, yyyy"
                placeholderText="Select a date"
              />
            </div>
            <div className="time-picker">
              <label>Time</label>
              <DatePicker
                selected={selectedTime}
                onChange={(time) => setSelectedTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                placeholderText="Select time"
              />
            </div>
          </div>
          <div className="tickets">
            <h3>Tickets</h3>
            <div className="ticket-type">
              <span>Adult (18+ years) ${adultPrice.toFixed(2)}</span>
              <button onClick={() => setAdultCount(adultCount > 0 ? adultCount - 1 : 0)}>-</button>
              <span>{adultCount}</span>
              <button onClick={() => setAdultCount(adultCount + 1)}>+</button>
            </div>
            <div className="ticket-type">
              <span>Youth (13-17 years) ${youthPrice.toFixed(2)}</span>
              <button onClick={() => setYouthCount(youthCount > 0 ? youthCount - 1 : 0)}>-</button>
              <span>{youthCount}</span>
              <button onClick={() => setYouthCount(youthCount + 1)}>+</button>
            </div>
            <div className="ticket-type">
              <span>Children (0-12 years) ${childrenPrice.toFixed(2)}</span>
              <button onClick={() => setChildrenCount(childrenCount > 0 ? childrenCount - 1 : 0)}>-</button>
              <span>{childrenCount}</span>
              <button onClick={() => setChildrenCount(childrenCount + 1)}>+</button>
            </div>
          </div>
          <div className="total">
            <span>Total:</span>
            <span>${calculateTotal().toFixed(2)}</span>
          </div>
          <button className="book-now">Book Now</button>
        </div>
      </div>

      {fullscreenImage && (
        <div className="fullscreen-modal open" onClick={closeFullscreenImage}>
          <span className="close">&times;</span>
          <div className="modal-content">
            <img src={fullscreenImage} alt="Fullscreen" className="fullscreen-image" />
          </div>
        </div>
      )}

      {/* Add the CommentSection here */}
      <CommentSection />
    </section>
  );
};

export default DestinationDetail;
