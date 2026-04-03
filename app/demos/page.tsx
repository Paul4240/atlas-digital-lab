"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="page">

      {/* TEXAS EMBLEM BACKGROUND */}
      <div className="texasEmblem" />

      {/* NAV */}
      <header className="nav">
        <div className="container navInner">
          <div className="brand">Atlas Digital Lab</div>

          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/demos">Demos</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero container">
        <div className="heroContent">

          <h1>
            Websites that make your business look
            like the serious choice.
          </h1>

          <p>
            Clean layouts, strong structure, and real presentation.
            Built to make customers trust you faster — and call you first.
          </p>

          <div className="ctaRow">
            <a href="tel:3463657906" className="btn primary">
              Call / Text Sales
            </a>
            <Link href="/demos" className="btn">
              View Demos
            </Link>
          </div>

        </div>
      </section>

      {/* DEMOS PREVIEW */}
      <section className="container demosPreview">

        <h2>Real directions we can build from.</h2>

        <div className="demoRow">

          <Link href="/demo/pet-bakery" className="demoItem">
            <h3>Pet Bakery</h3>
            <p>Clean storefront with strong product flow.</p>
          </Link>

          <Link href="/demo/roofing" className="demoItem">
            <h3>Roofing</h3>
            <p>Trust-focused layout built to get calls.</p>
          </Link>

          <Link href="/demo/metal-cards" className="demoItem">
            <h3>Metal Cards</h3>
            <p>Product-style layout with strong offer.</p>
          </Link>

        </div>

      </section>

      {/* PRICING */}
      <section className="container pricing">

        <h2>Simple pricing for businesses ready to grow.</h2>

        <div className="pricingRow">

          <div className="priceCard">
            <h3>Starter</h3>
            <div className="price">$299</div>
            <ul>
              <li>Single page site</li>
              <li>Mobile optimized</li>
              <li>Contact section</li>
            </ul>
            <button className="btn">Call to Start</button>
          </div>

          <div className="priceCard">
            <h3>Growth</h3>
            <div className="price">$499</div>
            <ul>
              <li>Multi-section layout</li>
              <li>Trust + service blocks</li>
              <li>Better structure</li>
            </ul>
            <button className="btn">Call to Start</button>
          </div>

          <div className="priceCard highlight">
            <h3>Pro</h3>
            <div className="price">$799</div>
            <ul>
              <li>Advanced layout</li>
              <li>SEO setup</li>
              <li>Priority design</li>
            </ul>
            <button className="btn primary">Talk to Sales</button>
          </div>

          <div className="priceCard elite">
            <h3>Elite</h3>
            <div className="price">$1,200</div>
            <ul>
              <li>Custom design</li>
              <li>High-conversion structure</li>
              <li>Premium layout</li>
            </ul>
            <button className="btn primary">Build My Site</button>
          </div>

        </div>

        {/* SALES TEAM */}
        <div className="salesStrip">
          <div className="salesLabel">Sales Team</div>

          <div className="salesRow">
            <a href="tel:3463657906">Sales (346) 365-7906</a>
            <a href="tel:8326773150">Sales (832) 677-3150</a>
            <a href="tel:3465328803">Sales (346) 532-8803</a>
          </div>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">
        Atlas Digital Lab
      </footer>

      {/* STYLES */}
      <style jsx>{`

        .page {
          background: #0b1218;
          color: white;
          min-height: 100vh;
          font-family: system-ui;
          position: relative;
        }

        .texasEmblem {
          position: fixed;
          width: 600px;
          height: 600px;
          right: -150px;
          top: 200px;
          opacity: 0.05;
          background: radial-gradient(circle, #f0c48a, transparent 70%);
          pointer-events: none;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 20px;
        }

        .navInner {
          display: flex;
          justify-content: space-between;
        }

        .links {
          display: flex;
          gap: 20px;
        }

        .hero {
          padding-top: 60px;
        }

        h1 {
          font-size: 48px;
        }

        .ctaRow {
          margin-top: 20px;
          display: flex;
          gap: 10px;
        }

        .btn {
          padding: 12px 18px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,.2);
          text-decoration: none;
          color: white;
          font-weight: 700;
        }

        .primary {
          background: #f0c48a;
          color: black;
        }

        .demoRow {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }

        .demoItem {
          flex: 1;
          padding: 20px;
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 12px;
        }

        .pricingRow {
          display: flex;
          gap: 20px;
          margin-top: 20px;
        }

        .priceCard {
          flex: 1;
          padding: 20px;
          border-radius: 14px;
          background: rgba(255,255,255,.05);
        }

        .price {
          font-size: 32px;
          font-weight: bold;
        }

        .salesStrip {
          margin-top: 30px;
        }

        .salesRow {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .salesRow a {
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,.2);
          text-decoration: none;
          color: white;
        }

        .footer {
          text-align: center;
          margin: 40px 0;
          opacity: 0.6;
        }

        @media(max-width:900px){
          .demoRow, .pricingRow {
            flex-direction: column;
          }

          h1 {
            font-size: 32px;
          }
        }

      `}</style>
    </main>
  );
}