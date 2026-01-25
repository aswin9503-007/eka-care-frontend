import "../Homepage_CSS/AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Text Content */}
        <div className="about-content">
          <h2 className="about-title">About Us</h2>
          <p className="about-subtitle">
            Build innovative healthcare solutions with Eka Care's robust
            developer platform.
          </p>

          <div className="about-quote-container">
            <p className="about-quote">
              "At Eka Care, our vision is to transform Indian healthcare into an
              inclusive, trusted, and digitally connected ecosystem, empowering
              everyone to take charge of their health."
            </p>
            <div className="about-author">
              <span className="author-name">Vikalp Sahni</span>
              <span className="author-role">Founder & CEO of Eka Care</span>
            </div>
          </div>
          <button className="about-btn">
            Learn More <span className="btn-arrow">›</span>
          </button>
        </div>

        {/* Image Container */}
        <div className="about-image-wrapper">
          <img
            src="https://cdn.prod.website-files.com/64d0bd8b475d468c8b1aa632/66fb93b8f440702e8ff3369f_vikalp-pp%201-p-500.webp"
            alt="Vikalp Sahni"
            className="about-ceo-img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
