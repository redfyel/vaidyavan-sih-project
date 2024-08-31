import React, { useState } from 'react';
import './PlantDetail.css';
import ModelViewer from '../model/ModelViewer';
import GuidelinesPopup from './GuidelinesPopup'; 

function PlantDetail({ plant, onClose }) {
  const [showGuidelines, setShowGuidelines] = useState(false);

  const handleShowGuidelines = () => setShowGuidelines(true);
  const handleCloseGuidelines = () => setShowGuidelines(false);

  return (
    <div className="plant-detail">
      <button className="plant-detail-close" onClick={onClose} aria-label="Close details view">✕</button>
      
      {/* Guidelines Popup Button */}
      <button className="plant-detail-guidelines" onClick={handleShowGuidelines} aria-label="Show guidelines">?</button>

      {/* Guidelines Popup */}
      {showGuidelines && (
        <GuidelinesPopup 
          onClose={handleCloseGuidelines}
          className="guidelines-popup"
        />
      )}

      <h2 className="plant-detail-title text-center">{plant.name}</h2>

      {/* Age Groups as Tags */}
      <div className="plant-detail-tags text-center">
        {plant.ageGroups.map((group, index) => (
          <span key={index} className="plant-detail-tag">{group}</span>
        ))}
      </div>

      {/* Medicinal Uses */}
      <p className="plant-detail-info"><strong>Medicinal Uses:</strong> {plant.medicinalValues.join(', ')}</p>

      {/* Model Viewer */}
      <div className="model-container">
        <ModelViewer modelUrl="/Turmeric_Roots.glb" />
      </div>

      {/* Plant Details */}
      <div className='container text-center'>
      <p className="plant-detail-info"><strong>Scientific Name:</strong> {plant.scientificName}</p>
      <p className="plant-detail-info"><strong>Important Part:</strong> {plant.importantPart}</p>
      <p className="plant-detail-info"><strong>Side Effects:</strong> {plant.sideEffects}</p>
      <p className="plant-detail-info"><strong>How to Use:</strong> {plant.howToUse.join(', ')}</p>
      <p className="plant-detail-info"><strong>Diseases:</strong> {plant.diseases.join(', ')}</p>

      {/* <img src={plant.image} alt={`Image of ${plant.name}`} className="plant-detail-image" /> */}
      
      <button className="plant-detail-translate" aria-label="Translate information">Translate</button>
      </div>
    
    </div>
  );
}

export default PlantDetail;
