import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../styles/Header.css";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header>
      <h1 className="logo">
        <NavLink to="/" className={({ isActive }) => (isActive ? "navActive" : "")}>Kyle Lane</NavLink>
      </h1>

      <nav>
        <div className="hamburger" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? "navActive" : "")} onClick={closeMobileMenu}>About</NavLink></li>
          <li><NavLink to="/portfolio" className={({ isActive }) => (isActive ? "navActive" : "")} onClick={closeMobileMenu}>Portfolio</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "navActive" : "")} onClick={closeMobileMenu}>Contact</NavLink></li>
          <li><NavLink to="/resume" className={({ isActive }) => (isActive ? "navActive" : "")} onClick={closeMobileMenu}>Resume</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
