"use client";
export default function RoofingDemo() {
  const MAIN_PHONE = "8327050313";
  const MAIN_PRETTY = "(832) 705-0313";

  const SALES_PHONE = "3463657906";
  const SALES_PRETTY = "(346) 365-7906";

  const EMAIL = "hello@atlasdigitallab.com";

  return (
    <main className="page">
      <header className="top">
        <div className="brand">Houston Elite Roofing</div>
        <div className="topBtns">
          <a className="pill" href={`tel:${MAIN_PHONE}`}>
            Call {MAIN_PRETTY}
          </a>
          <a className="pill primary" href={`tel:${SALES_PHONE}`}>
            Sales {SALES_PRETTY}
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="left">
          <h1>
            Roofing that feels <span className="accent">premium</span> — and gets calls.
          </h1>
          <p className="sub">Fast response, honest pricing, and clean workmanship.</p>

          <div className="btnRow">
            <a className="btn primary" href={`tel:${MAIN_PHONE}`}>
              Call Office
            </a>
            <a className="btn" href={`tel:${SALES_PHONE}`}>
              Call Sales
            </a>
          </div>
        </div>

        <div className="formCard">
          <div className="formTitle">Get a Free Estimate</div>
          <input className="inp" placeholder="Name" />
          <input className="inp" placeholder="Company Name" />
          <input className="inp" placeholder="Phone" />
          <textarea className="inp ta" placeholder="Message" />
          <a className="btn primary wide" href={`mailto:${EMAIL}`}>
            Email to Start
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
          margin: 0 auto 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .brand {
          font-weight: 900;
          opacity: 0.95;
        }
        .topBtns {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .pill {
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
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 18px;
          align-items: start;
        }
        h1 {
          margin: 0 0 10px;
          font-size: 44px;
          line-height: 1.06;
          letter-spacing: -0.02em;
        }
        .accent {
          color: #2fd3ff;
        }
        .sub {
          margin: 0 0 16px;
          opacity: 0.9;
        }
        .btnRow {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
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
          font-weight: 900;
        }
        .btn.primary {
          background: linear-gradient(135deg, #2fd3ff, #2b6bff);
          border: none;
          color: #06101f;
        }
        .btn.wide {
          width: 100%;
          margin-top: 10px;
        }

        .formCard {
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 14px;
        }
        .formTitle {
          font-weight: 900;
          margin-bottom: 10px;
        }
        .inp {
          width: 100%;
          margin: 8px 0;
          padding: 11px 12px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(0, 0, 0, 0.2);
          color: #eaf2ff;
          outline: none;
        }
        .ta {
          min-height: 90px;
          resize: vertical;
        }

        @media (max-width: 980px) {
          .hero {
            grid-template-columns: 1fr;
          }
          h1 {
            font-size: 36px;
          }
        }
      `}</style>
    </main>
  );
}