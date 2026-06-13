import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

import "./Contact.css";

import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

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

        <div className="contact-wrapper">

          {/* Left Side */}
          <div className="contact-info">

            <h3>Get In Touch</h3>

            <div className="contact-item">

              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <h4>Email</h4>
                <p>support@artisanhub.com</p>
              </div>

            </div>

            <div className="contact-item">

              <div className="contact-icon">
                <FaPhone />
              </div>

              <div>
                <h4>Phone</h4>
                <p>+91 9876543210</p>
              </div>

            </div>

            <div className="contact-item">

              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <h4>Location</h4>
                <p>Kolkata, India</p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <form className="contact-form">

            <h3>Send Message</h3>

            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                placeholder="Your Message"
                className="form-textarea"
              />
            </div>

            <button className="send-btn">
              <FaPaperPlane />
              Send Message
            </button>

          </form>

        </div>

        {/* Map Section */}
        <div className="map-box">

          <iframe
            src="https://maps.google.com/maps?q=Kolkata&t=&z=13&ie=UTF8&iwloc=&output=embed"
            title="Google Map"
          />

        </div>

      </div>

    </section>
  );
}

export default Contact;