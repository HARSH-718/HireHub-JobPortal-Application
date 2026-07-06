import "./JobDetailsHero.css";

import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaClock,
  FaBookmark,
  FaArrowRight,
  FaStar
} from "react-icons/fa";

function JobDetailsHero() {
  return (
    <section className="job-details-hero">

      <div className="job-details-container">

        {/* LEFT */}

        <div className="job-details-left">

          <div className="company-logo">
            G
          </div>

          <div className="job-info">

            <span className="verified-badge">
              ⭐ Verified Company
            </span>

            <h1>
              Senior Frontend Developer
            </h1>

            <h3>
              Google
            </h3>

            <div className="job-meta">

              <span>
                <FaMapMarkerAlt />
                Bangalore, India
              </span>

              <span>
                <FaBriefcase />
                3-5 Years
              </span>

              <span>
                <FaMoneyBillWave />
                ₹18 - ₹25 LPA
              </span>

              <span>
                <FaClock />
                Full Time
              </span>

            </div>

            <div className="rating-box">

              <FaStar />

              <strong>4.9</strong>

              <small>(1,248 Reviews)</small>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="job-action-card">

          <h3>Ready to Apply?</h3>

          <p>
            Submit your application and get noticed by recruiters today.
          </p>

          <button className="apply-btn">

            Apply Now

            <FaArrowRight />

          </button>

          <button className="save-btn">

            <FaBookmark />

            Save Job

          </button>

        </div>

      </div>

    </section>
  );
}

export default JobDetailsHero;