import "./Services.css";
import {
  FaLaptopCode,
  FaPalette,
  FaMobileAlt,
  FaBullhorn,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    description:
      "High-performance websites built with modern technologies that scale with your business.",
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Design",
    description:
      "Beautiful and intuitive interfaces that create memorable user experiences.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications designed for speed, usability, and growth.",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    description:
      "Reach more customers through strategic campaigns across multiple digital channels.",
  },
  {
    icon: <FaChartLine />,
    title: "SEO Optimization",
    description:
      "Improve search rankings and drive consistent organic traffic to your business.",
  },
  {
    icon: <FaRocket />,
    title: "Growth Strategy",
    description:
      "Data-driven digital strategies that help brands launch, grow, and outperform competitors.",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="section-heading">
          <span>Our Services</span>

          <h2 data-aos="fade-up" data-aos-delay="100">
            Digital Solutions Designed
            <br />
            To Grow Your Business
          </h2>

          <p data-aos="fade-up" data-aos-delay="200">
            From design to development and marketing, we provide everything
            needed to build a strong digital presence.
          </p>
        </div>

        <div className="services-grid" data-aos="fade-left" data-aos-delay="300">
          {services.map((service, index) => (
            <article className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="service-footer">
                <span>Learn More</span>
                <span className="arrow">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;