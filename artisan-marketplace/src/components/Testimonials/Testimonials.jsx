import { FaStar } from "react-icons/fa";
import "./Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "Rahul Das",
    role: "Customer",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500",
    review:
      "Amazing handmade products. The quality exceeded my expectations and delivery was fast.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Customer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    review:
      "I love supporting local artisans. This platform made it easy to find unique gifts.",
  },
  {
    id: 3,
    name: "Amit Roy",
    role: "Customer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500",
    review:
      "Beautiful collection and excellent customer service. Highly recommended.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            Testimonials
          </span>

          <h2>
            What Customers Say
          </h2>

          <p>
            Trusted by thousands of customers and creators.
          </p>

        </div>

        <div className="testimonials-grid">

          {testimonials.map((item) => (
            <div
              key={item.id}
              className="testimonial-card"
            >

              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="review">
                "{item.review}"
              </p>

              <div className="user">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;