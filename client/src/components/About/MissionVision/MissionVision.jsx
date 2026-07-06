import "./MissionVision.css";
import {
  FaBullseye,
  FaEye,
} from "react-icons/fa";

function MissionVision() {
  return (
    <section className="mission-section">

      <div className="mission-container">

        {/* Heading */}

        <div className="mission-heading">

          <span>
            Our Purpose
          </span>

          <h2>
            Mission &
            <span> Vision</span>
          </h2>

          <p>
            We are committed to building a hiring platform that connects
            talented professionals with leading companies through trust,
            transparency and innovation.
          </p>

        </div>

        {/* Cards */}

        <div className="mission-grid">

          {/* Mission */}

          <div className="mission-card">

            <div className="mission-icon">

              <FaBullseye />

            </div>

            <h3>
              Our Mission
            </h3>

            <p>
              To simplify recruitment by providing an intelligent,
              transparent and efficient platform where job seekers and
              employers can connect with confidence.
            </p>

          </div>

          {/* Vision */}

          <div className="mission-card">

            <div className="mission-icon">

              <FaEye />

            </div>

            <h3>
              Our Vision
            </h3>

            <p>
              To become one of the most trusted global career platforms,
              empowering millions of professionals to discover meaningful
              opportunities and build successful careers.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MissionVision;