import React, { useState } from 'react';

const Slider = () => {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kxWZeBs3jXREBj3ouracGRZgifDapoN9qNMJzL73odEM5PawjJ5tWZYwqRNJH6ESAS4&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kxWZeBs3jXREBj3ouracGRZgifDapoN9qNMJzL73odEM5PawjJ5tWZYwqRNJH6ESAS4&usqp=CAU"
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
    <div className="relative mx-auto h-80 w-full overflow-hidden">
      {/* The width is set to 80% of the parent container */}
      
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full object-cover h-80"
            // Ensures the image fills the container and has the desired height
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
