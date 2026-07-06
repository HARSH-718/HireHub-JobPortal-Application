import React from "react";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="cta-section">
      {/* Decorative corporate design grids behind text */}
      <div className="cta-overlay-glow"></div>
      <div className="cta-overlay-grid"></div>

      <div className="cta-container">
        <span className="cta-badge">Launch Your Future</span>
        <h2 className="cta-title">
          Ready to Engineer Your Career with <span>Hire Hub?</span>
        </h2>

        <p className="cta-description">
          Accelerate your career trajectory. Join global enterprise networks, manage strategic pipelines, and land positions designed for your specialization vectors.
        </p>

        <div className="cta-buttons">
          <button className="btn-primary">
            Get Started Now
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
          <button className="btn-secondary">Explore Opportunities</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;