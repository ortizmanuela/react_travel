import React from 'react';
import TripForm from './components/TripForm';
import TripList from './components/TripList';

const App = () => {
  return (
    <div className="App">
      <h1>Travel Planner</h1>
      <TripForm fetchTrips={() => {}} />
      <TripList />
    </div>
  );
};

export default App;
