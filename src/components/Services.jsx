import React from "react";

const Services = () => {
  return (
    <section className="services" id="services">
      <h1 className="services__title">Services</h1>
      <div className="services__wrapper">
        <div className="servies__service">
          <i class="fas fa-code"></i>
          <h3 className="services__service-title">Frontend Development</h3>
          <p className="services__service-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut iure
            natus fuga, autem, rerum ut atque quas magni corporis dignissimos
            tenetur.
          </p>
        </div>

        <div className="servies__service">
          <span class="material-symbols-outlined">data_object</span>
          <h3 className="services__service-title">Backend Development</h3>
          <p className="services__service-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut iure
            natus fuga, autem, rerum ut atque quas magni corporis dignissimos
            tenetur.
          </p>
        </div>

        <div className="servies__service">
          <i class="fa-solid fa-computer"></i>
          <h3 className="services__service-title">Additional Services</h3>
          <p className="services__service-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut iure
            natus fuga, autem, rerum ut atque quas magni corporis dignissimos
            tenetur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
