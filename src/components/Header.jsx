import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode") || "dark"
  );
  const location = useLocation();

  const toggleThemeMode = () => {
    setThemeMode((t) => (t === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);

    if (themeMode === "dark") document.body.classList.remove("light-mode");
    else document.body.classList.add("light-mode");
  }, [themeMode]);

  return (
    <header className="header" id="header">
      <nav className="navbar">
        <div className="navbar__logo">
          <Link to="/" className="logo">
            Elad <span>Reuveny</span>
          </Link>
        </div>

        <div className="navbar__sections">
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
