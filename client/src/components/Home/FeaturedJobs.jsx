import "./FeaturedJobs.css";

import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaRegBookmark,
  FaArrowRight,
} from "react-icons/fa";

function FeaturedJobs() {
  const jobs = [
    {
      id: 1,
      company: "Google",
      title: "Frontend Developer",
      location: "Remote",
      salary: "₹12 LPA",
      experience: "2+ Years",
      type: "Full Time",
      skills: ["React", "JavaScript", "Tailwind"],
    },

    {
      id: 2,
      company: "Microsoft",
      title: "MERN Stack Developer",
      location: "Delhi",
      salary: "₹18 LPA",
      experience: "3+ Years",
      type: "Hybrid",
      skills: ["React", "Node.js", "MongoDB"],
    },

    {
      id: 3,
      company: "Amazon",
      title: "Backend Engineer",
      location: "Bangalore",
      salary: "₹20 LPA",
      experience: "4+ Years",
      type: "Full Time",
      skills: ["Node.js", "Express", "MongoDB"],
    },

    {
      id: 4,
      company: "Adobe",
      title: "UI / UX Designer",
      location: "Remote",
      salary: "₹10 LPA",
      experience: "2+ Years",
      type: "Remote",
      skills: ["Figma", "Adobe XD", "UI Design"],
    },

    {
      id: 5,
      company: "Spotify",
      title: "React Developer",
      location: "Pune",
      salary: "₹14 LPA",
      experience: "2+ Years",
      type: "Full Time",
      skills: ["React", "Redux", "Firebase"],
    },

    {
      id: 6,
      company: "Netflix",
      title: "Full Stack Developer",
      location: "Remote",
      salary: "₹22 LPA",
      experience: "5+ Years",
      type: "Remote",
      skills: ["React", "Node.js", "MongoDB"],
    },
  ];

  return (
    <section className="featured-jobs">

      <div className="container">

        {/* Heading */}

        <div className="section-heading">

          <span>Featured Jobs</span>

          <h2>Find Your Perfect Career Opportunity</h2>

          <p>
            Explore the latest job openings from top companies and start
            building your dream career today.
          </p>

        </div>

        {/* Filter Buttons */}

        <div className="job-filters">

          <button className="active">All Jobs</button>

          <button>Full Time</button>

          <button>Remote</button>

          <button>Hybrid</button>

          <button>Internship</button>

        </div>

        {/* Job Cards */}

        <div className="jobs-grid">

          {jobs.map((job) => (

            <div className="job-card" key={job.id}>

              {/* Top */}

              <div className="job-top">

                <div>

                  <h4>{job.company}</h4>

                  <h3>{job.title}</h3>

                </div>

                <button className="bookmark-btn">

                  <FaRegBookmark />

                </button>

              </div>

              {/* Info */}

              <div className="job-info">

                <span>

                  <FaMapMarkerAlt />

                  {job.location}

                </span>

                <span>

                  <FaBriefcase />

                  {job.experience}

                </span>

              </div>

              {/* Salary */}

              <div className="salary">

                {job.salary}

              </div>

              {/* Type */}

              <div className="job-type">

                {job.type}

              </div>

              {/* Skills */}

              <div className="skills">

                {job.skills.map((skill, index) => (

                  <span key={index}>{skill}</span>

                ))}

              </div>

              {/* Button */}

              <button className="apply-btn">

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

export default FeaturedJobs;