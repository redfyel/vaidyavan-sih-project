import React from 'react';
import './RotatingImages.css';

const RotatingImages = () => {
  return (
    <section id="rotating-images">
      <h2>Our Herbal Collection</h2>
      <div className="rotating-images-container">
        <div className="rotating-images-track">
          <img src="https://tse2.mm.bing.net/th?id=OIP.ujfUygMolZ7AKKrHx808lgHaE8&pid=Api&P=0&h=180" alt="Herb 1" />
          <img src="https://tse1.mm.bing.net/th?id=OIP.IwrVt5RNOfsDjsD7TJwabgHaE8&pid=Api&P=0&h=180" alt="Herb 2" />
          <img src="https://tse2.mm.bing.net/th?id=OIP.FpBHnzdw2W4dYJmv-sBpAwHaGW&pid=Api&P=0&h=180" alt="Herb 3" />
          <img src="https://tse4.mm.bing.net/th?id=OIP.83CJw_XvVjM4Ba-APTYKnQHaEJ&pid=Api&P=0&h=180" alt="Herb 4" />
          <img src="https://tse4.mm.bing.net/th?id=OIP.EMWR_Yk0rlDUnlK82dN43AHaE7&pid=Api&P=0&h=180" alt="Herb 1" /> {/* Duplicate for seamless effect */}
          <img src="https://tse3.mm.bing.net/th?id=OIP.w3Ty3XtsUcUuouy_Hcw1QAHaEJ&pid=Api&P=0&h=180" alt="Herb 2" /> {/* Duplicate for seamless effect */}
        </div>
      </div>
    </section>
  );
};

export default RotatingImages;
