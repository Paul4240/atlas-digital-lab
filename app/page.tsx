'use client';
import { useEffect, useState } from "react";
import "./globals.css";

export default function Home() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="container" id="top">
      {/* Hero Section */}
      <header className="hero">
        <h1 className="logo-text">
          Atlas <span className="logo-accent">Digital Lab</span>
        </h1>
        <p>Professional Websites & Social Media Services</p>
        <a href="mailto:atlasdigitallabgroup@gmail.com" className="cta-button">
          Contact Us
        </a>
        <a href="#services" className="scroll-down">&#8595;</a>
      </header>

      {/* Services */}
      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Website Design</li>
          <li>Online Stores</li>
          <li>Mobile Friendly Sites</li>
          <li>SEO Setup</li>
        </ul>
      </section>

      {/* Pricing */}
      <section>
        <h2>Simple Pricing</h2>
        <p>Starts at $99 setup</p>
        <p>Monthly Maintenance Available</p>
      </section>

      {/* About */}
      <section>
        <h2>About Us</h2>
        <p>
          Atlas Digital Lab specializes in creating modern websites for small
          businesses. We focus on mobile-friendly designs, social media setup, and search engine optimization.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2>Contact</h2>
        <p>
          Email: <a href="mailto:atlasdigitallabgroup@gmail.com">atlasdigitallabgroup@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+18327050313">(832) 705-0313</a>
        </p>
      </section>

      {/* Back to Top Button */}
      <a href="#top" className={`back-to-top ${showTop ? "show" : ""}`}>&#8679; Top</a>

      {/* Floating Contact Bar */}
      <div className="floating-contact">
        <a href="mailto:atlasdigitallabgroup@gmail.com" title="Email us">📧</a>
        <a href="tel:+18327050313" title="Call us">📞</a>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2026 Atlas Digital Lab</p>
      </footer>
    </main>
  );
}
