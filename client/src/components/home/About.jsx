import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const images = [
    'https://img.freepik.com/premium-photo/nature-green-leaf-garden-summer-natural-hd-background-wallpaper-desktop-wallpaper_927498-14725.jpg?w=1060',
    'https://c0.wallpaperflare.com/preview/971/52/902/green-plants-environment-summer.jpg',
    'https://wallpapers.com/images/hd/four-steps-growing-plants-natural-soil-1j0il6yow6oep2z7.jpg',
    'https://wallup.net/wp-content/uploads/2019/09/40319-tea-leaves-nature-plants-green-sunlight-drinks-748x468.jpg',
    'https://wallpapercave.com/wp/wp3130555.jpg',
    'https://png.pngtree.com/thumb_back/fw800/background/20240717/pngtree-nature-plants-hd-desktop-background-image_16017620.jpg'
  ];

  const captions = [
    "Serene Green Leaves in Summer",
    "Lush Green Plants Environment",
    "Four Steps Growing Plants in Natural Soil",
    "Sunlit Tea Leaves in Nature",
    "Vibrant Green Foliage",
    "HD Nature Plants Background"
  ];

  // Auto-slide logic
  useEffect(() => {
    let interval;
    if (autoSlide) {
      interval = setInterval(() => {
        goToNext();
      }, 3000); // Change image every 3 seconds
    }
    return () => clearInterval(interval);
  }, [currentIndex, autoSlide]);

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="about">
      <div
        className="carousel"
        onMouseEnter={() => setAutoSlide(false)}
        onMouseLeave={() => setAutoSlide(true)}
      >
        <button className="carousel-btn prev" onClick={goToPrev}>&lt;</button>
        <div className="carousel-wrapper">
          <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="image-container">
                <div className="image-overlay"></div>
                <img src={image} alt={`Slide ${index}`} />
                <div className="caption">{captions[index]}</div>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-btn next" onClick={goToNext}>&gt;</button>
      </div>

      <div className="thumbnails">
        {images.map((image, index) => (
          <div key={index} className="thumbnail">
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              className={currentIndex === index ? 'active' : ''}
              onClick={() => setCurrentIndex(index)}
            />
          </div>
        ))}
      </div>

      <div className="indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`indicator ${currentIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>

      {/* <h1 className="headertitle">Welcome to Our About Section</h1>
      <p className="headersubtitle">Discover More About Us Through Our Images</p> */}
    </div>
  );
};

export default About;
