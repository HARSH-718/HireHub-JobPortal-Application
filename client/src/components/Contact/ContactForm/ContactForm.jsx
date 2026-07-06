import "./ContactForm.css";

import { FaPaperPlane } from "react-icons/fa";

function ContactForm() {
  return (
    <section className="contact-form-section">

      <div className="contact-form-container">

        {/* Left Side */}

        <div className="contact-form-content">

          <span>Send Message</span>

          <h2>
            Let's Start A
            <span> Conversation</span>
          </h2>

          <p>
            Have a question about hiring, careers or our platform?
            Fill out the form and our team will get back to you as soon
            as possible.
          </p>

        </div>

        {/* Right Side */}

        <div className="contact-form-card">

          <form>

            <div className="input-row">

              <div className="input-group">

                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                />

              </div>

              <div className="input-group">

                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                />

              </div>

            </div>

            <div className="input-row">

              <div className="input-group">

                <label>Phone Number</label>

                <input
                  type="text"
                  placeholder="Enter your phone"
                />

              </div>

              <div className="input-group">

                <label>Subject</label>

                <input
                  type="text"
                  placeholder="Subject"
                />

              </div>

            </div>

            <div className="input-group">

              <label>Message</label>

              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>

            </div>

            <button
              type="submit"
              className="send-btn"
            >

              <FaPaperPlane />

              Send Message

            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ContactForm;