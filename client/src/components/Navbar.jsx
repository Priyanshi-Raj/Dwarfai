import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const navigate = useNavigate();

  const signUpHandler = () => {
    setIsSignUp(true);
    setIsSignIn(false);
  };

  const signInHandler = () => {
    setIsSignIn(true);
    setIsSignUp(false);
    navigate("/api/signin");
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <Link to="/" className="navbar-logo">
            <h1 className="hgymgenie">GymGenie</h1>
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-items">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-items">
          <Link to="/pricing">Pricing</Link>
        </li>
        <li className="nav-items">
          <Link to="/meal">GymGenie MealPlan</Link>
        </li>
        <li className="nav-items">
          <Link to="/workout">Workout</Link>
        </li>
      </ul>
      <div className="navbar-buttons">
        <div className="btn-signup">
          <button onClick={signInHandler}>Sign In</button>
        </div>
        <div className="btn-login">
          <button onClick={signUpHandler}>Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
