import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-section">
      <h2>Contact Us</h2>
      <p>We'd love to hear from you! Feel free to reach out to us via the following methods:</p>
      <div className="contact-details">
        <div className="contact-info">
          <h3>Email Us</h3>
          <p><a href="mailto:info@vaidyaVan.com">info@vaidyaVan.com</a></p>
        </div>
        <div className="contact-info">
          <h3>Call Us</h3>
          <p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
        </div>
        <div className="contact-info">
          <h3>Visit Us</h3>
          <p>123 Green Street, Suite 456,<br />Green City, GC 78901</p>
        </div>
        <div className="contact-info">
          <h3>Follow Us</h3>
          <p>
            <a href="https://twitter.com/vaidyaVan" target="_blank" rel="noopener noreferrer">Twitter</a> | 
            <a href="https://facebook.com/vaidyaVan" target="_blank" rel="noopener noreferrer"> Facebook</a> | 
            <a href="https://linkedin.com/company/vaidyaVan" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          </p>
        </div>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="contact-input" />
        <input type="email" placeholder="Your Email" className="contact-input" />
        <textarea placeholder="Your Message" className="contact-textarea"></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
