import "./JobList.css";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaBookmark,
  FaMoneyBillWave,
  FaArrowRight,
} from "react-icons/fa";

const jobs = [
  {
    id: 1,
    company: "Google",
    role: "Frontend Developer",
    location: "Bangalore",
    type: "Full Time",
    salary: "₹18 LPA",
    skills: ["React", "JavaScript", "CSS"],
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Backend Developer",
    location: "Hyderabad",
    type: "Remote",
    salary: "₹22 LPA",
    skills: ["Node.js", "Express", "MongoDB"],
  },
  {
    id: 3,
    company: "Amazon",
    role: "UI/UX Designer",
    location: "Delhi",
    type: "Hybrid",
    salary: "₹15 LPA",
    skills: ["Figma", "Adobe XD", "Photoshop"],
  },
];

function JobList() {
  return (
    <section className="job-list-section">

      <div className="job-list-container">

        <div className="job-grid">

          {jobs.map((job) => (

            <div className="job-item" key={job.id}>

              {/* Top */}

              <div className="job-item-top">

                <div>

                  <h5>{job.company}</h5>

                  <h3>{job.role}</h3>

                </div>

                <button className="save-btn">
                  <FaBookmark />
                </button>

              </div>

              {/* Info */}

              <div className="job-meta">

                <span>
                  <FaMapMarkerAlt />
                  {job.location}
                </span>

                <span>
                  <FaClock />
                  {job.type}
                </span>

                <span>
                  <FaMoneyBillWave />
                  {job.salary}
                </span>

              </div>

              {/* Skills */}

              <div className="skills-list">

                {job.skills.map((skill, index) => (

                  <span key={index}>
                    {skill}
                  </span>

                ))}

              </div>

              {/* Button */}
<Link
  to={`/jobs/${job.id}`}
  className="apply-job-btn"
>

  View Details

  <FaArrowRight />

</Link>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default JobList;