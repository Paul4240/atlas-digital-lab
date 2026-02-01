export default function Home() {
  return (
    <main className="container">

      <header className="hero">
        <h1>Atlas Digital Lab</h1>
        <p>Professional Websites for Small Businesses</p>
        <a href="#contact" className="btn">Get a Free Quote</a>
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
