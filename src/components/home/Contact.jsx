import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "../../assets/css/Contact.css";
import supercarImage from "../../assets/images/about.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Sending Message...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      // Send email to yourself
      await emailjs.send(
        "service_gkxwd7f",
        "template_qcpj1vb",
        {
          to_name: "Yahampath",
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "8rOnRzOsXycyMkeTj"
      );

      // Send email to the customer
      await emailjs.send(
        "service_gkxwd7f",
        "template_1m1m27f",
        {
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "8rOnRzOsXycyMkeTj"
      );

      Swal.close();
      Swal.fire({
        icon: "success",
        title: "Message sent successfully!",
        showConfirmButton: false,
        timer: 2000,
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      Swal.close();
      console.error("Error sending email:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-content">
        <div className="contact-form-section">
          <div className="contact-heading">
            <h1>Contact Us</h1>
            <p>
              We would love to hear from you! Send us a message and we'll get
              back to you as soon as possible.
            </p>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>

        <div className="contact-image">
          <img src={supercarImage} alt="Supercar" />
        </div>
      </div>
    </div>
  );
}
