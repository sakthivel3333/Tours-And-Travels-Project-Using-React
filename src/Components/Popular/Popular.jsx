import React, { useState } from 'react';
import './Popular.css';
import { BsArrowLeftShort, BsArrowRightShort, BsDot, BsHeart, BsHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import img from '../../Asset/pexels-efe-ersoy-393937500-20157706.jpg';
import img2 from '../../Asset/pexels-efe-ersoy-393937500-20157706.jpg';
import img3 from '../../Asset/28a130b185373e76abc8603fc2bef625.jpg';
import img4 from '../../Asset/3fad6d537aac84ff7139fd47dac41d29.jpg';

const initialData = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Chennai',
    location: 'India',
    grade: 'Beach',
    details: 'Detailed description about Vijay in Peru.',
    liked: false
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Ajay',
    location: 'India',
    grade: 'RELAX',
    details: 'Detailed description about Ajay in India.',
    liked: false
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Thor',
    location: 'Canada',
    grade: 'Beach',
    details: 'Detailed description about Thor in Canada.',
    liked: false
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: 'Wanda',
    location: 'Goa',
    grade: 'Resort',
    details: 'Detailed description about Wanda in Goa.',
    liked: false
  },
  {
    id: 5,
    imgSrc: img4,
    destTitle: 'Wanda',
    location: 'Goa',
    grade: 'Resort',
    details: 'Detailed description about Wanda in Goa.',
    liked: false
  },
  // ... other items
];

const Popular = () => {
  const [data, setData] = useState(initialData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const toggleLike = (id) => {
    setData(data.map(item => item.id === id ? { ...item, liked: !item.liked } : item));
  };

  const nextSlide = () => {
    if (currentIndex < data.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>From Historical cities to natural spectaculars, come to see the best of the world!!!!!</p>
          </div>
          <div className="iconDiv flex">
            <BsArrowLeftShort className="icon lefIcon" onClick={prevSlide} />
            <BsArrowRightShort className="icon" onClick={nextSlide} />
          </div>
        </div>
        <div className="mainContent grid">
          {data.slice(currentIndex, currentIndex + itemsPerPage).map(({ id, imgSrc, destTitle, location, grade, liked }) => (
            <div key={id} className="singleDestination">
              <div className="destImage">
                <img src={imgSrc} alt={destTitle} />
                <div className="overlayInfo">
                  <h3>{destTitle}</h3>
                  <p>{location}</p>
                  <Link to={`/detail/${id}`}>
                    <BsArrowRightShort className="icon" />
                  </Link>
                </div>
                <span onClick={() => toggleLike(id)} className="wishlistIcon">
                  {liked ? <BsHeartFill className="icon liked" /> : <BsHeart className="icon" />}
                </span>
              </div>
              <div className="destFooter">
                <div className="number">0{id}</div>
                <div className="destText flex">
                  <h6>{destTitle}</h6>
                  <span className="flex">
                    <BsDot className="icon" />
                    {grade}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Popular;
