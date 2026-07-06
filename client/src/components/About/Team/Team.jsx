import "./Team.css";

import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const team = [
  {
    id: 1,
    name: "Harsh Dhiman",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/300?img=12",
    description:
      "Building modern, responsive and scalable web applications using React.",
  },
  {
    id: 2,
    name: "Suman jyoti pattnayak",
    role: "HR Manager",
    image: "https://i.pravatar.cc/300?img=32",
    description:
      "Helping companies connect with talented professionals worldwide.",
  },
  {
    id: 3,
    name: "David Wilson",
    role: "Recruitment Lead",
    image: "https://i.pravatar.cc/300?img=15",
    description:
      "Managing recruitment strategies and delivering exceptional hiring experiences.",
  },
  {
    id: 4,
    name: "Emily Brown",
    role: "UI / UX Designer",
    image: "https://i.pravatar.cc/300?img=47",
    description:
      "Designing beautiful and user-friendly digital experiences for everyone.",
  },
];

function Team() {
  return (
    <section className="team-section">

      <div className="team-container">

        {/* Heading */}

        <div className="team-heading">

          <span>Meet Our Team</span>

          <h2>
            The People Behind
            <span> HireHub</span>
          </h2>

          <p>
            Meet the passionate professionals dedicated to helping
            job seekers and companies succeed together.
          </p>

        </div>

        {/* Cards */}

        <div className="team-grid">

          {team.map((member) => (

            <div className="team-card" key={member.id}>

              <img
                src={member.image}
                alt={member.name}
              />

              <h3>{member.name}</h3>

              <h4>{member.role}</h4>

              <p>{member.description}</p>

              <div className="team-social">

                <a href="#">
                  <FaLinkedinIn />
                </a>

                <a href="#">
                  <FaGithub />
                </a>

                <a href="#">
                  <FaEnvelope />
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Team;