import React, { useState } from 'react';
import { workouts } from './workouts';
import WorkoutCard from './WorkoutCard';
import WorkoutDetails from './WorkoutDetails';
import './workout.css';

function WorkoutPage() {
  const [selectedWorkout, setSelectedWorkout] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleWorkoutSelect = (workout) => {
    setSelectedWorkout(workout);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1 className='hgymgenie'>Workouts</h1>
      <div className="workout-card-container">
        {workouts.map((workout) => (
          <WorkoutCard
            key={workout.name}
            workout={workout}
            onSelect={handleWorkoutSelect}
          />
        ))}
      </div>
      {showModal && (
        <div className="workout-modal">
          <div className="workout-modal-content">
            <WorkoutDetails workout={selectedWorkout} />
            <button onClick={handleCloseModal} className='select-btn'>Close</button>
            <button className='select-btn'>Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkoutPage;
