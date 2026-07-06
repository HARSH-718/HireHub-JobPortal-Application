import "./Footer.css";

import {
  FaBriefcase,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        {/* Company */}

        <div className="footer-about">

          <div className="footer-logo">

            <div className="footer-logo-icon">
              <FaBriefcase />
            </div>

            <h2>
              Hire<span>Hub</span>
            </h2>

          </div>

          <p>
            HireHub connects talented professionals with leading companies.
            Discover opportunities, grow your career, and find your dream job
            with confidence.
          </p>

          <div className="social-links">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/jobs">Jobs</Link>

          <Link to="/companies">Companies</Link>

          <Link to="/about">About</Link>

        </div>

        {/* Resources */}

        <div className="footer-links">

          <h3>Resources</h3>

          <a href="#">Career Guide</a>

          <a href="#">Resume Tips</a>

          <a href="#">Interview Tips</a>

          <a href="#">Privacy Policy</a>

        </div>

        {/* Contact */}

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>

            <FaEnvelope />

            hello@hirehub.com

          </p>

          <p>

            <FaPhoneAlt />

            +91 98765 43210

          </p>

          <p>

            <FaMapMarkerAlt />

            Chandigarh, India

          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>

          © 2026 HireHub. All Rights Reserved.

        </p>

      </div>

    </footer>
  );
}

export default Footer;