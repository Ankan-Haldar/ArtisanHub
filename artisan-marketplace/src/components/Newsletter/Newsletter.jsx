import { FaPaperPlane } from "react-icons/fa";
import "./Newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter section">

      <div className="container">

        <div className="newsletter-box">

          <span className="section-tag">
            Stay Connected
          </span>

          <h2>
            Join Our Creative Community
          </h2>

          <p>
            Get updates about new handmade products,
            exclusive offers and artisan stories.
          </p>

          <form className="newsletter-form">

            <input
              type="email"
              placeholder="Enter your email address"
            />

            <button type="submit">
              Subscribe
              <FaPaperPlane />
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;