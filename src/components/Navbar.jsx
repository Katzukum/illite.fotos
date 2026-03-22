import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">ILLITE.FOTOS</Link>
        
        <div className="nav-links">
          <a href="/#gallery" className="nav-link">Gallery</a>
          <Link to="/published" className="nav-link">Published</Link>
          <a href="/#about" className="nav-link">About</a>
          <a href="/#booking" className="btn-book">BOOK NOW</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
