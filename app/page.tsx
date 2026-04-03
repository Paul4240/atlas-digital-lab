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
      <div className="bgGlow glowLeft" />
      <div className="bgGlow glowRight" />
      <div className="fixedStar" />

      <header className="topbar">
        <div className="container topbarInner">
          <Link href="/" className="brand">
            <div className="brandIcon">★</div>
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
              Websites that make small businesses look expensive — and get more
              calls.
            </h1>

            <p className="heroCopy">
              Clean layouts, stronger trust, and better conversion structure so
              your business looks worth hiring from the first click.
            </p>

            <div className="heroActions">
              <a href={`tel:${SALES_1}`} className="btn btnGold">
                Call / Text Sales
              </a>
              <a href="#demos" className="btn btnDark">
                View Demos
              </a>
              <a href={`mailto:${EMAIL}`} className="btn btnDark">
                Get a Quote
              </a>
            </div>

            <div className="salesWrap">
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
                <div>
                  <strong>Stronger first impression</strong>
                  <p>Cleaner hierarchy and better spacing make the business feel more established.</p>
                </div>

                <div>
                  <strong>More trust from the first click</strong>
                  <p>Better presentation helps people take your company more seriously before they even call.</p>
                </div>

                <div>
                  <strong>Built to convert better</strong>
                  <p>Clear structure and stronger calls-to-action help turn more visitors into real leads.</p>
                </div>
              </div>

              <a href={`mailto:${EMAIL}`} className="btn btnGold wideBtn">
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="sectionTop">
            <div>
              <div className="sectionKicker">SERVICES</div>
              <h2 className="sectionTitle">Built to help businesses look stronger online.</h2>
            </div>

            <p className="sectionCopy">
              We design websites that feel more premium and more custom than the
              average small business site.
            </p>
          </div>

          <div className="serviceList">
            <div className="serviceRow">
              <div className="serviceNumber">01</div>
              <div className="serviceMain">
                <h3>Website Design</h3>
                <p>Modern layout, better spacing, and a stronger first impression.</p>
              </div>
              <div className="serviceTags">
                <span>Mobile-first</span>
                <span>Premium layout</span>
                <span>Clear lead flow</span>
              </div>
            </div>

            <div className="serviceRow">
              <div className="serviceNumber">02</div>
              <div className="serviceMain">
                <h3>SEO & Google Setup</h3>
                <p>Show up stronger in search and maps with cleaner structure.</p>
              </div>
              <div className="serviceTags">
                <span>On-page SEO</span>
                <span>Google help</span>
                <span>Search-ready</span>
              </div>
            </div>

            <div className="serviceRow">
              <div className="serviceNumber">03</div>
              <div className="serviceMain">
                <h3>Brand Presentation</h3>
                <p>Look more legit, more polished, and more valuable online.</p>
              </div>
              <div className="serviceTags">
                <span>Visual polish</span>
                <span>Better trust</span>
                <span>Consistency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section problemSection">
        <div className="container problemWrap">
          <div className="sectionKicker">WHY THIS MATTERS</div>
          <h2 className="sectionTitle">Most small business websites look outdated, cluttered, or cheap.</h2>
          <p className="sectionCopy wideCopy">
            We fix that. Our goal is simple — make your business look like the
            obvious choice the moment someone lands on your site.
          </p>
        </div>
      </section>

      <section id="demos" className="section">
        <div className="container">
          <div className="sectionTop">
            <div>
              <div className="sectionKicker">DEMOS</div>
              <h2 className="sectionTitle">Real directions we can build from.</h2>
            </div>

            <p className="sectionCopy">
              Different niches need different presentation styles. These demos
              show the kind of layout and sales direction we can build for your
              business.
            </p>
          </div>

          <div className="demoLayout">
            <Link href="/demo/pet-bakery" className="demoFeature">
              <div className="demoBadge">Flagship Demo</div>
              <h3>Pet Bakery Demo</h3>
              <p>
                Boutique storefront direction with stronger warmth, better product
                presentation, and a more polished visual flow.
              </p>
              <span>Open Demo</span>
            </Link>

            <div className="demoSide">
              <Link href="/demo/home-styling" className="demoItem">
                <strong>Luxury Interior Styling</strong>
                <small>Elegant, image-led residential presentation.</small>
                <span>Open Demo</span>
              </Link>

              <Link href="/demo/roofing" className="demoItem">
                <strong>Roofing Demo</strong>
                <small>Trust-based local service structure.</small>
                <span>Open Demo</span>
              </Link>

              <Link href="/demo/metal-cards" className="demoItem">
                <strong>Metal Cards Demo</strong>
                <small>Product-style layout with stronger offer flow.</small>
                <span>Open Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section pricingSection">
        <div className="container">
          <div className="sectionTop">
            <div>
              <div className="sectionKicker">PRICING</div>
              <h2 className="sectionTitle">Simple pricing for businesses ready to look more established.</h2>
            </div>

            <p className="sectionCopy">
              Better websites help your company feel more trusted, more valuable,
              and more worth contacting.
            </p>
          </div>

          <div className="pricingBanner">
            Most businesses choose Pro ($799) or Elite ($1,200)
          </div>

          <div className="pricingGrid">
            <div className="priceCard">
              <div className="plan">Starter</div>
              <div className="price">$299</div>
              <p>Single page • Mobile • Contact</p>
            </div>

            <div className="priceCard">
              <div className="plan">Growth</div>
              <div className="price">$499</div>
              <p>Multi-section • Trust blocks</p>
            </div>

            <div className="priceCard featuredCard">
              <div className="smallTag">Most Popular</div>
              <div className="plan">Pro</div>
              <div className="price">$799</div>
              <p>Advanced SEO • Priority design</p>
            </div>

            <div className="priceCard eliteCard">
              <div className="smallTag goldTag">Best Results</div>
              <div className="plan">Elite</div>
              <div className="price">$1,200</div>
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
            radial-gradient(circle at 0% 0%, rgba(216,180,79,0.1), transparent 18%),
            linear-gradient(180deg, #060b14 0%, #08101b 48%, #050a12 100%);
          color: #f5f1e8;
          font-family: Georgia, "Times New Roman", serif;
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

        .glowLeft {
          width: 260px;
          height: 260px;
          top: 60px;
          left: -120px;
          background: rgba(216,180,79,0.45);
        }

        .glowRight {
          width: 300px;
          height: 300px;
          right: -120px;
          bottom: 90px;
          background: rgba(43,74,120,0.45);
        }

        .fixedStar {
          position: fixed;
          right: -20px;
          top: 120px;
          width: 620px;
          height: 620px;
          pointer-events: none;
          opacity: 0.42;
          z-index: 0;
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 700'%3E%3Cg fill='none'%3E%3Ccircle cx='350' cy='350' r='255' stroke='%23d8b44f' stroke-opacity='.35' stroke-width='12'/%3E%3Ccircle cx='350' cy='350' r='214' stroke='%23d8b44f' stroke-opacity='.25' stroke-width='8'/%3E%3Cpath d='M350 155l38 118h124l-100 72 38 117-100-72-100 72 38-117-100-72h124z' fill='%23d8b44f' fill-opacity='.34'/%3E%3C/g%3E%3C/svg%3E");
          filter: drop-shadow(0 0 30px rgba(216,180,79,0.08));
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
          color: #f5f1e8;
        }

        .brandIcon {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(216,180,79,0.14);
          color: #d8b44f;
          font-size: 18px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.18);
        }

        .brandName {
          font-family: Arial, sans-serif;
          font-weight: 800;
          font-size: 15px;
        }

        .brandSub {
          font-family: Arial, sans-serif;
          font-size: 12px;
          color: #aeb8c7;
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
          color: #dfe5ef;
          font-size: 14px;
          font-weight: 700;
        }

        .topBtn,
        .btn,
        .salesChip,
        .demoFeature,
        .demoItem,
        .priceCard,
        .softCard {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .topBtn:hover,
        .btn:hover,
        .salesChip:hover,
        .demoFeature:hover,
        .demoItem:hover,
        .priceCard:hover,
        .softCard:hover {
          transform: translateY(-3px);
        }

        .topBtn,
        .btn {
          text-decoration: none;
          font-family: Arial, sans-serif;
          font-weight: 700;
          padding: 13px 18px;
          border-radius: 12px;
        }

        .topBtn {
          color: #f5f1e8;
          background: rgba(255,255,255,0.05);
        }

        .topBtnGold,
        .btnGold {
          background: linear-gradient(135deg, #e1c15f, #c89e2c);
          color: #111;
          box-shadow: 0 12px 34px rgba(216,180,79,0.18);
        }

        .btnDark {
          color: #f5f1e8;
          background: rgba(255,255,255,0.05);
        }

        .hero {
          padding: 38px 0 0;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 42px;
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
          font-size: clamp(52px, 7vw, 82px);
          line-height: 0.97;
          letter-spacing: -0.04em;
          max-width: 9ch;
        }

        .heroCopy,
        .panelText,
        .sectionCopy,
        .softCard p,
        .demoFeature p,
        .demoItem small,
        .priceCard p {
          font-family: Arial, sans-serif;
          color: #bcc6d4;
          line-height: 1.65;
          font-size: 17px;
        }

        .heroCopy {
          max-width: 620px;
          margin: 0 0 22px;
        }

        .salesWrap {
          margin-top: 18px;
        }

        .salesChip {
          text-decoration: none;
          font-family: Arial, sans-serif;
          color: #eef3fb;
          background: rgba(255,255,255,0.045);
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          box-shadow: 0 12px 30px rgba(0,0,0,0.14);
        }

        .heroPanel,
        .softCard,
        .demoFeature,
        .demoItem,
        .priceCard {
          background: linear-gradient(
            135deg,
            rgba(255,255,255,0.055),
            rgba(255,255,255,0.025)
          );
          box-shadow: 0 24px 60px rgba(0,0,0,0.18);
        }

        .heroPanel {
          padding: 34px 32px;
          border-radius: 30px;
        }

        .panelTitle {
          font-size: 38px;
          line-height: 1.02;
          margin: 0 0 14px;
          letter-spacing: -0.03em;
        }

        .panelList {
          display: grid;
          gap: 18px;
          margin: 22px 0 24px;
        }

        .panelList strong {
          display: block;
          font-family: Arial, sans-serif;
          font-size: 15px;
          margin-bottom: 6px;
        }

        .panelList p {
          margin: 0;
          font-family: Arial, sans-serif;
          color: #bcc6d4;
          font-size: 14px;
          line-height: 1.6;
        }

        .wideBtn {
          width: 100%;
        }

        .section {
          margin-top: 92px;
        }

        .sectionTop {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 28px;
          align-items: end;
          margin-bottom: 26px;
        }

        .sectionTitle {
          margin: 0;
          font-size: clamp(38px, 4vw, 56px);
          line-height: 1.04;
          letter-spacing: -0.03em;
        }

        .wideCopy {
          max-width: 760px;
        }

        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .softCard {
          padding: 28px 26px;
          border-radius: 24px;
          min-height: 132px;
        }

        .softCard h3 {
          margin: 0 0 14px;
          font-size: 30px;
          line-height: 1.05;
        }

        .demosWrap {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 20px;
        }

        .demoFeature {
          text-decoration: none;
          color: #f5f1e8;
          border-radius: 30px;
          padding: 32px;
          min-height: 290px;
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
          color: #a8d3ff;
          margin-bottom: 18px;
        }

        .demoFeature h3 {
          margin: 0 0 12px;
          font-size: 42px;
          line-height: 1.02;
          letter-spacing: -0.03em;
        }

        .demoFeature span:last-child,
        .demoItem span {
          font-family: Arial, sans-serif;
          color: #d8b44f;
          font-size: 14px;
          font-weight: 700;
        }

        .demoSide {
          display: grid;
          gap: 18px;
        }

        .demoItem {
          text-decoration: none;
          color: #f5f1e8;
          border-radius: 24px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 90px;
        }

        .demoItem strong {
          font-size: 30px;
          line-height: 1.05;
          margin-bottom: 8px;
        }

        .demoItem small {
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
          min-height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .plan {
          margin-bottom: 10px;
          font-size: 30px;
          line-height: 1.04;
        }

        .price {
          font-size: 56px;
          line-height: 1;
          margin-bottom: 12px;
          letter-spacing: -0.03em;
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

        .eliteCard p {
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
          .sectionTop,
          .serviceGrid,
          .demosWrap,
          .pricingGrid {
            grid-template-columns: 1fr 1fr;
          }

          .heroGrid,
          .sectionTop {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .page {
            padding-bottom: 60px;
          }

          .container {
            padding: 0 16px;
          }

          .serviceGrid,
          .demosWrap,
          .pricingGrid {
            grid-template-columns: 1fr;
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

          .panelTitle,
          .demoFeature h3 {
            font-size: 34px;
          }

          .softCard h3,
          .demoItem strong,
          .plan {
            font-size: 26px;
          }

          .price {
            font-size: 44px;
          }

          .fixedStar {
            width: 390px;
            height: 390px;
            right: -110px;
            top: 220px;
            opacity: 0.34;
          }
        }
      `}</style>
    </main>
  );
}