'use client';
import "./globals.css";

export default function Home() {
  return (
    <main className="container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Atlas Digital Lab</h1>
        <p>Professional Websites & Social Media Services</p>
      </header>

      {/* Why Choose Us */}
      <section>
        <h2>Why Choose Atlas Digital Lab?</h2>
        <ul>
          <li>Custom, modern websites tailored to your business</li>
          <li>Mobile-friendly and responsive design</li>
          <li>SEO-ready to help you get found online</li>
          <li>Fast and professional service at affordable rates</li>
        </ul>
      </section>

      {/* Services */}
      <section>
        <h2>Our Services</h2>
        <ul>
          <li>Website Design & Development</li>
          <li>Online Stores / E-commerce</li>
          <li>Social Media Setup & Branding</li>
          <li>Monthly Website Maintenance</li>
        </ul>
      </section>

      {/* Pricing */}
      <section>
        <h2>Simple Pricing</h2>
        <p>Website setup starts at <strong>$99</strong></p>
        <p>Monthly maintenance plans available</p>
      </section>

      {/* Testimonials Placeholder */}
      <section>
        <h2>What Our Clients Say</h2>
        <p>"Atlas Digital Lab transformed our website! Highly recommend." – Client A</p>
        <p>"Professional, fast, and affordable service!" – Client B</p>
      </section>

      {/* Contact */}
      <section>
        <h2>Contact Us</h2>
        <p>
          Email: <a href="mailto:atlasdigitallabgroup@gmail.com">atlasdigitallabgroup@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+18327050313">(832) 705-0313</a>
        </p>
        <p>Ready to get started? Call or email us today!</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Atlas Digital Lab</p>
      </footer>
    </main>
  );
}
