"use client";

export default function DemosPage() {
  return (
    <main className="page">

      {/* TEXAS BACKGROUND */}
      <div className="bgStar" />

      {/* HERO */}
      <section className="hero">
        <h1>
          Real directions we can build from.
        </h1>
        <p>
          These demos show the structure and layout we build for different businesses.
        </p>

        <a href="tel:3463657906" className="cta">
          Call / Text Sales
        </a>
      </section>

      {/* SALES TEAM */}
      <section className="sales">
        <h2>Sales Team</h2>

        <div className="salesRow">
          <a href="tel:3463657906">Sales (346) 365-7906</a>
          <a href="tel:8326773150">Sales (832) 677-3150</a>
          <a href="tel:3465328803">Sales (346) 532-8803</a>
        </div>
      </section>

      {/* DEMOS */}
      <section className="demos">
        <div className="left">
          <h2>Flagship Demo</h2>

          <a href="/demo/pet-bakery">Pet Bakery Demo</a>
          <p>
            Boutique storefront direction with stronger product presentation.
          </p>
        </div>

        <div className="right">
          <a href="/demo/home-styling">Luxury Interior Styling</a>
          <p>Clean, image-first layout.</p>

          <a href="/demo/roofing">Roofing Demo</a>
          <p>Trust-based local service structure.</p>

          <a href="/demo/metal-cards">Metal Cards Demo</a>
          <p>Product-style layout for stronger offers.</p>
        </div>
      </section>

      <style jsx>{`
        .page {
          background: #0b1218;
          color: white;
          min-height: 100vh;
          padding: 40px 20px;
          position: relative;
        }

        .bgStar {
          position: fixed;
          right: -150px;
          top: 200px;
          width: 500px;
          height: 500px;
          background: url("/star.png") no-repeat center;
          background-size: contain;
          opacity: 0.07;
          pointer-events: none;
        }

        .hero {
          max-width: 900px;
          margin-bottom: 60px;
        }

        .hero h1 {
          font-size: 42px;
          margin-bottom: 10px;
        }

        .hero p {
          opacity: 0.7;
          margin-bottom: 20px;
        }

        .cta {
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
          margin-top: 10px;
        }

        .salesRow a {
          border: 1px solid rgba(255,255,255,.2);
          padding: 8px 14px;
          border-radius: 999px;
          text-decoration: none;
          color: white;
        }

        .demos {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .demos a {
          display: block;
          margin-top: 10px;
          font-weight: bold;
          color: #9ecbff;
          text-decoration: none;
        }

        .demos p {
          opacity: 0.6;
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .demos {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: 32px;
          }
        }
      `}</style>

    </main>
  );
}