import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import MovieCard from '../components/MovieCard';
import '../Style/Home.css';

const Home = () => {
  const movies = [
    { title: "Movie 1", imageUrl: "https://via.placeholder.com/400x300" },
    { title: "Movie 2", imageUrl: "https://via.placeholder.com/400x300" },
  ];

  return (
    <div className="home-container">
      <Navbar />
      <div className="content-container">
        <Slider />
        <h2 className="text-2xl font-bold mb-4 text-center">Recent Movies</h2>
        <div className="movie-card-container">
          {movies.map((movie, index) => (
            <MovieCard key={index} title={movie.title} imageUrl={movie.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
