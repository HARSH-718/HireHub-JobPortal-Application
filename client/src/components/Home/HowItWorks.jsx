import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="hiw-container">

        <div className="hiw-heading">
          <span className="hiw-badge">Workflow</span>
          <h2 className="section-title">
            How It <span>Works</span>
          </h2>
          <p className="section-subtitle">
            Your path to the next career milestone engineered in three frictionless phases.
          </p>
        </div>

        <div className="steps-wrapper">

          <div className="step-card">
            <div className="step-number-container">
              <span className="step-number">01</span>
            </div>
            <h3>Create Profile</h3>
            <p>Architect your professional digital identity with curated expertise matrices and project experience.</p>
          </div>

          <div className="step-card">
            <div className="step-number-container">
              <span className="step-number">02</span>
            </div>
            <h3>Explore Matches</h3>
            <p>Our intelligence router maps your precise skill vectors directly against active global vacancies.</p>
          </div>

          <div className="step-card">
            <div className="step-number-container">
              <span className="step-number">03</span>
            </div>
            <h3>Accelerate Onboarding</h3>
            <p>Interface straight with primary hiring decision-makers and lock in your executive placement.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;