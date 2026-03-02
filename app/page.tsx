export default function HomePage() {
  const MAIN_PHONE = "8327050313";
  const SALES_PHONE = "3463657906";
  const EMAIL = "hello@atlasdigitallab.com";

  const formatPhone = (digits: string) => {
    const d = digits.replace(/\D/g, "").slice(0, 10);
    if (d.length !== 10) return digits;
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  };

  const mainPretty = formatPhone(MAIN_PHONE);
  const salesPretty = formatPhone(SALES_PHONE);

  return (
    <main className="page">
      {/* NAV */}
      <header className="navWrap">
        <div className="nav">
          <div className="brand">
            <div className="logo" />
            <div className="brandText">
              <div className="brandName">Atlas Digital Lab</div>
              <div className="brandTag">Websites • SEO • Small Business Growth</div>
            </div>
          </div>

          <nav className="links">
            <a className="link" href="#services">Services</a>
            <a className="link" href="#demos">Demos</a>
            <a className="link" href="#pricing">Pricing</a>
          </nav>

          <div className="navCtas">
            <a className="pill" href={`tel:${MAIN_PHONE}`}>Call {mainPretty}</a>
            <a className="pill alt" href={`tel:${SALES_PHONE}`}>Sales {salesPretty}</a>
            <a className="primaryBtn" href={`mailto:${EMAIL}`}>Get a Quote</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="left">
          <div className="kicker">Fast turnaround • Mobile-first • Clear pricing</div>

          <h1>
            Websites that make <span>small businesses</span> look premium — and get calls.
          </h1>

          <p className="sub">
            Clean, high-conversion websites built for real local businesses.
          </p>

          <div className="ctaRow">
            <a className="primaryBtn big" href={`tel:${MAIN_PHONE}`}>
              Call {mainPretty}
            </a>
            <a className="ghostBtn big" href={`tel:${SALES_PHONE}`}>
              Talk to Sales
            </a>
          </div>
        </div>

        <div className="right">
          <div className="mock">
            <div className="mockTop">
              <span />
              <span />
              <span />
            </div>

            <div className="mockBody">
              <div className="mockTitle">High-conversion layout</div>
              <div className="mockLine" />
              <div className="mockLine short" />

              <div className="mockPills">
                <div className="miniPill">Main: {mainPretty}</div>
                <div className="miniPill alt">Sales: {salesPretty}</div>
              </div>

              <div className="mockBoxRow">
                <div className="mockBox" />
                <div className="mockBox" />
                <div className="mockBox" />
              </div>

              <div className="mockCta" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>What we do</h2>
        <p className="sectionSub">
          Simple packages, clean design, and a clear path to getting customers.
        </p>

        <div className="grid3">
          <div className="card">
            <h3>Websites</h3>
            <p>Fast, modern sites that look expensive and load quick.</p>
            <ul>
              <li>Mobile-first layout</li>
              <li>Clear calls-to-action</li>
              <li>Speed + best practices</li>
            </ul>
          </div>

          <div className="card">
            <h3>SEO & Google Setup</h3>
            <p>Get found locally and build trust fast.</p>
            <ul>
              <li>Google Business profile help</li>
              <li>On-page SEO basics</li>
              <li>Performance + indexing ready</li>
            </ul>
          </div>

          <div className="card">
            <h3>Branding</h3>
            <p>Clean logos, colors, and polish that makes you look legit.</p>
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
        <h2>Demos you can show clients</h2>
        <p className="sectionSub">
          Use these as proof of quality when selling your services.
        </p>

        <div className="grid2">
          <div className="demoCard">
            <div className="demoTop">
              <div>
                <h3>Metal Business Cards Demo</h3>
                <p>Looks like a real high-end brand page (finishes, packages, contact).</p>
              </div>
              <span className="tag">Premium product-style</span>
            </div>
            <a className="ghostBtn" href="/demo/metal-cards">Open Metal Cards Demo</a>
          </div>

          <div className="demoCard">
            <div className="demoTop">
              <div>
                <h3>Roofing Demo</h3>
                <p>Built to get calls: strong hero, trust blocks, and a simple quote path.</p>
              </div>
              <span className="tag">Local service-style</span>
            </div>
            <a className="ghostBtn" href="/demo/roofing">Open Roofing Demo</a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <h2>Simple pricing</h2>
        <p className="sectionSub">
          Start clean. Upgrade when you want more features or a custom build.
        </p>

        <div className="pricing">
          <div className="priceCard">
            <h3>Starter</h3>
            <div className="price">$299</div>
            <p className="muted">Best for: quick online presence</p>
            <ul>
              <li>Single-page layout</li>
              <li>Mobile-first</li>
              <li>Contact section</li>
            </ul>
            <a className="ghostBtn full" href={`tel:${MAIN_PHONE}`}>Start Starter</a>
          </div>

          <div className="priceCard featured">
            <div className="badge">Most popular</div>
            <h3>Pro</h3>
            <div className="price">$499</div>
            <p className="muted">Best for: more trust + structure</p>
            <ul>
              <li>High-conversion sections</li>
              <li>Service + trust blocks</li>
              <li>Everything in Starter</li>
            </ul>
            <a className="primaryBtn full" href={`tel:${SALES_PHONE}`}>Start Pro</a>
          </div>

          <div className="priceCard">
            <h3>Elite</h3>
            <div className="price">$799+</div>
            <p className="muted">Best for: custom build + positioning</p>
            <ul>
              <li>Custom layout + sections</li>
              <li>Better branding polish</li>
              <li>Everything in Pro</li>
            </ul>
            <a className="ghostBtn full" href={`tel:${SALES_PHONE}`}>Call/Text to Plan</a>
          </div>
        </div>

        <div className="bottomCtas">
          <div className="softCard">
            Want us to build your next demo site for a specific niche?
          </div>
          <div className="bottomBtns">
            <a className="ghostBtn" href={`tel:${MAIN_PHONE}`}>Text {mainPretty}</a>
            <a className="primaryBtn" href={`mailto:${EMAIL}`}>Email for Quote</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>© 2026 Atlas Digital Lab — Websites • SEO • Branding</div>
        <div>
          Main: {mainPretty} • Sales: {salesPretty} • {EMAIL}
        </div>
      </footer>

      <style jsx>{`
        .page{
          min-height:100vh;
          background: radial-gradient(circle at 20% 0%, #0f2b4a 0%, #0b1426 55%, #070b14 100%);
          color:#eaf2ff;
          padding: 0 22px 36px;
          font-family: system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;
        }

        .navWrap{ position: sticky; top:0; z-index:20; padding-top: 14px; }
        .nav{
          max-width:1100px;
          margin: 0 auto;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:16px;
          padding: 12px 14px;
          border:1px solid rgba(255,255,255,.10);
          border-radius: 16px;
          background: rgba(10,16,28,.55);
          backdrop-filter: blur(10px);
        }

        .brand{ display:flex; align-items:center; gap:12px; }
        .logo{
          width:18px; height:18px; border-radius:6px;
          background: linear-gradient(135deg, #28d3ff, #2b7bff);
          box-shadow: 0 0 0 4px rgba(40,211,255,.12);
        }
        .brandName{ font-weight:800; line-height:1; }
        .brandTag{ font-size:12px; opacity:.8; margin-top:3px; }

        .links{ display:flex; gap:18px; }
        .link{ color:#d8e7ff; text-decoration:none; opacity:.85; font-weight:600; font-size:14px; }
        .link:hover{ opacity:1; }

        .navCtas{ display:flex; align-items:center; gap:10px; flex-wrap:wrap; justify-content:flex-end; }
        .pill{
          color:#dff4ff;
          text-decoration:none;
          font-weight:700;
          font-size:13px;
          padding: 8px 10px;
          border-radius: 999px;
          border:1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.06);
        }
        .pill.alt{ border-color: rgba(40,211,255,.25); }
        .primaryBtn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          text-decoration:none;
          font-weight:800;
          color:#06121f;
          background: linear-gradient(135deg, #28d3ff, #2b7bff);
          padding: 10px 14px;
          border-radius: 12px;
          box-shadow: 0 12px 28px rgba(40,211,255,.18);
        }
        .primaryBtn.big{ padding: 12px 16px; border-radius: 14px; }
        .primaryBtn.full{ width:100%; }
        .ghostBtn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          text-decoration:none;
          font-weight:800;
          color:#dff4ff;
          border:1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.06);
          padding: 10px 14px;
          border-radius: 12px;
        }
        .ghostBtn.big{ padding: 12px 16px; border-radius: 14px; }
        .ghostBtn.full{ width:100%; }

        .hero{
          max-width:1100px;
          margin: 26px auto 0;
          display:grid;
          grid-template-columns: 1.15fr .85fr;
          gap: 30px;
          align-items:start;
        }
        .kicker{
          display:inline-block;
          padding: 6px 10px;
          border-radius: 999px;
          border:1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.06);
          font-size: 12px;
          opacity: .9;
          margin-bottom: 14px;
        }
        h1{
          font-size: 44px;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 10px;
        }
        h1 span{ color:#28d3ff; }
        .sub{ margin: 0 0 16px; opacity:.9; max-width: 560px; }
        .ctaRow{ display:flex; gap:12px; flex-wrap:wrap; margin-top: 14px; }

        .mock{
          border-radius: 18px;
          border:1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.06);
          overflow:hidden;
        }
        .mockTop{
          display:flex; gap:8px;
          padding: 10px 12px;
          border-bottom:1px solid rgba(255,255,255,.10);
        }
        .mockTop span{
          width:10px; height:10px; border-radius: 999px;
          background: rgba(255,255,255,.18);
        }
        .mockBody{ padding: 16px; }
        .mockTitle{ font-weight:800; margin-bottom: 10px; }
        .mockLine{
          height: 10px;
          border-radius: 999px;
          background: rgba(255,255,255,.12);
          margin-bottom: 10px;
        }
        .mockLine.short{ width: 70%; }
        .mockPills{ display:flex; gap:10px; flex-wrap:wrap; margin: 10px 0 14px; }
        .miniPill{
          padding: 8px 10px;
          border-radius: 12px;
          border:1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.06);
          font-weight:800;
          font-size:12px;
        }
        .miniPill.alt{ border-color: rgba(40,211,255,.25); }
        .mockBoxRow{ display:grid; grid-template-columns: repeat(3, 1fr); gap:10px; margin-bottom: 14px; }
        .mockBox{
          height: 54px;
          border-radius: 12px;
          background: rgba(255,255,255,.08);
          border:1px solid rgba(255,255,255,.10);
        }
        .mockCta{
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(40,211,255,.35), rgba(43,123,255,.35));
          border:1px solid rgba(40,211,255,.20);
        }

        .section{
          max-width:1100px;
          margin: 44px auto 0;
          padding-top: 6px;
        }
        .section h2{
          margin: 0 0 8px;
          font-size: 26px;
          letter-spacing: -0.01em;
        }
        .sectionSub{ margin: 0 0 18px; opacity:.85; }

        .grid3{ display:grid; grid-template-columns: repeat(3, 1fr); gap:14px; }
        .grid2{ display:grid; grid-template-columns: repeat(2, 1fr); gap:14px; }

        .card, .demoCard, .priceCard, .softCard{
          border-radius: 18px;
          border:1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.06);
          padding: 16px;
        }
        .card h3, .demoCard h3, .priceCard h3{ margin: 0 0 8px; }
        .card p, .demoCard p{ margin: 0 0 12px; opacity:.85; }
        ul{ margin: 0; padding-left: 18px; opacity:.9; }
        li{ margin: 6px 0; }

        .demoTop{
          display:flex;
          align-items:flex-start;
          justify-content:space-between;
          gap:12px;
          margin-bottom: 12px;
        }
        .tag{
          font-size: 12px;
          font-weight:800;
          padding: 6px 10px;
          border-radius: 999px;
          border:1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.06);
          white-space: nowrap;
          opacity:.9;
        }

        .pricing{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap:14px;
          margin-top: 14px;
        }
        .price{ font-size: 34px; font-weight: 900; margin: 6px 0 6px; }
        .muted{ opacity:.8; margin: 0 0 12px; }
        .featured{
          border-color: rgba(40,211,255,.25);
          background: linear-gradient(180deg, rgba(40,211,255,.12), rgba(255,255,255,.06));
          position: relative;
        }
        .badge{
          position:absolute;
          top: 14px;
          right: 14px;
          font-size: 12px;
          font-weight:900;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(40,211,255,.20);
          border: 1px solid rgba(40,211,255,.25);
        }

        .bottomCtas{
          display:flex;
          gap:14px;
          align-items:center;
          justify-content:space-between;
          margin-top: 16px;
          flex-wrap:wrap;
        }
        .softCard{ flex: 1; min-width: 260px; opacity:.9; }
        .bottomBtns{ display:flex; gap:12px; flex-wrap:wrap; }

        .footer{
          max-width:1100px;
          margin: 34px auto 0;
          padding-top: 14px;
          display:flex;
          justify-content:space-between;
          gap:14px;
          flex-wrap:wrap;
          opacity:.8;
          border-top: 1px solid rgba(255,255,255,.10);
        }

        @media (max-width: 900px){
          .hero{ grid-template-columns: 1fr; }
          .grid3{ grid-template-columns: 1fr; }
          .grid2{ grid-template-columns: 1fr; }
          .pricing{ grid-template-columns: 1fr; }
          .links{ display:none; }
        }
      `}</style>
    </main>
  );
}