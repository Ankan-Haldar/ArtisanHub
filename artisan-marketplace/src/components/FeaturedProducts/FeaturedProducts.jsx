import { Link } from "react-router-dom";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

import "./FeaturedProducts.css";

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

function FeaturedProducts() {
  return (
    <section className="products section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            Featured Collection
          </span>

          <h2>Trending Products</h2>

          <p>
            Discover the most loved handmade creations
            from talented artisans.
          </p>

        </div>

        <div className="products-grid">

          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
            >

              {/* Clickable Product */}
              <Link
                to={`/product/${product.id}`}
                className="product-link"
              >

                <div className="product-image-wrapper">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />

                  <button
                    className="wishlist-btn"
                    onClick={(e) =>
                      e.preventDefault()
                    }
                  >
                    <FaHeart />
                  </button>

                </div>

                <div className="product-content">

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

              <div className="product-content">

                <button className="cart-btn">
                  <FaShoppingCart />
                  Add To Cart
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;