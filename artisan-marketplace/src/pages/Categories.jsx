import {
  FaPalette,
  FaTshirt,
  FaMobileAlt,
  FaGem,
  FaGift,
} from "react-icons/fa";

import {
  GiClayBrick,
  GiWoodPile,
  GiYarn,
} from "react-icons/gi";

import "./Categories.css";

import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const categories = [
  {
    name: "Paintings",
    icon: <FaPalette />,
    products: "250+ Products",
  },
  {
    name: "Handmade Clothes",
    icon: <FaTshirt />,
    products: "180+ Products",
  },
  {
    name: "Phone Covers",
    icon: <FaMobileAlt />,
    products: "120+ Products",
  },
  {
    name: "Jewelry",
    icon: <FaGem />,
    products: "300+ Products",
  },
  {
    name: "Clay Art",
    icon: <GiClayBrick />,
    products: "90+ Products",
  },
  {
    name: "Custom Gifts",
    icon: <FaGift />,
    products: "140+ Products",
  },
  {
    name: "Wood Craft",
    icon: <GiWoodPile />,
    products: "70+ Products",
  },
  {
    name: "Crochet",
    icon: <GiYarn />,
    products: "110+ Products",
  },
];

function Categories() {
  return (
    <section className="section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            Browse Categories
          </span>

          <h2>
            Explore Handmade Collections
          </h2>

          <p>
            Discover unique handcrafted products
            from talented artisans across India.
          </p>

        </div>

        <div className="category-search">

          <input
            type="text"
            placeholder="Search categories..."
          />

        </div>

        <div className="categories-page-grid">

          {categories.map((category) => (
            <div
              key={category.name}
              className="category-page-card"
            >

              <div className="category-page-icon">
                {category.icon}
              </div>

              <h3>{category.name}</h3>

              <p>{category.products}</p>

              <button>
                Explore Category
              </button>

            </div>
          ))}

        </div>

        <div className="category-banner">

          <h2>
            Find Something Truly Unique
          </h2>

          <p>
            Thousands of handmade products
            waiting to be discovered.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Categories;