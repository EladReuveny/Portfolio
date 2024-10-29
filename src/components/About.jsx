import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="about__title">
        About <span>Me</span>
      </h1>
      <p className="about__text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit,
        provident reprehenderit, id minima nisi, omnis iusto fugiat voluptate
        soluta placeat ratione. Voluptas omnis quos iusto in natus et numquam?
        Eum?
      </p>
      <a href="#" className="btn">
        Read More<i class="fa-solid fa-arrow-right"></i>
      </a>
    </section>
  );
};

export default About;
