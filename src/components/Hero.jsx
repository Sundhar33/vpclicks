import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-title">
        <span className="hero-gradient"></span><br />
        <span className="hero-gradient" style={{ fontSize: '5.05rem' }}>VPCLICKZ</span>
      </div>
      <div className="hero-subtitle">
        Welcome to VP CLICKZ! India's boldest photography destination for stunning portraits, creative event coverage, and vibrant visual storytelling.<br />
        Transform memories into masterpieces with pro-grade studio, outdoor, and commercial shoots. Trusted by brands & cherished by families.
      </div>
      <button className="cta-btn" onClick={() => { window.location.href = '#contact'; }}>Book now</button>

      <div className="shape-1"></div>
      <div className="shape-2"></div>
      <div className="shape-3"></div>
      <div className="shape-4"></div>
      <div className="square-sm"></div>
      <div className="square-sm2"></div>
    </section>
  );
};

export default Hero;
