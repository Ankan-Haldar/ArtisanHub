import {
  FaInstagram,
  FaGlobe,
  FaStar,
} from "react-icons/fa";

import "./FeaturedArtisans.css";

const artisans = [
  {
    id: 1,
    name: "Ankan Crafts",
    role: "Hand Painted Clothing",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
    products: 124,
    rating: 4.9,
  },
  {
    id: 2,
    name: "Creative Studio",
    role: "Custom Phone Covers",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
    products: 98,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Clay Master",
    role: "Handmade Pottery",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
    products: 76,
    rating: 4.9,
  },
];

function FeaturedArtisans() {
  return (
    <section className="artisans section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            Meet Our Creators
          </span>

          <h2>
            Featured Artisans
          </h2>

          <p>
            Discover talented creators bringing
            handmade products to life.
          </p>

        </div>

        <div className="artisans-grid">

          {artisans.map((artisan) => (
            <div
              key={artisan.id}
              className="artisan-card"
            >

              <div className="artisan-cover"></div>

              <div className="artisan-content">

                <img
                  src={artisan.image}
                  alt={artisan.name}
                  className="artisan-avatar"
                />

                <h3>{artisan.name}</h3>

                <p className="artisan-role">
                  {artisan.role}
                </p>

                <div className="artisan-stats">

                  <div>
                    <h4>{artisan.products}</h4>
                    <span>Products</span>
                  </div>

                  <div>
                    <h4>
                      <FaStar />
                      {artisan.rating}
                    </h4>

                    <span>Rating</span>
                  </div>

                </div>

                <div className="artisan-socials">

                  <button>
                    <FaInstagram />
                  </button>

                  <button>
                    <FaGlobe />
                  </button>

                </div>

                <button className="profile-btn">
                  View Profile
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedArtisans;