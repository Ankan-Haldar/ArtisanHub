import {
  FaUser,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import "./Login.css";

import { FaArrowLeft } from "react-icons/fa";

function Register() {
  return (
    <section className="section">

      <div className="container">

        <div className="auth-container">

          <div className="auth-card">

            <span className="section-tag">
              Join ArtisanHub
            </span>

            <h2>Create Your Account</h2>

            <p>
              Start exploring handmade products,
              connect with artisans and enjoy
              a unique shopping experience.
            </p>

            <form className="auth-form">

              <div className="input-group">

                <FaUser className="input-icon" />

                <input
                  type="text"
                  placeholder="Full Name"
                />

              </div>

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

              <div className="input-group">

                <FaLock className="input-icon" />

                <input
                  type="password"
                  placeholder="Confirm Password"
                />

              </div>

              <button className="auth-btn">
                Create Account
              </button>

            </form>

            <div className="auth-links">

              <span>
                Already have an account?
              </span>

              <Link to="/login">
                Login
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Register;