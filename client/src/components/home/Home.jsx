import React from 'react';
import { Helmet } from 'react-helmet';
import About from './About';
import Products from './Products';
import RotatingImages from './RotatingImages';
import Contact from './Contact';
import Footer from './Footer';
import Chatbot from './ChatBot';
import './Home.css';
import ModelViewer from './ModelViewer'; 

const Home = () => {
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
            <button className="cta-button explore">Explore Our Products</button>
          </div>
        </div>
        <div className="model-viewer-container">
          <ModelViewer modelUrl="/Lavendar.glb" />
        </div>
      </div>
      <Products />
      {/* <About /> */}
      
      <RotatingImages />
      <Contact />
      <Footer />
      <Chatbot />
    </header>
  );
};

export default Home;
