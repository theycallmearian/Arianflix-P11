import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-content">
        <Link to="/" className="navbar-logo">
          {/* Logo de Arianflix - 'A' */}
          <img
            src="https://res.cloudinary.com/dye4qdrys/image/upload/v1749233641/ChatGPT_Image_6_jun_2025__19_13_14-removebg-preview_exqtit.png"
            alt="Arianflix"
          />
        </Link>
        <nav>
          <ul className="navbar-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Acerca de</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
