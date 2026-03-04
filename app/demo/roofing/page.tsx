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
          <a href={`tel:${MAIN_PHONE}`} className="btn soft">
            Call {MAIN_PRETTY}
          </a>
          <a href={`tel:${SALES_PHONE}`} className="btn primary">
            Sales {SALES_PRETTY}
          </a>
          <a href={`mailto:${EMAIL}`} className="btn ghost">
            Email
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="heroLeft">
          <div className="pill">Fast response • honest pricing • clean work</div>

          <h1>Houston Elite Roofing</h1>

          <p className="sub">
            Professional roofing services in Houston, TX — roof repair, leak detection,
            full replacements, and storm damage inspections.
          </p>

          <div className="ctaRow">
            <a className="btn primary" href={`tel:${MAIN_PHONE}`}>
              Call Office {MAIN_PRETTY}
            </a>
            <a className="btn soft" href={`tel:${SALES_PHONE}`}>
              Call Sales {SALES_PRETTY}
            </a>
          </div>

          <ul className="bullets">
            <li>Roof repair & leak detection</li>
            <li>Full roof replacement</li>
            <li>Storm damage inspection</li>
            <li>Insurance claim assistance</li>
          </ul>
        </div>

        <div className="heroRight">
          <div className="card">
            <div className="cardTitle">Quick Request</div>
            <div className="cardSub">
              This demo uses “Email to Start” for simple lead capture.
            </div>

            <form
              className="form"
              action={`mailto:${EMAIL}`}
              method="post"
              encType="text/plain"
            >
              <label>
                Name
                <input name="name" placeholder="Your name" />
              </label>

              <label>
                Company (optional)
                <input name="company" placeholder="Company name" />
              </label>

              <label>
                Address / Area
                <input name="area" placeholder="Neighborhood or zip" />
              </label>

              <label>
                Phone
                <input name="phone" placeholder="(555) 555-5555" />
              </label>

              <label>
                Message
                <textarea name="message" rows={4} placeholder="What do you need?" />
              </label>

              <button type="submit" className="btn primary full">
                Email to Start
              </button>

              <div className="miniRow">
                <a href={`tel:${MAIN_PHONE}`} className="miniLink">
                  Call Office {MAIN_PRETTY}
                </a>
                <span className="dot">•</span>
                <a href={`tel:${SALES_PHONE}`} className="miniLink">
                  Call Sales {SALES_PRETTY}
                </a>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>© 2026 Atlas Digital Lab</div>
        <div className="footerRight">
          Main: {MAIN_PRETTY} • Sales: {SALES_PRETTY} • {EMAIL}
        </div>
      </footer>

      <style>{`
        .page{
          min-height:100vh;
          padding:28px 22px 70px;
          color:#eaf2ff;
          background: radial-gradient(circle at 20% 0%, #0f2b4a 0%, #0b1426 55%, #070b14 100%);
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        }
        .top{
          max-width:1100px;
          margin:0 auto 22px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:14px;
        }
        .brand{ font-weight:700; letter-spacing:.2px; opacity:.95; }
        .topBtns{ display:flex; gap:10px; flex-wrap:wrap; justify-content:flex-end; }

        .btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:8px;
          padding:10px 14px;
          border-radius:12px;
          text-decoration:none;
          font-weight:700;
          border:1px solid rgba(255,255,255,.14);
          background:rgba(255,255,255,.06);
          color:#eaf2ff;
          transition:transform .08s ease, filter .12s ease;
        }
        .btn:hover{ transform: translateY(-1px); filter: brightness(1.06); }
        .btn.primary{
          background: linear-gradient(90deg, #19d2ff 0%, #13a9ff 40%, #2b6bff 100%);
          border-color: rgba(25,210,255,.35);
          color:#06121f;
        }
        .btn.soft{
          background: rgba(25,210,255,.10);
          border-color: rgba(25,210,255,.25);
        }
        .btn.ghost{
          background: rgba(255,255,255,.04);
        }
        .btn.full{ width:100%; }

        .hero{
          max-width:1100px;
          margin:0 auto;
          display:grid;
          grid-template-columns: 1.15fr .85fr;
          gap:22px;
          align-items:start;
        }
        .pill{
          display:inline-block;
          padding:7px 10px;
          border-radius:999px;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.12);
          font-size:12px;
          opacity:.9;
          margin-bottom:12px;
        }
        h1{
          margin:0 0 10px;
          font-size:46px;
          line-height:1.05;
          letter-spacing:-.5px;
        }
        .sub{
          margin:0 0 14px;
          opacity:.9;
          max-width:52ch;
        }
        .ctaRow{ display:flex; gap:10px; flex-wrap:wrap; margin:10px 0 14px; }

        .bullets{
          margin:14px 0 0;
          padding-left:18px;
          opacity:.92;
        }
        .bullets li{ margin:6px 0; }

        .card{
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.12);
          border-radius:18px;
          padding:16px;
          box-shadow: 0 20px 60px rgba(0,0,0,.25);
        }
        .cardTitle{ font-weight:800; margin-bottom:6px; }
        .cardSub{ font-size:13px; opacity:.85; margin-bottom:12px; }

        .form{ display:grid; gap:10px; }
        label{ display:grid; gap:6px; font-size:12px; opacity:.92; }
        input, textarea{
          width:100%;
          padding:10px 12px;
          border-radius:12px;
          border:1px solid rgba(255,255,255,.14);
          background: rgba(10,16,30,.55);
          color:#eaf2ff;
          outline:none;
        }
        input:focus, textarea:focus{
          border-color: rgba(25,210,255,.40);
          box-shadow: 0 0 0 3px rgba(25,210,255,.10);
        }
        .miniRow{
          display:flex;
          gap:8px;
          justify-content:center;
          align-items:center;
          font-size:12px;
          opacity:.88;
          margin-top:6px;
          flex-wrap:wrap;
        }
        .miniLink{ color:#cfe8ff; text-decoration:none; border-bottom:1px dotted rgba(207,232,255,.35); }
        .dot{ opacity:.7; }

        .footer{
          max-width:1100px;
          margin:26px auto 0;
          padding-top:14px;
          border-top:1px solid rgba(255,255,255,.12);
          display:flex;
          justify-content:space-between;
          gap:12px;
          opacity:.85;
          font-size:12px;
          flex-wrap:wrap;
        }
        .footerRight{ text-align:right; }

        @media (max-width: 900px){
          .hero{ grid-template-columns:1fr; }
          h1{ font-size:38px; }
          .footerRight{ text-align:left; }
        }
      `}</style>
    </main>
  );
}