import React, { useState } from 'react';
import './PlantDetail.css';
import ModelViewer from '../model/ModelViewer';
import GuidelinesPopup from './GuidelinesPopup'; 

function PlantDetail({ plant, onClose }) {
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Default language is English

  const handleShowGuidelines = () => setShowGuidelines(true);
  const handleCloseGuidelines = () => setShowGuidelines(false);

  // Function to handle language selection and play text-to-speech
  const handleTranslate = (language) => {
    setSelectedLanguage(language);
    const utterance = new SpeechSynthesisUtterance(getTranslatedText(plant, language));
    utterance.lang = getLanguageCode(language);
    window.speechSynthesis.speak(utterance);
    if ('speechSynthesis' in window) {
      console.log('Web Speech API is supported.');
    } else {
      console.log('Web Speech API is not supported.');
    }

    
    
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

        {/* Translate Button and Dropdown */}
        <div className="plant-detail-translate-container">
          <button className="plant-detail-translate" aria-label="Translate information" onClick={() => document.getElementById('language-dropdown').classList.toggle('show')}>
            Translate
          </button>
          <div id="language-dropdown" className="language-dropdown">
            <button onClick={() => handleTranslate('en')}>English</button>
            <button onClick={() => handleTranslate('hi')}>Hindi</button>
            <button onClick={() => handleTranslate('bn')}>Bengali</button>
            <button onClick={() => handleTranslate('te')}>Telugu</button>
            <button onClick={() => handleTranslate('ta')}>Tamil</button>
            {/* Add more languages as needed */}
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default PlantDetail;
