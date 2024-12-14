import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode") || "dark"
  );
  const [isMenuBarActive, setIsMenuBarActive] = useState(false);

  const location = useLocation();

  const toggleThemeMode = () => {
    setThemeMode((t) => (t === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);

    if (themeMode === "dark") document.body.classList.remove("light-mode");
    else document.body.classList.add("light-mode");
  }, [themeMode]);

  useEffect(() => {
    const navBarSection = document.querySelector(".navbar__sections");
    navBarSection.classList.remove("menu-bar-active");

    setIsMenuBarActive(false);
  }, [location]);

  const toggleMenuBar = () => {
    const navBarSection = document.querySelector(".navbar__sections");
    navBarSection.classList.toggle("menu-bar-active");

    setIsMenuBarActive((m) => !m);
  };

  return (
    <header className="header" id="header">
      <nav className="navbar">
        <div className="navbar__logo">
          <Link to="/" className="logo">
            <span>E</span>lad <span>R</span>euveny
          </Link>
        </div>

        <div className="navbar__sections">
          {isMenuBarActive ? (
            <i
              className="fa-solid fa-xmark navbar__menu-bar"
              onClick={toggleMenuBar}
            ></i>
          ) : (
            <i
              className="fa-solid fa-bars navbar__menu-bar"
              onClick={toggleMenuBar}
            ></i>
          )}
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
          >
            Projects
          </Link>
          <Link
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
        </div>

        <div className="navbar__theme-mode">
          {themeMode === "dark" ? (
            <span
              className="material-symbols-outlined"
              onClick={toggleThemeMode}
            >
              light_mode
            </span>
          ) : (
            <span
              className="material-symbols-outlined"
              onClick={toggleThemeMode}
            >
              dark_mode
            </span>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
