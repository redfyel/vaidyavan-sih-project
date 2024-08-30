import React, { useState, useEffect } from 'react';
import PlantCard from '../plant-display/PlantCard';
import PlantDetail from '../plant-detail/PlantDetail';

function Learn() {
  const [plants, setPlants] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState(null);

  // Fetch plants data when the component mounts
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const response = await fetch('http://localhost:4000/plant-api/plants');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPlants(data);
      } catch (error) {
        console.error('Error fetching plants:', error);
      }
    };

    fetchPlants();
  }, []);

  const handleCardClick = (plant) => {
    setSelectedPlant(plant);
  };

  const handleCloseDetail = () => {
    setSelectedPlant(null);
  };

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
    </div>
  );
}

export default Learn;
