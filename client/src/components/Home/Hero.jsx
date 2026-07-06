import "./Hero.css";

import {
  FaSearch,
  FaArrowRight,
  FaBriefcase,
  FaBuilding,
  FaUsers,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import { SiMongodb } from "react-icons/si";

function Hero() {
  return (
    <section className="hero">
      {/* Background Blur */}
      <div className="hero-blur hero-blur-1"></div>
      <div className="hero-blur hero-blur-2"></div>

      <div className="container hero-container">

        {/* LEFT SIDE */}

        <div className="hero-content">

          <span className="hero-badge">
            🚀 India's Fastest Growing Job Portal
          </span>

          <h1 className="hero-title">
            Find Your <br/>
            <span> Dream Job </span>
            With Confidence.
          </h1>

          <p className="hero-description">
            Discover thousands of verified jobs from top companies.
            Build your career faster with HireHub and connect with the
            companies that are hiring right now.
          </p>

          {/* Search */}

          <div className="hero-search">

            <div className="search-input">

              <FaSearch className="search-icon" />

              <input
                type="text"
                placeholder="Search jobs, companies or skills..."
              />

            </div>

            <button className="search-btn">
              Search
              <FaArrowRight />
            </button>

          </div>

          {/* Popular Skills */}

          <div className="hero-skills">

            <span>Popular Skills</span>

            <div className="skill-list">

              <button>
                <FaReact />
                React
              </button>

              <button>
                <FaNodeJs />
                Node.js
              </button>

              <button>
                <SiMongodb />
                MongoDB
              </button>

              <button>
                <FaPython />
                Python
              </button>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="hero-image">

          {/* Main Dashboard */}

          <div className="dashboard">

            <div className="dashboard-header">

              <div className="dashboard-logo">
                HireHub
              </div>

              <button>Hiring</button>

            </div>

            <div className="dashboard-search"></div>

            <div className="job-card">

              <div className="job-icon">
                <FaBriefcase />
              </div>

              <div className="job-content">

                <h4>Frontend Developer</h4>

                <p>Google • Remote</p>

              </div>

            </div>

            <div className="job-card">

              <div className="job-icon">
                <FaBriefcase />
              </div>

              <div className="job-content">

                <h4>MERN Stack Developer</h4>

                <p>Microsoft • Hybrid</p>

              </div>

            </div>

            <div className="job-card">

              <div className="job-icon">
                <FaBriefcase />
              </div>

              <div className="job-content">

                <h4>Backend Engineer</h4>

                <p>Amazon • Remote</p>

              </div>

            </div>

          </div>

          {/* Floating Cards */}

          <div className="floating-card jobs-card">

            <FaBriefcase />

            <div>

              <h3>10K+</h3>

              <p>Active Jobs</p>

            </div>

          </div>

          <div className="floating-card company-card">

            <FaBuilding />

            <div>

              <h3>500+</h3>

              <p>Companies</p>

            </div>

          </div>

          <div className="floating-card users-card">

            <FaUsers />

            <div>

              <h3>25K+</h3>

              <p>Candidates</p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Stats */}

      <div className="hero-bottom">

        <div className="stat">

          <h2>10K+</h2>

          <span>Jobs Available</span>

        </div>

        <div className="stat">

          <h2>500+</h2>

          <span>Hiring Companies</span>

        </div>

        <div className="stat">

          <h2>25K+</h2>

          <span>Job Seekers</span>

        </div>

        <div className="stat">

          <h2>98%</h2>

          <span>Success Rate</span>

        </div>

      </div>

    </section>
  );
}

export default Hero;