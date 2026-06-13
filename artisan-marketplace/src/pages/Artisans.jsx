import "./Artisans.css";

import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const artisans = [
  {
    id: 1,
    name: "Ankan Crafts",
    category: "Hand Painted Clothing",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800",
  },
  {
    id: 2,
    name: "Creative Studio",
    category: "Custom Phone Covers",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
  },
  {
    id: 3,
    name: "Clay Master",
    category: "Pottery Artist",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800",
  },
  {
    id: 4,
    name: "Wood Kingdom",
    category: "Wood Craft",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800",
  },
];

function Artisans() {
  return (
    <section className="section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            Our Creators
          </span>

          <h2>
            Featured Artisans
          </h2>

          <p>
            Meet talented creators behind
            beautiful handmade products.
          </p>

        </div>

        <div className="artisan-search">

          <input
            type="text"
            placeholder="Search artisans..."
          />

        </div>

        <div className="artisan-grid">

          {artisans.map((artisan) => (
            <div
              key={artisan.id}
              className="artisan-card"
            >

              <img
                src={artisan.image}
                alt={artisan.name}
              />

              <h3>{artisan.name}</h3>

              <p>{artisan.category}</p>

              <button>
                View Profile
              </button>

            </div>
          ))}

        </div>

        <div className="seller-banner">

          <h2>
            Want To Sell Your Handmade Products?
          </h2>

          <p>
            Join ArtisanHub and start your
            journey as an artisan today.
          </p>

          <button>
            Become Seller
          </button>

        </div>

      </div>

    </section>
  );
}

export default Artisans;