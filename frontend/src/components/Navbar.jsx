import React from 'react';
import '../Style/Navbar.css'; // Import the CSS file
import { FaSearch, FaBell } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="logo">
        <img
          src="https://via.placeholder.com/50" // Replace with your logo URL
          alt="Logo"
        />
      </div>

      {/* Middle: Recent Movies Slider */}
      <div className="slider-container">
        <button type="button">Recent Movies</button>
        <div className="dot"></div>
      </div>

      {/* Right: Search and Notification Icons */}
      <div className="icons-container">
        <button>
          <FaSearch className="icon" />
        </button>
        <button>
          <FaBell className="icon" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
