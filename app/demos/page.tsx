"use client";

import Link from "next/link";

export default function DemosPage() {
  return (
    <main className="page">

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
      <section className="demoWrap">

        {/* BIG FEATURE */}
        <Link href="/demo/pet-bakery" className="feature">
          <div>
            <div className="tag">Featured Demo</div>
            <h3>Pet Bakery Demo</h3>
            <p>
              Boutique storefront layout with stronger product flow and cleaner presentation.
            </p>
          </div>
        </Link>

        {/* SIDE CARDS */}
        <div className="cards">
          <Link href="/demo/home-styling" className="card">
            <h4>Luxury Interior Styling</h4>
            <p>Clean, image-first layout.</p>
          </Link>

          <Link href="/demo/roofing" className="card">
            <h4>Roofing Demo</h4>
            <p>Trust-based service layout.</p>
          </Link>

          <Link href="/demo/metal-cards" className="card">
            <h4>Metal Cards Demo</h4>
            <p>Product-style layout.</p>
          </Link>
        </div>

      </section>

      <style jsx>{`
        .page {
          background: #0b1218;
          color: white;
          min-height: 100vh;
          padding: 60px 20px;
          font-family: Arial, sans-serif;
        }

        .hero {
          max-width: 900px;
          margin-bottom: 60px;
        }

        h1 {
          font-size: 48px;
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

        .demoWrap {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 30px;
        }

        .feature {
          background: rgba(255,255,255,0.05);
          padding: 30px;
          border-radius: 20px;
          text-decoration: none;
          color: white;
          min-height: 260px;
          display: flex;
          align-items: flex-end;
        }

        .tag {
          font-size: 12px;
          color: #f0c48a;
          margin-bottom: 10px;
        }

        .cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .card {
          background: rgba(255,255,255,0.05);
          padding: 20px;
          border-radius: 16px;
          text-decoration: none;
          color: white;
        }

        @media (max-width: 768px) {
          .demoWrap {
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