import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-top">

        <div className="footer-brand">

          <h2>
            North<span>Peak</span>
          </h2>

          <p>
            Building digital experiences that help
            businesses grow faster.
          </p>

          <div className="socials">

            <a
  href="https://facebook.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit our Facebook"
>
              <FaFacebookF />
            </a>

            <a
  href="https://instagram.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit our Instagram"
>
              <FaInstagram />
            </a>

            <a
  href="https://linkedin.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit our LinkedIn"
>
              <FaLinkedinIn />
            </a>

            <a
  href="https://github.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit our GitHub"
>
              <FaGithub />
            </a>

          </div>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#results">Results</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-links">

          <h3>Services</h3>

          <a href="#">Web Development</a>
          <a href="#">UI / UX Design</a>
          <a href="#">SEO</a>
          <a href="#">Marketing</a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 NorthPeak Digital. All rights reserved.
        </p>

        <p>
          Built for{" "}
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noreferrer"
          >
            Digital Heroes Training Task
          </a>
        </p>

      </div>

    </footer>
  );
}

export default Footer;