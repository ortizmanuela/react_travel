import React, { useState } from 'react';
import axios from 'axios';

const TripForm = ({ fetchTrips }) => {
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/trips', {
      destination,
      startDate,
      endDate,
      budget,
    });
    fetchTrips();  // Refresh the list after adding a new trip
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />
      <input
        type="number"
        placeholder="Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <button type="submit">Add Trip</button>
    </form>
  );
};

export default TripForm;
