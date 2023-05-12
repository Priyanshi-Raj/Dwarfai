import React from 'react';
import './workout.css'
function WorkoutDetails({ workout }) {
  return (
    <div className="workout-details">
      <img src={workout.image} alt={workout.name} />
      <h3>{workout.name}</h3>
      <p>{workout.description}</p>
      <h4>Details</h4>
      <ul>
        {workout.details.map((detail, index) => (
          <li key={index}>
            {detail.exercise} - {detail.reps} x {detail.sets}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutDetails;
