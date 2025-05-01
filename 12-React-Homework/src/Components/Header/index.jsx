import { useState } from "react";
import { Link } from "react-router";
import "../../styles/Header.css"; // Or wherever your navbar styles live

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <h1 className="logo">
        <Link to="/">Kyle Lane</Link>
      </h1>

      <nav>
        <div className="hamburger" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          ☰
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
          <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
          <li><Link to="/portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</Link></li>
          <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/resume" onClick={() => setMobileMenuOpen(false)}>Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
