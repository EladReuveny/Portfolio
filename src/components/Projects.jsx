import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "TicTacToe",
      description: "TicTacToe project using HTML, CSS, JavaScript, and React.",
      liveDemo: "https://genuine-bunny-089a3f.netlify.app/",
      sourceCode: "https://github.com/EladReuveny/TicTacToe",
      technologies: [
        {
          name: "HTML5",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="HTML5"
              width="60"
              height="60"
            />
          ),
        },
        {
          name: "CSS3",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="CSS3"
              width="60"
              height="60"
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
      id: 2,
      title: "PokemonSearchApp",
      description:
        "Pokemon Search App project to search for Pokemons and their evolutions based on ID or Name.",
      liveDemo: "https://incomparable-beijinho-313dbc.netlify.app/",
      sourceCode: "https://github.com/EladReuveny/pokemon-search-app",
      technologies: [
        {
          name: "HTML5",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="HTML5"
              width="60"
              height="60"
            />
          ),
        },
        {
          name: "CSS3",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="CSS3"
              width="60"
              height="60"
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
      id: 3,
      title: "AssemblyProject",
      description:
        "Assembly project which converts assmebly code to machine code using the language C.",
      liveDemo: "",
      sourceCode: "https://github.com/EladReuveny/assembly-project",
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
      id: 4,
      title: "StudentSortedGroupManager",
      description:
        "Student Sorted Group Manager project that manages a sorted group of students and allows users to add and remove students interactively.",
      liveDemo: "",
      sourceCode: "https://github.com/EladReuveny/student-sorted-group-manager",
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
      id: 5,
      title: "RestaurantMenuManager",
      description:
        "RestaurantMenuManager project using Java and JavaFX. An application for managing and interacting with a restaurant menu.",
      liveDemo: "",
      sourceCode: "https://github.com/EladReuveny/restaurant-menu-manager",
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
      title: "TrafficLight",
      description:
        "Traffic light simulation project using Java, JavaFX, and multithreading.",
      liveDemo: "",
      sourceCode: "https://github.com/EladReuveny/TrafficLight",
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
      title: "PersonalFinance",
      description:
        "Personal Finance App project contains 5 pages (Overview, Transactions, Budgets, Pots, and Recurring Bills) + supports responsiveness for Desktop/Tablet/Moible Design.",
      liveDemo: "https://idyllic-treacle-59d4ed.netlify.app/",
      sourceCode: "https://github.com/EladReuveny/personal-finance",
      technologies: [
        {
          name: "HTML5",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
              alt="HTML5"
              width="60"
              height="60"
            />
          ),
        },
        {
          name: "CSS3",
          logo: (
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
              alt="CSS3"
              width="60"
              height="60"
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
              <a href={project.sourceCode} target="_blank" title="Source Code">
                <i className="fas fa-code"></i>
              </a>
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
