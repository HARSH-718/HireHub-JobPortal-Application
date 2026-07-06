import "./Categories.css";

import {
  FaCode,
  FaPaintBrush,
  FaChartLine,
  FaCloud,
  FaDatabase,
  FaMobileAlt,
  FaDollarSign,
  FaUsers,
} from "react-icons/fa";

function Categories() {

  const categories = [

    {
      id:1,
      icon:<FaCode />,
      title:"Development",
      jobs:"245 Jobs"
    },

    {
      id:2,
      icon:<FaPaintBrush />,
      title:"UI / UX Design",
      jobs:"98 Jobs"
    },

    {
      id:3,
      icon:<FaChartLine />,
      title:"Marketing",
      jobs:"76 Jobs"
    },

    {
      id:4,
      icon:<FaCloud />,
      title:"DevOps",
      jobs:"52 Jobs"
    },

    {
      id:5,
      icon:<FaDatabase />,
      title:"Data Science",
      jobs:"130 Jobs"
    },

    {
      id:6,
      icon:<FaMobileAlt />,
      title:"Mobile Development",
      jobs:"84 Jobs"
    },

    {
      id:7,
      icon:<FaDollarSign />,
      title:"Finance",
      jobs:"35 Jobs"
    },

    {
      id:8,
      icon:<FaUsers />,
      title:"Human Resources",
      jobs:"41 Jobs"
    }

  ];

  return (

    <section className="categories">

      <div className="container">

        <div className="section-heading">

          <span>Job Categories</span>

          <h2>
            Browse Jobs By Category
          </h2>

          <p>
            Explore thousands of opportunities across different industries
            and find the career that matches your passion.
          </p>

        </div>

        <div className="categories-grid">

          {

            categories.map((category)=>(

              <div
                className="category-card"
                key={category.id}
              >

                <div className="category-icon">

                  {category.icon}

                </div>

                <h3>

                  {category.title}

                </h3>

                <p>

                  {category.jobs}

                </p>

              </div>

            ))

          }

        </div>

      </div>

    </section>

  );

}

export default Categories;