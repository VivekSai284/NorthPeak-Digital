import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-container">
        <a href="#hero" className="logo">
          North<span>Peak</span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#results" onClick={() => setMenuOpen(false)}>Results</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          <a href="#contact" className="nav-btn">
            Get Started
          </a>
        </nav>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;