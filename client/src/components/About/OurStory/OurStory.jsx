import "./OurStory.css";

import {
  FaBriefcase,
  FaUsers,
  FaBuilding,
  FaAward,
} from "react-icons/fa";

function OurStory() {
  return (
    <section className="our-story">

      <div className="story-container">

        {/* LEFT */}

        <div className="story-left">

          <span className="story-badge">
            Our Story
          </span>

          <h2>
            Building Careers,
            <span> Creating Opportunities.</span>
          </h2>

          <p>
            HireHub was created with one simple goal — to bridge the gap
            between talented professionals and the world's leading
            companies. We believe hiring should be faster, smarter and
            transparent for everyone.
          </p>

          <p>
            Every day thousands of job seekers discover new opportunities,
            while companies find skilled candidates using our modern
            recruitment platform.
          </p>

        </div>

        {/* RIGHT */}

        <div className="story-right">

          <div className="stats-card">

            <div className="stat-box">

              <FaBriefcase />

              <h3>10K+</h3>

              <p>Jobs Posted</p>

            </div>

            <div className="stat-box">

              <FaUsers />

              <h3>25K+</h3>

              <p>Active Users</p>

            </div>

            <div className="stat-box">

              <FaBuilding />

              <h3>500+</h3>

              <p>Companies</p>

            </div>

            <div className="stat-box">

              <FaAward />

              <h3>98%</h3>

              <p>Success Rate</p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default OurStory;