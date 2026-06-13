import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="container navbar-container">

        {/* Logo */}
        <Link to="/" className="logo">
          ArtisanHub
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-links">

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/products">Products</Link>
          </li>

          <li>
            <Link to="/categories">Categories</Link>
          </li>

          <li>
            <Link to="/artisans">Artisans</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

        </ul>

        {/* Right Side */}
        <div className="nav-actions">

          <Link to="/cart" className="icon-btn">
            <FaShoppingCart />
          </Link>

          <Link to="/login" className="icon-btn">
            <FaUser />
          </Link>

          <Link to="/login" className="login-btn">
            Login
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">

          <ul>

            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/products" onClick={() => setMenuOpen(false)}>
                Products
              </Link>
            </li>

            <li>
              <Link to="/categories" onClick={() => setMenuOpen(false)}>
                Categories
              </Link>
            </li>

            <li>
              <Link to="/artisans" onClick={() => setMenuOpen(false)}>
                Artisans
              </Link>
            </li>

            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>

            <Link
              to="/login"
              className="mobile-login-btn"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>

          </ul>

        </div>
      )}

    </nav>
  );
}

export default Navbar;