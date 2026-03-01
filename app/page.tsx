export default function HomePage() {
  const mainRaw = "8327050313";
  const mainPretty = "(832) 705-0313";

  const salesRaw = "3463657906";
  const salesPretty = "(346) 365-7906";

  return (
    <main className="atlasPage">
      {/* NAV */}
      <header className="navWrap">
        <div className="nav">
          <div className="brand">
            <div className="logo" />
            <div>
              <div className="brandName">Atlas Digital Lab</div>
              <div className="brandTag">Websites • SEO • Small Business Growth</div>
            </div>
          </div>

          <nav className="links">
            <a href="#services">Services</a>
            <a href="#demos">Demos</a>
            <a href="#pricing">Pricing</a>
          </nav>

          <div className="navCtas">
            <a className="pill" href={`tel:${mainRaw}`}>
              Call {mainPretty}
            </a>
            <a className="pill ghost" href={`tel:${salesRaw}`}>
              Sales {salesPretty}
            </a>
            <a className="btnPrimary" href="mailto:hello@atlasdigitallab.com">
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="heroWrap">
        <div className="hero">
          <div>
            <div className="chip">Fast turnaround • Mobile-first • Clear pricing</div>

            <h1>
              Websites that make <span className="glow">small businesses</span> look premium — and get calls.
            </h1>

            <p className="sub">
              Clean, high-conversion websites built for real local businesses.
            </p>

            <div className="heroBtns">
              <a className="btnPrimary" href={`tel:${mainRaw}`}>
                Call {mainPretty}
              </a>
              <a className="btnGhost" href={`tel:${salesRaw}`}>
                Talk to Sales
              </a>
            </div>
          </div>

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

              <div className="mockFooter">
                <a className="mockPill" href={`tel:${mainRaw}`}>
                  Main: {mainPretty}
                </a>
                <a className="mockPill ghost" href={`tel:${salesRaw}`}>
                  Sales: {salesPretty}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <div className="footerBrand">Atlas Digital Lab</div>
          <div className="copy">© {new Date().getFullYear()} Atlas Digital Lab</div>
        </div>

        <div className="footerRight">
          <a href={`tel:${mainRaw}`}>Main: {mainPretty}</a>
          <span>•</span>
          <a href={`tel:${salesRaw}`}>Sales: {salesPretty}</a>
          <span>•</span>
          <a href="mailto:hello@atlasdigitallab.com">
            hello@atlasdigitallab.com
          </a>
        </div>
      </footer>

      <style>{`
        .atlasPage {
          min-height:100vh;
          background:#070b12;
          color:white;
          font-family:system-ui;
        }

        .navWrap {
          backdrop-filter:blur(10px);
          background:rgba(7,11,18,.8);
          border-bottom:1px solid rgba(255,255,255,.08);
        }

        .nav {
          max-width:1100px;
          margin:auto;
          padding:16px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          gap:20px;
        }

        .brand {
          display:flex;
          align-items:center;
          gap:10px;
        }

        .logo {
          width:34px;
          height:34px;
          border-radius:10px;
          background:linear-gradient(135deg,#00b7ff,#6e41ff);
        }

        .brandName { font-weight:800; }
        .brandTag { font-size:12px; opacity:.7; }

        .links { display:flex; gap:16px; }
        .links a { opacity:.8; }

        .navCtas { display:flex; gap:10px; align-items:center; }

        .pill {
          padding:10px 14px;
          border-radius:999px;
          border:1px solid rgba(255,255,255,.15);
          background:rgba(255,255,255,.05);
          font-size:13px;
        }

        .pill.ghost {
          background:rgba(0,183,255,.15);
          border:1px solid rgba(0,183,255,.4);
        }

        .btnPrimary {
          padding:12px 16px;
          border-radius:14px;
          font-weight:700;
          background:linear-gradient(135deg,#00b7ff,#00ffd6);
          color:black;
        }

        .btnGhost {
          padding:12px 16px;
          border-radius:14px;
          border:1px solid rgba(255,255,255,.15);
          background:rgba(255,255,255,.05);
        }

        .heroWrap {
          max-width:1100px;
          margin:auto;
          padding:60px 20px;
        }

        .hero {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:40px;
        }

        h1 {
          font-size:48px;
          line-height:1.05;
        }

        .glow {
          background:linear-gradient(135deg,#00b7ff,#6e41ff);
          -webkit-background-clip:text;
          color:transparent;
        }

        .sub { opacity:.8; margin:20px 0; }

        .heroBtns { display:flex; gap:12px; flex-wrap:wrap; }

        .mock {
          border-radius:20px;
          border:1px solid rgba(255,255,255,.1);
          background:rgba(255,255,255,.05);
          overflow:hidden;
        }

        .mockTop {
          padding:12px;
          display:flex;
          gap:6px;
          border-bottom:1px solid rgba(255,255,255,.1);
        }

        .mockTop span {
          width:10px;
          height:10px;
          border-radius:50%;
          background:rgba(255,255,255,.2);
        }

        .mockBody { padding:20px; }

        .mockLine {
          height:10px;
          background:rgba(255,255,255,.1);
          border-radius:999px;
          margin:10px 0;
        }

        .mockLine.short { width:60%; }

        .mockPill {
          display:inline-block;
          padding:10px 14px;
          border-radius:12px;
          margin-top:10px;
          background:rgba(0,183,255,.2);
          border:1px solid rgba(0,183,255,.4);
        }

        .mockPill.ghost {
          background:rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.15);
          margin-left:10px;
        }

        .footer {
          max-width:1100px;
          margin:auto;
          padding:40px 20px;
          display:flex;
          justify-content:space-between;
          border-top:1px solid rgba(255,255,255,.1);
          opacity:.8;
        }

        @media(max-width:900px){
          .hero { grid-template-columns:1fr; }
          .links { display:none; }
        }
      `}</style>
    </main>
  );
}