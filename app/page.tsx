"use client";

export default function HomePage() {
  const PHONE = "(346) 365-7906";
  const PHONE_LINK = "tel:3463657906";
  const EMAIL = "hello@atlasdigitallab.com";

  return (
    <main className="page">

      {/* BACKGROUND EMBLEM */}
      <div className="bgEmblem" />

      {/* NAV */}
      <header className="nav">
        <div className="container navInner">
          <div className="logo">Atlas Digital Lab</div>

          <div className="navCtas">
            <a href={PHONE_LINK} className="pill primary">
              Text {PHONE}
            </a>
            <a href={`mailto:${EMAIL}`} className="pill">
              Email
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero container">
        <div className="heroContent">
          <h1>
            Websites that make your business look like the serious choice.
          </h1>

          <p>
            Clean layout, strong messaging, and structure built to turn visitors
            into real customers.
          </p>

          <div className="ctaRow">
            <a href={PHONE_LINK} className="btn primary">
              Text {PHONE}
            </a>

            <a href={`mailto:${EMAIL}`} className="btn">
              Email for Quote
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing container">
        <h2>Simple pricing for real businesses</h2>

        <div className="pricingGrid">

          {/* STARTER */}
          <div className="priceCard">
            <div className="priceTop">
              <div className="plan">Starter</div>
              <div className="price">$299</div>
              <div className="monthly">$79/mo</div>
            </div>

            <ul>
              <li>Single page website</li>
              <li>Mobile optimized</li>
              <li>Basic layout</li>
              <li>Fast setup</li>
            </ul>

            <a href={PHONE_LINK} className="priceBtn">
              Call to Start
            </a>
          </div>

          {/* GROWTH */}
          <div className="priceCard">
            <div className="priceTop">
              <div className="plan">Growth</div>
              <div className="price">$499</div>
              <div className="monthly">$130/mo</div>
            </div>

            <ul>
              <li>Everything in Starter</li>
              <li>Multi-section layout</li>
              <li>Trust + service blocks</li>
              <li>Conversion structure</li>
            </ul>

            <a href={PHONE_LINK} className="priceBtn">
              Call to Start
            </a>
          </div>

          {/* PRO */}
          <div className="priceCard highlight">
            <div className="priceTop">
              <div className="plan">Pro</div>
              <div className="badge">Most Popular</div>
              <div className="price">$799</div>
              <div className="monthly">$150/mo</div>
            </div>

            <ul>
              <li>Everything in Growth</li>
              <li>Advanced SEO setup</li>
              <li>Google Business optimization</li>
              <li>Priority design</li>
            </ul>

            <a href={PHONE_LINK} className="priceBtn primary">
              Talk to Sales
            </a>
          </div>

          {/* ELITE */}
          <div className="priceCard elite">
            <div className="priceTop">
              <div className="plan">Elite</div>
              <div className="badge gold">Premium Option</div>
              <div className="price">$1,200</div>
              <div className="monthly">$200/mo</div>
            </div>

            <ul>
              <li>Custom premium design</li>
              <li>Brand strategy layout</li>
              <li>High-conversion structure</li>
              <li>Service area + trust sections</li>
            </ul>

            <a href={PHONE_LINK} className="priceBtn primary">
              Build My Elite Site
            </a>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer container">
        © {new Date().getFullYear()} Atlas Digital Lab
      </footer>

      <style jsx>{`

        .page {
          min-height: 100vh;
          font-family: system-ui, -apple-system, sans-serif;
          background: #0b1117;
          color: #eaf2f8;
          position: relative;
          overflow-x: hidden;
        }

        /* TEXAS EMBLEM BACKGROUND */
        .bgEmblem {
          position: fixed;
          inset: 0;
          background:
            radial-gradient(circle at center, rgba(255,255,255,0.04), transparent 60%),
            url("https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Seal_of_Texas.svg/512px-Seal_of_Texas.svg.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 600px;
          opacity: 0.05;
          pointer-events: none;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          padding: 20px;
        }

        .nav {
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .navInner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-weight: 800;
          font-size: 18px;
        }

        .navCtas {
          display: flex;
          gap: 10px;
        }

        .pill {
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.2);
          text-decoration: none;
          color: white;
          font-weight: 700;
          background: rgba(255,255,255,0.06);
        }

        .hero {
          padding: 80px 20px;
          text-align: center;
        }

        h1 {
          font-size: 52px;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .ctaRow {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 20px;
        }

        .btn {
          padding: 14px 20px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.2);
          text-decoration: none;
          color: white;
          font-weight: 800;
          background: rgba(255,255,255,0.06);
        }

        .primary {
          background: linear-gradient(135deg,#2eb4ff,#00d2aa);
          color: #07111f;
        }

        /* PRICING */
        .pricing {
          margin-top: 60px;
          text-align: center;
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          margin-top: 40px;
        }

        .priceCard {
          background: rgba(255,255,255,0.03);
          border-radius: 24px;
          padding: 26px;
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
        }

        .priceTop {
          margin-bottom: 16px;
        }

        .plan {
          font-weight: 800;
          font-size: 16px;
        }

        .badge {
          margin-top: 10px;
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.08);
        }

        .badge.gold {
          background: linear-gradient(135deg,#f0c48a,#9b6327);
          color: black;
        }

        .price {
          font-size: 42px;
          font-weight: 900;
          margin-top: 8px;
        }

        .monthly {
          opacity: .7;
          margin-top: 6px;
        }

        ul {
          text-align: left;
          margin-top: 14px;
          line-height: 1.8;
        }

        .priceBtn {
          margin-top: auto;
          padding: 14px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 800;
          text-align: center;
          background: rgba(255,255,255,0.08);
        }

        .highlight {
          transform: scale(1.05);
        }

        .elite {
          border: 1px solid rgba(240,196,138,.4);
        }

        .footer {
          text-align: center;
          margin-top: 60px;
          opacity: .6;
        }

        /* MOBILE */
        @media(max-width:900px){
          .pricingGrid {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 36px;
          }

          .ctaRow {
            flex-direction: column;
          }
        }

      `}</style>
    </main>
  );
}