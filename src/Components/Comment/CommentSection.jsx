import React from 'react';
import './CommentSection.css';

const CommentSection = () => {
  return (
    <div className="comment-section">
      <h2>Customer Reviews</h2>
      <div className="customer-reviews">
        <div className="review-item">
          <div className="review-category">
            <span>Overall Rating</span>
            <span>Excellent</span>
          </div>
          <span className="review-rating">5.0</span>
        </div>
        <div className="review-item">
          <div className="review-category">
            <span>Location</span>
            <span>Excellent</span>
          </div>
          <span className="review-rating">5.0</span>
        </div>
        <div className="review-item">
          <div className="review-category">
            <span>Amenities</span>
            <span>Excellent</span>
          </div>
          <span className="review-rating">5.0</span>
        </div>
        <div className="review-item">
          <div className="review-category">
            <span>Food</span>
            <span>Excellent</span>
          </div>
          <span className="review-rating">5.0</span>
        </div>
        <div className="review-item">
          <div className="review-category">
            <span>Price</span>
            <span>Excellent</span>
          </div>
          <span className="review-rating">5.0</span>
        </div>
        <div className="review-item">
          <div className="review-category">
            <span>Rooms</span>
            <span>Excellent</span>
          </div>
          <span className="review-rating">5.0</span>
        </div>
        <div className="review-item">
          <div className="review-category">
            <span>Tour Operator</span>
            <span>Excellent</span>
          </div>
          <span className="review-rating">5.0</span>
        </div>
        <button className="see-more-reviews">See more reviews →</button>
      </div>

      <h2>Leave a Reply</h2>
      <form className="leave-reply-form">
        <div className="form-group">
          <label>Location</label>
          <input type="number" max="5" min="0" />
        </div>
        <div className="form-group">
          <label>Amenities</label>
          <input type="number" max="5" min="0" />
        </div>
        <div className="form-group">
          <label>Food</label>
          <input type="number" max="5" min="0" />
        </div>
        <div className="form-group">
          <label>Room</label>
          <input type="number" max="5" min="0" />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="number" max="5" min="0" />
        </div>
        <div className="form-group">
          <label>Tour Operator</label>
          <input type="number" max="5" min="0" />
        </div>
        <div className="form-group">
          <label>Title</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Comment</label>
          <textarea></textarea>
        </div>
        <div className="form-group gallery-upload">
          <label>Gallery</label>
          <input type="file" accept="image/png, image/jpeg" />
          <p>PNG or JPG no bigger than 800px wide and tall.</p>
        </div>
        <button type="submit" className="post-comment">Post comment</button>
      </form>
    </div>
  );
};

export default CommentSection;
