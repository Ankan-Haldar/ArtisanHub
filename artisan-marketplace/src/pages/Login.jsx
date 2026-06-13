import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./Login.css";

function Login() {
  return (
    <section className="section">

      <div className="container">

        <div className="auth-container">

          <div className="auth-card">

            <span className="section-tag">
              Welcome Back
            </span>

            <h2>Login To Your Account</h2>

            <p>
              Access your orders, wishlist and
              artisan dashboard.
            </p>

            <form className="auth-form">

              <div className="input-group">

                <FaEnvelope className="input-icon" />

                <input
                  type="email"
                  placeholder="Email Address"
                />

              </div>

              <div className="input-group">

                <FaLock className="input-icon" />

                <input
                  type="password"
                  placeholder="Password"
                />

              </div>

              <button className="auth-btn">
                Login
              </button>

            </form>

            <div className="auth-links">

              <span>
                Don't have an account?
              </span>

              <Link to="/register">
                Register
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Login;