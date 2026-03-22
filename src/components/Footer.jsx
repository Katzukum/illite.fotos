import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="social-links">
          <a href="#" className="social-link" aria-label="Instagram">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </a>
          <a href="#" className="social-link" aria-label="Twitter">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-1 2-5 2c4 8-2 15-11 15 1 0 3-1 4-2-8-1-10-6-10-6 4 1 5 1 5 1-7-2-7-9-7-9 3 1 3 1 3 1-8-3-2-12-2-12 5 3 11 5 11 5 0-2 2-5 5-5s5 3 5 5c0 1-1 2-2 3z"></path></svg>
          </a>
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} ILLITE.FOTOS — ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;
