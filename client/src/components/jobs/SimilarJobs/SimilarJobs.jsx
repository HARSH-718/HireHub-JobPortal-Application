import "./SimilarJobs.css";

import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaMoneyBillWave,
  FaArrowRight,
} from "react-icons/fa";

const jobs = [
  {
    id: 1,
    company: "Microsoft",
    role: "Frontend Developer",
    location: "Hyderabad",
    salary: "₹20 LPA",
    type: "Full Time",
    logo: "M",
  },

  {
    id: 2,
    company: "Amazon",
    role: "React Developer",
    location: "Bangalore",
    salary: "₹18 LPA",
    type: "Hybrid",
    logo: "A",
  },

  {
    id: 3,
    company: "Adobe",
    role: "UI Engineer",
    location: "Pune",
    salary: "₹22 LPA",
    type: "Remote",
    logo: "A",
  },
];

function SimilarJobs() {
  return (
    <section className="similar-jobs">

      <div className="similar-container">

        {/* Heading */}

        <div className="similar-header">

          <div>

            <span>Related Jobs</span>

            <h2>
              Similar Opportunities
            </h2>

          </div>

          <button>
            View All
          </button>

        </div>

        {/* Cards */}

        <div className="similar-grid">

          {jobs.map((job) => (

            <div className="similar-card" key={job.id}>

              <div className="company-top">

                <div className="company-logo">
                  {job.logo}
                </div>

                <div>

                  <h3>{job.role}</h3>

                  <p>{job.company}</p>

                </div>

              </div>

              <div className="job-meta">

                <span>

                  <FaMapMarkerAlt />

                  {job.location}

                </span>

                <span>

                  <FaBriefcase />

                  {job.type}

                </span>

                <span>

                  <FaMoneyBillWave />

                  {job.salary}

                </span>

              </div>

              <button className="apply-job">

                Apply Now

                <FaArrowRight />

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default SimilarJobs;