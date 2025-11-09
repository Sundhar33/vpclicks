import React from 'react';
import vp1 from '../assets/vp1.jpg';
import vp2 from '../assets/vp2.jpg';
import vp3 from '../assets/vp3.jpg';
import vp4 from '../assets/vp4.jpg';
import vp5 from '../assets/vp5.jpg';

const Portfolio = () => {
  return (
    <section className="portfolio-section" id="portfolio">
      <h2 className="section-title">Portfolio</h2>
      <div className="portfolio-section">
        <div className="portfolio-column">
          <div className="portfolio-item"><img src={vp1} alt="Portfolio 1" /></div>
          <div className="portfolio-item"><img src={vp2} alt="Portfolio 2" /></div>
        </div>
        <div className="portfolio-center">
          <img src={vp3} alt="Portfolio Center" />
        </div>
        <div className="portfolio-column">
          <div className="portfolio-item"><img src={vp4} alt="Portfolio 3" /></div>
          <div className="portfolio-item"><img src={vp5} alt="Portfolio 4" /></div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
