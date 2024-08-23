import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import MovieCard from '../components/MovieCard';

const Home = () => {
  const movies = [
    { title: "Movie 1", imageUrl: "https://via.placeholder.com/400x300" },
    { title: "Movie 2", imageUrl: "https://via.placeholder.com/400x300" },
    { title: "Movie 3", imageUrl: "https://via.placeholder.com/400x300" },
    { title: "Movie 4", imageUrl: "https://via.placeholder.com/400x300" },
  ];

  return (
    <>
      <Navbar />
      <Slider />
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Recent Movies</h2>
        <div className="flex flex-wrap justify-center">
          {movies.map((movie, index) => (
            <MovieCard key={index} title={movie.title} imageUrl={movie.imageUrl} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
