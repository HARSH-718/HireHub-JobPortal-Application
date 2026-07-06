import "./CompanyInfo.css";

import {
  FaGlobe,
  FaBuilding,
  FaUsers,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

function CompanyInfo() {
  return (
    <section className="company-info-section">

      <div className="company-info-container">

        {/* Left */}

        <div className="company-details">

          <span className="company-tag">
            About Company
          </span>

          <h2>Google</h2>

          <p>
            Google is one of the world's leading technology companies,
            building products that help billions of people access
            information, connect with others, and grow their careers.
            Our teams create innovative solutions in Search, Cloud,
            AI, Android, YouTube and many other products.
          </p>

          <div className="company-features">

            <div className="feature-item">

              <FaGlobe />

              <div>

                <span>Website</span>

                <strong>www.google.com</strong>

              </div>

            </div>

            <div className="feature-item">

              <FaBuilding />

              <div>

                <span>Industry</span>

                <strong>Technology</strong>

              </div>

            </div>

            <div className="feature-item">

              <FaUsers />

              <div>

                <span>Company Size</span>

                <strong>180,000+ Employees</strong>

              </div>

            </div>

            <div className="feature-item">

              <FaMapMarkerAlt />

              <div>

                <span>Head Office</span>

                <strong>California, USA</strong>

              </div>

            </div>

            <div className="feature-item">

              <FaCalendarAlt />

              <div>

                <span>Founded</span>

                <strong>1998</strong>

              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="company-card">

          <div className="company-logo">

            G

          </div>

          <h3>Google LLC</h3>

          <p>
            Empowering innovation through technology and building
            products for billions of users across the globe.
          </p>

          <button>

            Visit Company

            <FaArrowRight />

          </button>

        </div>

      </div>

    </section>
  );
}

export default CompanyInfo;