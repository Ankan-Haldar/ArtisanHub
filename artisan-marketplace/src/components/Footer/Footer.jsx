import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">

            <h2>ArtisanHub</h2>

            <p>
              Discover unique handmade creations crafted by
              talented artisans. Support creators and shop
              authentic handmade products.
            </p>

            <div className="footer-socials">

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaTwitter />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

            </div>

          </div>

          {/* Categories */}
          <div>

            <h3>Categories</h3>

            <ul>

              <li>Paintings</li>
              <li>Handmade Clothes</li>
              <li>Jewelry</li>
              <li>Custom Gifts</li>
              <li>Home Decor</li>

            </ul>

          </div>

          {/* Quick Links */}
          <div>

            <h3>Quick Links</h3>

            <ul>

              <li>Home</li>
              <li>Products</li>
              <li>Artisans</li>
              <li>About Us</li>
              <li>Contact</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3>Contact</h3>

            <ul>

              <li>support@artisanhub.com</li>
              <li>+91 9876543210</li>
              <li>India</li>

            </ul>

          </div>

        </div>

        <div className="footer-bottom">

          <p>
            © 2026 ArtisanHub. All Rights Reserved.
          </p>

          <div className="footer-links">

            <span>Privacy Policy</span>

            <span>Terms & Conditions</span>

            <span>Cookies</span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;