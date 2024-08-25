import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/NavigationButtons.css';

const NavigationButtons = () => {
  return (
    <div className="navigation-buttons-container">
      <Link to="/" className="nav-button">
        Home
      </Link>
      <Link to="/movies" className="nav-button">
        Movies
      </Link>
      <Link to="/profile" className="nav-button">
        Profile
      </Link>
      <Link to="/contactus" className="nav-button">
        Contact Us
      </Link>
      <Link to="/aboutus" className="nav-button">
        About Us
      </Link>
    </div>
  );
};

export default NavigationButtons;
