"use client";

import Header from "@/slices/Header";

export default function Contact() {
  return (
    <>
      <section className="contact-hero">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you.</p>
      </section>

      <section className="contact-body">

        {/* Company Info */}
        <div className="contact-info">
          <h2>Honey Gold</h2>
          <p>A short description of the company goes here. A couple of sentences about what you do and what you stand for.</p>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label">Email</span>
              <span>hello@honeygold.com</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Phone</span>
              <span>(000) 000-0000</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Location</span>
              <span>Dallas, TX</span>
            </div>
            <div className="contact-item">
              <span className="contact-label">Hours</span>
              <span>Mon – Fri, 9am – 5pm CST</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <h2>Send Us A Message</h2>
          <div className="contact-form">

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Your email" />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="What is this about?" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="Your message..." />
            </div>

            <button className="contact-submit" type="button">
              Send Message
            </button>

          </div>
        </div>

      </section>

    </>
  );
}