// app/page.tsx
export default function HomePage() {
  const MAIN = "8327050313";
  const SALES = "3463657906";
  const EMAIL = "hello@atlasdigitallab.com";

  const pretty = (num: string) => {
    const d = num.replace(/\D/g, "").slice(0, 10);
    if (d.length !== 10) return num;
    return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
  };

  const mainPretty = pretty(MAIN);
  const salesPretty = pretty(SALES);

  return (
    <main className="page">
      {/* NAV */}
      <div className="navWrap">
        <nav className="nav">
          <div className="brand">
            <div className="logo" aria-hidden />
            <div className="brandText">
              <div className="brandName">Atlas Digital Lab</div>
              <div className="brandTag">Websites • SEO • Small Business Growth</div>
            </div>
          </div>

          <div className="links">
            <a href="#services" className="link">
              Services
            </a>
            <a href="#demos" className="link">
              Demos
            </a>
            <a href="#pricing" className="link">
              Pricing
            </a>
          </div>

          <div className="navCtas">
            <a className="pill" href={`tel:${MAIN}`} aria-label={`Call ${mainPretty}`}>
              Call {mainPretty}
            </a>
            <a className="pill sales" href={`tel:${SALES}`} aria-label={`Sales ${salesPretty}`}>
              Sales {salesPretty}
            </a>
            <a className="primaryBtn" href={`mailto:${EMAIL}`}>
              Get a Quote
            </a>
          </div>
        </nav>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="heroLeft">
          <div className="kicker">Fast turnaround • Mobile-first • Clear pricing</div>
          <h1 className="h1">
            Websites that make <span className="accent">small</span> businesses look premium — and get calls.
          </h1>
          <p className="sub">
            Clean, high-conversion websites built for real local businesses. No fluff — just strong design, speed, and clear CTAs.
          </p>

          <div className="heroBtns">
            <a className="primaryBtn big" href={`tel:${MAIN}`}>
              Call {mainPretty}
            </a>
            <a className="secondaryBtn big" href={`tel:${SALES}`}>
              Talk to Sales
            </a>
          </div>

          <div className="miniCards">
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

        <div className="heroRight">
          <div className="mock">
            <div className="mockTop">
              <div className="dots">
                <span />
                <span />
                <span />
              </div>
              <div className="mockLabel">High-conversion layout</div>
            </div>

            <div className="mockBody">
              <div className="bar" />
              <div className="bar short" />
              <div className="pillRow">
                <div className="mockPill">Main: {mainPretty}</div>
                <div className="mockPill dim">Sales: {salesPretty}</div>
              </div>
              <div className="blocks">
                <div className="block" />
                <div className="block" />
                <div className="block" />
              </div>
              <div className="ctaStrip" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <h2>What we do</h2>
        <p className="sectionSub">Simple packages, clean design, and a clear path to getting customers.</p>

        <div className="servicesGrid">
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
            <h3>SEO &amp; Google Setup</h3>
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
        <h2>Demos</h2>
        <p className="sectionSub">Real examples you can show clients.</p>

        <div className="demosGrid">
          <div className="demoCard">
            <div className="demoTop">
              <div>
                <div className="demoTitle">Metal Business Cards Demo</div>
                <div className="demoText">Premium product-style demo (finishes, packages, contact).</div>
              </div>
              <div className="badge">Premium product-style</div>
            </div>
            <a className="secondaryBtn" href="/demo/metal-cards">
              Open Metal Cards Demo
            </a>
          </div>

          <div className="demoCard">
            <div className="demoTop">
              <div>
                <div className="demoTitle">Roofing Demo</div>
                <div className="demoText">Local service-style demo (hero, trust blocks, quote path).</div>
              </div>
              <div className="badge alt">Local service-style</div>
            </div>
            <a className="secondaryBtn" href="/demo/roofing">
              Open Roofing Demo
            </a>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <h2>Pricing</h2>
        <p className="sectionSub">Clear packages. Monthly support included.</p>

        <div className="pricingGrid">
          <div className="priceBox">
            <h3>Starter</h3>
            <div className="price">$299</div>
            <div className="monthly">$79/mo</div>
            <ul>
              <li>Single-page website</li>
              <li>Mobile optimized</li>
              <li>Contact section</li>
              <li>Basic SEO setup</li>
            </ul>
            <a className="priceBtn" href={`tel:${MAIN}`}>
              Call to Start
            </a>
          </div>

          <div className="priceBox">
            <h3>Growth</h3>
            <div className="price">$499</div>
            <div className="monthly">$129/mo</div>
            <ul>
              <li>Everything in Starter</li>
              <li>Multi-section layout</li>
              <li>Trust + service blocks</li>
              <li>Conversion structure</li>
            </ul>
            <a className="priceBtn" href={`tel:${MAIN}`}>
              Call to Start
            </a>
          </div>

          <div className="priceBox featured">
            <div className="corner">Most Popular</div>
            <h3>Pro</h3>
            <div className="price">$799</div>
            <div className="monthly">$179/mo</div>
            <ul>
              <li>Everything in Growth</li>
              <li>Advanced SEO setup</li>
              <li>Google Business optimization</li>
              <li>Priority design</li>
            </ul>
            <a className="priceBtn primary" href={`tel:${SALES}`}>
              Talk to Sales
            </a>
          </div>

          {/* ✅ ELITE POPPING / HIGHLIGHTED */}
          <div className="priceBox elitePop">
            <div className="corner premium">Premium Option</div>
            <h3>Elite</h3>
            <div className="price">$1,200</div>
            <div className="monthly">$249/mo</div>
            <ul>
              <li>Custom premium design</li>
              <li>Brand strategy layout</li>
              <li>High-conversion structure</li>
              <li>Service area + trust sections</li>
            </ul>
            <a className="priceBtn primary" href={`tel:${SALES}`}>
              Build My Elite Site
            </a>
          </div>
        </div>

        <div className="ctaRow">
          <div className="ctaBar">
            <div className="ctaText">
              Want a custom plan or a different niche demo built?
              <span className="ctaSub"> Text us and we’ll respond fast.</span>
            </div>
            <div className="ctaBtns">
              <a className="secondaryBtn" href={`sms:${MAIN}`}>
                Text {mainPretty}
              </a>
              <a className="primaryBtn" href={`mailto:${EMAIL}`}>
                Email for Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>© {new Date().getFullYear()} Atlas Digital Lab — Websites • SEO • Branding</div>
        <div>
          Main: {mainPretty} • Sales: {salesPretty} • {EMAIL}
        </div>
      </footer>

      <style>{`
        .page{
          min-height:100vh;
          background: radial-gradient(circle at 20% 0%, #0f2b4a 0%, #0b1426 55%, #070b14 100%);
          color:#eaf2ff;
          padding: 0 22px 36px;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        }

        .navWrap{
          position: sticky;
          top:0;
          z-index:50;
          padding-top: 14px;
          backdrop-filter: blur(10px);
        }

        .nav{
          max-width: 1180px;
          margin: 0 auto;
          padding: 14px 16px;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          background: rgba(10,16,30,0.55);
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap: 14px;
        }

        .brand{display:flex; align-items:center; gap:10px; min-width: 240px;}
        .logo{
          width: 34px; height: 34px; border-radius: 10px;
          background: linear-gradient(135deg, #2dd4ff, #3b82f6);
          box-shadow: 0 10px 30px rgba(45,212,255,0.18);
        }
        .brandName{font-weight:800; letter-spacing:0.2px;}
        .brandTag{font-size: 12px; opacity:0.75; margin-top:2px;}

        .links{display:flex; gap:18px; align-items:center;}
        .link{color:#eaf2ff; opacity:0.85; text-decoration:none; font-weight:600; font-size:14px;}
        .link:hover{opacity:1;}

        .navCtas{display:flex; gap:10px; align-items:center;}
        .pill{
          text-decoration:none;
          color:#eaf2ff;
          font-weight:700;
          font-size: 13px;
          padding: 10px 12px;
          border-radius: 999px;
          border:1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          white-space: nowrap;
        }
        .pill:hover{border-color: rgba(255,255,255,0.22);}
        .pill.sales{opacity:0.9;}

        .primaryBtn{
          text-decoration:none;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 11px 14px;
          border-radius: 12px;
          font-weight: 800;
          color:#04121f;
          background: linear-gradient(135deg, #2dd4ff, #3b82f6);
          box-shadow: 0 18px 40px rgba(45,212,255,0.18);
          white-space: nowrap;
        }
        .primaryBtn:hover{filter: brightness(1.05);}
        .secondaryBtn{
          text-decoration:none;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 11px 14px;
          border-radius: 12px;
          font-weight: 800;
          color:#eaf2ff;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          white-space: nowrap;
        }
        .secondaryBtn:hover{border-color: rgba(255,255,255,0.22);}

        .big{padding: 12px 16px; border-radius: 14px;}

        .hero{
          max-width: 1180px;
          margin: 18px auto 0;
          display:grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 32px;
          align-items: start;
          padding: 26px 6px 10px;
        }

        .kicker{
          display:inline-flex;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.04);
          font-weight: 700;
          font-size: 12px;
          letter-spacing: 0.2px;
          opacity: 0.9;
          margin-bottom: 16px;
        }

        .h1{
          font-size: 48px;
          line-height: 1.05;
          margin: 0 0 14px;
          letter-spacing: -0.6px;
          font-weight: 900;
        }
        .accent{color:#2dd4ff;}
        .sub{
          margin: 0 0 18px;
          max-width: 54ch;
          opacity: 0.86;
          font-size: 16px;
          line-height: 1.55;
        }

        .heroBtns{display:flex; gap:12px; flex-wrap: wrap; margin-bottom: 16px;}

        .miniCards{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 10px;
        }
        .miniCard{
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.04);
          border-radius: 16px;
          padding: 12px 12px;
        }
        .miniTitle{font-weight:900; font-size: 13px; margin-bottom: 4px;}
        .miniText{opacity:0.82; font-size: 12px; line-height: 1.45;}

        .mock{
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.04);
          overflow:hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.35);
        }
        .mockTop{
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap: 10px;
          padding: 12px 14px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
        }
        .dots{display:flex; gap:6px;}
        .dots span{width:10px; height:10px; border-radius:999px; background: rgba(255,255,255,0.14);}
        .mockLabel{font-weight: 900; font-size: 12px; opacity: 0.9;}
        .mockBody{padding: 14px;}
        .bar{height:10px; border-radius: 999px; background: rgba(255,255,255,0.14); margin-bottom: 10px;}
        .bar.short{width: 70%;}
        .pillRow{display:flex; gap: 10px; flex-wrap: wrap; margin: 10px 0 14px;}
        .mockPill{
          padding: 10px 12px;
          border-radius: 999px;
          font-weight: 800;
          font-size: 12px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(45,212,255,0.10);
        }
        .mockPill.dim{
          background: rgba(255,255,255,0.05);
          opacity: 0.9;
        }
        .blocks{display:grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 14px;}
        .block{height: 44px; border-radius: 12px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10);}
        .ctaStrip{height: 44px; border-radius: 12px; background: linear-gradient(135deg, rgba(45,212,255,0.35), rgba(59,130,246,0.25)); border: 1px solid rgba(45,212,255,0.22);}

        .section{
          max-width: 1180px;
          margin: 26px auto 0;
          padding: 6px;
        }
        h2{
          margin: 0 0 6px;
          font-size: 26px;
          letter-spacing: -0.2px;
        }
        .sectionSub{
          margin: 0 0 16px;
          opacity: 0.82;
        }

        .servicesGrid{
          display:grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }
        .card{
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.04);
          padding: 16px 16px;
        }
        .card h3{margin: 0 0 6px; font-size: 16px;}
        .card p{margin: 0 0 10px; opacity:0.84;}
        ul{margin: 0; padding-left: 18px; opacity: 0.9;}
        li{margin: 6px 0;}

        .demosGrid{
          display:grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }
        .demoCard{
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.04);
          padding: 16px;
          display:flex;
          flex-direction: column;
          gap: 12px;
        }
        .demoTop{
          display:flex;
          align-items:flex-start;
          justify-content: space-between;
          gap: 12px;
        }
        .demoTitle{font-weight: 900; margin-bottom: 4px;}
        .demoText{opacity: 0.82;}
        .badge{
          font-size: 12px;
          font-weight: 900;
          padding: 8px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(45,212,255,0.10);
          white-space: nowrap;
        }
        .badge.alt{background: rgba(255,255,255,0.06);}

        .pricingGrid{
          display:grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
          align-items: stretch;
        }

        .priceBox{
          position: relative;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.04);
          padding: 16px;
          overflow:hidden;
          display:flex;
          flex-direction: column;
        }
        .priceBox h3{margin: 0 0 6px;}
        .price{font-size: 34px; font-weight: 950; letter-spacing: -0.6px; margin: 2px 0 2px;}
        .monthly{
          font-weight: 900;
          opacity: 0.9;
          margin-bottom: 10px;
          color: #bfeaff;
        }
        .priceBtn{
          margin-top: auto;
          text-decoration:none;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 12px 14px;
          border-radius: 12px;
          font-weight: 900;
          color:#eaf2ff;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
        }
        .priceBtn:hover{border-color: rgba(255,255,255,0.24);}

        .featured{
          border-color: rgba(45,212,255,0.25);
          background: linear-gradient(180deg, rgba(45,212,255,0.18), rgba(255,255,255,0.03));
          box-shadow: 0 28px 70px rgba(45,212,255,0.10);
        }

        /* ✅ ELITE POP — make it POP */
        .elitePop{
          border: 2px solid rgba(255, 215, 90, 0.55);
          background:
            radial-gradient(circle at 20% 0%, rgba(255,215,90,0.18) 0%, rgba(255,255,255,0.03) 55%),
            rgba(255,255,255,0.04);
          box-shadow:
            0 0 0 1px rgba(255,215,90,0.18),
            0 30px 90px rgba(255,215,90,0.10),
            0 14px 40px rgba(0,0,0,0.35);
          transform: translateY(-4px);
        }
        .elitePop .price{
          background: linear-gradient(135deg, #ffd45a, #2dd4ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .corner{
          position:absolute;
          top: 12px;
          right: 12px;
          font-size: 12px;
          font-weight: 950;
          padding: 8px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(45,212,255,0.12);
        }
        .corner.premium{
          border-color: rgba(255,215,90,0.45);
          background: rgba(255,215,90,0.14);
          color: #ffe7a6;
        }

        .primary{
          color:#04121f;
          border: none;
          background: linear-gradient(135deg, #2dd4ff, #3b82f6);
          box-shadow: 0 18px 40px rgba(45,212,255,0.18);
        }

        .ctaRow{margin-top: 14px;}
        .ctaBar{
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.04);
          padding: 14px;
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap: 14px;
        }
        .ctaText{font-weight: 900;}
        .ctaSub{opacity:0.8; font-weight: 700; margin-left: 8px;}
        .ctaBtns{display:flex; gap: 10px; flex-wrap: wrap;}

        .footer{
          max-width: 1180px;
          margin: 20px auto 0;
          padding: 18px 6px 6px;
          display:flex;
          justify-content: space-between;
          gap: 12px;
          border-top: 1px solid rgba(255,255,255,0.10);
          opacity: 0.85;
          font-size: 13px;
        }

        @media(max-width: 1050px){
          .hero{grid-template-columns: 1fr; }
          .miniCards{grid-template-columns: 1fr; }
          .servicesGrid{grid-template-columns: 1fr;}
          .demosGrid{grid-template-columns: 1fr;}
          .pricingGrid{grid-template-columns: 1fr;}
          .links{display:none;}
          .brand{min-width: unset;}
          .nav{flex-wrap: wrap; justify-content: center;}
          .navCtas{flex-wrap: wrap; justify-content: center;}
          .h1{font-size: 38px;}
          .footer{flex-direction: column;}
          .ctaBar{flex-direction: column; align-items:flex-start;}
        }
      `}</style>
    </main>
  );
}