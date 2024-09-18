import React, { useState } from 'react';
import './PetCorner.css';

const PetCorner = () => {
  const [selectedPet, setSelectedPet] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [searchTermPet, setSearchTermPet] = useState('');
  const [searchTermBreed, setSearchTermBreed] = useState('');
  const [searchTerm, setSearchTerm] = useState('');


  // Pet data
  const pets = [
    { id: 'dog', name: 'Dog', image: 'https://t3.ftcdn.net/jpg/00/66/74/90/240_F_66749097_nCsOYh69ix0o7h1DDXztTADd4N3q0Kze.jpg' },
    { id: 'cat', name: 'Cat', image: 'https://t4.ftcdn.net/jpg/02/92/96/37/360_F_292963748_5hsKvthWEeFGmj5oOe8O28CN1gjxf3Vb.jpg' },
    { id: 'Bird', name: 'Bird', image: 'https://t3.ftcdn.net/jpg/06/21/49/96/360_F_621499629_oLycksybK00ws9LSHE3mRPib47F46zpg.jpg' },
    { id: 'rabbit', name: 'Rabbit', image: 'https://t4.ftcdn.net/jpg/05/71/77/01/360_F_571770110_Ma0yElFc0Tpn1nWKOolJa3nvx0VIIG0F.jpg' },
    { id: 'Fish', name: 'Fish', image: 'https://img.freepik.com/premium-photo/small-fish-with-white-background-yellow-ring-around-bottom_720722-8638.jpg?w=740' },
    { id: 'hamster', name: 'Hamster', image: 'https://img.freepik.com/premium-photo/hamster-isolated-white-background_35691-15371.jpg' },
    { id: 'guinea', name: 'Guninea Pig', image: 'https://img.freepik.com/premium-photo/guinea-pig-white-background_369656-144.jpg' },
    { id: 'lizard', name: 'Lizard', image: 'https://t3.ftcdn.net/jpg/02/29/60/56/360_F_229605617_tPHDcdvNjXoyuSILq5TaUQT0jXydRnIA.jpg' },
    { id: 'ferret', name: 'Ferret', image: 'https://img.freepik.com/premium-photo/ferret-white-isolated_191971-11082.jpg' },
    { id: 'turtle', name: 'Turtle', image: 'https://t3.ftcdn.net/jpg/06/98/97/32/360_F_698973261_Wsc4WbbmbLtxYzv9pMnrVudA2lOV4MeG.jpg' }
    // Add more pets as needed
  ];

  // Breed data for Dog
  const breeds = {
    dog: [
      { id: 'labrador', name: 'Labrador', image: 'https://img.freepik.com/premium-photo/happy-adult-labrador-retriever-dog-white_772720-711.jpg' },
      { id: 'golden-retriever', name: 'Golden Retriever', image: 'https://t4.ftcdn.net/jpg/00/21/57/91/360_F_21579135_noOKwlwfbcUDzvhjrufreBCaw262w2ma.jpg' },
      { id: 'german-shepherd', name: 'German Shepherd', image: 'https://media.istockphoto.com/id/120526947/photo/side-view-of-german-shepherd-standing-white-background.jpg?s=612x612&w=0&k=20&c=B4FS9jr3DYfUHc-nNurQ03igQIvV4keloUnYH78GTxA=' },
      { id: 'german-shepherd', name: 'Whippet', image: 'https://img.freepik.com/premium-photo/graceful-whippet-dog-white-background-displaying-breed-s-elegance-athleticism_826582-2514.jpg' },
           { id: 'german-shepherd', name: 'Beagle', image: 'https://static.vecteezy.com/system/resources/thumbnails/033/166/177/small_2x/purebred-pedigree-beagle-puppy-on-clean-white-background-this-adorable-charm-young-dog-is-ideal-for-banners-advertisements-posters-ai-generated-photo.jpeg' },
           { id: 'german-shepherd', name: 'Bull dog', image: 'https://www.warrenphotographic.co.uk/photography/bigs/45608-Blue-and-white-French-Bulldog-white-background.jpg' }
   
   
    ]
  };

  // Disease and herb data for Labradors (example)
  const breedDetails = {
    labrador: {
     
        diseases: [
          { name: 'Hip Dysplasia', herbs: ['Turmeric', 'Calendula'], image: 'https://tse2.mm.bing.net/th?id=OIP.wLvZsz6ory0m7GQayWD3mgHaEc&pid=Api&P=0&h=180' },
          { name: 'Obesity', herbs: ['Arnica', 'Ginseng'], image: 'https://tse2.mm.bing.net/th?id=OIP.eqfx0s_-9UmWjVLSczuXrgHaEb&pid=Api&P=0&h=180' },
          { name: 'Ear Infections', herbs: ['Boswellia', 'Calendula'], image: 'https://tse1.mm.bing.net/th?id=OIP.jZYloGvicVA4SzcuKNt-XQHaE8&pid=Api&P=0&h=180' },
          { name: 'Elbow Dysplasia', herbs: ['Boswellia', 'Devil’s Claw'], image: 'https://www.dogster.com/wp-content/uploads/2024/07/elbow-of-labrador-retriever_9gifts_Shutterstock.jpg' },
          { name: 'Progressive Retinal Atrophy', herbs: ['Bilberry', 'Eyebright'], image: 'https://tse1.mm.bing.net/th?id=OIP.WQRwCtwHk31cj7nwwG4zxQHaE8&pid=Api&P=0&h=180' },
          { name: 'Exercise-Induced Collapse', herbs: ['Ashwagandha', 'Ginseng'], image: 'https://tse3.mm.bing.net/th?id=OIP.JWKdgHv7LyEWGjAaHTDqVwHaE8&pid=Api&P=0&h=180' },
          { name: 'Cold Tail Syndrome', herbs: ['Arnica', 'Lavender Oil'], image: 'https://tse1.mm.bing.net/th?id=OIP.j2NyVLfvcU5_vaj3bffyDgHaDf&pid=Api&P=0&h=180' },
          { name: 'Cruciate Ligament Rupture', herbs: ['Turmeric', 'Boswellia'], image: 'https://tse2.mm.bing.net/th?id=OIP.wLvZsz6ory0m7GQayWD3mgHaEc&pid=Api&P=0&h=180' },
          { name: 'Hot Spots', herbs: ['Aloe Vera', 'Calendula'], image: 'https://tse2.mm.bing.net/th?id=OIP.eqfx0s_-9UmWjVLSczuXrgHaEb&pid=Api&P=0&h=180' },
          { name: 'Hypothyroidism', herbs: ['Ashwagandha', 'Bladderwrack'], image: 'https://tse1.mm.bing.net/th?id=OIP.jZYloGvicVA4SzcuKNt-XQHaE8&pid=Api&P=0&h=180' },
          { name: 'Gastric Dilatation-Volvulus (Bloat)', herbs: ['Fennel', 'Ginger'], image: 'https://tse1.mm.bing.net/th?id=OIP.WQRwCtwHk31cj7nwwG4zxQHaE8&pid=Api&P=0&h=180' },
          { name: 'Diabetes', herbs: ['Fenugreek', 'Cinnamon'], image: 'https://tse3.mm.bing.net/th?id=OIP.JWKdgHv7LyEWGjAaHTDqVwHaE8&pid=Api&P=0&h=180' },
          { name: 'Joint Pain', herbs: ['Boswellia', 'Turmeric'], image: 'https://www.dogster.com/wp-content/uploads/2024/07/elbow-of-labrador-retriever_9gifts_Shutterstock.jpg' },
          { name: 'Allergies', herbs: ['Neem', 'Licorice Root'], image: 'https://tse1.mm.bing.net/th?id=OIP.j2NyVLfvcU5_vaj3bffyDgHaDf&pid=Api&P=0&h=180' },
          { name: 'Cancer', herbs: ['Ashwagandha', 'Turmeric'], image: 'https://tse2.mm.bing.net/th?id=OIP.wLvZsz6ory0m7GQayWD3mgHaEc&pid=Api&P=0&h=180' }
        ]
    },
    'golden-retriever': {
      diseases: [
        { name: 'Cancer', herbs: ['Ashwagandha', 'Turmeric'] },
        { name: 'Hip Dysplasia', herbs: ['Boswellia', 'Turmeric'] },
        { name: 'Skin Allergies', herbs: ['Aloe Vera', 'Neem'] },
        { name: 'Ear Infections', herbs: ['Garlic', 'Calendula'] },
        { name: 'Thyroid Problems', herbs: ['Ashwagandha', 'Bladderwrack'] },
        { name: 'Elbow Dysplasia', herbs: ['Boswellia', 'Turmeric'] },
        { name: 'Obesity', herbs: ['Green Tea', 'Ginseng'] },
        { name: 'Heart Disease', herbs: ['Hawthorn', 'Garlic'] },
        { name: 'Arthritis', herbs: ['Boswellia', 'Turmeric'] },
        { name: 'Diabetes', herbs: ['Fenugreek', 'Cinnamon'] },
        { name: 'Cataracts', herbs: ['Bilberry', 'Eyebright'] },
        { name: 'Epilepsy', herbs: ['Skullcap', 'Valerian Root'] },
        { name: 'Gastric Dilatation-Volvulus (Bloat)', herbs: ['Fennel', 'Ginger'] },
        { name: 'Joint Pain', herbs: ['Boswellia', 'Devil’s Claw'] },
        { name: 'Lymphoma', herbs: ['Turmeric', 'Mushroom Extract'] }
      ]
    },
    'german-shepherd': {
      diseases: [
        { name: 'Hip Dysplasia', herbs: ['Turmeric', 'Ginger'] },
        { name: 'Arthritis', herbs: ['Boswellia', 'Turmeric'] },
        { name: 'Bloat', herbs: ['Fennel', 'Ginger'] },
        { name: 'Degenerative Myelopathy', herbs: ['Ashwagandha', 'Boswellia'] },
        { name: 'Exocrine Pancreatic Insufficiency', herbs: ['Dandelion', 'Milk Thistle'] },
        { name: 'Elbow Dysplasia', herbs: ['Devil’s Claw', 'Turmeric'] },
        { name: 'Ear Infections', herbs: ['Garlic', 'Calendula'] },
        { name: 'Allergies', herbs: ['Licorice Root', 'Neem'] },
        { name: 'Obesity', herbs: ['Green Tea', 'Ginseng'] },
        { name: 'Cancer', herbs: ['Ashwagandha', 'Turmeric'] },
        { name: 'Hemophilia', herbs: ['Turmeric', 'Ginger'] },
        { name: 'Diabetes', herbs: ['Fenugreek', 'Cinnamon'] },
        { name: 'Hypothyroidism', herbs: ['Ashwagandha', 'Bladderwrack'] },
        { name: 'Progressive Retinal Atrophy', herbs: ['Bilberry', 'Eyebright'] },
        { name: 'Joint Pain', herbs: ['Boswellia', 'Turmeric'] }
      ]
    }
  };


  const handlePetClick = (petId) => {
    setSelectedPet(petId);
    setSelectedBreed(null); // Reset breed and gender selection
    setSelectedGender(null);
  };

  const handleBreedClick = (breedId) => {
    setSelectedBreed(breedId);
    setSelectedGender(null); // Reset gender selection
  };

  const handleGenderClick = (gender) => {
    setSelectedGender(gender);
  };
  const filteredPets = pets.filter(pet =>
    pet.name.toLowerCase().includes(searchTermPet.toLowerCase())
  );

  const filteredBreeds = selectedPet
    ? breeds[selectedPet].filter(breed =>
        breed.name.toLowerCase().includes(searchTermBreed.toLowerCase())
      )
    : [];

  // Render
  return (
    
    <div className="pet-corner">
      {/* Pet selection */}
       {/* Static search bar */}
       <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a pet or breed..."
          disabled
        />
      </div>
      {!selectedPet && (
        <div className="pet-list">
          {pets.map(pet => (
            <div
              key={pet.id}
              className="pet-card"
              onClick={() => handlePetClick(pet.id)}
            >
              <img src={pet.image} alt={pet.name} />
              <h3>{pet.name}</h3>
            </div>
          ))}
        </div>
      )}

      {/* Breed selection */}
      {selectedPet && !selectedBreed && (
        <div className="breed-list">
          {breeds[selectedPet].map(breed => (
            <div
              key={breed.id}
              className="breed-card"
              onClick={() => handleBreedClick(breed.id)}
            >
              <img src={breed.image} alt={breed.name} />
              <h3>{breed.name}</h3>
            </div>
          ))}
        </div>
      )}

      {/* Gender selection */}
      {selectedBreed && !selectedGender && (
        <div className="gender-selection">
          <div className="gender-card" onClick={() => handleGenderClick('male')}>
            <img src="https://up.yimg.com/ib/th?id=OIP.CX-YHHGYvWVeQlDrDwA6gwHaHa&pid=Api&rs=1&c=1&qlt=95&w=115&h=115" alt="Male" />
            <h3>Male</h3>
          </div>
          <div className="gender-card" onClick={() => handleGenderClick('female')}>
            <img src="https://up.yimg.com/ib/th?id=OIP.fjRILipQOlcJX_SqXEgUdgHaHa&pid=Api&rs=1&c=1&qlt=95&w=112&h=112" alt="Female" />
            <h3>Female</h3>
          </div>
        </div>
      )}

    {/* Display diseases */}
    {selectedBreed && selectedGender && (
        <div className="disease-list">
          <div className="disease-cards">
            {breedDetails[selectedBreed].diseases.map(disease => (
              <div key={disease.name} className="disease-card">
                <img src={disease.image} alt={disease.name} />
                <h3 className="disease-name">{disease.name}</h3>
                <div className="disease-herbs">
                  <strong></strong>
                  <ul>
                    {disease.herbs.map(herb => (
                      <li key={herb}>{herb}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
export default PetCorner;
