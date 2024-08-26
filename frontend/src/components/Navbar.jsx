import React, { useState } from 'react';
import '../Style/Navbar.css'; // Import the CSS file
import { FaHome, FaSearch, FaPlus, FaStar, FaFilm, FaTv, FaBars, FaTimes } from 'react-icons/fa'; // Import FaBars and FaTimes
import profilePic from '../images/image1.jpg'; // Replace with the path to your profile picture
import { motion } from 'framer-motion';

const navbarLinks = [
  { href: "/", label: "HOME", icon: <FaHome />, key: "HOME" },
  { href: "/search", label: "SEARCH", icon: <FaSearch />, key: "SEARCH" },
  { href: "/watchlist", label: "WATCHLIST", icon: <FaPlus />, key: "WATCHLIST" },
  { href: "/originals", label: "ORIGINALS", icon: <FaStar />, key: "ORIGINALS" },
  { href: "/movies", label: "MOVIES", icon: <FaFilm />, key: "MOVIES" },
  { href: "/series", label: "SERIES", icon: <FaTv />, key: "SERIES" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('HOME');
  const [menuOpen, setMenuOpen] = useState(false); // State to control menu visibility

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu visibility
  };

  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-logo">
        <img
          src="https://via.placeholder.com/150" // Replace with your logo URL
          alt="Logo"
        />
      </div>

      {/* Middle: Navigation Links */}
      <div className={`navbar-links-container ${menuOpen ? 'open' : ''}`}>
        <motion.div
          className="navbar-links-motion "
          animate={{
            x: ["70%", "-70%"],
            transition: {
              ease: "linear",
              duration: 10,
              repeat: Infinity,
            },
          }}
        >
          {navbarLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className={`navbar-link ${activeLink === link.key ? 'active' : ''}`}
              onClick={() => handleLinkClick(link.key)}
            >
              <div className="navbar-icon-text">
                {link.icon} {/* Display icon */}
                <span className="navbar-label">{link.label}</span> {/* Display label */}
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      {/* Right: Profile and Hamburger Menu */}
      <div className="navbar-profile">
        <span>Mickey</span> {/* Replace with dynamic username if available */}
        <img
          src={profilePic} // Replace with the path to your profile picture
          alt="Profile"
          className="profile-pic"
        />
        <div className="navbar-hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between hamburger and close icon */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
