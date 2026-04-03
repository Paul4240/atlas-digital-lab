"use client";

import Link from "next/link";

export default function DemosPage() {
  return (
    <main className="page">
      <div className="bgGlow glowOne" />
      <div className="bgGlow glowTwo" />
      <div className="fixedEmblem" />

      {/* NAV */}
      <header className="nav">
        <div className="container navInner">
          <Link href="/" className="brand">
            Atlas Digital Lab
          </Link>

          <div className="links">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="container hero">
        <div className="heroWrap">
          <div className="eyebrow">Demos</div>

          <h1>See what your business could look like.</h1>

          <p>
            These are real layouts we use to build client websites.
            Different industries, different styles — all built to look
            stronger, cleaner, and more professional.
          </p>
        </div>
      </section>

      {/* DEMOS */}
      <section className="container demosWrap">

        {/* FEATURE */}
        <Link href="/demo/pet-bakery" className="demoFeature">
          <div className="demoContent">
            <div className="tag">Featured Demo</div>

            <h2>Pet Bakery</h2>

            <p>
              Boutique storefront layout with premium feel, strong product presentation,
              and clean structure that actually sells.
            </p>

            <div className="cta">View Demo →</div>
          </div>
        </Link>

        {/* GRID */}
        <div className="demoGrid">

          <Link href="/demo/home-styling" className="demoCard">
            <h3>Luxury Interior Styling</h3>
            <p>
              High-end residential design layout focused on visuals, spacing,
              and clean presentation.
            </p>
            <span>View Demo →</span>
          </Link>

          <Link href="/demo/roofing" className="demoCard">
            <h3>Roofing</h3>
            <p>
              Local service layout built for trust, fast quotes,
              and high conversion.
            </p>
            <span>View Demo →</span>
          </Link>

          <Link href="/demo/metal-cards" className="demoCard">
            <h3>Metal Business Cards</h3>
            <p>
              Product-style layout with interactive preview and strong offer structure.
            </p>
            <span>View Demo →</span>
          </Link>

        </div>
      </section>

      {/* CTA */}
      <section className="container ctaSection">
        <div className="ctaBox">
          <h2>Want something like this for your business?</h2>
          <p>
            We’ll build your site based on one of these directions —
            but customized to your brand and business.
          </p>

          <div className="ctaBtns">
            <Link href="/contact" className="btn primary">
              Get a Quote
            </Link>
            <Link href="/" className="btn">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* STYLES */}
      <style jsx>{`
        .page {
          min-height: 100vh;
          background: linear-gradient(180deg, #0b1218, #0f1821);
          color: white;
          font-family: system-ui;
          position: relative;
        }

        .container {
          max-width: 1100px;
          margin: auto;
          padding: 20px;
        }

        .nav {
          border-bottom: 1px solid rgba(255,255,255,.1);
          backdrop-filter: blur(10px);
        }

        .navInner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .links {
          display: flex;
          gap: 20px;
        }

        .links a {
          text-decoration: none;
          color: white;
          font-weight: 600;
        }

        .hero {
          padding-top: 60px;
        }

        .heroWrap {
          max-width: 700px;
        }

        .eyebrow {
          color: #f0c48a;
          font-weight: 800;
          font-size: 12px;
          text-transform: uppercase;
        }

        h1 {
          font-size: 48px;
          margin: 10px 0;
        }

        p {
          opacity: 0.8;
          line-height: 1.6;
        }

        .demosWrap {
          margin-top: 40px;
        }

        .demoFeature {
          display: block;
          padding: 40px;
          border-radius: 20px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.1);
          margin-bottom: 30px;
          text-decoration: none;
          color: white;
        }

        .demoGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .demoCard {
          padding: 20px;
          border-radius: 16px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.1);
          text-decoration: none;
          color: white;
        }

        .demoCard span {
          display: block;
          margin-top: 10px;
          color: #f0c48a;
          font-weight: 700;
        }

        .ctaSection {
          margin-top: 60px;
        }

        .ctaBox {
          text-align: center;
          padding: 40px;
          background: rgba(255,255,255,.05);
          border-radius: 20px;
        }

        .ctaBtns {
          margin-top: 20px;
          display: flex;
          gap: 10px;
          justify-content: center;
        }

        .btn {
          padding: 12px 20px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,.2);
          text-decoration: none;
          color: white;
          font-weight: 700;
        }

        .primary {
          background: linear-gradient(135deg, #f0c48a, #9b6327);
          color: black;
        }

        @media(max-width:900px){
          .demoGrid{
            grid-template-columns:1fr;
          }

          h1{
            font-size:34px;
          }
        }
      `}</style>
    </main>
  );
}