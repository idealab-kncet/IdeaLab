import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo">
          <i className="fa-solid fa-lightbulb"></i>
          <span>AICTE IDEA Lab</span>
        </Link>
        <button
          type="button"
          className="hamburger"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
        <ul id="primary-navigation" className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>
              About Lab
            </Link>
          </li>
          <li>
            <Link to="/vision" className={`nav-link ${isActive('/vision')}`} onClick={closeMenu}>
              Vision & Mission
            </Link>
          </li>
          <li>
            <Link to="/activities" className={`nav-link ${isActive('/activities')}`} onClick={closeMenu}>
              Activities
            </Link>
          </li>
          <li>
            <Link to="/services" className={`nav-link ${isActive('/services')}`} onClick={closeMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/team" className={`nav-link ${isActive('/team')}`} onClick={closeMenu}>
              Team
            </Link>
          </li>
          <li>
            <Link to="/gallery" className={`nav-link ${isActive('/gallery')}`} onClick={closeMenu}>
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/facilities" className={`nav-link ${isActive('/facilities')}`} onClick={closeMenu}>
              Facilities
            </Link>
          </li>
          <li>
            <Link to="/contact" className="btn btn-secondary" style={{ padding: '8px 20px' }} onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
