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
      <div className="bgGlow glowA" />
      <div className="bgGlow glowB" />
      <div className="starWrap" aria-hidden>
        <div className="starRing ringOne" />
        <div className="starRing ringTwo" />
        <div className="starShape">★</div>
      </div>

      <header className="topbar">
        <div className="container topbarInner">
          <Link href="/" className="brand">
            <div className="brandMark">★</div>
            <div>
              <div className="brandName">Atlas Digital Lab</div>
              <div className="brandSub">Websites • SEO • Small Business Growth</div>
            </div>
          </Link>

          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#demos">Demos</a>
            <a href="#pricing">Pricing</a>
            <Link href="/houston-web-design">Houston SEO</Link>
          </nav>

          <div className="topActions">
            <a href={`tel:${MAIN_PHONE}`} className="topBtn">
              Call {MAIN_PRETTY}
            </a>
            <a href={`mailto:${EMAIL}`} className="topBtn topBtnGold">
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container heroGrid">
          <div className="heroLeft">
            <div className="eyebrow">
              HOUSTON • SMALL BUSINESS WEBSITES • FAST TURNAROUND
            </div>

            <h1>
              Websites that make small businesses look expensive — and get more calls.
            </h1>

            <p className="heroCopy">
              Clean presentation, stronger trust, and sharper structure so your business
              feels more serious the second somebody lands on your site.
            </p>

            <div className="heroActions">
              <a href={`tel:${SALES_1}`} className="btn btnGold">
                Call / Text Sales
              </a>
              <a href="#demos" className="btn btnDark">
                See Real Examples
              </a>
              <a href={`mailto:${EMAIL}`} className="btn btnDark">
                Get a Quote
              </a>
            </div>

            <div className="salesBlock">
              <div className="salesLabel">Sales Team</div>
              <div className="salesRow">
                <a href={`tel:${SALES_1}`} className="salesChip">
                  Sales {SALES_1_PRETTY}
                </a>
                <a href={`tel:${SALES_2}`} className="salesChip">
                  Sales {SALES_2_PRETTY}
                </a>
                <a href={`tel:${SALES_3}`} className="salesChip">
                  Sales {SALES_3_PRETTY}
                </a>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="heroPanel">
              <div className="panelKicker">ATLAS DIGITAL LAB</div>
              <h2>A cleaner, more custom presentation for serious businesses.</h2>

              <div className="panelList">
                <div className="panelItem">
                  <strong>Stronger first impression</strong>
                  <p>
                    Better spacing and cleaner hierarchy make your business look more established.
                  </p>
                </div>

                <div className="panelItem">
                  <strong>More trust from the first click</strong>
                  <p>
                    People take a company more seriously when the site feels sharper and more complete.
                  </p>
                </div>

                <div className="panelItem">
                  <strong>Built to convert better</strong>
                  <p>
                    Clearer sections and stronger call-to-action flow help turn more visitors into leads.
                  </p>
                </div>
              </div>

              <a href={`mailto:${EMAIL}`} className="btn btnGold fullBtn">
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="sectionKicker">SERVICES</div>
              <h2 className="sectionTitle">Built to help businesses look stronger online.</h2>
            </div>

            <p className="sectionCopy">
              We build websites that feel more premium and more custom than the average
              small business site.
            </p>
          </div>

          <div className="serviceFlow">
            <div className="serviceRow">
              <div className="serviceNumber">01</div>
              <div className="serviceMain">
                <h3>Website Design</h3>
                <p>
                  Modern layout, better spacing, cleaner hierarchy, and a sharper first impression.
                </p>
              </div>
              <div className="serviceTags">
                <span>Mobile-first</span>
                <span>Premium feel</span>
                <span>Clear lead flow</span>
              </div>
            </div>

            <div className="serviceRow">
              <div className="serviceNumber">02</div>
              <div className="serviceMain">
                <h3>SEO & Google Setup</h3>
                <p>
                  Search-ready structure that helps local businesses show up stronger in maps and Google.
                </p>
              </div>
              <div className="serviceTags">
                <span>On-page SEO</span>
                <span>Google help</span>
                <span>Local focus</span>
              </div>
            </div>

            <div className="serviceRow">
              <div className="serviceNumber">03</div>
              <div className="serviceMain">
                <h3>Brand Presentation</h3>
                <p>
                  Sharper online presentation that helps your company feel more legit and more valuable.
                </p>
              </div>
              <div className="serviceTags">
                <span>Visual polish</span>
                <span>More trust</span>
                <span>Better positioning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section statementSection">
        <div className="container statementWrap">
          <div className="sectionKicker">WHY THIS MATTERS</div>
          <h2 className="sectionTitle">
            Most small business websites look outdated, cluttered, or cheap.
          </h2>
          <p className="sectionCopy wide">
            We fix that. The goal is simple — make your business look like the obvious
            choice the moment somebody lands on your page.
          </p>
        </div>
      </section>

      <section id="demos" className="section">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="sectionKicker">DEMOS</div>
              <h2 className="sectionTitle">Real directions we can build from.</h2>
            </div>

            <p className="sectionCopy">
              Different niches need different presentation styles. These demos
              show the direction we can build around your business.
            </p>
          </div>

          <div className="demoLayout">
            <Link href="/demo/pet-bakery" className="demoFeature">
              <div className="demoBadge">Flagship Demo</div>
              <h3>Pet Bakery Demo</h3>
              <p>
                Boutique storefront direction with stronger warmth, better product presentation,
                and a more polished visual flow.
              </p>
              <span>Open Demo</span>
            </Link>

            <Link href="/demo/home-styling" className="demoTile">
              <div className="demoTileBody">
                <strong>Luxury Interior Styling</strong>
                <small>Elegant, image-led residential presentation.</small>
                <span>Open Demo</span>
              </div>
            </Link>

            <Link href="/demo/roofing" className="demoTile">
              <div className="demoTileBody">
                <strong>Roofing Demo</strong>
                <small>Trust-based local service structure.</small>
                <span>Open Demo</span>
              </div>
            </Link>

            <Link href="/demo/metal-cards" className="demoTile">
              <div className="demoTileBody">
                <strong>Metal Cards Demo</strong>
                <small>Product-style layout with stronger offer flow.</small>
                <span>Open Demo</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section id="pricing" className="section pricingSection">
        <div className="container">
          <div className="sectionHead">
            <div>
              <div className="sectionKicker">PRICING</div>
              <h2 className="sectionTitle">
                Simple pricing for businesses ready to look more established.
              </h2>
            </div>

            <p className="sectionCopy">
              Better websites help your company feel more trusted, more valuable, and
              more worth contacting.
            </p>
          </div>

          <div className="pricingBanner">
            Most businesses choose Pro ($799) or Elite ($1,200)
          </div>

          <div className="pricingGrid">
            <div className="priceCard">
              <div className="plan">Starter</div>
              <div className="price">$299</div>
              <div className="monthly">$80/mo</div>
              <p>Single page • Mobile • Contact</p>
            </div>

            <div className="priceCard">
              <div className="plan">Growth</div>
              <div className="price">$499</div>
              <div className="monthly">$130/mo</div>
              <p>Multi-section • Trust blocks</p>
            </div>

            <div className="priceCard featuredCard">
              <div className="smallTag">Most Popular</div>
              <div className="plan">Pro</div>
              <div className="price">$799</div>
              <div className="monthly">$150/mo</div>
              <p>Advanced SEO • Priority design</p>
            </div>

            <div className="priceCard eliteCard">
              <div className="smallTag goldTag">Best Results</div>
              <div className="plan">Elite</div>
              <div className="price">$1,200</div>
              <div className="monthly">$200/mo</div>
              <p>Premium custom build</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section finalSection">
        <div className="container">
          <h2 className="sectionTitle">Want your company to look this sharp online?</h2>

          <div className="finalActions">
            <a href={`mailto:${EMAIL}`} className="btn btnGold">
              Email Us
            </a>
            <a href={`tel:${MAIN_PHONE}`} className="btn btnDark">
              Call {MAIN_PRETTY}
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(216,180,79,0.08), transparent 22%),
            linear-gradient(180deg, #060b14 0%, #08101b 50%, #050a12 100%);
          color: #f4efe4;
          font-family: Georgia, "Times New Roman", serif;
          position: relative;
          overflow-x: hidden;
        }

        .bgGlow {
          position: fixed;
          border-radius: 999px;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.14;
        }

        .glowA {
          width: 260px;
          height: 260px;
          top: 70px;
          left: -120px;
          background: rgba(216,180,79,0.5);
        }

        .glowB {
          width: 280px;
          height: 280px;
          right: -100px;
          bottom: 120px;
          background: rgba(44,74,124,0.5);
        }

        .starWrap {
          position: fixed;
          right: -10px;
          top: 130px;
          width: 640px;
          height: 640px;
          opacity: 0.44;
          pointer-events: none;
          z-index: 0;
        }

        .starRing {
          position: absolute;
          border-radius: 999px;
          border: 2px solid rgba(216, 180, 79, 0.18);
        }

        .ringOne {
          inset: 40px;
        }

        .ringTwo {
          inset: 90px;
        }

        .starShape {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(216, 180, 79, 0.28);
          font-size: 260px;
          line-height: 1;
        }

        .container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(6, 11, 20, 0.72);
          backdrop-filter: blur(14px);
        }

        .topbarInner {
          min-height: 76px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
        }

        .brand {
          display: flex;
          gap: 12px;
          align-items: center;
          text-decoration: none;
          color: #f4efe4;
        }

        .brandMark {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: rgba(216,180,79,0.12);
          color: #d8b44f;
          font-size: 18px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.18);
        }

        .brandName {
          font-family: Arial, sans-serif;
          font-size: 15px;
          font-weight: 800;
        }

        .brandSub {
          font-family: Arial, sans-serif;
          font-size: 12px;
          color: #b8c2cf;
        }

        .nav,
        .topActions,
        .heroActions,
        .salesRow,
        .finalActions {
          display: flex;
          gap: 12px;
          align-items: center;
          flex-wrap: wrap;
        }

        .nav a {
          font-family: Arial, sans-serif;
          text-decoration: none;
          color: #e3e8ef;
          font-size: 14px;
          font-weight: 700;
        }

        .topBtn,
        .btn,
        .salesChip {
          font-family: Arial, sans-serif;
          text-decoration: none;
          font-weight: 700;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .topBtn:hover,
        .btn:hover,
        .salesChip:hover,
        .demoFeature:hover,
        .demoTile:hover,
        .priceCard:hover {
          transform: translateY(-3px);
        }

        .topBtn,
        .btn {
          padding: 13px 18px;
          border-radius: 12px;
        }

        .topBtn {
          color: #f4efe4;
          background: rgba(255,255,255,0.05);
        }

        .topBtnGold,
        .btnGold {
          background: linear-gradient(135deg, #e1c15f, #c89e2c);
          color: #111;
          box-shadow: 0 12px 34px rgba(216,180,79,0.16);
        }

        .btnDark {
          color: #f4efe4;
          background: rgba(255,255,255,0.055);
        }

        .hero {
          padding: 42px 0 0;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 44px;
          align-items: start;
        }

        .eyebrow,
        .sectionKicker,
        .panelKicker,
        .salesLabel {
          font-family: Arial, sans-serif;
          font-size: 12px;
          letter-spacing: 0.12em;
          font-weight: 800;
          color: #d8b44f;
          margin-bottom: 16px;
        }

        h1 {
          margin: 0 0 22px;
          font-size: clamp(52px, 7vw, 84px);
          line-height: 0.97;
          letter-spacing: -0.04em;
          max-width: 9ch;
        }

        .heroCopy,
        .sectionCopy,
        .demoFeature p,
        .demoTile small,
        .priceCard p,
        .serviceMain p,
        .panelItem p,
        .monthly {
          font-family: Arial, sans-serif;
          color: #bcc6d4;
          line-height: 1.65;
          font-size: 17px;
        }

        .heroCopy {
          max-width: 620px;
          margin: 0 0 22px;
        }

        .salesBlock {
          margin-top: 18px;
        }

        .salesChip {
          color: #eef3fb;
          background: rgba(255,255,255,0.05);
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 13px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        }

        .heroPanel,
        .demoFeature,
        .demoTile,
        .priceCard {
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.05),
            rgba(255,255,255,0.025)
          );
          box-shadow: 0 24px 60px rgba(0,0,0,0.18);
        }

        .heroPanel {
          padding: 34px 32px;
          border-radius: 32px;
        }

        .heroPanel h2 {
          margin: 0 0 14px;
          font-size: 38px;
          line-height: 1.02;
          letter-spacing: -0.03em;
        }

        .panelList {
          display: grid;
          gap: 18px;
          margin: 22px 0 24px;
        }

        .panelItem strong {
          display: block;
          font-family: Arial, sans-serif;
          font-size: 15px;
          margin-bottom: 6px;
        }

        .panelItem p {
          margin: 0;
          font-size: 14px;
        }

        .fullBtn {
          width: 100%;
          text-align: center;
        }

        .section {
          margin-top: 92px;
        }

        .sectionHead {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 28px;
          align-items: end;
          margin-bottom: 28px;
        }

        .sectionTitle {
          margin: 0;
          font-size: clamp(38px, 4vw, 56px);
          line-height: 1.04;
          letter-spacing: -0.03em;
        }

        .wide {
          max-width: 760px;
        }

        .serviceFlow {
          display: grid;
          gap: 18px;
        }

        .serviceRow {
          display: grid;
          grid-template-columns: 80px 1fr 0.95fr;
          gap: 22px;
          align-items: start;
          background: linear-gradient(135deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015));
          border-radius: 22px;
          padding: 22px;
        }

        .serviceNumber {
          font-size: 38px;
          line-height: 1;
          color: #d8b44f;
          font-weight: 700;
        }

        .serviceMain h3 {
          margin: 0 0 10px;
          font-size: 30px;
          line-height: 1.05;
        }

        .serviceMain p {
          margin: 0;
        }

        .serviceTags {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-self: center;
        }

        .serviceTags span {
          font-family: Arial, sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #dbe2ec;
          padding: 9px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
        }

        .statementWrap {
          padding-top: 8px;
        }

        .demoLayout {
          display: grid;
          grid-template-columns: 1.08fr 1fr;
          grid-template-areas:
            "feature one"
            "feature two"
            "feature three";
          gap: 18px;
          align-items: stretch;
        }

        .demoFeature {
          grid-area: feature;
          text-decoration: none;
          color: #f4efe4;
          border-radius: 32px;
          padding: 34px;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .demoBadge,
        .smallTag {
          width: fit-content;
          font-family: Arial, sans-serif;
          font-size: 12px;
          font-weight: 800;
          border-radius: 999px;
          padding: 7px 10px;
        }

        .demoBadge {
          background: rgba(111,182,255,0.14);
          color: #abd5ff;
          margin-bottom: 18px;
        }

        .demoFeature h3 {
          margin: 0 0 12px;
          font-size: 42px;
          line-height: 1.02;
          letter-spacing: -0.03em;
        }

        .demoFeature p {
          margin: 0 0 18px;
          max-width: 540px;
        }

        .demoFeature span:last-child,
        .demoTile span {
          font-family: Arial, sans-serif;
          color: #d8b44f;
          font-size: 14px;
          font-weight: 700;
        }

        .demoTile {
          text-decoration: none;
          color: #f4efe4;
          border-radius: 24px;
          min-height: 128px;
          display: flex;
          align-items: stretch;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .demoTile:nth-child(2) {
          grid-area: one;
        }

        .demoTile:nth-child(3) {
          grid-area: two;
        }

        .demoTile:nth-child(4) {
          grid-area: three;
        }

        .demoTileBody {
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
        }

        .demoTile strong {
          font-size: 30px;
          line-height: 1.05;
          margin-bottom: 8px;
        }

        .demoTile small {
          margin-bottom: 10px;
        }

        .pricingBanner {
          display: inline-block;
          margin-bottom: 22px;
          font-family: Arial, sans-serif;
          color: #d8b44f;
          background: rgba(216,180,79,0.08);
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 14px;
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .priceCard {
          border-radius: 24px;
          padding: 24px;
          min-height: 250px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .plan {
          font-size: 30px;
          line-height: 1.04;
          margin-bottom: 10px;
        }

        .price {
          font-size: 56px;
          line-height: 1;
          margin-bottom: 10px;
          letter-spacing: -0.03em;
        }

        .monthly {
          font-size: 15px;
          margin-bottom: 12px;
        }

        .featuredCard {
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.06),
            rgba(111,182,255,0.07)
          );
        }

        .eliteCard {
          background: linear-gradient(135deg, #e1c15f, #c89e2c);
          color: #17120a;
        }

        .eliteCard p,
        .eliteCard .monthly {
          color: #2d2414;
        }

        .smallTag {
          background: rgba(255,255,255,0.08);
          color: #eef3fb;
          margin-bottom: 10px;
        }

        .goldTag {
          background: rgba(23,18,10,0.14);
          color: #17120a;
        }

        .finalActions {
          margin-top: 18px;
        }

        @media (max-width: 1080px) {
          .heroGrid,
          .sectionHead {
            grid-template-columns: 1fr;
          }

          .pricingGrid {
            grid-template-columns: 1fr 1fr;
          }

          .serviceRow {
            grid-template-columns: 80px 1fr;
          }

          .serviceTags {
            grid-column: 2 / 3;
          }

          .demoLayout {
            grid-template-columns: 1fr;
            grid-template-areas:
              "feature"
              "one"
              "two"
              "three";
          }

          .demoFeature {
            min-height: 300px;
          }
        }

        @media (max-width: 760px) {
          .container {
            padding: 0 16px;
          }

          .nav,
          .topActions {
            display: none;
          }

          .heroActions,
          .salesRow,
          .finalActions {
            flex-direction: column;
            align-items: stretch;
          }

          .btn,
          .salesChip {
            text-align: center;
          }

          h1 {
            max-width: none;
          }

          .sectionTitle,
          .heroPanel h2,
          .demoFeature h3 {
            font-size: 34px;
          }

          .serviceMain h3,
          .demoTile strong,
          .plan {
            font-size: 25px;
          }

          .price {
            font-size: 44px;
          }

          .pricingGrid {
            grid-template-columns: 1fr;
          }

          .serviceRow {
            grid-template-columns: 1fr;
          }

          .serviceTags {
            grid-column: auto;
          }

          .starWrap {
            width: 390px;
            height: 390px;
            right: -110px;
            top: 240px;
            opacity: 0.34;
          }

          .starShape {
            font-size: 180px;
          }
        }
      `}</style>
    </main>
  );
}