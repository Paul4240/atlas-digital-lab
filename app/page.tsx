"use client";

import Link from "next/link";

export default function HomePage() {
  const MAIN_PHONE = "8327050313";
  const MAIN_PRETTY = "(832) 705-0313";

  const SALES_1 = "3463657906";
  const SALES_1_PRETTY = "(346) 365-7906";

  const SALES_2 = "8326773150";
  const SALES_2_PRETTY = "(832) 677-3150";

  const SALES_3 = "3465328803";
  const SALES_3_PRETTY = "(346) 532-8803";

  const EMAIL = "hello@atlasdigitallab.com";

  return (
    <main className="page">
      <div className="bgGlow glowOne" />
      <div className="bgGlow glowTwo" />
      <div className="steelNoise" />
      <div className="fixedEmblem" />

      <header className="topbar">
        <div className="container topbarInner">
          <Link href="/" className="brandWrap">
            <div className="brandMark texasMark" aria-hidden>
              <svg viewBox="0 0 64 64" className="texasSvg">
                <path
                  d="M29.5 6.5h8.5v10.8h10.3v9.6h9.2v10.2h-8.7v9.9h-9.7V57H28.9V46.6H19V36.9H8.4V26.8h10V17.2h11.1V6.5Z"
                  className="texasShape"
                />
                <path
                  d="M32 18.8l2.4 7.3H42l-6.1 4.4 2.3 7.2-6.2-4.5-6.2 4.5 2.4-7.2-6.2-4.4h7.6L32 18.8Z"
                  className="texasStar"
                />
              </svg>
            </div>

            <div>
              <div className="brandName">Atlas Digital Lab</div>
              <div className="brandSub">Websites • SEO • Small Business Growth</div>
            </div>
          </Link>

          <nav className="navLinks">
            <a href="#services">Services</a>
            <a href="#demos">Demos</a>
            <a href="#pricing">Pricing</a>
            <Link href="/houston-web-design">Houston SEO</Link>
          </nav>

          <div className="topActions">
            <a href={`tel:${MAIN_PHONE}`} className="pill mainPill">
              Main {MAIN_PRETTY}
            </a>
            <a href={`mailto:${EMAIL}`} className="pill primaryPill">
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container heroGrid">
          <div className="heroLeft">
            <div className="eyebrow">Texas-built presentation • Stronger positioning • Custom-built websites</div>

            <h1>
              Websites that make your business look established, trusted, and worth calling.
            </h1>

            <p className="heroText">
              Atlas Digital Lab creates high-conversion websites, sharp branding, and
              local SEO-ready pages for businesses that want to look more professional
              and win better customers.
            </p>

            <div className="heroActions">
              <a href={`tel:${MAIN_PHONE}`} className="btn primaryBtn">
                Call {MAIN_PRETTY}
              </a>
              <a href="#demos" className="btn darkBtn">
                View Demos
              </a>
              <a href={`mailto:${EMAIL}`} className="btn ghostBtn">
                Email for Quote
              </a>
            </div>

            <div className="heroStats">
              <div className="statItem">
                <div className="statValue">4</div>
                <div className="statLabel">Live demo concepts</div>
              </div>

              <div className="statItem">
                <div className="statValue">Fast</div>
                <div className="statLabel">Turnaround and launch flow</div>
              </div>

              <div className="statItem">
                <div className="statValue">SEO</div>
                <div className="statLabel">Structured for local visibility</div>
              </div>
            </div>

            <div className="heroContactStrip">
              <div className="contactMini">
                <span className="contactMiniLabel">Main</span>
                <a href={`tel:${MAIN_PHONE}`}>{MAIN_PRETTY}</a>
              </div>
              <div className="contactMini">
                <span className="contactMiniLabel">Sales</span>
                <a href={`tel:${SALES_1}`}>{SALES_1_PRETTY}</a>
              </div>
              <div className="contactMini">
                <span className="contactMiniLabel">Sales</span>
                <a href={`tel:${SALES_2}`}>{SALES_2_PRETTY}</a>
              </div>
              <div className="contactMini">
                <span className="contactMiniLabel">Sales</span>
                <a href={`tel:${SALES_3}`}>{SALES_3_PRETTY}</a>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="heroPanel">
              <div className="panelTop">
                <div>
                  <div className="panelEyebrow">ATLAS DIGITAL LAB</div>
                  <div className="panelTitle">
                    A cleaner online presence changes how people value your business.
                  </div>
                </div>

                <div className="panelBadge">Premium Agency</div>
              </div>

              <div className="panelLines">
                <div className="panelLine">
                  <div className="lineDot" />
                  <div>
                    <div className="lineTitle">Premium presentation</div>
                    <div className="lineText">
                      Look more credible, established, and higher-value from the first click.
                    </div>
                  </div>
                </div>

                <div className="panelLine">
                  <div className="lineDot" />
                  <div>
                    <div className="lineTitle">Clear conversion flow</div>
                    <div className="lineText">
                      Strong headlines, trust sections, and calls-to-action that guide people to contact.
                    </div>
                  </div>
                </div>

                <div className="panelLine">
                  <div className="lineDot" />
                  <div>
                    <div className="lineTitle">Local growth ready</div>
                    <div className="lineText">
                      Built with speed, mobile usability, and search visibility in mind.
                    </div>
                  </div>
                </div>
              </div>

              <div className="panelActionRow">
                <a href={`mailto:${EMAIL}`} className="btn primaryBtn fullBtn">
                  Start a Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trustSection">
        <div className="container trustRow">
          <span>Premium layouts</span>
          <span>High-conversion structure</span>
          <span>Local SEO-ready builds</span>
          <span>Modern branding polish</span>
          <span>Fast communication</span>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="splitIntro">
            <div className="introLeft">
              <div className="sectionEyebrow">Services</div>
              <h2>What we build for growing small businesses</h2>
            </div>

            <div className="introRight">
              <p>
                Everything is designed to help your company look stronger online,
                build trust faster, and make it easier for customers to take action.
              </p>
            </div>
          </div>

          <div className="serviceRows">
            <div className="serviceRow">
              <div className="serviceNumber">01</div>
              <div className="serviceContent">
                <h3>Websites</h3>
                <p>
                  Fast, premium websites designed to look high-end and convert real leads.
                </p>
              </div>
              <div className="serviceList">
                <span>Mobile-first layout</span>
                <span>Clear calls-to-action</span>
                <span>Premium visual hierarchy</span>
                <span>Fast, clean front-end structure</span>
              </div>
            </div>

            <div className="serviceRow">
              <div className="serviceNumber">02</div>
              <div className="serviceContent">
                <h3>SEO & Google Setup</h3>
                <p>
                  Build visibility locally and strengthen trust when customers search your service.
                </p>
              </div>
              <div className="serviceList">
                <span>Google Business profile help</span>
                <span>On-page SEO structure</span>
                <span>Performance and indexing readiness</span>
                <span>Service-area content support</span>
              </div>
            </div>

            <div className="serviceRow">
              <div className="serviceNumber">03</div>
              <div className="serviceContent">
                <h3>Branding & Positioning</h3>
                <p>
                  Cleaner branding, stronger presentation, and a more polished first impression.
                </p>
              </div>
              <div className="serviceList">
                <span>Logo refresh direction</span>
                <span>Typography and color polish</span>
                <span>Premium brand feel</span>
                <span>Stronger visual consistency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section featureSection">
        <div className="container featureGrid">
          <div className="featureLeft">
            <div className="sectionEyebrow">Why Atlas</div>
            <h2>Built for businesses that want to look more expensive than they are today</h2>
          </div>

          <div className="featureRight">
            <div className="featureList">
              <div className="featureItem">
                <div className="featureItemTitle">Sharper first impression</div>
                <div className="featureItemText">
                  Better spacing, stronger type, cleaner sections, and a more premium overall look.
                </div>
              </div>

              <div className="featureItem">
                <div className="featureItemTitle">Not a cookie-cutter feel</div>
                <div className="featureItemText">
                  Even when using proven structure, the goal is to make the brand feel elevated and custom.
                </div>
              </div>

              <div className="featureItem">
                <div className="featureItemTitle">Designed for real-world selling</div>
                <div className="featureItemText">
                  Whether someone finds you on Google, Facebook, Instagram, or a referral,
                  the site should make them feel like they’re dealing with a serious business.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="demos" className="section">
        <div className="container">
          <div className="splitIntro">
            <div className="introLeft">
              <div className="sectionEyebrow">Demos</div>
              <h2>Real directions we can build from.</h2>
            </div>

            <div className="introRight">
              <p>
                Different niches need different presentation styles. These demos show the
                kind of layout and sales direction we can build for your business.
              </p>
            </div>
          </div>

          <div className="demoLayout">
            <Link className="demoLarge" href="/demo/pet-bakery">
              <div className="demoKicker">Flagship Demo</div>
              <div className="demoLargeTitle">Pet Bakery Demo</div>
              <div className="demoLargeText">
                Boutique storefront direction with stronger warmth, better product presentation,
                and a more polished visual flow.
              </div>
              <div className="demoArrow">Open Demo</div>
            </Link>

            <div className="demoSide">
              <Link className="demoSmall" href="/demo/home-styling">
                <div className="demoSmallTitle">Luxury Interior Styling</div>
                <div className="demoSmallText">
                  Elegant, image-led residential presentation.
                </div>
              </Link>

              <Link className="demoSmall" href="/demo/roofing">
                <div className="demoSmallTitle">Roofing Demo</div>
                <div className="demoSmallText">
                  Trust-based local service structure for stronger quote intent.
                </div>
              </Link>

              <Link className="demoSmall" href="/demo/metal-cards">
                <div className="demoSmallTitle">Metal Cards Demo</div>
                <div className="demoSmallText">
                  Product-style layout with stronger offer structure.
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="container">
          <div className="splitIntro">
            <div className="introLeft">
              <div className="sectionEyebrow">Pricing</div>
              <h2>Simple pricing for businesses ready to look more established.</h2>
            </div>

            <div className="introRight">
              <p>
                Better websites help your company feel more trusted, more valuable,
                and more worth contacting.
              </p>
            </div>
          </div>

          <div className="pricingGrid">
            <div className="priceCard">
              <div className="plan">Starter</div>
              <div className="price">$299</div>
              <div className="monthly">$80/mo</div>
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
              <div className="plan">Growth</div>
              <div className="price">$499</div>
              <div className="monthly">$130/mo</div>
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

            <div className="priceCard featuredCard">
              <div className="plan">Pro</div>
              <div className="tag">Most Popular</div>
              <div className="price">$799</div>
              <div className="monthly">$150/mo</div>
              <ul>
                <li>Everything in Growth</li>
                <li>Advanced SEO setup</li>
                <li>Google Business optimization</li>
                <li>Priority design</li>
              </ul>
              <a className="priceBtn primaryPriceBtn" href={`tel:${SALES_1}`}>
                Talk to Sales
              </a>
            </div>

            <div className="priceCard eliteCard">
              <div className="plan">Elite</div>
              <div className="tag goldTag">Premium Option</div>
              <div className="price">$1,200</div>
              <div className="monthly">$200/mo</div>
              <ul>
                <li>Custom premium design</li>
                <li>Brand strategy layout</li>
                <li>High-conversion structure</li>
                <li>Service area + trust sections</li>
              </ul>
              <a className="priceBtn primaryPriceBtn" href={`tel:${SALES_2}`}>
                Build My Elite Site
              </a>
            </div>
          </div>

          <div className="salesBand">
            <div className="salesBandTitle">Sales Team</div>
            <div className="salesBandRow">
              <a href={`tel:${SALES_1}`}>Sales {SALES_1_PRETTY}</a>
              <a href={`tel:${SALES_2}`}>Sales {SALES_2_PRETTY}</a>
              <a href={`tel:${SALES_3}`}>Sales {SALES_3_PRETTY}</a>
            </div>
          </div>

          <div className="pricingFooter">
            <div className="pricingNote">
              Want a custom direction or a niche-specific demo? Reach out and we’ll build around
              the type of customer you want to attract.
            </div>

            <div className="pricingActions">
              <a className="pill" href={`tel:${MAIN_PHONE}`}>
                Main {MAIN_PRETTY}
              </a>
              <a className="pill" href={`tel:${SALES_1}`}>
                Sales {SALES_1_PRETTY}
              </a>
              <a className="pill primaryPill" href={`mailto:${EMAIL}`}>
                Email for Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section finalSection">
        <div className="container finalPanel">
          <div className="finalLeft">
            <div className="sectionEyebrow">Atlas Digital Lab</div>
            <h2>Want your company to look this sharp online?</h2>
            <p>
              We build websites that help businesses look more polished, more serious,
              and more ready for better customers.
            </p>
          </div>

          <div className="finalRight">
            <a href={`mailto:${EMAIL}`} className="btn primaryBtn">
              Email Us
            </a>
            <a href={`tel:${MAIN_PHONE}`} className="btn ghostBtn">
              Call {MAIN_PRETTY}
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div className="footerLeft">
            <div className="footerBrand">Atlas Digital Lab</div>
            <div className="footerSub">Websites • SEO • Small Business Growth</div>
          </div>

          <div className="footerCenter">
            <div className="footerContactLine">
              <span>Main:</span> <a href={`tel:${MAIN_PHONE}`}>{MAIN_PRETTY}</a>
            </div>
            <div className="footerContactLine">
              <span>Sales:</span> <a href={`tel:${SALES_1}`}>{SALES_1_PRETTY}</a>
            </div>
            <div className="footerContactLine">
              <span>Sales:</span> <a href={`tel:${SALES_2}`}>{SALES_2_PRETTY}</a>
            </div>
            <div className="footerContactLine">
              <span>Sales:</span> <a href={`tel:${SALES_3}`}>{SALES_3_PRETTY}</a>
            </div>
          </div>

          <div className="footerLinks">
            <a href={`mailto:${EMAIL}`}>Email</a>
            <a href={`tel:${MAIN_PHONE}`}>Call</a>
            <Link href="/houston-web-design">Houston SEO</Link>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: linear-gradient(180deg, #081018 0%, #0c1520 40%, #09111a 100%);
          color: #eef4f8;
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .bgGlow {
          position: fixed;
          border-radius: 999px;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.18;
        }

        .glowOne {
          width: 320px;
          height: 320px;
          top: 90px;
          left: -120px;
          background: rgba(46, 180, 255, 0.22);
        }

        .glowTwo {
          width: 340px;
          height: 340px;
          bottom: 60px;
          right: -140px;
          background: rgba(240, 196, 138, 0.16);
        }

        .steelNoise {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.025;
          background-image:
            radial-gradient(circle at 20% 20%, #ffffff 0.7px, transparent 0.8px),
            radial-gradient(circle at 80% 30%, #000000 0.7px, transparent 0.8px),
            radial-gradient(circle at 40% 70%, #ffffff 0.7px, transparent 0.8px),
            radial-gradient(circle at 65% 85%, #000000 0.7px, transparent 0.8px);
          background-size: 22px 22px, 28px 28px, 24px 24px, 30px 30px;
        }

        .fixedEmblem {
          position: fixed;
          right: -40px;
          top: 90px;
          width: 760px;
          height: 760px;
          z-index: 0;
          opacity: 0.09;
          pointer-events: none;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          filter: drop-shadow(0 0 28px rgba(0,0,0,0.35));
          background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 700'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1'%3E%3Cstop offset='0%25' stop-color='%23f0c48a'/%3E%3Cstop offset='100%25' stop-color='%239b6327'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none'%3E%3Ccircle cx='350' cy='350' r='255' stroke='url(%23g)' stroke-width='12'/%3E%3Ccircle cx='350' cy='350' r='218' stroke='url(%23g)' stroke-opacity='.55' stroke-width='8'/%3E%3Ccircle cx='350' cy='350' r='180' stroke='%23ffffff' stroke-opacity='.08' stroke-width='3'/%3E%3Cpath d='M350 150l30 92h97l-78 56 30 92-79-57-79 57 30-92-78-56h97z' fill='url(%23g)'/%3E%3Cpath d='M350 86l20 28 34-5-18 30 15 31-32-8-25 23-2-35-31-15 32-13z' fill='%23f0c48a' opacity='.92'/%3E%3Cpath d='M145 350h410' stroke='%23ffffff' stroke-opacity='.06' stroke-width='3'/%3E%3Cpath d='M350 145v410' stroke='%23ffffff' stroke-opacity='.06' stroke-width='3'/%3E%3C/g%3E%3C/svg%3E");
        }

        .container {
          max-width: 1220px;
          margin: 0 auto;
          padding-left: 18px;
          padding-right: 18px;
          position: relative;
          z-index: 2;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(12px);
          background: rgba(7, 12, 18, 0.68);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .topbarInner {
          min-height: 76px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .brandWrap {
          display: flex;
          gap: 12px;
          align-items: center;
          color: white;
          text-decoration: none;
        }

        .brandMark {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, rgba(240,196,138,.22), rgba(255,255,255,.04));
          border: 1px solid rgba(240,196,138,.18);
          box-shadow: 0 10px 24px rgba(0,0,0,.2);
          flex-shrink: 0;
        }

        .texasMark {
          position: relative;
          overflow: hidden;
        }

        .texasMark::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(130deg, transparent 18%, rgba(255,255,255,.14) 45%, transparent 70%);
          opacity: 0.55;
          pointer-events: none;
        }

        .texasSvg {
          width: 24px;
          height: 24px;
          display: block;
          filter: drop-shadow(0 2px 10px rgba(0,0,0,0.25));
        }

        .texasShape {
          fill: #9b6327;
        }

        .texasStar {
          fill: #f0c48a;
        }

        .brandName {
          font-size: 16px;
          font-weight: 800;
        }

        .brandSub {
          font-size: 12px;
          color: rgba(238,244,248,.72);
        }

        .navLinks,
        .topActions,
        .heroActions,
        .pricingActions,
        .finalRight,
        .footerLinks,
        .salesBandRow {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }

        .navLinks a,
        .footerLinks a,
        .footerContactLine a {
          color: rgba(238,244,248,.86);
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
        }

        .navLinks a:hover,
        .footerLinks a:hover,
        .footerContactLine a:hover {
          color: #f0c48a;
        }

        .pill,
        .btn,
        .priceBtn,
        .demoLarge,
        .demoSmall {
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease, background .22s ease;
        }

        .pill:hover,
        .btn:hover,
        .priceBtn:hover,
        .demoLarge:hover,
        .demoSmall:hover {
          transform: translateY(-3px);
        }

        .pill {
          min-height: 44px;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,.12);
          text-decoration: none;
          color: #eef4f8;
          font-weight: 800;
          font-size: 14px;
          background: rgba(255,255,255,.05);
        }

        .mainPill {
          background: rgba(255,255,255,.05);
        }

        .btn,
        .priceBtn {
          min-height: 52px;
          padding: 13px 18px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,.12);
          text-decoration: none;
          color: #eef4f8;
          font-weight: 800;
          background: rgba(255,255,255,.05);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .primaryPill,
        .primaryBtn,
        .primaryPriceBtn {
          background: linear-gradient(135deg, #f0c48a, #c48b43);
          border-color: transparent;
          color: #111;
          box-shadow: 0 14px 30px rgba(196,139,67,.24);
        }

        .darkBtn {
          background: rgba(255,255,255,.08);
        }

        .ghostBtn {
          background: rgba(255,255,255,.03);
        }

        .hero {
          padding-top: 78px;
          padding-bottom: 70px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.02fr .98fr;
          gap: 34px;
          align-items: center;
        }

        .eyebrow,
        .sectionEyebrow,
        .panelEyebrow,
        .demoKicker {
          display: inline-block;
          font-size: 12px;
          letter-spacing: .12em;
          text-transform: uppercase;
          font-weight: 900;
          color: #f0c48a;
          margin-bottom: 16px;
        }

        h1 {
          margin: 0 0 16px;
          font-size: clamp(42px, 6vw, 74px);
          line-height: .96;
          letter-spacing: -.05em;
          max-width: 11ch;
        }

        h2 {
          margin: 0;
          font-size: clamp(30px, 4vw, 52px);
          line-height: 1.02;
          letter-spacing: -.04em;
        }

        h3 {
          margin: 0 0 10px;
          font-size: 28px;
          line-height: 1.08;
          letter-spacing: -.03em;
        }

        .heroText,
        .introRight p,
        .serviceContent p,
        .featureItemText,
        .demoLargeText,
        .demoSmallText,
        .pricingNote,
        .finalLeft p,
        .lineText {
          color: rgba(238,244,248,.76);
          font-size: 17px;
          line-height: 1.72;
        }

        .heroStats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 26px;
        }

        .statItem {
          padding: 16px 0 0;
          border-top: 1px solid rgba(255,255,255,.08);
        }

        .statValue {
          font-size: 24px;
          font-weight: 900;
          color: #f0c48a;
          margin-bottom: 4px;
        }

        .statLabel {
          font-size: 13px;
          color: rgba(238,244,248,.68);
          line-height: 1.5;
        }

        .heroContactStrip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-top: 28px;
        }

        .contactMini {
          padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,.08);
        }

        .contactMiniLabel {
          display: block;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #8fe4ff;
          margin-bottom: 6px;
        }

        .contactMini a {
          color: #eef4f8;
          text-decoration: none;
          font-size: 14px;
          font-weight: 800;
        }

        .heroPanel {
          padding: 28px;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,.07), rgba(255,255,255,.03));
          border: 1px solid rgba(255,255,255,.08);
          box-shadow: 0 30px 70px rgba(0,0,0,.26);
          position: relative;
          overflow: hidden;
        }

        .panelTop {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 18px;
        }

        .panelTitle {
          font-size: 28px;
          line-height: 1.08;
          letter-spacing: -.03em;
          font-weight: 800;
          max-width: 13ch;
        }

        .panelBadge {
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.08);
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,.88);
          white-space: nowrap;
        }

        .panelLines {
          display: grid;
          gap: 18px;
          margin-top: 18px;
          margin-bottom: 20px;
        }

        .panelLine {
          display: grid;
          grid-template-columns: 12px 1fr;
          gap: 12px;
          align-items: start;
        }

        .lineDot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #8fe4ff;
          margin-top: 8px;
          box-shadow: 0 0 18px rgba(143,228,255,.4);
        }

        .lineTitle {
          font-weight: 800;
          margin-bottom: 6px;
          font-size: 15px;
        }

        .panelActionRow {
          margin-top: 16px;
        }

        .fullBtn {
          width: 100%;
        }

        .trustSection {
          padding-bottom: 24px;
        }

        .trustRow {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 999px;
          overflow: hidden;
          background: rgba(255,255,255,.03);
          backdrop-filter: blur(8px);
        }

        .trustRow span {
          padding: 15px 12px;
          text-align: center;
          font-size: 13px;
          font-weight: 700;
          color: rgba(238,244,248,.78);
          border-right: 1px solid rgba(255,255,255,.06);
        }

        .trustRow span:last-child {
          border-right: none;
        }

        .section {
          padding-top: 86px;
          padding-bottom: 86px;
        }

        .splitIntro {
          display: grid;
          grid-template-columns: 1fr .9fr;
          gap: 28px;
          align-items: end;
          margin-bottom: 34px;
        }

        .serviceRows,
        .featureList {
          display: grid;
          gap: 26px;
        }

        .serviceRow {
          display: grid;
          grid-template-columns: 80px 1fr .9fr;
          gap: 26px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,.08);
          align-items: start;
        }

        .serviceNumber {
          font-size: 34px;
          font-weight: 900;
          color: rgba(240,196,138,.92);
          line-height: 1;
        }

        .serviceList {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .serviceList span {
          min-height: 40px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.08);
          color: #d3dae0;
          font-size: 13px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .featureSection {
          background: linear-gradient(135deg, rgba(255,255,255,.02) 0%, rgba(255,255,255,.01) 100%);
        }

        .featureGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 34px;
          align-items: center;
        }

        .featureItem {
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255,255,255,.08);
        }

        .featureItem:last-child {
          border-bottom: none;
        }

        .featureItemTitle {
          font-size: 15px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .demoLayout {
          display: grid;
          grid-template-columns: 1.08fr .92fr;
          gap: 24px;
        }

        .demoLarge,
        .demoSmall {
          text-decoration: none;
          color: inherit;
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(255,255,255,.08);
          box-shadow: 0 18px 44px rgba(0,0,0,.12);
          backdrop-filter: blur(10px);
        }

        .demoLarge {
          border-radius: 28px;
          padding: 30px;
          min-height: 340px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          position: relative;
          overflow: hidden;
        }

        .demoLarge::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(240,196,138,.12), transparent 40%);
          pointer-events: none;
        }

        .demoLargeTitle {
          font-size: 32px;
          line-height: 1.04;
          letter-spacing: -.03em;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .demoArrow {
          display: inline-block;
          margin-top: 18px;
          color: #f0c48a;
          font-weight: 800;
        }

        .demoSide {
          display: grid;
          gap: 18px;
        }

        .demoSmall {
          border-radius: 24px;
          padding: 24px;
        }

        .demoSmallTitle {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
          align-items: stretch;
        }

        .priceCard {
          background: rgba(255,255,255,.035);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 24px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 18px 44px rgba(0,0,0,.12);
          backdrop-filter: blur(10px);
        }

        .featuredCard {
          transform: translateY(-6px);
        }

        .eliteCard {
          border-color: rgba(240,196,138,.26);
          box-shadow: 0 18px 44px rgba(196,139,67,.1);
        }

        .plan {
          font-weight: 800;
          font-size: 18px;
          margin-bottom: 8px;
          color: #f0c48a;
        }

        .tag {
          margin-bottom: 12px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          font-size: 12px;
          font-weight: 800;
          width: fit-content;
        }

        .goldTag {
          background: linear-gradient(135deg, #f0c48a, #c48b43);
          color: #111;
        }

        .price {
          font-size: 42px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 8px;
        }

        .monthly {
          opacity: .72;
          margin-bottom: 4px;
          font-weight: 800;
        }

        .priceCard ul {
          margin: 14px 0 0;
          padding-left: 18px;
          line-height: 1.8;
          color: rgba(238,244,248,.76);
          flex: 1;
        }

        .priceBtn {
          margin-top: 18px;
          width: 100%;
        }

        .salesBand {
          margin-top: 24px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,.08);
        }

        .salesBandTitle {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #8fe4ff;
          margin-bottom: 12px;
        }

        .salesBandRow a {
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(255,255,255,.04);
          color: #eef4f8;
          text-decoration: none;
          font-size: 14px;
          font-weight: 800;
        }

        .pricingFooter {
          margin-top: 34px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
        }

        .finalSection {
          padding-top: 38px;
        }

        .finalPanel {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 22px;
          flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,.08);
          padding-top: 34px;
        }

        .footer {
          padding-top: 26px;
          padding-bottom: 40px;
        }

        .footerInner {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 20px;
          align-items: start;
          border-top: 1px solid rgba(255,255,255,.08);
          padding-top: 24px;
        }

        .footerBrand {
          font-weight: 800;
          margin-bottom: 4px;
        }

        .footerSub {
          font-size: 13px;
          color: rgba(238,244,248,.66);
        }

        .footerContactLine {
          color: rgba(238,244,248,.76);
          font-size: 14px;
          line-height: 1.8;
        }

        .footerContactLine span {
          color: #8fe4ff;
          font-weight: 800;
          margin-right: 6px;
        }

        @media (max-width: 1160px) {
          .heroGrid,
          .featureGrid,
          .demoLayout,
          .splitIntro,
          .serviceRow {
            grid-template-columns: 1fr;
          }

          .pricingGrid {
            grid-template-columns: repeat(2, 1fr);
          }

          .featuredCard {
            transform: none;
          }

          .footerInner {
            grid-template-columns: 1fr;
          }

          h1 {
            max-width: none;
          }
        }

        @media (max-width: 900px) {
          .navLinks {
            display: none;
          }

          .trustRow,
          .heroStats,
          .heroContactStrip,
          .pricingGrid {
            grid-template-columns: 1fr;
          }

          .trustRow {
            border-radius: 22px;
          }

          .trustRow span {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,.06);
          }

          .trustRow span:last-child {
            border-bottom: none;
          }

          .fixedEmblem {
            width: 520px;
            height: 520px;
            right: -120px;
            top: 180px;
            opacity: 0.08;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding-left: 14px;
            padding-right: 14px;
          }

          .topbarInner,
          .topActions,
          .heroActions,
          .pricingActions,
          .finalRight,
          .footerLinks,
          .salesBandRow {
            flex-direction: column;
            align-items: stretch;
          }

          .pill,
          .btn,
          .priceBtn,
          .salesBandRow a {
            width: 100%;
          }

          .hero {
            padding-top: 54px;
            padding-bottom: 52px;
          }

          .section {
            padding-top: 70px;
            padding-bottom: 70px;
          }

          .heroPanel,
          .demoLarge,
          .demoSmall,
          .priceCard {
            padding: 20px;
            border-radius: 22px;
          }

          .price {
            font-size: 38px;
          }

          .tag {
            max-width: 100%;
            white-space: normal;
          }

          .panelTop {
            flex-direction: column;
            align-items: flex-start;
          }

          .fixedEmblem {
            width: 360px;
            height: 360px;
            right: -120px;
            top: 220px;
            opacity: 0.07;
          }
        }
      `}</style>
    </main>
  );
}