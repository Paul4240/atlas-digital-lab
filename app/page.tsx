en paste this entire file:

export default function HomePage() {
  return (
    <main className="page">
      {/* NAV */}
      <nav className="nav">
        <div className="logo">
          <div className="logoBox" />
          <div>
            <strong>Atlas Digital Lab</strong>
            <div className="sub">Websites • SEO • Small Business Growth</div>
          </div>
        </div>

        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#demos">Demos</a>
          <a href="#pricing">Pricing</a>
          <a className="phone" href="tel:3463657906">
            Call/Text (346) 365-7906
          </a>
          <a className="cta" href="#pricing">Get a Quote</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="heroLeft">
          <div className="badge">
            Fast turnaround • Mobile-first • Clear pricing
          </div>

          <h1>
            Websites that make
            <br />
            small businesses look
            <br />
            premium — and get calls.
          </h1>

          <p>
            We build clean, fast websites with a conversion-first layout
            so people actually contact you. Built for local businesses
            that want to look “worth it” online.
          </p>

          <div className="heroButtons">
            <a className="primaryBtn" href="#pricing">Get a Quote</a>
            <a className="secondaryBtn" href="#demos">See Demos</a>
          </div>
        </div>

        <div className="heroCard">
          <div className="windowTop" />
          <div className="cardTitle">High-conversion layout</div>
          <div className="line" />
          <div className="line short" />
          <div className="buttonPreview" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>What we do</h2>

        <div className="grid3">
          <div className="card">
            <h3>Websites</h3>
            <ul>
              <li>Mobile-first layout</li>
              <li>Clear calls-to-action</li>
              <li>Speed + best practices</li>
            </ul>
          </div>

          <div className="card">
            <h3>SEO & Google Setup</h3>
            <ul>
              <li>Google Business help</li>
              <li>On-page SEO basics</li>
              <li>Indexing ready</li>
            </ul>
          </div>

          <div className="card">
            <h3>Branding</h3>
            <ul>
              <li>Logo polish</li>
              <li>Color + typography</li>
              <li>Professional layout</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DEMOS */}
      <section id="demos" className="section">
        <h2>Demos you can show clients</h2>

        <div className="grid2">
          <div className="demoCard">
            <h3>Metal Business Cards Demo</h3>
            <p>Premium product-style layout.</p>
            <a href="/demo/metal-cards" className="secondaryBtn">
              Open Metal Cards Demo
            </a>
          </div>

          <div className="demoCard">
            <h3>Roofing Demo</h3>
            <p>Built to generate calls fast.</p>
            <a href="/demo/roofing" className="secondaryBtn">
              Open Roofing Demo
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <h2>Simple pricing</h2>

        <div className="grid3">
          <div className="priceCard">
            <h3>Starter</h3>
            <div className="price">$299</div>
            <ul>
              <li>Single page layout</li>
              <li>Mobile-first</li>
              <li>Contact section</li>
            </ul>
          </div>

          <div className="priceCard highlight">
            <h3>Pro</h3>
            <div className="price">$499</div>
            <ul>
              <li>High-conversion sections</li>
              <li>Trust blocks</li>
              <li>Everything in Starter</li>
            </ul>
          </div>

          <div className="priceCard">
            <h3>Elite</h3>
            <div className="price">$799+</div>
            <ul>
              <li>Custom layout + positioning</li>
              <li>Brand polish</li>
              <li>Everything in Pro</li>
            </ul>
          </div>
        </div>

        <div className="contactBar">
          <a href="tel:3463657906" className="phoneBig">
            Text (346) 365-7906
          </a>
          <a href="mailto:hello@atlasdigitallab.com" className="primaryBtn">
            Email for Quote
          </a>
        </div>
      </section>

      <footer className="footer">
        © 2026 Atlas Digital Lab — Websites • SEO • Branding
      </footer>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: radial-gradient(circle at 20% 0%, #1c2a44, #0a0f1c 70%);
          color: white;
          padding: 40px 22px 100px;
          font-family: system-ui;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1150px;
          margin: 0 auto 70px;
        }

        .logo {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .logoBox {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(135deg, #38bdf8, #22d3ee);
        }

        .sub {
          font-size: 12px;
          opacity: 0.6;
        }

        .navLinks {
          display: flex;
          gap: 22px;
          align-items: center;
        }

        .navLinks a {
          text-decoration: none;
          color: white;
          font-size: 14px;
        }

        .phone {
          background: #1f2937;
          padding: 8px 14px;
          border-radius: 20px;
        }

        .cta {
          background: linear-gradient(90deg, #38bdf8, #22d3ee);
          padding: 10px 18px;
          border-radius: 22px;
          font-weight: 600;
        }

        .hero {
          max-width: 1150px;
          margin: 0 auto 120px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 70px;
          align-items: center;
        }

        h1 {
          font-size: 46px;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        p {
          opacity: 0.7;
          margin-bottom: 28px;
        }

        .primaryBtn {
          background: linear-gradient(90deg, #38bdf8, #22d3ee);
          padding: 12px 24px;
          border-radius: 24px;
          text-decoration: none;
          color: black;
          font-weight: 600;
        }

        .secondaryBtn {
          padding: 12px 24px;
          border-radius: 24px;
          border: 1px solid #334155;
          text-decoration: none;
          color: white;
        }

        .heroButtons {
          display: flex;
          gap: 18px;
        }

        .heroCard {
          background: #111827;
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 30px 80px rgba(0,0,0,.6);
        }

        .section {
          max-width: 1150px;
          margin: 0 auto 120px;
        }

        .grid3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }

        .grid2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .card,
        .demoCard,
        .priceCard {
          background: #111827;
          padding: 28px;
          border-radius: 18px;
        }

        .highlight {
          background: linear-gradient(135deg, #1e3a8a, #0f172a);
          border: 1px solid #38bdf8;
        }

        .price {
          font-size: 30px;
          margin: 10px 0 20px;
        }

        .contactBar {
          margin-top: 40px;
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .phoneBig {
          background: #1f2937;
          padding: 12px 22px;
          border-radius: 24px;
          text-decoration: none;
          color: white;
        }

        .footer {
          text-align: center;
          opacity: 0.5;
          margin-top: 100px;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
          }
          .grid3 {
            grid-template-columns: 1fr;
          }
          .grid2 {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}