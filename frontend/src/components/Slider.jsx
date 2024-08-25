import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Slider.css';

const Slider = () => {
  const slides = [
    { id: 1, title: "Movie 1", imageUrl: "https://via.placeholder.com/1920x600", details: "/movies/1" },
    { id: 2, title: "Movie 2", imageUrl: "https://via.placeholder.com/1920x600", details: "/movies/2" },
    // Add more slides as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <Link to={slide.details} key={slide.id} className="slider-slide">
            <img src={slide.imageUrl} alt={slide.title} />
          </Link>
        ))}
      </div>
      <button onClick={goToPreviousSlide} className="slider-arrow left-arrow">
        &#8592;
      </button>
      <button onClick={goToNextSlide} className="slider-arrow right-arrow">
        &#8594;
      </button>
    </div>
  );
};

export default Slider;
