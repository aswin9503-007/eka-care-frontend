import React from 'react';
import "../Homepage_CSS/HeroSection.css";

const HeroSection = () => {
  const features = [
    { icon: '🏠', name: 'Doctors' },
    { icon: '👥', name: 'Patients' },
    { icon: '💻', name: 'Developers' }, // Changed to emoji for consistency
    { icon: '🏥', name: 'Hospitals' }
  ];

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <img 
            src="https://www.eka.care/static/media/healthcare-ai.6f4f6e1f.svg" 
            alt="AI Character" 
            className="hero-illustration" 
          />
          
          <h1 className="hero-title">Healthcare meets AI</h1>
          <p className="hero-subtitle">
            Revolutionizing healthcare with Health AI, Eka Care provides integrated solutions for
          </p>

          <div className="feature-grid">
            {features.map((item, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-circle">
                  <span>{item.icon}</span>
                </div>
                <span className="feature-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="hero-wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0 120L1440 120L1440 0C1440 0 1116.5 60 720 60C323.5 60 0 0 0 0L0 120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;