import React, { useState, useEffect } from 'react';
import './PlantDetail.css';
import ModelViewer from '../model/ModelViewer';
import GuidelinesPopup from './GuidelinesPopup'; 

function PlantDetail({ plant, onClose }) {
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    // Check if the plant is already bookmarked
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setIsBookmarked(bookmarks.some(bookmark => bookmark.id === plant.id));
  }, [plant.id]);

  const handleShowGuidelines = () => setShowGuidelines(true);
  const handleCloseGuidelines = () => setShowGuidelines(false);

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    if (isBookmarked) {
      // Remove from bookmarks
      const updatedBookmarks = bookmarks.filter(bookmark => bookmark.id !== plant.id);
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    } else {
      // Add to bookmarks
      bookmarks.push(plant);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    setIsBookmarked(!isBookmarked);
  };

  const handleNotesToggle = () => {
    setShowNotes(!showNotes);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
    localStorage.setItem(`notes-${plant.id}`, e.target.value); // Save notes to local storage
  };

  useEffect(() => {
    // Load notes from local storage
    const savedNotes = localStorage.getItem(`notes-${plant.id}`);
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, [plant.id]);

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
      
      {/* Translate Button */}
      <button className="plant-detail-translate" aria-label="Translate information">Translate</button>
      
      {/* Bookmark Icon */}
      <button 
        className={`plant-detail-bookmark ${isBookmarked ? 'bookmarked' : ''}`}
        onClick={toggleBookmark}
        aria-label={isBookmarked ? "Remove bookmark" : "Add bookmark"}
      >
        <i className={`fa${isBookmarked ? 's' : 'r'} fa-bookmark`}></i>
      </button>
      
      {/* Notes Icon */}
      <button 
        className="plant-detail-notes"
        onClick={handleNotesToggle}
        aria-label="Add notes"
      >
        <i className="fa-regular fa-note-sticky"></i>
      </button>

      {/* Notes Section */}
      {showNotes && (
        <textarea
          className="plant-detail-notes-input"
          value={notes}
          onChange={handleNotesChange}
          placeholder="Add your notes here..."
        ></textarea>
      )}
      </div>
    
    </div>
  );
}

export default PlantDetail;
