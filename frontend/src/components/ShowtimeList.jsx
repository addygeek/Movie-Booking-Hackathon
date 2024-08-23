import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShowtimeList = ({ movieId, theatreId }) => {
  const [showtimes, setShowtimes] = useState([]);

  useEffect(() => {
    const fetchShowtimes = async () => {
      const response = await axios.get(`/api/showtimes/?movie_id=${movieId}&theatre_id=${theatreId}`);
      setShowtimes(response.data);
    };
    fetchShowtimes();
  }, [movieId, theatreId]);

  return (
    <div>
      <h2>Showtimes</h2>
      <ul>
        {showtimes.map((showtime) => (
          <li key={showtime.id}>{showtime.start_time}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowtimeList;
