import React from "react";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h1 className="contact__title">
          Contact <span>Me</span>
        </h1>
        <p className="contact__text">
          If you'd like to discuss a project, or have a question, feel free to
          reach out!
        </p>

        <form className="contact__form">
          <div className="contact__form-wrapper">
            <div className="details-wrapper">
              {/* <label for="name">Name</label> */}
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />

              {/* <label for="email">Email</label> */}
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />

              {/* <label for="phone">Phone</label> */}
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Phone"
                required
              />
            </div>

            <div className="message-wrapper">
              {/* <label for="message">Message</label> */}
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Message..."
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
