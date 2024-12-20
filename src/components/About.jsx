import React from "react";
import { Link } from "react-router-dom";
import Resume from "../assets/Resume.pdf";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="about__title">
        <i className="fa-solid fa-address-card"></i>About <span>Me</span>
      </h1>
      <p className="about__text">
        I'm a dedicated Full Stack Developer and Software Engineer with a
        versatile skill set, enabling contributions across both frontend and
        backend development. Passionate about problem-solving, I enjoy building
        high-performance, seamless web applications and always eager to learn
        and stay current with emerging technologies.
      </p>

      <div className="about__tech-icons">
        {/* --- Programming Languages --- */}
        <a
          href="https://www.java.com"
          target="_blank"
          rel="noreferrer"
          title="Java"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
            alt="Java"
            width="60"
            height="60"
          />
        </a>

        <a
          href="https://www.w3.org/html/"
          target="_blank"
          rel="noreferrer"
          title="HTML5"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
            alt="HTML5"
            width="60"
            height="60"
          />
        </a>

        <a
          href="https://www.w3schools.com/css/"
          target="_blank"
          rel="noreferrer"
          title="CSS3"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
            alt="CSS3"
            width="60"
            height="60"
          />
        </a>

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noreferrer"
          title="JavaScript"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
            alt="JavaScript"
            width="50"
            height="50"
          />
        </a>

        <a
          href="https://www.cprogramming.com/"
          target="_blank"
          rel="noreferrer"
          title="C"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
            alt="C"
            width="60"
            height="60"
          />
        </a>

        <a
          href="https://www.w3schools.com/cpp/"
          target="_blank"
          rel="noreferrer"
          title="C++"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
            alt="C++"
            width="60"
            height="60"
          />
        </a>

        <a
          href="https://www.python.org"
          target="_blank"
          rel="noreferrer"
          title="Python"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
            alt="Python"
            width="60"
            height="60"
          />
        </a>

        {/* --- Frameworks --- */}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noreferrer"
          title="React"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
            alt="React"
            width="60"
            height="60"
          />
        </a>

        <a
          href="https://spring.io/"
          target="_blank"
          rel="noreferrer"
          title="Spring"
        >
          <img
            src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
            alt="Spring"
            width="60"
            height="60"
          />
        </a>

        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer"
          title="TailwindCSS"
        >
          <img
            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
            alt="TailwindCSS"
            width="60"
            height="60"
          />
        </a>

        {/* --- Databases --- */}
        <a
          href="https://www.postgresql.org"
          target="_blank"
          rel="noreferrer"
          title="PostgreSQL"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
            alt="PostgreSQL"
            width="60"
            height="60"
          />
        </a>

        <a
          href="https://www.mysql.com/"
          target="_blank"
          rel="noreferrer"
          title="MySQL"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
            alt="MySQL"
            width="60"
            height="60"
          />
        </a>

        {/* --- Tools --- */}
        <a
          href="https://git-scm.com/"
          target="_blank"
          rel="noreferrer"
          title="Git"
        >
          <img
            src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
            alt="Git"
            width="60"
            height="60"
          />
        </a>

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          title="GitHub"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            width="60"
            height="60"
          />
        </a>

        <a
          href="https://postman.com"
          target="_blank"
          rel="noreferrer"
          title="Postman"
        >
          <img
            src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
            alt="Postman"
            width="60"
            height="60"
          />
        </a>

        <a
          href="https://www.linux.org/"
          target="_blank"
          rel="noreferrer"
          title="Linux"
        >
          <img
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
            alt="Linux"
            width="60"
            height="60"
          />
        </a>

        <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noreferrer"
          title="Figma"
        >
          <img
            src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
            alt="Figma"
            width="60"
            height="60"
          />
        </a>
      </div>

      <div className="home__btns-group">
        <Link to="/projects" className="btn">
          My Projects <i className="fa-solid fa-arrow-right"></i>
        </Link>

        <a href={Resume} className="btn btn--2" download>
          Download CV <i className="fa-solid fa-download"></i>
        </a>
      </div>
    </section>
  );
};

export default About;
