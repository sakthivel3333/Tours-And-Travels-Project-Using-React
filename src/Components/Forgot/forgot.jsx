import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './forgot.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setMessage('If the email is registered, you will receive instructions to reset your password.');
    setEmail('');
  };

  return (
    <div className="forgot-container">
      <div className="forgot-brand">Forgot Password</div>
      <div className="heading">Don't worry, we'll help you reset your password!</div>
      <div className="forgot-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <button type="submit">Reset Password</button>
        </form>
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
};

export default ForgotPassword;
