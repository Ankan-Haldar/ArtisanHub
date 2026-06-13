import { useParams, Link } from "react-router-dom";
import {
  FaStar,
  FaShoppingCart,
  FaArrowLeft,
} from "react-icons/fa";

import "./ProductDetails.css";


const products = [
  {
    id: 1,
    name: "Hand Painted Punjabi",
    price: "₹799",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    description:
      "Beautiful hand painted Punjabi crafted by skilled artisans. Unique design and premium quality fabric.",
  },
  {
    id: 2,
    name: "Custom Phone Cover",
    price: "₹499",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
    description:
      "Custom designed phone cover made with premium materials and unique artwork.",
  },
  {
    id: 3,
    name: "Handmade Jewelry",
    price: "₹999",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800",
    description:
      "Elegant handmade jewelry perfect for gifting and special occasions.",
  },
  {
    id: 4,
    name: "Clay Art Pot",
    price: "₹1299",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800",
    description:
      "Traditional handcrafted clay pot made by experienced pottery artists.",
  },
  {
    id: 5,
    name: "Wood Craft Decoration",
    price: "₹1499",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
    description:
      "Premium handcrafted wooden decoration for modern home interiors.",
  },
  {
    id: 6,
    name: "Crochet Handmade Toy",
    price: "₹599",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
    description:
      "Cute handmade crochet toy made with soft yarn and lots of creativity.",
  },
];

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="container section">
        <h1>Product Not Found</h1>
      </div>
    );
  }

  return (
    <section className="section">

      <div className="container">

        <Link
          to="/products"
          className="back-btn"
        >
          <FaArrowLeft />
          Back To Products
        </Link>

        <div className="product-details">

          <div className="product-image-box">

            <img
              src={product.image}
              alt={product.name}
            />

          </div>

          <div className="product-info">

            <span className="product-badge">
              Handmade Product
            </span>

            <h1>{product.name}</h1>

            <div className="product-rating">

              <FaStar />

              <span>
                {product.rating}
              </span>

            </div>

            <h2 className="product-price">
              {product.price}
            </h2>

            <p className="product-description">
              {product.description}
            </p>

            <button className="buy-btn">

              <FaShoppingCart />

              Add To Cart

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProductDetails;