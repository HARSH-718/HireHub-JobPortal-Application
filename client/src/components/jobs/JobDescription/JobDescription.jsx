import "./JobDescription.css";

import {
  FaCheckCircle,
  FaBriefcase,
  FaGraduationCap,
  FaTools,
} from "react-icons/fa";

function JobDescription() {
  return (
    <section className="job-description-section">

      <div className="job-description-container">

        {/* LEFT CONTENT */}

        <div className="job-description-left">

          {/* About Role */}

          <div className="description-card">

            <h2>Job Description</h2>

            <p>
              We are looking for a passionate Frontend Developer who enjoys
              building modern, responsive, and scalable web applications.
              You'll collaborate with designers, backend engineers, and product
              managers to deliver high-quality user experiences.
            </p>

            <p>
              You will work with modern technologies including React,
              JavaScript, REST APIs, and Git while contributing to enterprise
              level products used by millions of users worldwide.
            </p>

          </div>

          {/* Responsibilities */}

          <div className="description-card">

            <h2>Key Responsibilities</h2>

            <ul>

              <li>
                <FaCheckCircle />
                Build responsive web applications using React.
              </li>

              <li>
                <FaCheckCircle />
                Collaborate with UI/UX designers.
              </li>

              <li>
                <FaCheckCircle />
                Optimize application performance.
              </li>

              <li>
                <FaCheckCircle />
                Write clean and reusable code.
              </li>

              <li>
                <FaCheckCircle />
                Participate in code reviews and team discussions.
              </li>

            </ul>

          </div>

        </div>

        {/* RIGHT SIDEBAR */}

        <div className="job-description-right">

          <div className="overview-card">

            <h3>Job Overview</h3>

            <div className="overview-item">

              <FaBriefcase />

              <div>

                <span>Experience</span>

                <strong>3 - 5 Years</strong>

              </div>

            </div>

            <div className="overview-item">

              <FaGraduationCap />

              <div>

                <span>Education</span>

                <strong>B.Tech / MCA</strong>

              </div>

            </div>

            <div className="overview-item">

              <FaTools />

              <div>

                <span>Skills</span>

                <strong>React, JS, CSS</strong>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default JobDescription;