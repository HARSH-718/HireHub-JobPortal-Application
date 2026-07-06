import "./Companies.css";
import {
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaApple,
  FaSpotify,
} from "react-icons/fa";
import { SiNetflix } from "react-icons/si";

function Companies() {
  const companies = [
    {
      id: 1,
      icon: <FaGoogle />,
      name: "Google",
      jobs: "120+ Jobs",
    },
    {
      id: 2,
      icon: <FaMicrosoft />,
      name: "Microsoft",
      jobs: "85+ Jobs",
    },
    {
      id: 3,
      icon: <FaAmazon />,
      name: "Amazon",
      jobs: "150+ Jobs",
    },
    {
      id: 4,
      icon: <SiNetflix />,
      name: "Netflix",
      jobs: "42+ Jobs",
    },
    {
      id: 5,
      icon: <FaApple />,
      name: "Apple",
      jobs: "65+ Jobs",
    },
    {
      id: 6,
      icon: <FaSpotify />,
      name: "Spotify",
      jobs: "28+ Jobs",
    },
  ];

  return (
    <section className="company-section">

      <div className="container">

        <div className="company-heading">

          <span>Top Hiring Companies</span>

          <h2>
            Trusted by the World's
            <span> Best Companies</span>
          </h2>

          <p>
            Thousands of professionals get hired every month by leading
            companies using HireHub.
          </p>

        </div>

        <div className="company-grid">

          {companies.map((company) => (

            <div className="company-card" key={company.id}>

              <div className="company-icon">
                {company.icon}
              </div>

              <h3>{company.name}</h3>

              <p>{company.jobs}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Companies;