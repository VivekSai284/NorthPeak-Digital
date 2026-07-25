import "./Hero.css";
import heroImage from "../../assets/hero-image.png";
import { FaCode } from "react-icons/fa";
import { BiGitBranch } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero-container">

        <div className="hero-content">

          <p className="tag" data-aos="fade-up" data-aos-delay="100">
            Trusted by startups & businesses
          </p>

          <h1 data-aos="fade-up" data-aos-delay="200">
            We Build Digital Experiences, <br /> That Drive Growth.
          </h1>

          <p className="hero-text" data-aos="fade-up" data-aos-delay="300">
            NorthPeak Digital helps brands stand out with
            modern websites, intuitive design, and powerful
            development solutions.
          </p>

          <div className="hero-buttons" data-aos="fade-up" data-aos-delay="400">
            <a href="#contact" className="primary-btn">
              Start Your Project
            </a>

            <a href="#services" className="secondary-btn">
              Explore Services
            </a>
          </div>

          <div className="hero-stats" data-aos="fade-up" data-aos-delay="500">

            <div>
              <h3>250+</h3>
              <p>Projects</p>
            </div>

            <div>
              <h3>98%</h3>
              <p>Satisfaction</p>
            </div>

            <div>
              <h3>8+</h3>
              <p>Years</p>
            </div>

          </div>

        </div>

        <div className="hero-image" data-aos="fade-left" data-aos-delay="600">

          <img 
            src={heroImage}
            alt="Team collaboration"
          />
                  <div className="shape shape1"><FaCode/></div>
<div className="shape shape2"><BiGitBranch/></div>
<div className="shape shape3"><FaDatabase/></div>

        </div>


      </div>
    </section>
  );
}

export default Hero;