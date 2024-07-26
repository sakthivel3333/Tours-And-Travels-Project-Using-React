import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }

    console.log('Sign-up successful');
    navigate('/home');
  };

  return (
    <div className="signup-container">
      <div className="signup-brand">Sign Up</div>
      <div className="heading">Join us today!</div>
      <div className="login-link">
        Already have an account? <a href="/login">Log in</a>
      </div>
      <div className="signup-form">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} required />
          </div>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={handleUsernameChange} required />
          </div>
          <div>
            <label>First Name:</label>
            <input type="text" value={firstName} onChange={handleFirstNameChange} required />
          </div>
          <div>
            <label>Last Name:</label>
            <input type="text" value={lastName} onChange={handleLastNameChange} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} required />
          </div>
          <div>
            <label>Confirm Password:</label>
            <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} required />
          </div>
          <button type="submit">Sign Up</button>
        </form>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <div className="or-text">OR</div>
        <div className="social-buttons">
          <button className="google-button">Continue with Google</button>
          <button className="facebook-button">Continue with Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
