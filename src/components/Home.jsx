import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

const Home = () => {
  useEffect(() => {
    const typed = new Typed(".type-writer", {
      strings: ["Full Stack Developer", "Software Engineer"],
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home" id="home">
      <h1 className="home__title">
        It's <span>Elad</span>
      </h1>
      <h3 className="home__subtitle">
        I'm a{" "}
        <div className="typewriter-wrapper">
          <span className="type-writer"></span>
        </div>
      </h3>
      <p className="home__text">
        Welcome! I'm a dedicated Full Stack Developer/Software Engineer with a
        bachelor's degree (B.Sc.) in Computer Science from The Open University
        of Israel. Passionate about Problem-Solving, Web Development, and
        exploring new technologies. With proficiency and experience in Java,
        HTML5, CSS3, JavaScript, C, C++, Python, Smalltalk, React, Spring Boot,
        TailwindCSS, PostgreSQL, MySQL, Git & GitHub, Postman, Figma, Linux, VS
        Code, IntelliJ IDEA, CLion.
      </p>

      <div className="home__social-links">
        <a href="https://github.com/EladReuveny" target="_blank" title="GitHub">
          <i className="fa-brands fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/eladreuveny/"
          target="_blank"
          title="LinkedIn"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>

      <div className="home__btns-group">
        <Link to="/services" className="btn">
          Services
        </Link>
        <Link to="/contact" className="btn btn--2">
          Contact
        </Link>
      </div>
    </section>
  );
};

export default Home;
