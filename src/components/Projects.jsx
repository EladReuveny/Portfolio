import React from "react";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Electronics E-Commerce Shop",
      description:
        "A full-stack e-commerce application for electronics, including features include product management, user authentication, wish list, shopping cart, order processing, etc.",
      liveDemo: "https://electronics-store-app.netlify.app",
      sourceCode: {
        backend: "https://github.com/EladReuveny/electronics-store-api",
        frontend: "https://github.com/EladReuveny/electronics-store-ui",
      },
      technologies: [
        {
          name: "Spring Boot",
          logo: (
            <img
              src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
              alt="Spring"
              width="60"
              height="60"
            />
          ),
        },
        {
          name: "React",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
              alt="React"
              width="60"
              height="60"
            />
          ),
        },
        {
          name: "PostgreSQL",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
              alt="PostgreSQL"
              width="60"
              height="60"
            />
          ),
        },
      ],
    },
    {
      id: 2,
      title: "AssemblyProject",
      description:
        "Assembly project which converts assmebly code to machine code using the language C.",
      liveDemo: "",
      sourceCode: {
        backend: "https://github.com/EladReuveny/assembly-project",
        frontend: "",
      },
      technologies: [
        {
          name: "C",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
              alt="C"
              width="60"
              height="60"
            />
          ),
        },
      ],
    },
    {
      id: 3,
      title: "PokemonSearchApp",
      description:
        "Pokemon Search App project to search for Pokemons and their evolutions based on ID or Name.",
      liveDemo: "https://incomparable-beijinho-313dbc.netlify.app/",
      sourceCode: {
        backend: "",
        frontend: "https://github.com/EladReuveny/pokemon-search-app",
      },
      technologies: [
        {
          name: "HTML5",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="HTML5"
              width="65"
              height="65"
            />
          ),
        },
        {
          name: "CSS3",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="CSS3"
              width="65"
              height="65"
            />
          ),
        },
        {
          name: "JavaScript",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              width="50"
              height="50"
            />
          ),
        },
        {
          name: "React",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="React"
              width="60"
              height="60"
            />
          ),
        },
      ],
    },
    {
      id: 4,
      title: "TicTacToe",
      description: "TicTacToe project using HTML, CSS, JavaScript, and React.",
      liveDemo: "https://genuine-bunny-089a3f.netlify.app/",
      sourceCode: {
        backend: "",
        frontend: "https://github.com/EladReuveny/TicTacToe",
      },
      technologies: [
        {
          name: "HTML5",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="HTML5"
              width="65"
              height="65"
            />
          ),
        },
        {
          name: "CSS3",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="CSS3"
              width="65"
              height="65"
            />
          ),
        },
        {
          name: "JavaScript",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              width="50"
              height="50"
            />
          ),
        },
        {
          name: "React",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="React"
              width="60"
              height="60"
            />
          ),
        },
      ],
    },

    {
      id: 5,
      title: "StudentSortedGroupManager",
      description:
        "Student Sorted Group Manager project that manages a sorted group of students and allows users to add and remove students interactively.",
      liveDemo: "",
      sourceCode: {
        backend: "https://github.com/EladReuveny/student-sorted-group-manager",
        frontend: "",
      },
      technologies: [
        {
          name: "Java",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
              alt="Java"
              width="60"
              height="60"
            />
          ),
        },
      ],
    },
    {
      id: 6,
      title: "RestaurantMenuManager",
      description:
        "RestaurantMenuManager project using Java and JavaFX. An application for managing and interacting with a restaurant menu.",
      liveDemo: "",
      sourceCode: {
        backend: "https://github.com/EladReuveny/restaurant-menu-manager",
        frontend: "",
      },
      technologies: [
        {
          name: "Java",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
              alt="Java"
              width="60"
              height="60"
            />
          ),
        },
      ],
    },
    {
      id: 7,
      title: "TrafficLight",
      description:
        "Traffic light simulation project using Java, JavaFX, and multithreading.",
      liveDemo: "",
      sourceCode: {
        backend: "https://github.com/EladReuveny/TrafficLight",
        frontend: "",
      },
      technologies: [
        {
          name: "Java",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
              alt="Java"
              width="60"
              height="60"
            />
          ),
        },
      ],
    },
    {
      id: 8,
      title: "PersonalFinance",
      description:
        "Personal Finance App project contains 5 pages (Overview, Transactions, Budgets, Pots, and Recurring Bills) + supports responsiveness for Desktop/Tablet/Moible Design.",
      liveDemo: "https://idyllic-treacle-59d4ed.netlify.app/",
      sourceCode: {
        backend: "",
        frontend: "https://github.com/EladReuveny/personal-finance",
      },
      technologies: [
        {
          name: "HTML5",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="HTML5"
              width="65"
              height="65"
            />
          ),
        },
        {
          name: "CSS3",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="CSS3"
              width="65"
              height="65"
            />
          ),
        },
        {
          name: "JavaScript",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              width="50"
              height="50"
            />
          ),
        },
      ],
    },
  ];

  return (
    <section className="projects" id="projects">
      <h1 className="projects__title">
        <i className="fa-solid fa-folder-open"></i> Projects
      </h1>

      <div className="projects__wrapper">
        {projectsData.map((project) => (
          <div className="projects__project" key={project.id}>
            <h2 className="projects__project-title">{project.title}</h2>
            <p className="projects__project-description">
              {project.description}
            </p>
            <ul className="projects__project-technologies">
              {project.technologies.map((tech, index) => (
                <li key={index} title={tech.name}>
                  {tech.logo}
                </li>
              ))}
            </ul>
            <i className="fa-sharp fa-solid fa-down-long"></i>
            <div className="projects__project-links">
              {project.sourceCode.backend && (
                <a
                  href={project.sourceCode.backend}
                  target="_blank"
                  title="Backend Source Code"
                >
                  <i className="fas fa-code"></i>
                </a>
              )}
              {project.sourceCode.frontend && (
                <a
                  href={project.sourceCode.frontend}
                  target="_blank"
                  title="Frontend Source Code"
                >
                  <i className="fas fa-code"></i>
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" title="Live Demo">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
