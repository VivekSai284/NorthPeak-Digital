import "./Pricing.css";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: "$299",
    description: "Perfect for startups and small businesses getting online.",
    features: [
      "Landing Page Design",
      "Responsive Website",
      "Basic SEO Setup",
      "Contact Form",
      "1 Week Support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$699",
    description: "Our most popular package for growing businesses.",
    features: [
      "Up to 10 Pages",
      "Custom UI/UX Design",
      "Advanced SEO",
      "Performance Optimization",
      "CMS Integration",
      "1 Month Support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored digital solutions for large organizations.",
    features: [
      "Unlimited Pages",
      "Custom Development",
      "API Integrations",
      "Dedicated Project Manager",
      "Priority Support",
      "Scalable Architecture",
    ],
    featured: false,
  },
];

function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">

        <div className="section-heading">
          <span>Pricing</span>

          <h2 data-aos="fade-up" data-aos-delay="100">
            Flexible Plans For
            <br />
            Every Business
          </h2>

          <p data-aos="fade-up" data-aos-delay="200">
            Choose the perfect package that matches your business goals.
            No hidden fees. Transparent pricing.
          </p>
        </div>

        <div className="pricing-grid" data-aos="zoom-in" data-aos-delay="300">
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`pricing-card ${
                plan.featured ? "featured" : ""
              }`}
            >
              {plan.featured && (
                <div className="badge">
                  Most Popular
                </div>
              )}

              <h3>{plan.name}</h3>

              <div className="price">
    <h1>{plan.price}</h1>
    <span>/project</span>
</div>

              <p className="plan-description">
                {plan.description}
              </p>

              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheck />
                    {feature}
                  </li>
                ))}
              </ul>

              <button>
                Get Started
                <FaArrowRight />
              </button>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Pricing;