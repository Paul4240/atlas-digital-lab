export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <header className="hero">
        <img
          src="/A_logo_for_\"Atlas_Digital_Lab\"_is_displayed_in_the.png"
          alt="Atlas Digital Lab Logo"
          className="hero-logo"
        />
        <h1>Atlas Digital Lab</h1>
        <p>Professional Web Solutions</p>

        {/* Contact Info */}
        <div className="hero-contact">
          <p>
            Email: <a href="mailto:atlasdigitallabgroup@gmail.com">atlasdigitallabgroup@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+18327050313">(832) 705-0313</a>
          </p>
        </div>

        <a href="#services" className="btn">Get a Free Quote</a>
      </header>

      {/* Services Section */}
      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>✔️ Business Websites</li>
          <li>✔️ Online Stores</li>
          <li>✔️ Mobile Friendly Design</li>
          <li>✔️ Fast Setup</li>
        </ul>
      </section>

      {/* Pricing Section */}
      <section id="pricing">
        <h2>Simple Pricing</h2>
        <p>Starter Sites from <strong>$500</strong></p>
        <p>Monthly Maintenance Available</p>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About Us</h2>
        <p>
          Atlas Digital Lab helps small businesses get online fast with clean, modern websites.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact">
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
        <p>© {new Date().getFullYear()} Atlas Digital Lab</p>
      </footer>
    </main>
  );
      }
