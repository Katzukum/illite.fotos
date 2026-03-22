import React from 'react';

const SignatureSeries = () => {
  const spotlights = [
    {
      title: 'BONNIE & CLYDE',
      client: 'Karrion Kross x Scarlett Bordeaux',
      concept: 'A modern retelling. Cinematic street prestige.',
      image: '/images/images (3).jpg'
    },
    {
      title: 'CHAMPIONSHIP EDGE',
      client: 'Harley Cameron',
      concept: 'Athletic prestige meets high-end editorial.',
      image: '/images/images (2).jpg'
    }
  ];

  return (
    <section id="signature" className="signature-section">
      <div className="container">
        <h2 className="font-display" style={{ marginBottom: '40px', fontSize: '48px' }}>SIGNATURE SERIES</h2>
        
        <div className="signature-grid">
          {spotlights.map((item, idx) => (
            <div key={idx} className={`signature-card ${idx % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="signature-image-container">
                <img src={item.image} alt={item.title} className="signature-image" />
              </div>
              <div className="signature-content">
                <h3 className="item-title" style={{ fontSize: '42px', color: 'var(--text-primary)' }}>{item.title}</h3>
                <p className="font-subhead" style={{ color: 'var(--accent-chrome)', marginBottom: '15px' }}>{item.client}</p>
                <p className="font-body" style={{ color: 'var(--text-muted)', maxWidth: '400px' }}>{item.concept}</p>
                <p className="font-accent" style={{ marginTop: '20px', fontSize: '14px', color: 'var(--accent-chrome)' }}>As featured in Editorial</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureSeries;
