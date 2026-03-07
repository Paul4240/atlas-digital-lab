"use client";
import Link from "next/link";

export default function HomePage() {
  const MAIN_PHONE = "8327050313";
  const MAIN_PRETTY = "(832) 705-0313";

  const SALES_PHONE = "3463657906";
  const SALES_PRETTY = "(346) 365-7906";

  const EMAIL = "hello@atlasdigitallab.com";

  return (
    <main className="page">
      {/* NAV */}
      <header className="navWrap">
        <div className="nav">
          <Link href="/" className="brand">
            <span className="logo" aria-hidden />
            <div className="brandText">
              <div className="brandName">Atlas Digital Lab</div>
              <div className="brandSub">Websites • SEO • Small Business Growth</div>
            </div>
          </Link>

          <nav className="links">
            <a href="#services">Services</a>
            <a href="#demos">Demos</a>
            <a href="#pricing">Pricing</a>
          </nav>

          <div className="ctaRow">
            <a className="pill" href={`tel:${MAIN_PHONE}`}>
              Call {MAIN_PRETTY}
            </a>
            <a className="pill" href={`tel:${SALES_PHONE}`}>
              Sales {SALES_PRETTY}
            </a>
            <a className="pill primary" href={`mailto:${EMAIL}`}>
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="heroLeft">
          <div className="kicker">Fast turnaround • Mobile-first • Clear pricing</div>
          <h1>
            Websites that make <span className="accent">small businesses</span> look premium — and get
            calls.
          </h1>
          <p className="sub">
            Clean, high-conversion websites built for real local businesses. No fluff — just strong
            design, speed, and clear CTAs.
          </p>

          <div className="heroBtns">
            <a className="btn primary" href={`tel:${MAIN_PHONE}`}>
              Call {MAIN_PRETTY}
            </a>
            <a className="btn" href={`tel:${SALES_PHONE}`}>
              Talk to Sales
            </a>
          </div>

          <div className="miniRow">
            <div className="mini">
              <div className="miniTitle">Quick builds</div>
              <div className="miniText">Launch fast with a proven layout.</div>
            </div>
            <div className="mini">
              <div className="miniTitle">SEO-ready</div>
              <div className="miniText">Built for Google + speed.</div>
            </div>
            <div className="mini">
              <div className="miniTitle">You own it</div>
              <div className="miniText">No lock-ins. Your site, your assets.</div>
            </div>
          </div>
        </div>

        <div className="heroRight" aria-hidden />
      </section>

      {/* WHAT WE DO */}
      <section id="services" className="section">
        <h2>What we do</h2>

        <div className="cards3">
          <div className="card">
            <div className="cardTitle">Websites</div>
            <div className="cardSub">Fast, modern sites that look expensive and load quick.</div>
            <ul>
              <li>Mobile-first layout</li>
              <li>Clear calls-to-action</li>
              <li>Speed + best practices</li>
            </ul>
          </div>

          <div className="card">
            <div className="cardTitle">SEO &amp; Google Setup</div>
            <div className="cardSub">Get found locally and build trust fast.</div>
            <ul>
              <li>Google Business profile help</li>
              <li>On-page SEO basics</li>
              <li>Performance + indexing ready</li>
            </ul>
          </div>

          <div className="card">
            <div className="cardTitle">Branding</div>
            <div className="cardSub">Clean logos, colors, and polish that makes you look legit.</div>
            <ul>
              <li>Logo refresh</li>
              <li>Color + typography</li>
              <li>Professional layout</li>
            </ul>
          </div>
        </div>
      </section>

      {/* DEMOS */}
      <section id="demos" className="section">
        <h2>Demos</h2>

        <div className="demoGrid demoGridThree">
          <div className="demoCard">
            <div className="demoTop">
              <div>
                <div className="demoTitle">Metal Business Cards Demo</div>
                <div className="demoText">Premium product-style demo (finishes, packages, contact).</div>
              </div>
              <span className="tag">Premium product-style</span>
            </div>
            <Link className="demoBtn" href="/demo/metal-cards">
              Open Metal Cards Demo
            </Link>
          </div>

          <div className="demoCard">
            <div className="demoTop">
              <div>
                <div className="demoTitle">Roofing Demo</div>
                <div className="demoText">Local service-style demo (hero, trust blocks, quote form).</div>
              </div>
              <span className="tag">Local service-style</span>
            </div>
            <Link className="demoBtn" href="/demo/roofing">
              Open Roofing Demo
            </Link>
          </div>

          <div className="demoCard">
            <div className="demoTop">
              <div>
                <div className="demoTitle">Luxury Interior Styling Demo</div>
                <div className="demoText">
                  Premium redesign concept with hero image, portfolio, testimonials, and consultation
                  flow.
                </div>
              </div>
              <span className="tag">Premium redesign concept</span>
            </div>
            <Link className="demoBtn" href="/demo/dvhomestyling">
              Open Interior Styling Demo
            </Link>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <h2>Pricing</h2>

        <div className="pricingGrid">
          <div className="priceCard">
            <div className="priceTop">
              <div className="planName">Starter</div>
              <div className="price">$299</div>
              <div className="monthly">$79/mo</div>
            </div>
            <ul>
              <li>Single-page website</li>
              <li>Mobile optimized</li>
              <li>Contact section</li>
              <li>Basic SEO setup</li>
            </ul>
            <a className="priceBtn" href={`tel:${MAIN_PHONE}`}>
              Call to Start
            </a>
          </div>

          <div className="priceCard">
            <div className="priceTop">
              <div className="planName">Growth</div>
              <div className="price">$499</div>
              <div className="monthly">$129/mo</div>
            </div>
            <ul>
              <li>Everything in Starter</li>
              <li>Multi-section layout</li>
              <li>Trust + service blocks</li>
              <li>Conversion structure</li>
            </ul>
            <a className="priceBtn" href={`tel:${MAIN_PHONE}`}>
              Call to Start
            </a>
          </div>

          <div className="priceCard">
            <div className="priceTop">
              <div className="planName">Pro</div>
              <div className="badge">Most Popular</div>
              <div className="price">$799</div>
              <div className="monthly">$179/mo</div>
            </div>
            <ul>
              <li>Everything in Growth</li>
              <li>Advanced SEO setup</li>
              <li>Google Business optimization</li>
              <li>Priority design</li>
            </ul>
            <a className="priceBtn primary" href={`tel:${SALES_PHONE}`}>
              Talk to Sales
            </a>
          </div>

          <div className="priceCard elite">
            <div className="priceTop">
              <div className="planName">Elite</div>
              <div className="badge gold">Premium Option</div>
              <div className="price">$1,200</div>
              <div className="monthly">$249/mo</div>
            </div>
            <ul>
              <li>Custom premium design</li>
              <li>Brand strategy layout</li>
              <li>High-conversion structure</li>
              <li>Service area + trust sections</li>
            </ul>
            <a className="priceBtn primary" href={`mailto:${EMAIL}`}>
              Build My Elite Site
            </a>
          </div>
        </div>

        <div className="footerCtas">
          <div className="footerNote">
            Want a custom plan or a different niche demo built? Text us and we’ll respond fast.
          </div>
          <a className="pill" href={`tel:${MAIN_PHONE}`}>
            Text {MAIN_PRETTY}
          </a>
          <a className="pill primary" href={`mailto:${EMAIL}`}>
            Email for Quote
          </a>
        </div>
      </section>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Atlas Digital Lab — Websites • SEO • Branding</div>
        <div className="footerRight">
          Main: {MAIN_PRETTY} • Sales: {SALES_PRETTY} • {EMAIL}
        </div>
      </footer>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: radial-gradient(circle at 20% 0%, #0f2b4a 0%, #0b1426 55%, #070b14 100%);
          color: #eaf2ff;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        }

        .navWrap {
          position: sticky;
          top: 0;
          z-index: 30;
          backdrop-filter: blur(10px);
          background: rgba(10, 15, 25, 0.55);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .nav {
          max-width: 1100px;
          margin: 0 auto;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          gap: 16px;
          justify-content: space-between;
        }

        .brand {
          display: flex;
          gap: 10px;
          align-items: center;
          text-decoration: none;
          color: inherit;
          min-width: 240px;
        }
        .logo {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, #2fd3ff, #2b6bff);
          box-shadow: 0 10px 30px rgba(43, 107, 255, 0.25);
        }
        .brandName {
          font-weight: 800;
          line-height: 1.1;
        }
        .brandSub {
          font-size: 12px;
          opacity: 0.8;
        }

        .links {
          display: flex;
          gap: 18px;
          align-items: center;
        }
        .links a {
          color: rgba(234, 242, 255, 0.85);
          text-decoration: none;
          font-weight: 600;
          font-size: 14px;
        }
        .links a:hover {
          color: #ffffff;
        }

        .ctaRow {
          display: flex;
          gap: 10px;
          align-items: center;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
          color: #eaf2ff;
          text-decoration: none;
          font-weight: 700;
          font-size: 13px;
          white-space: nowrap;
        }
        .pill.primary {
          background: linear-gradient(135deg, #2fd3ff, #2b6bff);
          border: none;
          color: #06101f;
        }

        .hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 46px 20px 12px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 26px;
          align-items: start;
        }
        .heroRight {
        }
        .kicker {
          display: inline-block;
          font-size: 12px;
          letter-spacing: 0.02em;
          opacity: 0.85;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
        }
        h1 {
          margin: 14px 0 10px;
          font-size: 46px;
          line-height: 1.06;
          letter-spacing: -0.02em;
        }
        .accent {
          color: #2fd3ff;
        }
        .sub {
          margin: 0 0 18px;
          max-width: 58ch;
          opacity: 0.9;
        }
        .heroBtns {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
          color: #eaf2ff;
          text-decoration: none;
          font-weight: 800;
        }
        .btn.primary {
          background: linear-gradient(135deg, #2fd3ff, #2b6bff);
          border: none;
          color: #06101f;
        }

        .miniRow {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 10px;
        }
        .mini {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          border-radius: 14px;
          padding: 12px;
        }
        .miniTitle {
          font-weight: 900;
          font-size: 13px;
          margin-bottom: 4px;
        }
        .miniText {
          font-size: 12px;
          opacity: 0.85;
        }

        .section {
          max-width: 1100px;
          margin: 0 auto;
          padding: 26px 20px;
        }
        h2 {
          margin: 0 0 12px;
          font-size: 22px;
        }

        .cards3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .card {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 16px;
        }
        .cardTitle {
          font-weight: 900;
          margin-bottom: 6px;
        }
        .cardSub {
          opacity: 0.85;
          margin-bottom: 10px;
          font-size: 13px;
        }
        ul {
          margin: 0;
          padding-left: 18px;
          opacity: 0.9;
        }
        li {
          margin: 6px 0;
        }

        .demoGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .demoGridThree {
          grid-template-columns: repeat(3, 1fr);
        }
        .demoCard {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 16px;
        }
        .demoTop {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
        }
        .demoTitle {
          font-weight: 900;
          margin-bottom: 6px;
        }
        .demoText {
          opacity: 0.85;
          font-size: 13px;
        }
        .tag {
          font-size: 12px;
          font-weight: 800;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          white-space: nowrap;
        }
        .demoBtn {
          display: block;
          text-align: center;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #eaf2ff;
          text-decoration: none;
          font-weight: 900;
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          margin-top: 12px;
        }
        .priceCard {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          border-radius: 18px;
          padding: 16px;
          position: relative;
        }
        .priceCard.elite {
          border: 2px solid rgba(255, 208, 102, 0.7);
          box-shadow: 0 18px 50px rgba(255, 208, 102, 0.08);
        }
        .priceTop {
          margin-bottom: 10px;
        }
        .planName {
          font-weight: 900;
          opacity: 0.9;
        }
        .price {
          font-size: 32px;
          font-weight: 1000;
          margin-top: 4px;
        }
        .monthly {
          font-weight: 900;
          opacity: 0.85;
          margin-top: 2px;
        }
        .badge {
          position: absolute;
          top: 14px;
          right: 14px;
          font-size: 12px;
          font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(47, 211, 255, 0.14);
          border: 1px solid rgba(47, 211, 255, 0.28);
        }
        .badge.gold {
          background: rgba(255, 208, 102, 0.14);
          border: 1px solid rgba(255, 208, 102, 0.35);
        }
        .priceBtn {
          margin-top: 12px;
          display: block;
          text-align: center;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: #eaf2ff;
          text-decoration: none;
          font-weight: 1000;
        }
        .priceBtn.primary {
          background: linear-gradient(135deg, #2fd3ff, #2b6bff);
          border: none;
          color: #06101f;
        }

        .footerCtas {
          margin-top: 14px;
          display: flex;
          gap: 10px;
          align-items: center;
          flex-wrap: wrap;
          justify-content: space-between;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          padding: 12px;
          border-radius: 16px;
        }
        .footerNote {
          opacity: 0.9;
          font-weight: 700;
        }

        .footer {
          max-width: 1100px;
          margin: 0 auto;
          padding: 26px 20px 36px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          opacity: 0.85;
          font-size: 13px;
        }
        .footerRight {
          text-align: right;
        }

        @media (max-width: 980px) {
          .links {
            display: none;
          }
          .hero {
            grid-template-columns: 1fr;
          }
          h1 {
            font-size: 38px;
          }
          .cards3 {
            grid-template-columns: 1fr;
          }
          .demoGrid,
          .demoGridThree {
            grid-template-columns: 1fr;
          }
          .pricingGrid {
            grid-template-columns: 1fr;
          }
          .footer {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
          .footerRight {
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}