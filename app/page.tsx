"use client";

export default function HomePage() {
  return (
    <main className="page">
      {/* NAV */}
      <nav className="nav">
        <div className="logo">
          <div className="logoIcon" />
          <div>
            <strong>Atlas Digital Lab</strong>
            <div className="sub">Websites • SEO • Small Business Growth</div>
          </div>
        </div>

        <div className="links">
          <a href="#services">Services</a>
          <a href="#demos">Demos</a>
          <a href="#pricing">Pricing</a>
          <a href="tel:8327050313" className="pill main">
            Call (832) 705-0313
          </a>
          <a href="tel:3463657906" className="pill sales">
            Sales (346) 365-7906
          </a>
          <a href="mailto:hello@atlasdigitallab.com" className="quoteBtn">
            Get a Quote
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div>
          <div className="tag">
            Fast turnaround • Mobile-first • Clear pricing
          </div>

          <h1>
            Websites that make <span>small businesses</span> look premium —
            and get calls.
          </h1>

          <p>
            Clean, high-conversion websites built for real local businesses.
          </p>

          <div className="ctaRow">
            <a href="tel:8327050313" className="primaryBtn">
              Call (832) 705-0313
            </a>
            <a href="tel:3463657906" className="secondaryBtn">
              Talk to Sales
            </a>
          </div>
        </div>

        <div className="mockup">
          <div className="mockHeader">High-conversion layout</div>
          <div className="mockButtons">
            <span>Main: (832) 705-0313</span>
            <span>Sales: (346) 365-7906</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          © 2026 Atlas Digital Lab
        </div>
        <div>
          Main: (832) 705-0313 • Sales: (346) 365-7906 • hello@atlasdigitallab.com
        </div>
      </footer>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: radial-gradient(circle at 20% 0%, #1c2444, #0a0f1c 70%);
          color: white;
          padding: 40px 24px 100px;
          font-family: system-ui;
        }

        .nav {
          max-width: 1100px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 80px;
        }

        .logo {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .logoIcon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: linear-gradient(135deg, #00c6ff, #0072ff);
        }

        .sub {
          font-size: 12px;
          opacity: 0.6;
        }

        .links {
          display: flex;
          gap: 18px;
          align-items: center;
          font-size: 14px;
        }

        .links a {
          text-decoration: none;
          color: white;
        }

        .pill {
          padding: 8px 14px;
          border-radius: 999px;
          font-weight: 600;
        }

        .main {
          background: linear-gradient(135deg, #00c6ff, #0072ff);
        }

        .sales {
          background: rgba(255,255,255,0.15);
        }

        .quoteBtn {
          background: linear-gradient(135deg, #00f2fe, #4facfe);
          padding: 8px 16px;
          border-radius: 10px;
          font-weight: 600;
        }

        .hero {
          max-width: 1100px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
        }

        .tag {
          opacity: 0.7;
          margin-bottom: 16px;
        }

        h1 {
          font-size: 48px;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        h1 span {
          color: #00c6ff;
        }

        p {
          opacity: 0.7;
          margin-bottom: 30px;
        }

        .ctaRow {
          display: flex;
          gap: 16px;
        }

        .primaryBtn {
          background: linear-gradient(135deg, #00c6ff, #0072ff);
          padding: 12px 22px;
          border-radius: 10px;
          font-weight: 600;
        }

        .secondaryBtn {
          background: rgba(255,255,255,0.15);
          padding: 12px 22px;
          border-radius: 10px;
          font-weight: 600;
        }

        .mockup {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 30px;
        }

        .mockHeader {
          margin-bottom: 30px;
          opacity: 0.7;
        }

        .mockButtons {
          display: flex;
          gap: 12px;
        }

        .mockButtons span {
          background: rgba(255,255,255,0.15);
          padding: 10px 16px;
          border-radius: 999px;
          font-size: 14px;
        }

        .footer {
          max-width: 1100px;
          margin: 120px auto 0;
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          opacity: 0.6;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 30px;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
          }
          .links {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}