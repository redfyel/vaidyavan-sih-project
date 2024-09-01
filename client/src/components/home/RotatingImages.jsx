import React from 'react';
import './RotatingImages.css';

const RotatingImages = () => {
  return (
    <section id="rotating-images">
      <h2>Our Herbal Collection</h2>
      <div className="rotating-images-container">
        <div className="rotating-images-track">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBwLcACoHIiM4kkg3Qhk8ZB6__Pds3ryus8Q&s" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN9FERINETfOWUDtlkdIqpsUID_mZPaWOYOg&s" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_clLDzLgHJ9SM9rLaB2l3VUqNVAW-a9Otmw&s" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdIFdZKG3Q1KMrZRi7SIBQeQJiWP6KJ7Tmw&s" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaYyjHlActAUYBxNlWG_v6JZCZFQseVdJNJBVYNy2QFMcWRMIKziC1IVsIwJiVPLtsmOM&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzVstSnwA4zsLG9dpSPb-xbiHA5BlFAXwP9-_Tl0wq16oA3etk3Dt-LNqoIGhhEl_hD5c&usqp=CAU" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP4HVJCwzNwFty_pXXMXE8bda_Ssnn5rVgye_Bv_TQBACgPnwZVj27aaw3sc6yew2un7I&usqp=CAU" alt="" />
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
