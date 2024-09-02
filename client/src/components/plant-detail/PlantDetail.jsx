import React, { useState, useEffect } from 'react';
import './PlantDetail.css';
import ModelViewer from '../model/ModelViewer';
import GuidelinesPopup from './GuidelinesPopup';

function PlantDetail({ plant, onClose }) {
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // Load saved notes and bookmarks
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || {};
    const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    
    setNotes(savedNotes[plant.id] || '');
    setIsBookmarked(savedBookmarks.some(bookmark => bookmark.id === plant.id));
  }, [plant.id]);

  const handleShowGuidelines = () => setShowGuidelines(true);
  const handleCloseGuidelines = () => setShowGuidelines(false);

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    if (isBookmarked) {
      // Remove from bookmarks
      const updatedBookmarks = bookmarks.filter(bookmark => bookmark.id !== plant.id);
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      setIsBookmarked(false);
    } else {
      // Add to bookmarks
      bookmarks.push(plant);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      setIsBookmarked(true);
    }
  };

  const handleNotesToggle = () => setShowNotes(!showNotes);

  const handleNotesChange = (e) => {
    const newNotes = e.target.value;
    setNotes(newNotes);
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || {};
    savedNotes[plant.id] = newNotes;
    localStorage.setItem('notes', JSON.stringify(savedNotes));
  };

  const handleTranslateClick = () => setShowDropdown(!showDropdown);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowDropdown(false);
    const text = getTranslatedText(plant, language);
    const languageCode = getLanguageCode(language);
    playAudio(text, languageCode);
  };

  const getTranslatedText = (plant, language) => {
    const translations = {
      en: `Scientific Name: ${plant.scientificName}, Important Part: ${plant.importantPart}, Side Effects: ${plant.sideEffects}, How to Use: ${plant.howToUse.join(', ')}, Diseases: ${plant.diseases.join(', ')}`,
      hi: `वैज्ञानिक नाम: ${plant.scientificName}, महत्वपूर्ण भाग: ${plant.importantPart}, दुष्प्रभाव: ${plant.sideEffects}, उपयोग कैसे करें: ${plant.howToUse.join(', ')}, रोग: ${plant.diseases.join(', ')}`,
      bn: `বৈজ্ঞানিক নাম: ${plant.scientificName}, গুরুত্বপূর্ণ অংশ: ${plant.importantPart}, পার্শ্বপ্রতিক্রিয়া: ${plant.sideEffects}, কীভাবে ব্যবহার করবেন: ${plant.howToUse.join(', ')}, রোগ: ${plant.diseases.join(', ')}`,
      te: `శాస్త్రవేత్త పేరు: ${plant.scientificName}, ముఖ్యమైన భాగం: ${plant.importantPart}, సైడ్ ఎఫెక్ట్స్: ${plant.sideEffects}, ఎలా ఉపయోగించాలో: ${plant.howToUse.join(', ')}, జబ్బులు: ${plant.diseases.join(', ')}`,
      ta: `வானி பெயர்: ${plant.scientificName}, முக்கியமான பகுதி: ${plant.importantPart}, புறவாய்வு விளைவுகள்: ${plant.sideEffects}, எப்படி பயன்படுத்துவது: ${plant.howToUse.join(', ')}, நோய்கள்: ${plant.diseases.join(', ')}`,
    };
    return translations[language] || translations.en;
  };

  const getLanguageCode = (language) => {
    const languageCodes = {
      en: 'en-US',
      hi: 'hi-IN',
      bn: 'bn-IN',
      te: 'te-IN',
      ta: 'ta-IN',
    };
    return languageCodes[language] || 'en-US';
  };

  const playAudio = (text, languageCode) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = languageCode;
    window.speechSynthesis.speak(utterance);
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
      <div className="container text-center">
        <p className="plant-detail-info"><strong>Scientific Name:</strong> {plant.scientificName}</p>
        <p className="plant-detail-info"><strong>Important Part:</strong> {plant.importantPart}</p>
        <p className="plant-detail-info"><strong>Side Effects:</strong> {plant.sideEffects}</p>
        <p className="plant-detail-info"><strong>How to Use:</strong> {plant.howToUse.join(', ')}</p>
        <p className="plant-detail-info"><strong>Diseases:</strong> {plant.diseases.join(', ')}</p>
        
        {/* Translate Button */}
        <div className="plant-detail-translate-container">
          <button className="plant-detail-translate" onClick={handleTranslateClick} aria-label="Translate information">Translate</button>
          {showDropdown && (
            <div className="language-dropdown show">
              <button onClick={() => handleLanguageSelect('en')}>English</button>
              <button onClick={() => handleLanguageSelect('hi')}>Hindi</button>
              <button onClick={() => handleLanguageSelect('bn')}>Bengali</button>
              <button onClick={() => handleLanguageSelect('te')}>Telugu</button>
              <button onClick={() => handleLanguageSelect('ta')}>Tamil</button>
            </div>
          )}
        </div>
        
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
          aria-label="Add or edit notes"
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
