import React from "react";
import "./WhyChoose.css";

const WhyChoose = () => {
  return (
    <section className="why-choose">
      <div className="why-container">
        
        <div className="section-heading">
          <span className="section-badge">Our Value</span>
          <h2 className="section-title">
            Why Choose <span>Hire Hub</span>
          </h2>
          <p className="section-subtitle">
            We bridge the gap between elite talent and global opportunities through smart, streamlined ecosystem engineering.
          </p>
        </div>

        <div className="why-grid">
          
          <div className="why-card">
            <div className="card-icon-wrapper">
              {/* Replace with your preferred SVG icon (e.g., Lucide Rocket) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5"/><path d="M12 2c1-1 .5-2 .5-2h-1s-.5 1 .5 2z"/><path d="M12 2C7.58 2 4 5.58 4 10c0 4.17 2.83 7.67 6.64 8.64A2 2 0 0 0 12 20a2 2 0 0 0 1.36-1.36C17.17 17.67 20 14.17 20 10c0-4.42-3.58-8-8-8z"/></svg>
            </div>
            <h3>Accelerated Hiring</h3>
            <p>Get precision-matched with leading global companies in real-time using our advanced algorithm engine.</p>
          </div>

          <div className="why-card">
            <div className="card-icon-wrapper">
              {/* Replace with your preferred SVG icon (e.g., Lucide ShieldCheck) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
            </div>
            <h3>Verified Enterprise Network</h3>
            <p>Every employer undergoes a rigorous vetting process to guarantee secure, legitimate corporate engagements.</p>
          </div>

          <div className="why-card">
            <div className="card-icon-wrapper">
              {/* Replace with your preferred SVG icon (e.g., Lucide Briefcase) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
            </div>
            <h3>Vast Industry Footprint</h3>
            <p>Gain direct exposure to thousands of high-tier roles across Technology, Finance, Marketing, and Operations.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChoose;