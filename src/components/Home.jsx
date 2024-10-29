import React from "react";

const Home = () => {
  return (
    <section className="home" id="home">
      <h1 className="home__title">
        Hi, it's <span>Elad</span>
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
        <a href="https://github.com/EladReuveny" target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/eladreuveny/" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>

      <div className="home__btns-group">
        <a className="btn" href="#">Hire</a>
        <a className="btn" href="#contact">Contact</a>
      </div>
    </section>
  );
};

export default Home;
