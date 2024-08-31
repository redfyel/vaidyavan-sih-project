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
      console.log('Web Speech API is not supported.');
    }
    const testAudio = () => {
      const utterance = new SpeechSynthesisUtterance('Hello, this is a test.');
      window.speechSynthesis.speak(utterance);
    };
    
    testAudio();
    
    
  };

  // Function to return text based on the selected language
  const getTranslatedText = (plant, language) => {
    // Implement your translation logic here. For example:
    const translations = {
      en: `Scientific Name: ${plant.scientificName}, Important Part: ${plant.importantPart}, Side Effects: ${plant.sideEffects}, How to Use: ${plant.howToUse.join(', ')}, Diseases: ${plant.diseases.join(', ')}`,
      hi: `वैज्ञानिक नाम: ${plant.scientificName}, महत्वपूर्ण भाग: ${plant.importantPart}, दुष्प्रभाव: ${plant.sideEffects}, उपयोग कैसे करें: ${plant.howToUse.join(', ')}, रोग: ${plant.diseases.join(', ')}`,
      bn: `বৈজ্ঞানিক নাম: ${plant.scientificName}, গুরুত্বপূর্ণ অংশ: ${plant.importantPart}, পার্শ্বপ্রতিক্রিয়া: ${plant.sideEffects}, কীভাবে ব্যবহার করবেন: ${plant.howToUse.join(', ')}, রোগ: ${plant.diseases.join(', ')}`,
      te: `శాస్త్రవేత్త పేరు: ${plant.scientificName}, ముఖ్యమైన భాగం: ${plant.importantPart}, సైడ్ ఎఫెక్ట్స్: ${plant.sideEffects}, ఎలా ఉపయోగించాలో: ${plant.howToUse.join(', ')}, జబ్బులు: ${plant.diseases.join(', ')}`,
      ta: `வானி பெயர்: ${plant.scientificName}, முக்கியமான பகுதி: ${plant.importantPart}, புறவாய்வு விளைவுகள்: ${plant.sideEffects}, எப்படி பயன்படுத்துவது: ${plant.howToUse.join(', ')}, நோய்கள்: ${plant.diseases.join(', ')}`,
      // Add more languages and translations as needed
    };
    return translations[language] || translations.en;
  };

  // Function to get language code for SpeechSynthesisUtterance
  const getLanguageCode = (language) => {
    const languageCodes = {
      en: 'en-US',
      hi: 'hi-IN',
      bn: 'bn-IN',
      te: 'te-IN',
      ta: 'ta-IN',
      // Add more language codes as needed
    };
    return languageCodes[language] || 'en-US';
  };

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
