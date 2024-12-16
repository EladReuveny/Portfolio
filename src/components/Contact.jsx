import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="contact__title">
          <i class="fa-solid fa-envelope"></i>
          Contact <span>Me</span>
        </h1>
        <p className="contact__text">
          If you'd like to discuss a project, or have a question, feel free to
          reach out!
        </p>

        <form className="contact__form">
          <div className="contact__form-wrapper">
            <div className="details-field">
              <input
                type="text"
                id="name"
                name="name"
                placeholder=""
                required
              />
              <label htmlFor="name">Name</label>
            </div>

            <div className="details-field">
              <input
                type="email"
                id="email"
                name="email"
                placeholder=""
                required
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="details-field">
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder=""
                required
              />
              <label htmlFor="phone">Phone</label>
            </div>

            <div className="details-field">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder=""
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
          </div>

          <button type="submit" className="btn">
            Let's Talk
            <i class="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
