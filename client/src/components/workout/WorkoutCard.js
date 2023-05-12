import React from 'react';
import './workout.css'
function WorkoutCard({ workout, onSelect }) {
  const handleSelect = () => {
    onSelect(workout);
  };

  return (
    <div className="workout-card">
      <img src={workout.image} alt={workout.name} />
      <h3>{workout.name}</h3>
      <p>{workout.description}</p>
      <button className="select-btn" onClick={handleSelect}>
        Select
      </button>
    </div>
  );
}

export default WorkoutCard;
