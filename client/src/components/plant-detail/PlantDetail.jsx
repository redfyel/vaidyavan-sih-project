import React from 'react';
import './PlantDetail.css';

function PlantDetail({ plant, onClose }) {
  return (
    <div className="plant-detail">
      <button className="plant-detail-close" onClick={onClose} aria-label="Close details view">✕</button>
      <h2 className="plant-detail-title">{plant.name}</h2>
      <p className="plant-detail-info"><strong>Scientific Name:</strong> {plant.scientificName}</p>
      <p className="plant-detail-info"><strong>Important Part:</strong> {plant.importantPart}</p>
      <p className="plant-detail-info"><strong>Side Effects:</strong> {plant.sideEffects}</p>
      <img src={plant.image} alt={`Image of ${plant.name}`} className="plant-detail-image" />
      <button className="plant-detail-translate" aria-label="Translate information">Translate</button>
    </div>
  );
}

export default PlantDetail;
