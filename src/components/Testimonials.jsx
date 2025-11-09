import React from 'react';

const Testimonials = () => {
  const data = [
    { quote: '“VP CLICKZ made our family photoshoot magical! The studio is welcoming and the photos look stunning!”', user: '– Aravind R.' },
    { quote: '“Professional, friendly, and creative. Our wedding memories are truly priceless thanks to Veeramani and team.”', user: '– Swathi & Karthik' },
    { quote: '“Quick turnaround, vibrant colors, and lots of attention to detail on our product shoot. Highly recommended!”', user: '– CraftyArts, Trichy' }
  ];

  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-title">Client Testimonials</div>
      <div className="testimonial-list">
        {data.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-quote">{t.quote}</div>
            <div className="testimonial-user">{t.user}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
