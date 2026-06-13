import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <section className="section">
      <div className="container">

        <div className="section-header">
          <span className="section-tag">
            Contact Us
          </span>

          <h2>Let's Talk</h2>

          <p>
            Have questions about products,
            artisans or orders? We'd love to hear from you.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "40px",
            marginTop: "50px",
          }}
        >

          {/* Left Side */}

          <div
            style={{
              background: "#0f172a",
              padding: "30px",
              borderRadius: "20px",
            }}
          >

            <h3>Get In Touch</h3>

            <div style={{ marginTop: "25px" }}>
              <p>
                <FaEnvelope /> support@artisanhub.com
              </p>

              <br />

              <p>
                <FaPhone /> +91 9876543210
              </p>

              <br />

              <p>
                <FaMapMarkerAlt /> Kolkata, India
              </p>
            </div>

          </div>

          {/* Right Side */}

          <form
            style={{
              background: "#0f172a",
              padding: "30px",
              borderRadius: "20px",
            }}
          >

            <input
              type="text"
              placeholder="Your Name"
              className="form-input"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="form-input"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="form-input"
            />

            <button className="gradient-btn">
              <FaPaperPlane />
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;