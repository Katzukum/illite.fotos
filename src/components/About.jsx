import React from 'react';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        <img 
          src="/images/images.jpg" 
          alt="Photographer Behind the Lens" 
          className="about-image" 
        />
        <div className="about-content">
          <h2 className="font-display">BEHIND THE LENS</h2>
          <p className="font-body">
            Operating at the intersection of street culture, athletic prestige, and high-end editorial photography. 
            I don't just take pictures; I create unapologetic, larger-than-life portraiture with a culture-forward edge.
          </p>
          <p className="font-body">
            Based in Florida, I specialize in professional wrestling, fitness, and lifestyle shoots that capture power and cinematic drama. 
            Whether it's a championship ringside or a high-end studio session, my goal is to deliver work that feels iconic.
          </p>
          
          <div className="market-list">
            <span className="market-tag">ORLANDO</span>
            <span className="market-tag">TAMPA</span>
            <span className="market-tag">MIAMI</span>
            <span className="market-tag">WORLDWIDE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
