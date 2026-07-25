import "./Results.css";
import { FaStar } from "react-icons/fa";
import AnimatedNumber from "../AnimatedNumbers";


const stats = [
  {
    end: 250,
    suffix: "+",
    title: "Projects Delivered",
  },
  {
    end: 98,
    suffix: "%",
    title: "Client Satisfaction",
  },
  {
    end: 12,
    suffix: "+",
    title: "Countries Served",
  },
  {
    end: 8,
    suffix: "+",
    title: "Years Experience",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Bright Labs",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "NorthPeak Digital completely transformed our online presence. Their team delivered a beautiful website that exceeded our expectations.",
  },
  {
    name: "Michael Chen",
    company: "Elevate Tech",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "Professional, creative, and always available. We saw a significant increase in conversions after launching our new website.",
  },
  {
    name: "Emma Wilson",
    company: "Nova Studio",
    image: "https://i.pravatar.cc/150?img=44",
    review:
      "Working with NorthPeak was effortless. Every detail was carefully crafted, and the final result looked incredible.",
  },
];



function Results() {
  return (
    <section className="results" id="results">
      <div className="container">

        <div className="section-heading">
          <span>Results That Matter</span>

          <h2 data-aos="fade-up" data-aos-delay="100">
            Helping Businesses Grow
            <br />
            Through Digital Innovation
          </h2>

          <p data-aos="fade-up" data-aos-delay="200">
            We partner with ambitious brands to build modern digital
            experiences that drive measurable growth.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <h3>
  <AnimatedNumber
    end={stat.end}
    suffix={stat.suffix}
    delay={800 + index * 200}
  />
</h3>
              <p>{stat.title}</p>
            </div>
          ))}
        </div>

        <div className="testimonial-grid" data-aos="fade-up" data-aos-delay="300">
          {testimonials.map((testimonial, index) => (
            <article className="testimonial-card" key={index}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="review">
                "{testimonial.review}"
              </p>

              <div className="client">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                />

                <div>
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.company}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Results;