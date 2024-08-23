import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TheatreList = () => {
  const [theatres, setTheatres] = useState([]);

  useEffect(() => {
    const fetchTheatres = async () => {
      const response = await axios.get('/api/theatres/');
      setTheatres(response.data);
    };
    fetchTheatres();
  }, []);

  return (
    <div>
      <h2>Available Theatres</h2>
      <ul>
        {theatres.map((theatre) => (
          <li key={theatre.id}>{theatre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TheatreList;
