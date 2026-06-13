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
    <section className="categories section">

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
            created by talented artisans.
          </p>

        </div>

        <div className="categories-grid">

          {categories.map((category) => (
            <div
              key={category.name}
              className="category-card"
            >

              <div className="category-icon">
                {category.icon}
              </div>

              <h3>{category.name}</h3>

              <p>{category.products}</p>

              <span className="explore-btn">
                Explore →
              </span>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;