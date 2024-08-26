import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Slider.css';
import image1 from "../images/image3.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image1.jpg"
const Slider = () => {
  const slides = [
    { id: 1, title: "Movie 1", image: image1, details: "/movies/1" },
    { id: 2, title: "Movie 2", image: image2, details: "/movies/2" },
    { id: 3, title: "Movie 3", image: image3, details: "/movies/3" },
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

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div className="slider-slide" key={slide.id}>
            <Link to={slide.details}>
              <img src={slide.image} alt={slide.title} className="slider-image" />
            </Link>
          </div>
        ))}
       </div>

       {/* Navigation Dots */}
      <div className="slider-dots">
        {slides.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentSlide ? 'active' : ''}`} 
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    
      
      
      
    </div>
  );
};

export default Slider;
