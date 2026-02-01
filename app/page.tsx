export default function Home() {
  return (
    <main className="container">

      <header className="hero">
  <img src="/A_logo_for_\"Atlas_Digital_Lab\"_is_displayed_in_the.png" alt="Atlas Digital Lab Logo" className="hero-logo" />
  <h1>Atlas Digital Lab</h1>
  <p>Professional Web Solutions</p>

  <div className="hero-contact">
    <p>Email: <a href="mailto:atlasdigitallabgroup@gmail.com">atlasdigitallabgroup@gmail.com</a></p>
    <p>Phone: <a href="tel:+18327050313">(832) 705-0313</a></p>
  </div>

  <a href="#services" className="btn">Get a Free Quote</a>
</header>

      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>✔️ Business Websites</li>
          <li>✔️ Online Stores</li>
          <li>✔️ Mobile Friendly Design</li>
          <li>✔️ Fast Setup</li>
        </ul>
      </section>

      <section id="pricing">
        <h2>Simple Pricing</h2>
        <p>Starter Sites from <strong>$500</strong></p>
        <p>Monthly Maintenance Available</p>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>
          Atlas Digital Lab helps small businesses get online fast
          with clean, modern websites.
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: yourname@email.com</p>
        <p>Phone: (555) 123-4567</p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Atlas Digital Lab</p>
      </footer>

    </main>
  );
      }
