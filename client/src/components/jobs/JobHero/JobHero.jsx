import "./JobHero.css";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";

function JobHero() {
  return (
    <section className="job-hero">

      <div className="job-hero-container">

        {/* Left */}

        <div className="job-left">

          <span className="hero-badge">
            🚀 Find Your Next Opportunity
          </span>

          <h1>
            Discover Jobs That Match
            <span> Your Skills.</span>
          </h1>

          <p>
            Explore thousands of verified jobs from top companies.
            Search by role, location, skills and start your career today.
          </p>

          {/* Search */}

          <div className="hero-search">

            <div className="search-box">
              <FaSearch />
              <input
                type="text"
                placeholder="Job title, keywords..."
              />
            </div>

            <div className="search-box">
              <FaMapMarkerAlt />
              <input
                type="text"
                placeholder="Location"
              />
            </div>

            <button>
              Search Jobs
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="job-right">

          <div className="hero-card">

            <div className="card-top">

              <FaBriefcase className="hero-icon"/>

              <div>

                <h3>Frontend Developer</h3>

                <p>Google • Remote</p>

              </div>

            </div>

            <span className="salary">
              ₹18 LPA
            </span>

          </div>

          <div className="floating-card card-one">

            <FaUsers />

            <div>

              <h4>20K+</h4>

              <p>Candidates</p>

            </div>

          </div>

          <div className="floating-card card-two">

            <FaBriefcase />

            <div>

              <h4>10K+</h4>

              <p>Jobs</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default JobHero;