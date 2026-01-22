import React from "react";
import "../Homepage_CSS/PatientApp.css";

const PatientApp = () => {
  return (
    <section className="patient-app-section">
      <div className="patient-app-card">
        {/* Left Side: Family Image & Phone Mockup */}
        <div className="patient-image-container">
          <img
            src="https://cdn.prod.website-files.com/64d0bd8b475d468c8b1aa632/66fb93093ad821d58c90bd87_Patient.webp"
            alt="Healthy Family"
            className="family-img"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="patient-content">
          <div className="patient-badge-top">
            <span className="icon">👥</span> EKA PATIENT APP
          </div>

          <h2 className="patient-heading">
            Discover a <span className="purple-text">healthier</span> you
          </h2>

          <p className="patient-subtext">
            Transform your health journey with Health AI-generated insights and
            personalized record management through the Eka Care Patient App.
          </p>

          {/* Ratings/Trust Section */}
          <div className="patient-ratings">
            <div className="rating-item">
              <img
                src="https://cdn.prod.website-files.com/64d0bd8b475d468c8b1aa632/66d98612ef48f58c42478da2_Google.svg"
                alt="Google Wellness"
              />
              <div className="rating-info"></div>
            </div>

            <div className="rating-item">
              <img
                src="https://cdn.prod.website-files.com/64d0bd8b475d468c8b1aa632/66d98612adaf6241821d7f40_App%20rating.svg"
                alt=""
              />
            </div>
          </div>

          <button className="learn-more-btn-purple">
            Learn More <span className="arrow">›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PatientApp;
