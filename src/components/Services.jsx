import React from 'react';

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-list">
        <div className="service-card">
          <span className="service-icon">📸</span>
          <h3>Portrait Photography</h3>
          <p>Professional studio and outdoor sessions for individuals, couples, families, and more.</p>
        </div>
        <div className="service-card">
          <span className="service-icon">🎬</span>
          <h3>Event Coverage</h3>
          <p>Expert photography for weddings, birthdays, corporate functions, and festivals.</p>
        </div>
        <div className="service-card">
          <span className="service-icon">🛍️</span>
          <h3>Product Shoots</h3>
          <p>High-quality product and commercial photography to elevate your brand's image.</p>
        </div>
        <div className="service-card">
          <span className="service-icon">🌈</span>
          <h3>Creative Retouching</h3>
          <p>Advanced editing, color grading, and artistic photo effects for unforgettable results.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
