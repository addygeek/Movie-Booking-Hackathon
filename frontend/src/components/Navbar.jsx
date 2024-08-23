// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center items-center space-x-4">
        <button className="text-white">📍 Location</button>
        <input
          type="text"
          placeholder="Search..."
          className="w-1/3 p-2 rounded"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
