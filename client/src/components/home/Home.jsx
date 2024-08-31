import React from 'react';
import { Helmet } from 'react-helmet';
import About from './About';
import Products from './Products';
import RotatingImages from './RotatingImages';
import Contact from './Contact';
import Footer from './Footer';
import Chatbot from './ChatBot';
import './Home.css';

const Home = () => {
  return (
    
    <header>
      <Helmet>
        <title>VaidyaVan</title>
        <meta name="description" content="VaidyaVan provides high-quality herbal medicines derived from natural ingredients." />
      </Helmet>
      <div className="header-content">
        <h1 className="header-title">Welcome to VaidyaVan</h1>
        <p className="header-subtitle">Discover the Best Herbal Medicines for a Healthier You</p>
      </div>
      <About />
      <Products />
      <RotatingImages />
      <Contact />
      <Footer />
      <Chatbot />
    </header>
  );
};

export default Home;
