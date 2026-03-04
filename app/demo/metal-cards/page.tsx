export default function MetalCardsDemo() {
  const MAIN_PHONE = "8327050313";
  const MAIN_PRETTY = "(832) 705-0313";

  const SALES_PHONE = "3463657906";
  const SALES_PRETTY = "(346) 365-7906";

  return (
    <main className="page">
      <header className="top">
        <div className="brand">Metal Business Cards Demo</div>

        <div className="topBtns">
          <a className="pill" href={`tel:${MAIN_PHONE}`}>
            Main {MAIN_PRETTY}
          </a>
          <a className="pill primary" href={`tel:${SALES_PHONE}`}>
            Sales {SALES_PRETTY}
          </a>
        </div>
      </header>

      <section className="hero">
        <h1>
          Make your first impression feel <span className="accent">expensive</span>.
        </h1>
        <p className="sub">Premium engraved metal business cards designed for high-end brands.</p>

        <div className="btnRow">
          <a className="btn primary" href={`tel:${SALES_PHONE}`}>
            Call / Text to Order
          </a>
          <a className="btn" href="mailto:hello@atlasdigitallab.com">
            Email for Quote
          </a>
        </div>
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: radial-gradient(circle at 20% 0%, #0f2b4a 0%, #0b1426 55%, #070b14 100%);
          color: #eaf2ff;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          padding: 18px;
        }

        .top {
          max-width: 1100px;
          margin: 0 auto 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .brand {
          font-weight: 900;
          opacity: 0.95;
        }

        /* ✅ MOBILE FIX: these buttons now WRAP instead of overlapping */
        .topBtns {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
          max-width: 520px;
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
          font-weight: 800;
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
          padding: 46px 0 0;
        }

        h1 {
          margin: 0 0 12px;
          font-size: 56px;
          line-height: 1.03;
          letter-spacing: -0.02em;
        }
        .accent {
          color: #2fd3ff;
        }
        .sub {
          margin: 0 0 18px;
          opacity: 0.9;
          max-width: 60ch;
        }

        .btnRow {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 10px;
        }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 14px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
          color: #eaf2ff;
          text-decoration: none;
          font-weight: 900;
        }
        .btn.primary {
          background: linear-gradient(135deg, #2fd3ff, #2b6bff);
          border: none;
          color: #06101f;
        }

        @media (max-width: 980px) {
          h1 {
            font-size: 44px;
          }
        }

        @media (max-width: 520px) {
          .top {
            align-items: flex-start;
          }

          .topBtns {
            max-width: 100%;
            justify-content: flex-start;
          }

          .pill {
            font-size: 12px;
            padding: 9px 10px;
          }

          h1 {
            font-size: 42px;
          }
        }
      `}</style>
    </main>
  );
}