import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import MovieCard from '../components/MovieCard';
import '../Style/Home.css';
import NavigationButtons from '../components/NavigationButtons';
import MovieSeat from '../components/MovieSeat';
// import '../App.css'

const Home = () => {
  const movies = [
    { title: "Movie 1", imageUrl: "https://via.placeholder.com/400x300" },
    { title: "Movie 2", imageUrl: "https://via.placeholder.com/400x300" },
  ];

  return (
    <div >
    <div className="home">
      {/* Navbar */}
      <Navbar />
    </div>
      {/* Slider */}
      <div className="slider">
        <Slider />
       </div>

      {/* Navigation Buttons */}
      {/* <div className="button-container">
        {/* <NavigationButtons /> */}
        {/* <h1>Choose Seats</h1> */}
      {/* </div> */} 

      {/* Movie Seat */}
      {/* <div className="movie-seat-container">
        <MovieSeat />
      </div> */}

      {/* Movie Cards */}
      <h2 className="recent-movies-title">Recent Movies</h2>
      <div className="movie-card-container">
        {/* {movies.map((movie, index) => (
          <MovieCard key={index} title={movie.title} imageUrl={movie.imageUrl} />
        ))} */}
        <MovieCard/>
      </div>
    
      
    </div>
    
  );
};

export default Home;
