import React from 'react';

function PlantCard({ plant, onClick }) {
  return (
    <div className="plant-card" onClick={() => onClick(plant)}>
      <img src={plant.image} alt={plant.name} />
      <h3>{plant.name}</h3>
      <button onClick={(e) => { e.stopPropagation(); onClick(plant); }}>Know More</button>
    </div>
  );
}

export default PlantCard;
