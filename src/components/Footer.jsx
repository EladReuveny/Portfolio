import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="home__social-links">
        <Link to="https://github.com/EladReuveny" target="_blank">
          <i className="fa-brands fa-github"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/eladreuveny/" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </Link>
      </div>

      <code>
        Created by Elad Reuveny | <i className="fa-regular fa-copyright"></i>{" "}
        {new Date().getFullYear()} All Rights Reserved
      </code>
    </footer>
  );
};

export default Footer;
