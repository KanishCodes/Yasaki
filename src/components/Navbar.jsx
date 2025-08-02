import React from "react";
import "../styles/home.css"; // Assuming navbar styles are defined here
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-brand">YASAKI</div>
        <ul className="navbar-nav">
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/menu" className="nav-link">Menu</Link></li>
          <li><Link to="/booking" className="nav-link">Book Us Up</Link></li>
          <li><Link to="/tatami" className="nav-link">Tatami Rooms</Link></li>
          <li><Link to="/newsletter" className="nav-link">Newsletter</Link></li>
          <li><Link to="/meetus" className="nav-link">Meet Us</Link></li>
          <li><Link to="/joinus" className="nav-link">Join Us</Link></li>
          <li><Link to="/ourstory" className="nav-link">Our Story</Link></li>
          <li><Link to="/hours-location" className="nav-link">Hours & Location</Link></li>
          <li><Link to="/studio" className="nav-link">Gallery</Link></li>
          <li><Link to="/play" className="nav-link">Play</Link></li>
          {/* Add more React-based routes here as you create them */}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
