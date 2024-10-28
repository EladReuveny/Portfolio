import React from "react";

const Header = () => {
  return (
    <header className="header" id="header">
      <nav className="navbar">
        <div className="navbar__logo">
            <a href="#" className="logo">
                Elad <span>Reuveny</span>
            </a>
        </div>
        <div className="navbar__sections">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
