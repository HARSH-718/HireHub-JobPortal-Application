import "./AboutHero.css";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaBriefcase,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

function AboutHero() {
  return (
    <section className="about-hero">

      <div className="about-container">

        {/* LEFT */}

        <div className="about-left">

          <span className="about-badge">
            About HireHub
          </span>

          <h1>
            Connecting
            <span> Talent </span>
            With
            <span> Opportunity.</span>
          </h1>

          <p>
            HireHub is a modern job portal built to connect talented
            professionals with top companies. We simplify hiring by
            providing a fast, transparent, and efficient recruitment
            experience for everyone.
          </p>

          <div className="about-buttons">

            <Link to="/jobs" className="primary-btn">
              Explore Jobs
              <FaArrowRight />
            </Link>

            <Link to="/contact" className="secondary-btn">
              Contact Us
            </Link>

          </div>

          <div className="about-features">

            <div>

              <FaCheckCircle />

              <span>Verified Companies</span>

            </div>

            <div>

              <FaCheckCircle />

              <span>Trusted Recruiters</span>

            </div>

            <div>

              <FaCheckCircle />

              <span>Thousands of Jobs</span>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="about-right">

          <div className="hero-card">

            <div className="hero-icon">

              <FaBriefcase />

            </div>

            <h3>10,000+</h3>

            <p>Jobs Posted</p>

          </div>

          <div className="floating-card top-card">

            <FaUsers />

            <div>

              <h4>25K+</h4>

              <p>Active Candidates</p>

            </div>

          </div>

          <div className="floating-card bottom-card">

            <FaBriefcase />

            <div>

              <h4>500+</h4>

              <p>Hiring Companies</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutHero;