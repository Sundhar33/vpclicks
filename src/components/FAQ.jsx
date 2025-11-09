import React from 'react';

const FAQ = () => {
  const questions = [
    { q: 'What types of photography do you offer?', a: 'VP CLICKZ covers portraits, events, products, creative shoots, retouching, and videography upon request.' },
    { q: 'How do I book a session?', a: 'Use our contact form below or call us during studio hours; we reply to all inquiries within 24 hours.' },
    { q: 'Do you provide prints, albums, or framing?', a: 'Yes! We offer full print and album packages, as well as custom framing for all shoots.' },
    { q: 'Do you travel for events or offer shoots outside Trichy?', a: 'Absolutely! We serve all nearby towns and are available to travel for projects on request.' },
    { q: 'What is your editing process?', a: 'Every image is professionally edited and delivered with color correction, crop, and optional creative effects.' }
  ];
  return (
    <section className="faq-section" id="faq">
      <div className="faq-title">Questions & Answers</div>
      <ul className="faq-list">
        {questions.map((item, index) => (
          <li key={index}>
            <div className="faq-question">{item.q}</div>
            <div className="faq-answer">{item.a}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
