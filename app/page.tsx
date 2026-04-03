"use client";

export default function HomePage() {
  return (
    <main className="page">

      {/* HERO */}
      <section className="hero">
        <h1>
          Websites that make small businesses look expensive — and get more calls.
        </h1>

        <p>
          Clean structure, stronger trust, and built to actually get people to reach out.
        </p>

        <div className="actions">
          <a href="tel:3463657906" className="btn primary">Call / Text Sales</a>
          <a href="#demos" className="btn">View Demos</a>
          <a href="mailto:hello@atlasdigitallab.com" className="btn">Email Quote</a>
        </div>
      </section>

      {/* SALES */}
      <section className="sales">
        <span>Sales Team</span>

        <div className="salesRow">
          <a href="tel:3463657906">Sales (346) 365-7906</a>
          <a href="tel:8326773150">Sales (832) 677-3150</a>
          <a href="tel:3465328803">Sales (346) 532-8803</a>
        </div>
      </section>

      {/* DEMOS */}
      <section id="demos" className="demos">

        <div className="demoHero">
          <h2>Real directions we can build from.</h2>
          <p>Each layout is designed to fit a different type of business.</p>
        </div>

        <div className="demoWrap">

          {/* BIG FEATURE */}
          <a href="/demo/pet-bakery" className="feature">
            <div>
              <span>Featured</span>
              <h3>Pet Bakery Demo</h3>
              <p>Boutique storefront layout with stronger flow and presentation.</p>
            </div>
          </a>

          {/* SIDE LIST */}
          <div className="side">

            <a href="/demo/home-styling">
              <strong>Interior Styling</strong>
              <span>Clean visual layout</span>
            </a>

            <a href="/demo/roofing">
              <strong>Roofing</strong>
              <span>Trust + call focused</span>
            </a>

            <a href="/demo/metal-cards">
              <strong>Metal Cards</strong>
              <span>Product-style build</span>
            </a>

          </div>

        </div>

      </section>

      <style jsx>{`
        .page {
          background: #0b1218;
          color: white;
          min-height: 100vh;
          padding: 60px 20px;
          font-family: system-ui;
        }

        .hero {
          max-width: 900px;
          margin-bottom: 70px;
        }

        .hero h1 {
          font-size: 52px;
          line-height: 1.1;
          margin-bottom: 15px;
        }

        .hero p {
          opacity: 0.7;
          margin-bottom: 25px;
          max-width: 600px;
        }

        .actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 12px 18px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.2);
          text-decoration: none;
          color: white;
        }

        .primary {
          background: #f0c48a;
          color: black;
          border: none;
        }

        .sales {
          margin-bottom: 60px;
        }

        .sales span {
          font-size: 13px;
          opacity: 0.7;
        }

        .salesRow {
          margin-top: 10px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .salesRow a {
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.2);
          text-decoration: none;
          color: white;
        }

        .demos {
          margin-top: 60px;
        }

        .demoHero h2 {
          font-size: 36px;
          margin-bottom: 10px;
        }

        .demoHero p {
          opacity: 0.7;
          margin-bottom: 30px;
        }

        .demoWrap {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 40px;
        }

        .feature {
          padding: 30px;
          border-radius: 20px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          text-decoration: none;
          color: white;
          display: flex;
          align-items: flex-end;
          min-height: 280px;
        }

        .feature span {
          font-size: 12px;
          opacity: 0.6;
        }

        .feature h3 {
          font-size: 28px;
          margin: 5px 0;
        }

        .feature p {
          opacity: 0.7;
        }

        .side {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .side a {
          padding: 18px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.1);
          text-decoration: none;
          color: white;
        }

        .side strong {
          display: block;
          font-size: 18px;
        }

        .side span {
          font-size: 14px;
          opacity: 0.7;
        }

        @media (max-width: 900px) {
          .demoWrap {
            grid-template-columns: 1fr;
          }
        }

      `}</style>

    </main>
  );
}