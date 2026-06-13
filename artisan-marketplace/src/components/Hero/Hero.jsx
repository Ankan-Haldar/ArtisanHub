import { FaSearch, FaArrowRight } from "react-icons/fa";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero section">

      <div className="container">

        <div className="hero-content">

          <div className="hero-badge">
            ✨ Handmade Marketplace
          </div>

          <h1 className="hero-title">
            Discover Unique

            <span>
              Handmade Creations
            </span>

          </h1>

          <p className="hero-description">
            Support talented artisans and discover handcrafted
            products, custom designs, unique gifts and
            one-of-a-kind creations.
          </p>

          <div className="hero-buttons">

            <button className="btn-primary">
              Explore Products
              <FaArrowRight />
            </button>

            <button className="btn-secondary">
              Become Seller
            </button>

          </div>

          <div className="hero-search">

            <FaSearch className="search-icon" />

            <input
              type="text"
              placeholder="Search handmade products..."
            />

          </div>

          <div className="hero-tags">

            <span>Paintings</span>
            <span>Phone Covers</span>
            <span>Jewelry</span>
            <span>Punjabi</span>
            <span>Clay Art</span>
            <span>Custom Gifts</span>

          </div>

          <div className="hero-stats">

            <div>
              <h3>500+</h3>
              <p>Artisans</p>
            </div>

            <div>
              <h3>10K+</h3>
              <p>Products</p>
            </div>

            <div>
              <h3>25K+</h3>
              <p>Customers</p>
            </div>

            <div>
              <h3>4.9★</h3>
              <p>Rating</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;