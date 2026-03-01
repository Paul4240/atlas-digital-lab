export default function HomePage() {
  const MAIN_PHONE = "8327050313";
  const SALES_PHONE = "3463657906";
  const EMAIL = "hello@atlasdigitallab.com";

  const formatPhone = (digits: string) => {
    const d = digits.replace(/\D/g, "");
    if (d.length !== 10) return digits;
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  };

  const scrollToId = (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="page">
      {/* NAV */}
      <header className="navWrap">
        <div className="nav">
          <div className="brand">
            <div className="logoDot" />
            <div className="brandText">
              <div className="brandName">Atlas Digital Lab</div>
              <div className="brandSub">Websites • SEO • Small Business Growth</div>
            </div>
          </div>

          <nav className="links">
            <a href="#services" onClick={scrollToId("services")}>
              Services
            </a>
            <a href="#demos" onClick={scrollToId("demos")}>
              Demos
            </a>
            <a href="#pricing" onClick={scrollToId("pricing")}>
              Pricing
            </a>
          </nav>

          <div className="navCtas">
            {/* OPTION B: ONLY MAIN UP TOP */}
            <a className="pill" href={`tel:${MAIN_PHONE}`}>
              Call {formatPhone(MAIN_PHONE)}
            </a>

            <a className="primaryBtn" href="#pricing" onClick={scrollToId("pricing")}>
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="left">
          <div className="badge">Fast turnaround • Mobile-first • Clear pricing</div>

          <h1>
            Websites that make <span className="accent">small businesses</span> look premium — and get calls.
          </h1>

          <p className="sub">
            Clean, high-conversion websites built for real local businesses. Simple process, strong design, and clear next
            steps.
          </p>

          <div className="ctaRow">
            <a className="primaryBtn big" href={`tel:${MAIN_PHONE}`}>
              Call {formatPhone(MAIN_PHONE)}
            </a>

            <a className="secondaryBtn big" href="#demos" onClick={scrollToId("demos")}>
              See Demos
            </a>
          </div>

          <div className="miniGrid">
            <div className="miniCard">
              <div className="miniTitle">Quick builds</div>
              <div className="miniText">Launch fast with a proven layout.</div>
            </div>
            <div className="miniCard">
              <div className="miniTitle">SEO-ready</div>
              <div className="miniText">Built for Google + speed.</div>
            </div>
            <div className="miniCard">
              <div className="miniTitle">You own it</div>
              <div className="miniText">No lock-ins. Your site, your assets.</div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="mock">
            <div className="mockTop">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </div>

            <div className="mockBody">
              <div className="mockTag">Live demo style</div>
              <div className="mockTitle">High-conversion layout</div>

              <div className="mockLines">
                <div className="line w90" />
                <div className="line w75" />
                <div className="line w60" />
              </div>

              <div className="mockBlocks">
                <div className="block" />
                <div className="block" />
                <div className="block" />
              </div>

              <div className="mockCtas">
                <a className="chip" href={`tel:${MAIN_PHONE}`}>
                  Main: {formatPhone(MAIN_PHONE)}
                </a>
                <a className="chip ghost" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>What we do</h2>
        <p className="sectionSub">Simple packages, clean design, and a clear path to getting customers.</p>

        <div className="cards3">
          <div className="glassCard">
            <div className="cardTitle">Websites</div>
            <div className="cardText">Fast, modern sites that look expensive and load quick.</div>
            <ul>
              <li>Mobile-first layout</li>
              <li>Clear calls-to-action</li>
              <li>Speed + best practices</li>
            </ul>
          </div>

          <div className="glassCard">
            <div className="cardTitle">SEO & Google Setup</div>
            <div className="cardText">Get found locally and build trust fast.</div>
            <ul>
              <li>Google Business profile help</li>
              <li>On-page SEO basics</li>
              <li>Performance + indexing ready</li>
            </ul>
          </div>

          <div className="glassCard">
            <div className="cardTitle">Branding</div>
            <div className="cardText">Clean logos, colors, and polish that makes you look legit.</div>
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
        <p className="sectionSub">Use these as proof of quality when selling your services.</p>

        <div className="demoRow">
          <div className="demoCard">
            <div className="demoTop">
              <div className="demoTitle">Metal Business Cards Demo</div>
              <span className="tag">Premium product-style</span>
            </div>
            <div className="demoText">Looks like a real high-end brand page (finishes, packages, contact).</div>

            <a className="secondaryBtn" href="/demo/metal-cards">
              Open Metal Cards Demo
            </a>
          </div>

          <div className="demoCard">
            <div className="demoTop">
              <div className="demoTitle">Roofing Demo</div>
              <span className="tag">Local service-style</span>
            </div>
            <div className="demoText">Built to get calls: strong hero, trust blocks, and simple quote path.</div>

            <a className="secondaryBtn" href="/demo/roofing">
              Open Roofing Demo
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <h2>Simple pricing</h2>
        <p className="sectionSub">Start clean. Upgrade when you want more features or a custom build.</p>

        <div className="pricing">
          <div className="priceCard">
            <div className="priceName">Starter</div>
            <div className="price">$299</div>
            <div className="priceDesc">Best for: quick online presence</div>
            <ul>
              <li>Single-page layout</li>
              <li>Mobile-first</li>
              <li>Contact section</li>
            </ul>

            <a className="secondaryBtn full" href={`tel:${MAIN_PHONE}`}>
              Start Starter
            </a>
          </div>

          <div className="priceCard featured">
            <div className="topRow">
              <div className="priceName">Pro</div>
              <span className="tag pop">Most popular</span>
            </div>
            <div className="price">$499</div>
            <div className="priceDesc">Best for: more trust + structure</div>
            <ul>
              <li>High-conversion sections</li>
              <li>Service + trust blocks</li>
              <li>Everything in Starter</li>
            </ul>

            <a className="primaryBtn full" href={`tel:${MAIN_PHONE}`}>
              Start Pro
            </a>
          </div>

          <div className="priceCard">
            <div className="priceName">Elite</div>
            <div className="price">$799+</div>
            <div className="priceDesc">Best for: custom build + positioning</div>
            <ul>
              <li>Custom layout + sections</li>
              <li>Better branding polish</li>
              <li>Everything in Pro</li>
            </ul>

            <a className="secondaryBtn full" href={`tel:${MAIN_PHONE}`}>
              Call/Text to Plan
            </a>
          </div>
        </div>

        <div className="quoteBar">
          <div className="quoteText">Want us to build your next demo site for a specific niche?</div>
          <div className="quoteBtns">
            <a className="secondaryBtn" href={`tel:${MAIN_PHONE}`}>
              Text {formatPhone(MAIN_PHONE)}
            </a>
            <a className="primaryBtn" href={`mailto:${EMAIL}`}>
              Email for Quote
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER (BOTH NUMBERS LIVE HERE) */}
      <footer className="footer">
        <div className="footerInner">
          <div className="footerLeft">
            <div className="footerBrand">Atlas Digital Lab</div>
            <div className="footerSub">Websites • SEO • Branding</div>
            <div className="footerCopy">© {new Date().getFullYear()} Atlas Digital Lab</div>
          </div>

          <div className="footerRight">
            <div className="footerLine">
              <span className="muted">Main:</span>{" "}
              <a href={`tel:${MAIN_PHONE}`}>{formatPhone(MAIN_PHONE)}</a>
            </div>
            <div className="footerLine">
              <span className="muted">Sales:</span>{" "}
              <a href={`tel:${SALES_PHONE}`}>{formatPhone(SALES_PHONE)}</a>
            </div>
            <div className="footerLine">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div className="footerTiny">Fast response • clear pricing</div>
          </div>
        </div>
      </footer>

      <style>{`
        .page{
          min-height:100vh;
          background: radial-gradient(circle at 20% 0%, #141b2a 0%, #07090f 55%, #05060a 100%);
          color:#f4f7ff;
          padding: 28px 22px 0px;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        }

        /* NAV */
        .navWrap{ position: sticky; top: 0; z-index: 20; padding-bottom: 14px; backdrop-filter: blur(10px); }
        .nav{
          max-width: 1180px;
          margin: 0 auto;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap:18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 18px;
          padding: 12px 14px;
        }
        .brand{ display:flex; align-items:center; gap:12px; }
        .logoDot{
          width: 34px; height: 34px;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(0,220,255,0.9), rgba(0,120,255,0.7));
          box-shadow: 0 10px 30px rgba(0,160,255,0.18);
        }
        .brandName{ font-weight: 800; letter-spacing: -0.2px; }
        .brandSub{ font-size: 12px; color: rgba(244,247,255,0.72); margin-top: 2px; }

        .links{ display:flex; gap:18px; align-items:center; }
        .links a{
          color: rgba(244,247,255,0.78);
          text-decoration:none;
          font-size:14px;
          transition: 0.15s ease;
        }
        .links a:hover{ color: rgba(244,247,255,1); }

        .navCtas{ display:flex; gap:10px; align-items:center; }
        .pill{
          display:inline-flex; align-items:center; justify-content:center;
          height: 36px;
          padding: 0 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          color: rgba(244,247,255,0.9);
          text-decoration:none;
          font-size: 13px;
          white-space: nowrap;
        }

        .primaryBtn{
          display:inline-flex; align-items:center; justify-content:center;
          border: 0;
          text-decoration:none;
          color: #071018;
          background: linear-gradient(135deg, rgba(0,220,255,0.95), rgba(0,120,255,0.85));
          border-radius: 12px;
          padding: 10px 14px;
          font-weight: 800;
          box-shadow: 0 16px 40px rgba(0,140,255,0.18);
          transition: transform .12s ease, filter .12s ease;
          white-space: nowrap;
        }
        .primaryBtn:hover{ transform: translateY(-1px); filter: brightness(1.05); }
        .secondaryBtn{
          display:inline-flex; align-items:center; justify-content:center;
          text-decoration:none;
          color: rgba(244,247,255,0.92);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 10px 14px;
          font-weight: 750;
          transition: transform .12s ease, background .12s ease;
          white-space: nowrap;
        }
        .secondaryBtn:hover{ transform: translateY(-1px); background: rgba(255,255,255,0.08); }
        .big{ padding: 12px 16px; border-radius: 14px; }

        /* HERO */
        .hero{
          max-width: 1180px;
          margin: 22px auto 0;
          display:grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 44px;
          align-items: start;
        }
        .badge{
          display:inline-flex;
          padding: 7px 10px;
          border-radius: 999px;
          font-size: 12px;
          color: rgba(244,247,255,0.78);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.10);
        }
        h1{
          margin: 14px 0 10px;
          font-size: 56px;
          line-height: 1.02;
          letter-spacing: -1.2px;
        }
        .accent{ color: rgba(0,220,255,0.95); }
        .sub{
          margin: 0 0 16px;
          color: rgba(244,247,255,0.74);
          font-size: 16px;
          line-height: 1.55;
          max-width: 54ch;
        }
        .ctaRow{ display:flex; gap: 12px; flex-wrap: wrap; margin-bottom: 18px; }

        .miniGrid{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-top: 8px;
        }
        .miniCard{
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 12px 12px;
        }
        .miniTitle{ font-weight: 850; font-size: 13px; }
        .miniText{ font-size: 12px; color: rgba(244,247,255,0.72); margin-top: 4px; }

        .mock{
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(0,0,0,0.35);
        }
        .mockTop{
          display:flex; gap: 8px;
          padding: 10px 14px;
          background: rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .dot{
          width: 10px; height: 10px; border-radius: 999px;
          background: rgba(244,247,255,0.22);
        }
        .mockBody{ padding: 16px 16px 18px; }
        .mockTag{
          display:inline-flex;
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(0,220,255,0.20);
          background: rgba(0,220,255,0.10);
          color: rgba(200,250,255,0.95);
        }
        .mockTitle{ margin-top: 10px; font-weight: 900; font-size: 16px; }
        .mockLines{ margin: 12px 0 14px; display:flex; flex-direction:column; gap:8px; }
        .line{
          height: 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
          border: 1px solid rgba(255,255,255,0.06);
        }
        .w90{ width: 90%; }
        .w75{ width: 75%; }
        .w60{ width: 60%; }

        .mockBlocks{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          margin-bottom: 14px;
        }
        .block{
          height: 46px;
          border-radius: 14px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .mockCtas{ display:flex; gap: 10px; flex-wrap: wrap; }
        .chip{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          text-decoration:none;
          color: #071018;
          background: linear-gradient(135deg, rgba(0,220,255,0.92), rgba(0,120,255,0.78));
          border-radius: 999px;
          padding: 9px 12px;
          font-weight: 850;
          font-size: 12px;
          white-space: nowrap;
        }
        .chip.ghost{
          color: rgba(244,247,255,0.86);
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
        }

        /* SECTIONS */
        .section{
          max-width: 1180px;
          margin: 54px auto 0;
        }
        .section h2{
          font-size: 28px;
          margin: 0 0 6px;
          letter-spacing: -0.4px;
        }
        .sectionSub{
          color: rgba(244,247,255,0.70);
          margin: 0 0 18px;
          max-width: 70ch;
        }

        .cards3{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .glassCard{
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 18px;
          padding: 18px 18px;
        }
        .cardTitle{ font-size: 18px; font-weight: 900; margin-bottom: 6px; }
        .cardText{ color: rgba(244,247,255,0.72); margin-bottom: 12px; }
        ul{ margin: 0; padding-left: 18px; color: rgba(244,247,255,0.80); }
        li{ margin: 8px 0; }

        .demoRow{
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .demoCard{
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 18px;
          padding: 18px 18px;
          display:flex;
          flex-direction:column;
          gap: 10px;
        }
        .demoTop{ display:flex; align-items:center; justify-content:space-between; gap: 10px; flex-wrap: wrap; }
        .demoTitle{ font-weight: 950; font-size: 16px; }
        .tag{
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          color: rgba(244,247,255,0.78);
          white-space: nowrap;
        }
        .tag.pop{
          border-color: rgba(0,220,255,0.25);
          background: rgba(0,220,255,0.10);
          color: rgba(210,250,255,0.95);
        }
        .demoText{ color: rgba(244,247,255,0.72); }

        .pricing{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 16px;
        }
        .priceCard{
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 18px;
          padding: 18px 18px;
          position: relative;
        }
        .priceCard.featured{
          border-color: rgba(0,220,255,0.20);
          box-shadow: 0 20px 70px rgba(0,140,255,0.10);
          background: radial-gradient(circle at 30% 10%, rgba(0,220,255,0.12), rgba(255,255,255,0.04));
        }
        .topRow{ display:flex; align-items:center; justify-content:space-between; gap: 10px; flex-wrap: wrap; }
        .priceName{ font-size: 18px; font-weight: 950; }
        .price{ font-size: 44px; font-weight: 950; letter-spacing: -1px; margin: 4px 0; }
        .priceDesc{ color: rgba(244,247,255,0.70); margin-bottom: 12px; }
        .full{ width: 100%; margin-top: 12px; }

        .quoteBar{
          margin-top: 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 18px;
          padding: 16px 16px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 12px;
          flex-wrap: wrap;
        }
        .quoteText{ color: rgba(244,247,255,0.78); font-weight: 700; }
        .quoteBtns{ display:flex; gap: 10px; flex-wrap: wrap; }

        /* FOOTER */
        .footer{
          margin-top: 54px;
          border-top: 1px solid rgba(255,255,255,0.10);
          padding: 18px 0 28px;
          opacity: 0.95;
        }
        .footerInner{
          max-width: 1180px;
          margin: 0 auto;
          display:flex;
          justify-content:space-between;
          gap: 18px;
          flex-wrap: wrap;
        }
        .footerBrand{ font-weight: 950; }
        .footerSub{ color: rgba(244,247,255,0.72); margin-top: 2px; }
        .footerCopy{ color: rgba(244,247,255,0.55); margin-top: 10px; font-size: 12px; }
        .footerRight{ text-align:right; min-width: 240px; }
        .footerLine{ color: rgba(244,247,255,0.78); margin: 6px 0; }
        .footerLine a{ color: rgba(244,247,255,0.90); text-decoration:none; }
        .footerLine a:hover{ text-decoration: underline; }
        .muted{ color: rgba(244,247,255,0.55); }
        .footerTiny{ color: rgba(244,247,255,0.55); font-size: 12px; margin-top: 8px; }

        /* RESPONSIVE */
        @media (max-width: 980px){
          h1{ font-size: 44px; }
          .hero{ grid-template-columns: 1fr; }
          .miniGrid{ grid-template-columns: 1fr; }
          .cards3{ grid-template-columns: 1fr; }
          .demoRow{ grid-template-columns: 1fr; }
          .pricing{ grid-template-columns: 1fr; }
          .footerRight{ text-align:left; }
        }

        @media (max-width: 900px){
          .links{ display:none; }
          .page{ padding: 20px 16px 0px; }
        }
      `}</style>
    </main>
  );
}