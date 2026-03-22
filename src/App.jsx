import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Gallery from './components/Gallery.jsx';
import About from './components/About.jsx';
import ContactForm from './components/ContactForm.jsx';
import Footer from './components/Footer.jsx';
import SignatureSeries from './components/SignatureSeries.jsx';
import PublishedWorksPage from './pages/PublishedWorksPage.jsx';

function HomePage() {
  return (
    <>
      <Hero />
      <SignatureSeries />
      <Gallery />
      <About />
      <ContactForm />
    </>
  );
}

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/published" element={<PublishedWorksPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
