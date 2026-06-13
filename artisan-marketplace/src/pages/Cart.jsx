import { FaTrash, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Cart.css";

const cartItems = [
  {
    id: 1,
    name: "Hand Painted Punjabi",
    price: 799,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
  },
  {
    id: 2,
    name: "Custom Phone Cover",
    price: 499,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
  },
];

function Cart() {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="section">
      <div className="container">

        <Link to="/products" className="cart-back">
          <FaArrowLeft />
          Continue Shopping
        </Link>

        <div className="section-header">
          <span className="section-tag">
            Shopping Cart
          </span>

          <h2>Your Cart</h2>

          <p>
            Review your selected handmade products.
          </p>
        </div>

        <div className="cart-layout">

          {/* Left */}
          <div className="cart-items">

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item"
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-info">
                  <h3>{item.name}</h3>

                  <p>
                    Quantity: {item.quantity}
                  </p>

                  <span>
                    ₹{item.price}
                  </span>
                </div>

                <button className="delete-btn">
                  <FaTrash />
                </button>

              </div>
            ))}

          </div>

          {/* Right */}
          <div className="cart-summary">

            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>₹99</span>
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <span>₹{subtotal + 99}</span>
            </div>

            <button className="checkout-btn">
              Proceed To Checkout
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Cart;