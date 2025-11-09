import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const VpClickzWebsite = () => {
  return (
    <>
      <div className="neon-bg"></div>
      <div className="container">
        <Header />
        <Hero />
      </div>
      <About />
      <Services />
      <Portfolio />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default VpClickzWebsite;
