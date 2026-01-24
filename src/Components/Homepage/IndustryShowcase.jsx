import "../Homepage_CSS/IndustryShowcase.css"

const IndustryShowcase = () => {
  return (
    <section className="industry-section">
      <div className="industry-container">
        <div className="healthcare-card">
          
          {/* Left Side: Image touching the edges */}
          <div className="card-image-wrapper">
            <img 
              src="https://cdn.prod.website-files.com/64d0bd8b475d468c8b1aa632/672ca702e1349ca045eb752f_PNG%20image-p-1080.png" 
              alt="Medical Professionals" 
              className="doctors-img"
            />
          </div>
          
          {/* Right Side: Content */}
          <div className="card-content">
            <div className="industry-badge">
              <span className="badge-icon">🏥</span> EKA FOR HOSPITALS
            </div>
            
            <h1 className="card-title">
              Elevate your <span>hospital</span> operations with Health AI
            </h1>
            
            <p className="card-description">
              Harness intelligent solutions to manage your healthcare facility 
              seamlessly, from admission to discharge and beyond.
            </p>
            
            <button className="learn-more-cta">
              Learn More <span className="arrow-icon">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryShowcase;