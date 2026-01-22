import React from "react";
import "../Homepage_CSS/HeroSection.css";

const HeroSection = () => {
  const features = [
    { icon: "🏠", name: "Doctors" },
    { icon: "👥", name: "Patients" },
    { icon: "💻", name: "Developers" }, // Changed to emoji for consistency
    { icon: "🏥", name: "Hospitals" },
  ];

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <img
            src="data:image/jpeg;base64,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"
            alt="AI Character"
            className="hero-illustration"
          />

          <h1 className="hero-title">Healthcare meets AI</h1>
          <p className="hero-subtitle">
            Revolutionizing healthcare with Health AI, Eka Care provides
            integrated solutions for
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
          <path
            d="M0 120L1440 120L1440 0C1440 0 1116.5 60 720 60C323.5 60 0 0 0 0L0 120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
