import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home" id="home">
      <h1 className="home__title">
        It's <span>Elad</span>
      </h1>
      <h3 className="home__subtitle">
        I'm a <span>Full Stack Developer</span>
      </h3>
      <p className="home__text">
        Welcome! I'm a dedicated Full Stack Developer and Software Engineer with
        a passion for building efficient, scalable web solutions. With
        proficiency in Java, HTML, CSS, JavaScript, React, Spring Boot, SQL, C,
        C++, Python and Smalltalk.
      </p>

      <div className="home__social-links">
        <Link to="https://github.com/EladReuveny" target="_blank">
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/eladreuveny/" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </Link>
      </div>

      <div className="home__btns-group">
        <Link to="/" className="btn">
          Hire
        </Link>
        <Link to="/contact" className="btn btn--2">
          Contact
        </Link>
      </div>
    </section>
  );
};

export default Home;
