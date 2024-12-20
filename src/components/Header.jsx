import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode") || "dark"
  );
  const [isMenuBarActive, setIsMenuBarActive] = useState(false);
  const [accentColor, setAccentColor] = useState(
    localStorage.getItem("accentColor") || "hsl(201, 68%, 61%)"
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

  const handleAccentColorChange = (e) => {
    setAccentColor(() => e.target.value);

    document.querySelector("#preset-colors").value = "";
  };

  const handlePresetSelection = (e) => {
    const selectedColor = e.target.value;

    const balancedColor = "hsl(201, 68%, 61%)";
    const preferredDarkColor = "hsl(180, 100%, 50%)";
    const preferredLightColor = "hsl(211, 100%, 50%)";
    const defaultDarkColor = "hsl(0, 0.00%, 100.00%)";
    const defaultLightColor = "hsl(0, 0.00%, 0.00%)";

    let color;

    switch (selectedColor) {
      case "balanced":
        color = balancedColor;
        break;
      case "preferredDarkColor":
        color = preferredDarkColor;
        break;
      case "preferredLightColor":
        color = preferredLightColor;
        break;
      case "defaultDarkColor":
        color = defaultDarkColor;
        break;
      case "defaultLightColor":
        color = defaultLightColor;
        break;
      default:
        color = balancedColor;
    }

    setAccentColor(() => color);
  };

  useEffect(() => {
    document.body.style.setProperty("--accent-clr", accentColor);
    localStorage.setItem("accentColor", accentColor);
  }, [accentColor]);

  const openPreferencesDialog = () => {
    const preferencesDialog = document.querySelector(
      ".navbar__preferences .dialog"
    );
    preferencesDialog.showModal();
  };

  const closePreferencesDialog = () => {
    const preferencesDialog = document.querySelector(
      ".navbar__preferences .dialog"
    );
    preferencesDialog.close();
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
              className="material-symbols-outlined light-mode"
              onClick={toggleThemeMode}
              title="Light Mode"
            >
              light_mode
            </span>
          ) : (
            <span
              className="material-symbols-outlined dark-mode"
              onClick={toggleThemeMode}
              title="Dark Mode"
            >
              dark_mode
            </span>
          )}
        </div>

        <div className="navbar__preferences">
          <button
            className="dialog__open-btn"
            onClick={openPreferencesDialog}
            title="Preferences"
          >
            <i className="fa-solid fa-sliders"></i>
          </button>

          <dialog className="dialog">
            <h1 className="dialog__title">
              <i className="fa-solid fa-palette"></i>Preferences
            </h1>

            <button
              className="dialog__close-btn"
              onClick={closePreferencesDialog}
              title="Close"
            >
              <i className="fa-solid fa-circle-xmark"></i>
            </button>

            <div className="navbar__accent-color">
              <div className="custom-accent-color-wrapper">
                <label htmlFor="custom-accent-color">
                  Choose a custom color:
                </label>
                <input
                  type="color"
                  id="custom-accent-color"
                  name="custom-accent-color"
                  onChange={handleAccentColorChange}
                  title="Custom Accent Color"
                  aria-label="Choose a custom accent color"
                />
              </div>

              <p>Or:</p>

              <div className="preset-accent-color-wrapper">
                <label htmlFor="preset-colors">
                  Choose one of the following preset color:
                </label>
                <select
                  name="preset-colors"
                  id="preset-colors"
                  onInput={handlePresetSelection}
                  defaultValue=""
                  aria-label="Select a preset accent color"
                >
                  <option value="" disabled>
                    --- Select a preset ---
                  </option>
                  <option value="balanced">Balanced</option>
                  <option value="preferredDarkColor">
                    Preferred Dark Color
                  </option>
                  <option value="preferredLightColor">
                    Preferred Light Color
                  </option>
                  <option value="defaultDarkColor">Default Dark Color</option>
                  <option value="defaultLightColor">Default Light Color</option>
                </select>
              </div>
            </div>
          </dialog>
        </div>
      </nav>
    </header>
  );
};

export default Header;
