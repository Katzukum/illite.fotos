import React, { useState, useEffect, useCallback } from 'react';
import { loadRandomImages } from '../utils/imageLoader';

const Hero = () => {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const heroImages = await loadRandomImages('hero', 5);
      if (heroImages.length > 0) {
        setImages(heroImages.map(src => ({ src, title: 'Featured Work' })));
      }
    };
    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images]);

  if (images.length === 0) {
    return <section className="hero" style={{ background: 'var(--bg-primary)' }}></section>;
  }

  const safeIndex = current < images.length ? current : 0;

  return (
    <section className="hero">
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`hero-slide ${idx === safeIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url("${img.src}")` }}
        />
      ))}
      
      <div className="hero-overlay">
        <h1 className="hero-caption">{images[safeIndex].title}</h1>
      </div>
    </section>
  );
};

export default Hero;
