import "./ContactHero.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function ContactHero() {
  return (
    <section className="contact-hero">

      <div className="contact-hero-container">

        {/* LEFT */}

        <div className="contact-left">

          <span className="contact-badge">
            📩 Get In Touch
          </span>

          <h1>
            We'd Love To
            <span> Hear From You.</span>
          </h1>

          <p>
            Whether you're looking for your next career opportunity,
            hiring talented professionals, or simply have a question,
            our team is always here to help.
          </p>

          <div className="contact-buttons">

            <button className="primary-btn">
              <FaPaperPlane />
              Send Message
            </button>

            <button className="secondary-btn">
              View Jobs
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="contact-right">

          <div className="contact-card">

            <div className="contact-item">

              <div className="icon">
                <FaEnvelope />
              </div>

              <div>
                <h4>Email</h4>
                <p>support@hirehub.com</p>
              </div>

            </div>

            <div className="contact-item">

              <div className="icon">
                <FaPhoneAlt />
              </div>

              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
              </div>

            </div>

            <div className="contact-item">

              <div className="icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4>Office</h4>
                <p>New Delhi, India</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactHero;