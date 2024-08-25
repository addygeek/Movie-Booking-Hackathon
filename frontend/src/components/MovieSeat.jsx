import React from 'react';
import '../Style/MovieSeat.css';

const MovieSeat = () => {
  const seats = [
    { seatNumber: "Silver", fare: "150 Rs." },
    { seatNumber: "Gold", fare: "250 Rs." },
    { seatNumber: "Platinum", fare: "500 Rs." },
  ];

  return (
    <div className="movie-seat-container">
      <h2 className="section-title">Choose Movie Seat</h2>
      <div className="seats-grid">
        {seats.map((seat, index) => (
          <div key={index} className="seat-box">
            <p className="seat-number">{seat.seatNumber}</p>
            <p className="seat-fare">{seat.fare}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSeat;
