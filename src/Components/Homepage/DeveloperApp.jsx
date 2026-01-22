import "../Homepage_CSS/DeveloperApp.css";

const DeveloperApp = () => {
  return (
    <section className="dev-section">
      <div className="dev-card">
        {/* Left Side: Content */}
        <div className="dev-content">
          <div className="dev-badge">
            <span className="icon">💻</span> EKA FOR DEVELOPERS
          </div>
          <h2 className="dev-heading">
            <span className="highlight-text">Develop</span> a healthcare
            solution using Eka Care
          </h2>
          <p className="dev-subtext">
            Build cutting-edge solutions with Eka Care's AI-enhanced developer
            platform.
          </p>

          <div className="dev-button-group">
            <button className="learn-more-btn">
              Learn More <span className="arrow">›</span>
            </button>
            <button className="abdm-btn">
              ABDM Connect API <span className="arrow">›</span>
            </button>
          </div>
        </div>

        {/* Right Side: Developer Image */}
        <div className="dev-image-container">
          <img
            src="https://cdn.prod.website-files.com/64d0bd8b475d468c8b1aa632/66fb93095f5d42386fcdef3a_Developer.webp"
            alt="Developer working"
            className="dev-img"
          />
        </div>
      </div>
    </section>
  );
};

export default DeveloperApp;
