import React, { useContext, useState } from "react";
import "../styles.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../shared/context/AuthProvider";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="nav-menu">
      <div className="nav-header">
        <div className="logo"> JEO + MIRIAM</div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>

      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        <li className="nav-link" onClick={closeMenu}>
          <Link to="/">Our Story</Link>
        </li>
        <li className="nav-link" onClick={closeMenu}>
          <Link to="/WeddingDetails">Wedding Details</Link>
        </li>
         <li className="nav-link" onClick={closeMenu}>
          <Link to="/Entourage">Entourage</Link>
        </li>
        <li className="nav-link" onClick={closeMenu}>
          <Link to="/RSVP">RSVP</Link>
        </li>
        
        <li className="nav-link" onClick={closeMenu}>
          <Link to="/Gallery">Gallery</Link>
        </li>
        <li onClick={closeMenu}>
          {isLoggedIn ? (
            <button onClick={logout}>Log out</button>
          ) : (
            <Link to="/Login">Log-in</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
