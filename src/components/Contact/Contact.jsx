import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));

    setSuccess("");
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    if (formData.message.trim().length < 20) {
      newErrors.message =
        "Message should contain at least 20 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validate();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setSuccess("🎉 Your message has been sent successfully!");

    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="container contact-container">

        <div className="contact-info">

          <span>Contact Us</span>

          <h2 data-aos="fade-left" data-aos-delay="100">
            Let's Build Something
            Amazing Together
          </h2>

          <p data-aos="fade-left" data-aos-delay="200">
            Ready to transform your digital presence?
            Tell us about your project and our team
            will get back to you shortly.
          </p>

          <div data-aos="fade-right" data-aos-delay="300">
            <div className="contact-card" >
            <h3>Email</h3>
            <p>service@northpeakdigital.com</p>
          </div>

          <div className="contact-card">
            <h3>Phone</h3>
            <p>+91 9876543210</p>
          </div>

          <div className="contact-card" >
            <h3>Office</h3>
            <p>Kakinada, India</p>
          </div>
          </div>

        </div>

        <form className="contact-form" onSubmit={handleSubmit} data-aos="fade-up" data-aos-delay="600">

          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <small>{errors.name}</small>}

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <small>{errors.email}</small>}

          <input
            type="text"
            placeholder="Company (Optional)"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />

          <textarea
            rows="6"
            placeholder="Tell us about your project..."
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {errors.message && <small>{errors.message}</small>}

          <button type="submit">
            Send Message
          </button>

          {success && (
            <p className="success-message">
              {success}
            </p>
          )}

        </form>

      </div>
    </section>
  );
}

export default Contact;