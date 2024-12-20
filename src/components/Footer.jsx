import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
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

      <code>
        Created by Elad Reuveny | <i className="fa-regular fa-copyright"></i>{" "}
        {new Date().getFullYear()} All Rights Reserved
      </code>
    </footer>
  );
};

export default Footer;
