import React, { useState, useEffect } from 'react';
import { loadPublishedWorks } from '../utils/imageLoader';

const PublishedWorksPage = () => {
  const [works, setWorks] = useState([]);
  const [selectedWork, setSelectedWork] = useState(null);

  useEffect(() => {
    const fetchWorks = async () => {
      const data = await loadPublishedWorks();
      setWorks(data);
    };
    fetchWorks();
  }, []);

  const openLightbox = (work) => setSelectedWork(work);
  const closeLightbox = () => setSelectedWork(null);

  return (
    <section className="published-page">
      <div className="container">
        <div className="published-page-header">
          <h1 className="font-display">PUBLISHED WORKS</h1>
          <p className="font-accent">As featured in global editorial publications.</p>
        </div>

        <div className="magazine-grid">
          {works.map((work, idx) => (
            <div
              key={idx}
              className="magazine-cover"
              onClick={() => openLightbox(work)}
            >
              <img src={work.src} alt={work.title} loading="lazy" />
              <div className="magazine-overlay">
                <p className="font-subhead magazine-pub">{work.publication}</p>
                <h3 className="font-display magazine-title">{work.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedWork && (
        <div className="lightbox-backdrop" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
            <img src={selectedWork.src} alt={selectedWork.title} className="lightbox-image" />
            <div className="lightbox-info">
              <p className="font-subhead" style={{ color: 'var(--accent-chrome)', fontSize: '13px', marginBottom: '8px' }}>
                {selectedWork.publication}
              </p>
              <h2 className="font-display" style={{ fontSize: '36px', marginBottom: '15px' }}>
                {selectedWork.title}
              </h2>
              <p className="font-body" style={{ color: 'var(--text-muted)', maxWidth: '500px' }}>
                {selectedWork.blurb}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PublishedWorksPage;
