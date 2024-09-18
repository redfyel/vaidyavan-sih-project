import React from 'react';
import { Helmet } from 'react-helmet';
import About from './About';
import Products from './Products';
import RotatingImages from './RotatingImages';
import Contact from './Contact';
import Footer from './Footer';
import Chatbot from './ChatBot';
import OrderHerbs from '../orderHerbs/OrderHerbs';
import './Home.css';
import ModelViewer from './ModelViewer'; 
const doshas = [
  {
    name: 'Vata',
    image: 'https://tse2.mm.bing.net/th?id=OIP.b64R04KxQ9xQdD9S8cH-mwHaDr&pid=Api&P=0&h=180',
    description: 'Vata is associated with the elements of air and ether. It governs movement and communication, and its imbalance can lead to dryness and anxiety.',
  },
  {
    name: 'Pitta',
    image: 'https://tse3.mm.bing.net/th?id=OIP.qSG9qq-E4vfFhiK_Tva_cAHaH0&pid=Api&P=0&h=180',
    description: 'Pitta represents the fire element and is responsible for digestion and metabolism. It governs transformation, and imbalance can lead to irritability and inflammation.',
  },
  {
    name: 'Kapha',
    image: 'https://tse2.mm.bing.net/th?id=OIP.5D--DIMDK3cjpNQXcbXDZAHaGn&pid=Api&P=0&h=180',
    description: 'Kapha is linked to the earth and water elements, and it provides structure and stability. Imbalance can result in lethargy and weight gain.',
  },
];
const Home = () => {
  // Function to open quiz in a new tab
  const openQuizInNewTab = () => {
    window.open('/quiz', '_blank');
  };

  return (
    <header>
      <Helmet>
        <title>VaidyaVan</title>
        <meta name="description" content="VaidyaVan provides high-quality herbal medicines derived from natural ingredients." />
      </Helmet>
      <div className="header-container">
        <div className="header-content">
          <h1 className="header-title">Welcome to <span className="highlight">VaidyaVan</span></h1>
          <p className="header-subtitle">Discover the Best Herbal Medicines for a <span className="highlight">Healthier You</span></p>
          <div className="cta-buttons">
            <button className="cta-button learn-more">Learn More</button>
            {/* <button className="cta-button explore">Explore Our Products</button> */}
            <button className="cta-button start-quiz" onClick={openQuizInNewTab}>Start Quiz</button>
          </div>
        </div>
        <div className="model-viewer-container">
          <ModelViewer modelUrl="/Lavendar.glb" />
        </div>
      </div>
      <Products />
      {/* <About /> */}
      <RotatingImages />
      <section className="dosha-section">
        <h2>Understanding the Doshas</h2>
        <div className="dosha-cards">
          {doshas.map((dosha) => (
            <div className="dosha-card" key={dosha.name}>
              <img src={dosha.image} alt={dosha.name} className="dosha-image" />
              <div className="dosha-content">
                <h3 className="dosha-name">{dosha.name}</h3>
                <p className="dosha-description">{dosha.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="cta-button start-quiz" onClick={openQuizInNewTab}>Start Quiz</button>
      </section>
      <Contact />
      <Footer />
      <Chatbot />
    </header>
  );
};

export default Home;
