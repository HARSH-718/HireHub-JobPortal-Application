import "./Values.css";

import {
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaAward,
} from "react-icons/fa";

function Values() {
  return (
    <section className="values-section">

      <div className="values-container">

        {/* Heading */}

        <div className="values-heading">

          <span>Our Values</span>

          <h2>
            What Drives
            <span> HireHub</span>
          </h2>

          <p>
            Our values shape every decision we make and every connection
            we build between talented professionals and leading companies.
          </p>

        </div>

        {/* Cards */}

        <div className="values-grid">

          {/* Card 1 */}

          <div className="value-card">

            <div className="value-icon">

              <FaLightbulb />

            </div>

            <h3>Innovation</h3>

            <p>
              We embrace modern technology and creative ideas to make hiring
              faster, smarter and more efficient.
            </p>

          </div>

          {/* Card 2 */}

          <div className="value-card">

            <div className="value-icon">

              <FaHandshake />

            </div>

            <h3>Transparency</h3>

            <p>
              Honest communication and trust are at the heart of every hiring
              experience we create.
            </p>

          </div>

          {/* Card 3 */}

          <div className="value-card">

            <div className="value-icon">

              <FaChartLine />

            </div>

            <h3>Growth</h3>

            <p>
              We empower professionals and organizations to grow together
              through meaningful career opportunities.
            </p>

          </div>

          {/* Card 4 */}

          <div className="value-card">

            <div className="value-icon">

              <FaAward />

            </div>

            <h3>Excellence</h3>

            <p>
              We continuously improve our platform to deliver world-class
              recruitment solutions.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Values;