import React from 'react';
import './Products.css';

const Products = () => {
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const { width, height, left, top } = card.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        const rotateX = (y - 0.5) * 30;
        const rotateY = (x - 0.5) * -30;
    
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        card.style.boxShadow = `${rotateY * 2}px ${rotateX * 2}px 20px rgba(0, 0, 0, 0.3)`;
      };
    
      const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
      };
    
      return (
        <div className="tilt-card-container">
          <div
            className="tilt-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="tilt-card-content">
              <h2>Explore the Garden</h2>
              <p>
                Immerse yourself in the virtual herbal garden filled with a variety of medicinal plants. Discover the beauty and healing properties of each herb as you navigate through the lush greenery.
              </p>
             
            </div>
          </div>
    
          <div
            className="tilt-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="tilt-card-content">
              <h2>Herb Information</h2>
              <p>
                Access detailed information about different herbs, including their uses, benefits, and cultivation techniques. Learn about traditional remedies and modern applications of these natural wonders.
              </p>
              
            </div>
          </div>
    
          <div
            className="tilt-card"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="tilt-card-content">
              <h2>Virtual Tour</h2>
              <p>
                Take a virtual tour of the 'VaidyaVan' garden from the comfort of your home. Explore different sections, interact with plants, and gain insights into the rich heritage of Ayurveda and herbal medicine.
              </p>
             
            </div>
          </div>
        </div>
      );
    };
    
export default Products;
