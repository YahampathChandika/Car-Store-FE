// Contact.jsx
import React, { useState } from "react";
import "../../assets/css/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., send data to the server)
    alert("Form Submitted");
  };

  return (
    <div className="contact-container">
      <div className="contact-form">
        <h2>Get in touch</h2>
        <p>We would love to hear from you. Get in touch with us by email.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your good name?"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            required
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
      <div className="contact-info">
        <h2>Hotlines</h2>
        <p>Call us today to reserve your ride.</p>
        <div>
          <p>
            <strong>General Inquiries</strong>
            <br />
            +94 77 596 0053
          </p>
          <p>
            <strong>Business Inquiries</strong>
            <br />
            +94 71 559 9733
          </p>
          <p>
            <strong>Email</strong>
            <br />
            info@luxuryrides.com
          </p>
          <p>
            <strong>Facebook</strong>
            <br />
            LUXURY RIDES
          </p>
        </div>
      </div>
    </div>
  );
}
