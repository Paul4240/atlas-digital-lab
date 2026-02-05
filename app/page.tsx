'use client';
import './globals.css';

export default function Home() {
  return (
    <main className="container">
      {/* Hero Section */}
      <header className="hero">
        <h1 className="logo">Atlas Digital Lab</h1>
        <p className="tagline">Professional Websites & Social Media Services</p>
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
        <p className="pricing">Starts at $99 setup</p>
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
        <p>
          Email: <a href="mailto:atlasdigitallabgroup@gmail.com">atlasdigitallabgroup@gmail.com</a>
        </p>
        <p>
          Phone: <a href="tel:+18327050313">(832) 705-0313</a>
        </p>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Atlas Digital Lab</p>
      </footer>
    </main>
  );
}
