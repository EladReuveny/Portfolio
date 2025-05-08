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
        I'm a dedicated Full Stack Developer/Software Engineer with a bachelor's
        degree (B.Sc.) in Computer Science from The Open University of Israel.
        Having a versatile skill set, enabling contributing across both frontend
        and backend development. Highly motivated and hardworking, I bring a
        strong work ethic and a commitment to the precise execution of tasks.
        Skilled at working independently and thriving under pressure in tight
        schedules. I enjoy building high-performance, seamless web applications
        and always eager to learn and stay current with emerging technologies.
      </p>

      <div className="about__tech-icons">
        {/* --- Programming Languages --- */}
        <div className="programming-languages">
          <h4 className="title">Programming Languages</h4>

          <div className="icons">
            <a
              href="https://www.java.com"
              target="_blank"
              rel="noreferrer"
              title="Java"
              data-label="Java"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                alt="Java"
                width={60}
                height={60}
              />
            </a>

            <a
              href="https://www.w3.org/html/"
              target="_blank"
              rel="noreferrer"
              title="HTML5"
              data-label="HTML5"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="HTML5"
                width={60}
                height={60}
              />
            </a>

            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
              title="CSS3"
              data-label="CSS3"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="CSS3"
                width={60}
                height={60}
              />
            </a>

            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
              title="JavaScript"
              data-label="JavaScript"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                width={50}
                height={50}
              />
            </a>

            <a
              href="https://www.cprogramming.com/"
              target="_blank"
              rel="noreferrer"
              title="C"
              data-label="C"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                alt="C"
                width={60}
                height={60}
              />
            </a>

            <a
              href="https://www.w3schools.com/cpp/"
              target="_blank"
              rel="noreferrer"
              title="C++"
              data-label="C++"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                alt="C++"
                width={60}
                height={60}
              />
            </a>

            <a
              href="https://www.python.org"
              target="_blank"
              rel="noreferrer"
              title="Python"
              data-label="Python"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                alt="Python"
                width={60}
                height={60}
              />
            </a>
          </div>
        </div>

        {/* --- Frameworks --- */}
        <div className="frameworks">
          <h4 className="title">Frameworks</h4>

          <div className="icons">
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noreferrer"
              title="React"
              data-label="React"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="React"
                width={65}
                height={65}
              />
            </a>

            <a
              href="https://spring.io/projects/spring-boot"
              target="_blank"
              rel="noreferrer"
              title="Spring Boot"
              data-label="Spring Boot"
            >
              <img
                src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
                alt="Spring Boot"
                width={60}
                height={60}
              />
            </a>

            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
              title="TailwindCSS"
              data-label="TailwindCSS"
            >
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="TailwindCSS"
                width={60}
                height={60}
              />
            </a>
          </div>
        </div>

        {/* --- Databases --- */}
        <div className="databases">
          <h4 className="title">Databases</h4>

          <div className="icons">
            <a
              href="https://www.postgresql.org"
              target="_blank"
              rel="noreferrer"
              title="PostgreSQL"
              data-label="PostgreSQL"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="PostgreSQL"
                width={70}
                height={70}
              />
            </a>

            <a
              href="https://www.mysql.com/"
              target="_blank"
              rel="noreferrer"
              title="MySQL"
              data-label="MySQL"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="MySQL"
                width={75}
                height={75}
              />
            </a>
          </div>
        </div>

        {/* --- Tools --- */}
        <div className="tools">
          <h4 className="title">Tools</h4>

          <div className="icons">
            <a
              href="https://git-scm.com/"
              target="_blank"
              rel="noreferrer"
              title="Git"
              data-label="Git"
            >
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="Git"
                width={60}
                height={60}
              />
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              data-label="GitHub"
            >
              <img
                src="https://www.vectorlogo.zone/logos/github/github-icon.svg"
                alt="GitHub"
                width={65}
                height={65}
              />
            </a>

            <a
              href="https://postman.com"
              target="_blank"
              rel="noreferrer"
              title="Postman"
              data-label="Postman"
            >
              <img
                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                alt="Postman"
                width={55}
                height={55}
              />
            </a>

            <a
              href="https://www.docker.com/"
              target="_blank"
              rel="noreferrer"
              title="Docker"
              data-label="Docker"
            >
              <img
                src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
                alt="Docker"
                width={80}
                height={80}
              />
            </a>

            <a
              href="https://www.linux.org/"
              target="_blank"
              rel="noreferrer"
              title="Linux"
              data-label="Linux"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
                alt="Linux"
                width={60}
                height={60}
              />
            </a>

            <a
              href="https://www.figma.com/"
              target="_blank"
              rel="noreferrer"
              title="Figma"
              data-label="Figma"
            >
              <img
                src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                alt="Figma"
                width={55}
                height={55}
              />
            </a>

            <a
              href="https://code.visualstudio.com/"
              target="_blank"
              rel="noreferrer"
              title="Visual Studio Code"
              data-label="VS Code"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original-wordmark.svg"
                alt="Visual Studio Code"
                width={55}
                height={55}
              />
            </a>

            <a
              href="https://www.jetbrains.com/idea/"
              target="_blank"
              rel="noreferrer"
              title="IntelliJ IDEA"
              data-label="IntelliJ IDEA"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/intellij/intellij-original.svg"
                alt="IntelliJ IDEA"
                width={55}
                height={55}
              />
            </a>

            <a
              href="https://www.jetbrains.com/clion/"
              target="_blank"
              rel="noreferrer"
              title="CLion"
              data-label="CLion"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/clion/clion-original.svg"
                alt="CLion"
                width={55}
                height={55}
              />
            </a>
          </div>
        </div>
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
