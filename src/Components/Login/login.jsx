import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const userData = {
    email: 'vijay@gmail.com',
    password: '123'
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === userData.email && password === userData.password) {
      setErrorMessage('');
      onClose();
    } else {
      setErrorMessage('Login failed: Incorrect email or password');
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot');
  };

  return (
    <div className="login-overlay">
      <div className="login-container">
        <div className="login-brand">Log In</div>
        <div className="heading">We're glad to see you again!</div>
        <div className="log">Don't have an account? <a href="/signup">Sign up</a></div>
        <div className="forgot">Forgot Password? <button onClick={handleForgotPassword} className="link-button">Lost your password</button></div>

        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} required />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} required />
            </div>
            <button type="submit">Login</button>
          </form>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  onClose: PropTypes.func,
};

Login.defaultProps = {
  onClose: () => {},
};

export default Login;
