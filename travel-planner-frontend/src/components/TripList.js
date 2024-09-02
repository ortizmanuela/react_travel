import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TripList = () => {
  const [trips, setTrips] = useState([]);

  const fetchTrips = async () => {
    const response = await axios.get('http://localhost:5000/api/trips');
    setTrips(response.data);
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <div>
      <h2>Your Trips</h2>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            {trip.destination} ({trip.startDate} - {trip.endDate}) - ${trip.budget}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
