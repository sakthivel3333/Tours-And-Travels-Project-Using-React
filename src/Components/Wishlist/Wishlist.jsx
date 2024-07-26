// Wishlist.js
import React, { useContext } from 'react';
import WishlistContext from '../Context/WishlistContext';
import { Link } from 'react-router-dom';
import './Wishlist.css';
import { BsHeartFill, BsDot } from 'react-icons/bs';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <section className="wishlist section container">
      <div className="secContainer">
        <h2 className="secTitle">My Wishlist</h2>
        <div className="mainContent grid">
          {wishlist.map(({ id, imgSrc, destTitle, location, grade }) => (
            <div key={id} className="singleDestination">
              <div className="destImage">
                <img src={imgSrc} alt={destTitle} />
                <div className="overlayInfo">
                  <h3>{destTitle}</h3>
                  <p>{location}</p>
                  <Link to={`/detail/${id}`}>
                    <button>View Details</button>
                  </Link>
                </div>
                <span onClick={() => removeFromWishlist(id)} className="wishlistIcon">
                  <BsHeartFill className="icon liked" />
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

export default Wishlist;
