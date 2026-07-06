import "./ContactInfo.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const contactData = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    title: "Office Address",
    text: "New Delhi, India",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    title: "Phone Number",
    text: "+91 98765 43210",
  },
  {
    id: 3,
    icon: <FaEnvelope />,
    title: "Email Address",
    text: "support@hirehub.com",
  },
  {
    id: 4,
    icon: <FaClock />,
    title: "Working Hours",
    text: "Mon - Fri | 9:00 AM - 6:00 PM",
  },
];

function ContactInfo() {
  return (
    <section className="contact-info-section">

      <div className="contact-info-container">

        {/* Heading */}

        <div className="contact-info-heading">

          <span>Contact Information</span>

          <h2>
            Ways To
            <span> Reach Us</span>
          </h2>

          <p>
            We're always available to answer your questions.
            Choose the most convenient way to connect with us.
          </p>

        </div>

        {/* Cards */}

        <div className="contact-info-grid">

          {contactData.map((item) => (

            <div
              className="contact-info-card"
              key={item.id}
            >

              <div className="contact-info-icon">

                {item.icon}

              </div>

              <h3>

                {item.title}

              </h3>

              <p>

                {item.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default ContactInfo;