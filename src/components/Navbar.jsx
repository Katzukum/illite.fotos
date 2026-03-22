import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    if (location.pathname === '/') {
      // If already on homepage, just scroll
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If on another page, navigate home first then scroll
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">ILLITE.FOTOS</Link>
        
        <div className="nav-links">
          <button onClick={() => handleNavClick('gallery')} className="nav-link-btn">Gallery</button>
          <Link to="/published" className="nav-link">Published</Link>
          <button onClick={() => handleNavClick('about')} className="nav-link-btn">About</button>
          <button onClick={() => handleNavClick('booking')} className="btn-book">BOOK NOW</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
