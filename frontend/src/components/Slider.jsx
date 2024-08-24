
import React, { useState } from 'react';

const Slider = () => {
  const images = [
    "https://via.placeholder.com/800x400",

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-3/4 mx-auto h-64 overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full object-cover"
          />
        ))}
      </div>
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2"
      >
        &#8592;
      </button>
      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Slider;
