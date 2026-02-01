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

      {/* Services */}
      <section>
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
          businesses.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2>Contact</h2>
        <p>Email: atlasdigitallabgroup@gmail.com</p>
        <p>Phone: (832) 705-0313</p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Atlas Digital Lab</p>
      </footer>
    </main>
  );
}
