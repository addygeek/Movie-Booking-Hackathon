import React from 'react';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  
  const movies = [
    {
      id: 1,
      name: 'Movie 1',
      description: 'Description for Movie 1',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0kxWZeBs3jXREBj3ouracGRZgifDapoN9qNMJzL73odEM5PawjJ5tWZYwqRNJH6ESAS4&usqp=CAU',
    },
    // Add more movie data here
  ];

  const movie = movies.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.name}</h2>
      <img src={movie.imageUrl} alt={movie.name} />
      <p>{movie.description}</p>
    </div>
  );
};

export default MovieDetails;
