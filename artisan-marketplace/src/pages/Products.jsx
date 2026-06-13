import { Link } from "react-router-dom";

import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaSearch,
  FaArrowLeft,
} from "react-icons/fa";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "./Products.css";

const products = [
  {
    id: 1,
    name: "Hand Painted Punjabi",
    price: "₹799",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
  },
  {
    id: 2,
    name: "Custom Phone Cover",
    price: "₹499",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
  },
  {
    id: 3,
    name: "Handmade Jewelry",
    price: "₹999",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800",
  },
  {
    id: 4,
    name: "Clay Art Pot",
    price: "₹1299",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800",
  },
  {
    id: 5,
    name: "Wood Craft Decoration",
    price: "₹1499",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
  },
  {
    id: 6,
    name: "Crochet Handmade Toy",
    price: "₹599",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
  },
];

function Products() {
  return (
    <>
      <Navbar />

      <section className="section">

        <div className="container">

          <Link to="/" className="back-btn">
            <FaArrowLeft />
            Back To Home
          </Link>

          <div className="section-header">

            <span className="section-tag">
              Handmade Marketplace
            </span>

            <h2>All Products</h2>

            <p>
              Discover handmade creations crafted
              by talented artisans.
            </p>

          </div>

          {/* Search */}
          <div className="products-search">

            <FaSearch />

            <input
              type="text"
              placeholder="Search products..."
            />

          </div>

          {/* Products Grid */}
          <div className="products-page-grid">

            {products.map((product) => (
              <div
                key={product.id}
                className="product-page-card"
              >

                <Link
                  to={`/product/${product.id}`}
                  className="product-link"
                >

                  <div className="product-page-image">

                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <button className="wishlist-btn">
                      <FaHeart />
                    </button>

                  </div>

                  <div className="product-page-content">

                    <div className="rating">

                      <FaStar />

                      {product.rating}

                    </div>

                    <h3>{product.name}</h3>

                    <div className="price">
                      {product.price}
                    </div>

                  </div>

                </Link>

                <button className="cart-btn">

                  <FaShoppingCart />

                  Add To Cart

                </button>

              </div>
            ))}

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Products;