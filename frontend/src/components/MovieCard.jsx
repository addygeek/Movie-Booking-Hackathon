
import React from 'react';

const MovieCard = ({ title, imageUrl }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
      <img
        className="w-full h-48 object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
      </div>
    </div>
  );
};

export default MovieCard;
