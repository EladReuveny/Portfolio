import React from "react";

const Services = () => {
  return (
    <section className="services" id="services">
      <h1 className="services__title">
        <i className="fa-solid fa-screwdriver-wrench"></i>Services
      </h1>

      <div className="services__wrapper">
        <div className="services__service">
          <i className="fas fa-code"></i>
          <h3 className="services__service-title">Frontend Development</h3>
          <p className="services__service-text">
            Building interactive, responsive user interfaces that deliver
            seamless user experiences.
          </p>
          <ul className="services__service-tech">
            <li>
              <i className="fa-regular fa-circle-check"></i>HTML5, CSS3,
              JavaScript
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>React, Tailwind CSS
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>Responsive &
              Accessibility
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>RESTful APIs
            </li>
          </ul>
        </div>

        <div className="services__service">
          <span className="material-symbols-outlined">data_object</span>
          <h3 className="services__service-title">Backend Development</h3>
          <p className="services__service-text">
            Creating and optimizing robust server-side applications and APIs
            connecting frontend and backend.
          </p>
          <ul className="services__service-tech">
            <li>
              <i className="fa-regular fa-circle-check"></i>Java, C, C++, Python
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>Spring Boot
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>SQL, MySQL,
              PostgreSQL
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>Database Management
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>RESTful APIs
            </li>
          </ul>
        </div>

        <div className="services__service">
          <i className="fa-solid fa-comments "></i>
          <h3 className="services__service-title">Personal & Soft Skills</h3>
          <p className="services__service-text">
            A strong set of soft skills that complement my technical abilities,
            enabling effective collaboration and communication within teams.
          </p>
          <ul className="services__service-tech">
            <li>
              <i className="fa-regular fa-circle-check"></i>Problem-Solving
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>Team Player
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>Adaptability
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>Self-Learner
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>Self-Motivation
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>Time Management
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i>Open-mindedness
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
