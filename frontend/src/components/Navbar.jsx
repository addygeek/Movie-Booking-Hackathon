import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 w-full">
      <div className="navbar-container">
        <button className="text-white">📍 Location</button>
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded w-1/3"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
