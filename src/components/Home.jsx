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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        quasi tenetur, eveniet libero dolore similique deleniti placeat magnam
        dicta beatae adipisci deserunt provident reiciendis eligendi enim sequi
        et, cum ullam.
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
