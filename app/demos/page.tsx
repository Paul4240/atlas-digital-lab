"use client";

import Link from "next/link";

export default function DemosPage() {
  return (
    <main className="page">

      {/* BACKGROUND STAR */}
      <div className="star" />

      {/* HERO */}
      <section className="hero">
        <h1>Real directions we can build from.</h1>
        <p>
          These demos show the structure and layout we build for different businesses.
        </p>

        <a href="tel:3463657906" className="cta">
          Call / Text Sales
        </a>
      </section>

      {/* SALES */}
      <section className="sales">
        <h2>Sales Team</h2>

        <div className="salesRow">
          <a href="tel:3463657906">Sales (346) 365-7906</a>
          <a href="tel:8326773150">Sales (832) 677-3150</a>
          <a href="tel:3465328803">Sales (346) 532-8803</a>
        </div>
      </section>

      {/* DEMOS */}
      <section className="grid">

        <Link href="/demo/pet-bakery" className="big">
          <h3>Pet Bakery Demo</h3>
          <p>Boutique storefront layout with stronger product flow.</p>
        </Link>

        <div className="side">
          <Link href="/demo/home-styling">
            Luxury Interior Styling
          </Link>

          <Link href="/demo/roofing">
            Roofing Demo
          </Link>

          <Link href="/demo/metal-cards">
            Metal Cards Demo
          </Link>
        </div>

      </section>

      <style jsx>{`
        .page {
          background: #0b1218;
          color: white;
          min-height: 100vh;
          padding: 60px 20px;
          position: relative;
          font-family: Arial, sans-serif;
        }

        .star {
          position: fixed;
          right: -120px;
          top: 150px;
          width: 500px;
          height: 500px;
          opacity: 0.08;
          pointer-events: none;
          background: radial-gradient(circle, #f0c48a 0%, transparent 70%);
        }

        .hero {
          max-width: 900px;
          margin-bottom: 60px;
        }

        h1 {
          font-size: 48px;
          margin-bottom: 10px;
        }

        .cta {
          display: inline-block;
          margin-top: 20px;
          background: #f0c48a;
          color: black;
          padding: 12px 20px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
        }

        .sales {
          margin-bottom: 60px;
        }

        .salesRow {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .salesRow a {
          border: 1px solid rgba(255,255,255,.2);
          padding: 8px 14px;
          border-radius: 999px;
          text-decoration: none;
          color: white;
        }

        .grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
        }

        .big {
          font-size: 24px;
          text-decoration: none;
          color: white;
        }

        .side {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .side a {
          text-decoration: none;
          color: #9ecbff;
        }

        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 32px;
          }
        }
      `}</style>

    </main>
  );
}