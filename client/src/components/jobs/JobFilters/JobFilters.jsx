import "./JobFilters.css";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaFilter,
} from "react-icons/fa";

function JobFilters() {
  return (
    <section className="job-filters-section">

      <div className="job-filters-container">

        {/* Heading */}

        <div className="filter-heading">

          <span>Find Your Dream Job</span>

          <h2>Search & Filter Jobs</h2>

          <p>
            Refine your search using keywords, location, job type and
            experience level.
          </p>

        </div>

        {/* Search Area */}

        <div className="filters-wrapper">

          {/* Job Search */}

          <div className="filter-input">

            <FaSearch />

            <input
              type="text"
              placeholder="Job title or keyword"
            />

          </div>

          {/* Location */}

          <div className="filter-input">

            <FaMapMarkerAlt />

            <input
              type="text"
              placeholder="Location"
            />

          </div>

          {/* Job Type */}

          <div className="filter-select">

            <FaBriefcase />

            <select>

              <option>Job Type</option>

              <option>Full Time</option>

              <option>Part Time</option>

              <option>Remote</option>

              <option>Internship</option>

            </select>

          </div>

          {/* Button */}

          <button className="filter-btn">

            <FaFilter />

            Apply Filters

          </button>

        </div>

      </div>

    </section>
  );
}

export default JobFilters;