import React from 'react';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo-area">
        <span className="brand-tagline"></span>
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#services">Services</a>
        <a href="#faq">Q&A</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="social-icons">
        <a href="https://www.instagram.com/vp_clicks_25?igsh=MTBteHNqMTFscmVuYg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
