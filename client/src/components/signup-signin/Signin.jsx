import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './signin.css'; // Import the CSS file

const Signin = () => {
  return (
    <div className="container">
      <div className="logo">
        GymGenie
      </div>
      <div className="heading">
        Sign in
      </div>
      <div className="message">
        Don't have an account? 
      </div>
      <div className="form">
        <div>
          Email
        </div>
        <div>
          <input type="email" />
        </div>
        <div>
          Password
        </div>
        <div>
          <input type="password" />
        </div>
        <button className="signin-btn">Sign In</button>
      </div>
    </div>
  );
};

export default Signin;