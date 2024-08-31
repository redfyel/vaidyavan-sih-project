import React, { useState, useEffect } from 'react';
import PlantCard from '../plant-display/PlantCard';
import PlantDetail from '../plant-detail/PlantDetail';
import Chatbot from '../home/Chatbot';
import { FaSearch, FaTimes, FaCamera } from 'react-icons/fa';
import './Learn.css';

function Learn() {
  const [plants, setPlants] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [scanningMessage, setScanningMessage] = useState(null);

  useEffect(() => {
    async function fetchPlants() {
      try {
        const res = await fetch('http://localhost:4000/plant-api/plants');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log('Fetched data:', data);  // Log the data for debugging
        setPlants(data);
      } catch (err) {
        console.error('Error fetching plants:', err.message);  // Log the specific error message
        setError(err); // Store the error for display
      } finally {
        setIsLoading(false); 
      }
    }

    fetchPlants();
  }, []);

  // Function to handle selecting a plant
  const handleCardClick = (plant) => {
    setSelectedPlant(plant);
  };

  // Function to close the detail view
  const handleCloseDetail = () => {
    setSelectedPlant(null);
  };

  // Filter plants based on search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Clear the search query
  const clearSearch = () => {
    setSearchQuery('');
  };

  // Handle "Scan and Find" button click
  const handleScanAndFind = () => {
    setShowGuidelines(true);
  };

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
      setShowGuidelines(false);  // Close guidelines after upload

      // Show scanning message
      setScanningMessage('Scanning your upload...');

      // Simulate scanning process
      setTimeout(() => {
        setScanningMessage('Uploaded plant is Wheat Grass');
      }, 2000); // 2 seconds for scanning message
    }
  };

  // Close modal function
  const closeModal = () => {
    setShowGuidelines(false);
  };

  if (isLoading) {
    return <div>
      <h1 className='lead text-center fs-1'>Loading plants...</h1>
    </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={selectedPlant ? 'white-background' : ''}>
      {!selectedPlant && (
        <>
          <div className="search-bar-container">
            <div className="search-bar-wrapper">
              <div className="search-icon"><FaSearch /></div>
              <input
                type="text"
                placeholder="Search for a herb..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar"
              />
              {searchQuery && (
                <div className="clear-icon" onClick={clearSearch}><FaTimes /></div>
              )}
            </div>
          </div>

          <div className="scan-find-container">
            <button className="scan-find-button" onClick={handleScanAndFind}>
              <FaCamera /> Scan and Find
            </button>
          </div>
        </>
      )}

      {showGuidelines && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="guidelines-popup" onClick={(e) => e.stopPropagation()}>
            <h2>How to Scan a Plant</h2>
            <ul>
              <li>Ensure the plant is well-lit.</li>
              <li>Take a clear picture of the plant's leaves or flowers.</li>
              <li>Focus on the distinctive parts of the plant.</li>
            </ul>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>
        </div>
      )}

      {uploadedImage && (
        <div className="uploaded-image-preview">
          <h3>Image Preview</h3>
          <img src={uploadedImage} alt="Uploaded Plant" />
          {scanningMessage && (
            <div className={`scanning-message ${scanningMessage.includes('Scanning') ? 'scanning' : 'result'}`}>
              {scanningMessage}
              {scanningMessage.includes('Scanning') && <div className="spinner"></div>}
            </div>
          )}
        </div>
      )}

      {selectedPlant ? (
        <PlantDetail plant={selectedPlant} onClose={handleCloseDetail} />
      ) : (
        <div className="plant-card-container">
          {filteredPlants.map((plant) => (
            <PlantCard key={plant._id} plant={plant} onClick={handleCardClick} />
          ))}
        </div>
      )}
      <Chatbot />
    </div>
  );
}

export default Learn;
