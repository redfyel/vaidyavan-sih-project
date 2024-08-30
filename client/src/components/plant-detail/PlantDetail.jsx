import React from 'react';

function PlantDetail({ plant, onClose }) {
  return (
    <div className="plant-detail">
      <button onClick={onClose}>Close</button>
      <h2>{plant.name}</h2>
      <p><strong>Scientific Name:</strong> {plant.scientificName}</p>
      <p><strong>Important Part:</strong> {plant.importantPart}</p>
      <p><strong>Side Effects:</strong> {plant.sideEffects}</p>
      {/* Add 3D model component here */}
      <img src={plant.image} alt={plant.name} />
      <button>Translate</button>
    </div>
  );
}

export default PlantDetail;
