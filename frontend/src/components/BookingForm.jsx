import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = ({ showtimeId }) => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    setSelectedSeats([...selectedSeats, seat]);
  };

  const handleSubmit = async () => {
    const response = await axios.post('/api/reservations/', {
      showtime_id: showtimeId,
      seats: selectedSeats,
    });
  };

  return (
    <div>
      <h2>Select Seats</h2>
      <div>
        {seats.map((seat) => (
          <button key={seat} onClick={() => handleSeatSelection(seat)}>
            {seat}
          </button>
        ))}
      </div>
      <button onClick={handleSubmit}>Book Now</button>
    </div>
  );
};

export default BookingForm;
