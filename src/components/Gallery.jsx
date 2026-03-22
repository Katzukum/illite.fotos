import React, { useState, useEffect } from 'react';
import { loadRandomImages } from '../utils/imageLoader';

const categories = ['All', 'Theatrical / Wrestling', 'Fitness / Editorial', 'Lifestyle'];

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    const fetchAllGalleryImages = async () => {
      const theatrical = await loadRandomImages('theatrical', 4);
      const fitness = await loadRandomImages('fitness', 4);
      const lifestyle = await loadRandomImages('lifestyle', 4);

      const all = [
        ...theatrical.map(src => ({ src, title: 'Action Shot', category: 'Theatrical / Wrestling' })),
        ...fitness.map(src => ({ src, title: 'Editorial Fit', category: 'Fitness / Editorial' })),
        ...lifestyle.map(src => ({ src, title: 'City Life', category: 'Lifestyle' })),
      ];
      
      setGalleryData(all);
    };
    fetchAllGalleryImages();
  }, []);

  const filteredImages = activeFilter === 'All' 
    ? galleryData 
    : galleryData.filter(img => img.category.includes(activeFilter.split(' / ')[0]));

  return (
    <section id="gallery" className="container">
      <div className="gallery-section-header">
        <h2 className="font-display">PORTFOLIO</h2>
        <div className="filters">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="masonry-grid">
        {filteredImages.map((img, idx) => (
          <div key={idx} className="masonry-item">
            <img src={img.src} alt={img.title} loading="lazy" />
            <div className="item-overlay">
              <h3 className="item-title">{img.title}</h3>
              <p className="item-category">{img.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
