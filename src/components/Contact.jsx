import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault(); 
    const ownerNumber = "916385371104"; 
    const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(
      `Customer Name: ${name}\nEmail: ${email}\nMobile Number:${number}\nMessage: ${message}`
    )}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Send Inquiry</h2>
      <form className="contact-form" id="contactForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="nameInput" style={{ color: 'white' }}>Name *</label>
        <input type="text" id="nameInput" required value={name} onChange={(e) => setName(e.target.value)} />
        <label htmlFor="emailInput" style={{ color: 'white' }}>Email *</label>
        <input type="email" id="emailInput" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="numberInput" style={{ color: 'white' }}>Phone *</label>
        <input type="tel" id="numberInput" pattern="[0-9]{10}" required value={number} onChange={(e) => setNumber(e.target.value)} />
        <label htmlFor="messageInput" style={{ color: 'white' }}>Message *</label>
        <textarea id="messageInput" rows={5} required value={message} onChange={(e) => setMessage(e.target.value)} />
        <button
          type="submit"
          onClick={handleWhatsAppSubmit}
          style={{
            background: 'linear-gradient(90deg,#fbff00 10%, #ff00fa 90%)',
            color: 'white',
            margin: '10px 0',
            padding: '12px 24px',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '30px',
            width: '100%',
            cursor: 'pointer'
          }}
        >
          📧 Send via WhatsApp
        </button>
      </form>
    </section>
  );
};

export default Contact;
