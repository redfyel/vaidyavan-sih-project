import React, { useState, useEffect } from 'react';
import PlantCard from '../plant-display/PlantCard';
import PlantDetail from '../plant-detail/PlantDetail';
import Chatbot from '../home/Chatbot';
import './Learn.css'; // Add this import for custom styles

function Learn() {
  const [plants, setPlants] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (isLoading) {
    return <div>Loading plants...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {selectedPlant ? (
        <PlantDetail plant={selectedPlant} onClose={handleCloseDetail} />
      ) : (
        <div className="plant-card-container">
          {plants.map((plant) => (
            <PlantCard key={plant._id} plant={plant} onClick={handleCardClick} />
          ))}
        </div>
      )}
      <Chatbot />
    </div>
  );
}

export default Learn;
