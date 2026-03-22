import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Studio Session',
    market: 'Orlando',
    vision: '',
    referral: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulated submission delay
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', phone: '', projectType: 'Studio Session', market: 'Orlando', vision: '', referral: '' });
    }, 1500);
  };

  return (
    <section id="booking" className="booking-section">
      <div className="container">
        <div className="booking-header">
          <h2 className="font-display">LET'S CREATE SOMETHING ICONIC</h2>
          <p className="font-accent">Serious inquiries only. Tell me your vision and let's get to work.</p>
        </div>

        <form onSubmit={handleSubmit} className="booking-form">
          <div className="form-group">
            <label>NAME</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required />
          </div>
          
          <div className="form-group">
            <label>EMAIL</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>PHONE (OPTIONAL)</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>PROJECT TYPE</label>
            <select name="projectType" value={form.projectType} onChange={handleChange}>
              <option>Studio Session</option>
              <option>On-Location</option>
              <option>Event / Live</option>
              <option>Editorial</option>
            </select>
          </div>

          <div className="form-group">
            <label>MARKET</label>
            <select name="market" value={form.market} onChange={handleChange}>
              <option>Orlando</option>
              <option>Tampa</option>
              <option>Miami</option>
              <option>Other / Travel</option>
            </select>
          </div>

          <div className="form-group">
            <label>HOW DID YOU HEAR ABOUT US?</label>
            <input type="text" name="referral" value={form.referral} onChange={handleChange} />
          </div>

          <div className="form-group full-width">
            <label>TELL ME YOUR VISION (REQUIRED)</label>
            <textarea 
              name="vision" 
              rows="5" 
              value={form.vision} 
              onChange={handleChange} 
              required 
            />
          </div>

          <button type="submit" className="btn-send font-display" disabled={status === 'sending'}>
            {status === 'sending' ? 'PROCESSING...' : 'SEND IT'}
          </button>
          
          {status === 'sent' && <p style={{ color: 'var(--accent-cyan)', gridColumn: 'span 2', textAlign: 'center', marginTop: '10px' }}>Your vision has been received. Expect a response shortly.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
