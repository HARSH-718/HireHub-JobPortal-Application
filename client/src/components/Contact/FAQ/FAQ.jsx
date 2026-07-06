import "./FAQ.css";

import { useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "How can I apply for a job?",
    answer:
      "You can browse jobs, click on Apply Now and submit your resume directly on the platform.",
  },
  {
    id: 2,
    question: "Is HireHub free to use?",
    answer:
      "Yes, job seekers can use HireHub completely free to search and apply for jobs.",
  },
  {
    id: 3,
    question: "How do I contact recruiters?",
    answer:
      "After applying, recruiters can directly contact you via email or phone.",
  },
  {
    id: 4,
    question: "Can companies post jobs?",
    answer:
      "Yes, companies can register and post job openings easily on HireHub.",
  },
];

function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq-section">

      <div className="faq-container">

        {/* Heading */}

        <div className="faq-heading">

          <span>FAQ</span>

          <h2>
            Frequently Asked
            <span> Questions</span>
          </h2>

          <p>
            Find answers to common questions about HireHub platform.
          </p>

        </div>

        {/* FAQ LIST */}

        <div className="faq-list">

          {faqData.map((item) => (

            <div className="faq-item" key={item.id}>

              <div
                className="faq-question"
                onClick={() => toggleFAQ(item.id)}
              >

                <h3>{item.question}</h3>

                <div className="icon">

                  {activeId === item.id ? <FaMinus /> : <FaPlus />}

                </div>

              </div>

              {activeId === item.id && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FAQ;