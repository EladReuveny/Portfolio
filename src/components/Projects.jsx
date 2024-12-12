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
            <i
              className="fab fa-html5"
              style={{ color: "#E44D26" }}
              title="HTML5"
            ></i>
          ),
        },
        {
          name: "CSS3",
          logo: (
            <i
              className="fab fa-css3-alt"
              style={{ color: "#1572B6" }}
              title="CSS3"
            ></i>
          ),
        },
        {
          name: "JavaScript",
          logo: (
            <i
              className="fab fa-js"
              style={{ color: "#F7DF1E" }}
              title="JavaScript"
            ></i>
          ),
        },
        {
          name: "React",
          logo: (
            <i
              className="fab fa-react"
              style={{ color: "#61DAFB" }}
              title="React"
            ></i>
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
            <i
              className="fab fa-html5"
              style={{ color: "#E44D26" }}
              title="HTML5"
            ></i>
          ),
        },
        {
          name: "CSS3",
          logo: (
            <i
              className="fab fa-css3-alt"
              style={{ color: "#1572B6" }}
              title="CSS3"
            ></i>
          ),
        },
        {
          name: "JavaScript",
          logo: (
            <i
              className="fab fa-js"
              style={{ color: "#F7DF1E" }}
              title="JavaScript"
            ></i>
          ),
        },
        {
          name: "React",
          logo: (
            <i
              className="fab fa-react"
              style={{ color: "#61DAFB" }}
              title="React"
            ></i>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="45"
              height="45"
              viewBox="0 0 48 48"
            >
              <path
                fill="#283593"
                fill-rule="evenodd"
                d="M22.903,3.286c0.679-0.381,1.515-0.381,2.193,0 c3.355,1.883,13.451,7.551,16.807,9.434C42.582,13.1,43,13.804,43,14.566c0,3.766,0,15.101,0,18.867 c0,0.762-0.418,1.466-1.097,1.847c-3.355,1.883-13.451,7.551-16.807,9.434c-0.679,0.381-1.515,0.381-2.193,0 c-3.355-1.883-13.451-7.551-16.807-9.434C5.418,34.899,5,34.196,5,33.434c0-3.766,0-15.101,0-18.867 c0-0.762,0.418-1.466,1.097-1.847C9.451,10.837,19.549,5.169,22.903,3.286z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#5c6bc0"
                fill-rule="evenodd"
                d="M5.304,34.404C5.038,34.048,5,33.71,5,33.255 c0-3.744,0-15.014,0-18.759c0-0.758,0.417-1.458,1.094-1.836c3.343-1.872,13.405-7.507,16.748-9.38 c0.677-0.379,1.594-0.371,2.271,0.008c3.343,1.872,13.371,7.459,16.714,9.331c0.27,0.152,0.476,0.335,0.66,0.576L5.304,34.404z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#fff"
                fill-rule="evenodd"
                d="M24,10c7.727,0,14,6.273,14,14s-6.273,14-14,14 s-14-6.273-14-14S16.273,10,24,10z M24,17c3.863,0,7,3.136,7,7c0,3.863-3.137,7-7,7s-7-3.137-7-7C17,20.136,20.136,17,24,17z"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#3949ab"
                fill-rule="evenodd"
                d="M42.485,13.205c0.516,0.483,0.506,1.211,0.506,1.784 c0,3.795-0.032,14.589,0.009,18.384c0.004,0.396-0.127,0.813-0.323,1.127L23.593,24L42.485,13.205z"
                clip-rule="evenodd"
              ></path>
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="45"
              height="45"
              viewBox="0 0 48 48"
            >
              <path
                fill="#F44336"
                d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
              ></path>
              <path
                fill="#F44336"
                d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
              ></path>
              <g>
                <path
                  fill="#1565C0"
                  d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
                ></path>
                <path
                  fill="#1565C0"
                  d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
                ></path>
                <path
                  fill="#1565C0"
                  d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
                ></path>
                <path
                  fill="#1565C0"
                  d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
                ></path>
                <path
                  fill="#1565C0"
                  d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
                ></path>
              </g>
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="45"
              height="45"
              viewBox="0 0 48 48"
            >
              <path
                fill="#F44336"
                d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
              ></path>
              <path
                fill="#F44336"
                d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
              ></path>
              <g>
                <path
                  fill="#1565C0"
                  d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
                ></path>
                <path
                  fill="#1565C0"
                  d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
                ></path>
                <path
                  fill="#1565C0"
                  d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
                ></path>
                <path
                  fill="#1565C0"
                  d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
                ></path>
                <path
                  fill="#1565C0"
                  d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
                ></path>
              </g>
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="45"
              height="45"
              viewBox="0 0 48 48"
            >
              <path
                fill="#F44336"
                d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"
              ></path>
              <path
                fill="#F44336"
                d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"
              ></path>
              <g>
                <path
                  fill="#1565C0"
                  d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"
                ></path>
                <path
                  fill="#1565C0"
                  d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"
                ></path>
                <path
                  fill="#1565C0"
                  d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"
                ></path>
                <path
                  fill="#1565C0"
                  d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"
                ></path>
                <path
                  fill="#1565C0"
                  d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"
                ></path>
              </g>
            </svg>
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
            <i
              className="fab fa-html5"
              style={{ color: "#E44D26" }}
              title="HTML5"
            ></i>
          ),
        },
        {
          name: "CSS3",
          logo: (
            <i
              className="fab fa-css3-alt"
              style={{ color: "#1572B6" }}
              title="CSS3"
            ></i>
          ),
        },
        {
          name: "JavaScript",
          logo: (
            <i
              className="fab fa-js"
              style={{ color: "#F7DF1E" }}
              title="JavaScript"
            ></i>
          ),
        },
      ],
    },
  ];

  return (
    <section className="projects" id="projects">
      <h1 className="projects__title">
        <i class="fa-solid fa-folder-open"></i> Projects
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
            <i class="fa-sharp fa-solid fa-down-long"></i>
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
