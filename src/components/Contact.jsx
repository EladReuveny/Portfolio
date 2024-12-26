import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const message = e.target.message.value;

    const subject = `Portfolio - Contact from ${name}`;
    const body = `
    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    
    Message:
    ${message}
    `;

    const mailtoLink = `mailto:eladre123@gmail.com?subject=${subject}&body=${body}`;
    window.open(mailtoLink, "_blank");
  };

  return (
    <>
      <section className="contact" id="contact">
        <h1 className="contact__title">
          <i className="fa-solid fa-envelope"></i>
          Contact <span>Me</span>
        </h1>
        <p className="contact__text">
          If you'd like to discuss a project, or have a question, feel free to
          reach out!
        </p>

        {/* <form className="contact__form" action="mailto:eladre123@gmail.com" method="POST"> */}
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form-wrapper">
            <div className="details-field">
              <input
                type="text"
                id="name"
                name="name"
                placeholder=""
                required
                autoFocus
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
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
