"use client";

import Link from "next/link";

export default function HomePage() {
  const MAIN_PHONE = "8327050313";
  const MAIN_PRETTY = "(832) 705-0313";

  const SALES_TEAM = [
    { href: "tel:3463657906", label: "Sales (346) 365-7906" },
    { href: "tel:8326773150", label: "Sales (832) 677-3150" },
    { href: "tel:3465328803", label: "Sales (346) 532-8803" },
  ];

  const EMAIL = "hello@atlasdigitallab.com";

  return (
    <main className="page">
      <div className="bgGlow glowOne" />
      <div className="bgGlow glowTwo" />
      <div className="fixedEmblem" />

      <header className="topbar">
        <div className="container topbarInner">
          <Link href="/" className="brandWrap">
            <div className="brandMark" aria-hidden>
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
            <Link href="/">Home</Link>
            <Link href="/demos">Demos</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/houston-web-design">Houston SEO</Link>
          </nav>

          <div className="topActions">
            <a href={`tel:${MAIN_PHONE}`} className="pill">
              Call {MAIN_PRETTY}
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
            <div className="eyebrow">Texas-built presentation • cleaner structure • stronger trust</div>

            <h1>Websites that make your business look like the serious choice.</h1>

            <p className="heroText">
              Atlas Digital Lab builds websites that help small businesses look sharper,
              more established, and easier to trust. Clean structure, stronger messaging,
              and a better first impression from the first click.
            </p>

            <div className="heroActions">
              <Link href="/demos" className="btn primaryBtn">
                View Demos
              </Link>
              <a href={`tel:${MAIN_PHONE}`} className="btn darkBtn">
                Call {MAIN_PRETTY}
              </a>
              <a href={`mailto:${EMAIL}`} className="btn ghostBtn">
                Email Quote
              </a>
            </div>
          </div>

          <div className="heroRight">
            <div className="heroNote">
              <div className="noteKicker">ATLAS DIGITAL LAB</div>
              <div className="noteTitle">Cleaner layout. Better presentation. Stronger business feel.</div>

              <div className="noteList">
                <div className="noteItem">
                  <span className="lineDot" />
                  <div>More trust from the first click</div>
                </div>
                <div className="noteItem">
                  <span className="lineDot" />
                  <div>Stronger structure for real conversions</div>
                </div>
                <div className="noteItem">
                  <span className="lineDot" />
                  <div>Built to feel more custom, not generic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="salesSection">
        <div className="container">
          <div className="salesHeader">
            <div className="sectionEyebrow">Sales Team</div>
            <h2>Talk to sales directly.</h2>
          </div>

          <div className="salesRow">
            {SALES_TEAM.map((person) => (
              <a key={person.label} href={person.href} className="salesChip">
                {person.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container splitIntro">
          <div className="introLeft">
            <div className="sectionEyebrow">What we do</div>
            <h2>Built to help businesses look stronger online.</h2>
          </div>

          <div className="introRight">
            <p>
              We keep the structure cleaner and less cluttered so the site feels more real,
              more intentional, and more like a business website someone actually paid for.
            </p>
          </div>
        </div>

        <div className="container serviceRows">
          <div className="serviceRow">
            <div className="serviceNumber">01</div>
            <div className="serviceContent">
              <h3>Website Design</h3>
              <p>Modern layouts with better spacing, stronger hierarchy, and a cleaner overall feel.</p>
            </div>
            <div className="serviceTags">
              <span>Mobile-first</span>
              <span>Clear calls-to-action</span>
              <span>Stronger first impression</span>
            </div>
          </div>

          <div className="serviceRow">
            <div className="serviceNumber">02</div>
            <div className="serviceContent">
              <h3>SEO & Google Setup</h3>
              <p>Foundations that help local businesses show up better in search and maps.</p>
            </div>
            <div className="serviceTags">
              <span>On-page SEO</span>
              <span>Google Business help</span>
              <span>Search-ready structure</span>
            </div>
          </div>

          <div className="serviceRow">
            <div className="serviceNumber">03</div>
            <div className="serviceContent">
              <h3>Brand Presentation</h3>
              <p>Sharper online presentation that helps the company feel more legitimate and more established.</p>
            </div>
            <div className="serviceTags">
              <span>Visual polish</span>
              <span>Stronger tone</span>
              <span>Better consistency</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section demosSection">
        <div className="container splitIntro">
          <div className="introLeft">
            <div className="sectionEyebrow">Demos</div>
            <h2>Real directions we can build from.</h2>
          </div>

          <div className="introRight">
            <p>
              Instead of stacking a bunch of equal boxes, we keep one featured direction up front
              and the rest in a cleaner rail so the section feels more designed.
            </p>
          </div>
        </div>

        <div className="container demoLayout">
          <Link href="/demo/pet-bakery" className="demoFeature">
            <div className="featureTag">Featured Demo</div>
            <h3 className="demoFeatureTitle">Pet Bakery Demo</h3>
            <p className="demoFeatureText">
              Boutique storefront direction with stronger warmth, cleaner product flow,
              and a much more polished visual feel.
            </p>
            <span className="demoArrow">Open Demo</span>
          </Link>

          <div className="demoRail">
            <Link href="/demo/home-styling" className="demoRailItem">
              <div className="demoRailTitle">Luxury Interior Styling</div>
              <div className="demoRailText">Elegant, image-led residential presentation.</div>
              <span className="demoRailArrow">Open Demo</span>
            </Link>

            <Link href="/demo/roofing" className="demoRailItem">
              <div className="demoRailTitle">Roofing Demo</div>
              <div className="demoRailText">Trust-focused service layout built to get calls.</div>
              <span className="demoRailArrow">Open Demo</span>
            </Link>

            <Link href="/demo/metal-cards" className="demoRailItem">
              <div className="demoRailTitle">Metal Cards Demo</div>
              <div className="demoRailText">Product-style layout with stronger offer structure.</div>
              <span className="demoRailArrow">Open Demo</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section pricingSection">
        <div className="container splitIntro">
          <div className="introLeft">
            <div className="sectionEyebrow">Pricing</div>
            <h2>Simple pricing for businesses ready to look more established.</h2>
          </div>

          <div className="introRight">
            <p>
              Pro and Elite stay stronger visually, but the whole pricing section is cleaner
              so it does not feel like a template grid.
            </p>
          </div>
        </div>

        <div className="container pricingLayout">
          <div className="pricingSide">
            <div className="pricingSideKicker">How it’s set up</div>
            <h3>Clear tiers with stronger options at the top end.</h3>
            <p>
              Starter and Growth cover the basics. Pro is the stronger sales option.
              Elite is for businesses that want a more custom, more polished build.
            </p>
          </div>

          <div className="pricingGrid">
            <div className="priceCard mutedCard">
              <div className="plan">Starter</div>
              <div className="price">$299</div>
              <div className="monthly">$80/mo</div>
              <ul>
                <li>Single-page website</li>
                <li>Mobile optimized</li>
                <li>Contact section</li>
                <li>Basic SEO setup</li>
              </ul>
              <a className="priceBtn" href={`tel:${MAIN_PHONE}`}>Call to Start</a>
            </div>

            <div className="priceCard mutedCard">
              <div className="plan">Growth</div>
              <div className="price">$499</div>
              <div className="monthly">$130/mo</div>
              <ul>
                <li>Everything in Starter</li>
                <li>Multi-section layout</li>
                <li>Trust + service blocks</li>
                <li>Conversion structure</li>
              </ul>
              <a className="priceBtn" href={`tel:${MAIN_PHONE}`}>Call to Start</a>
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
              <a className="priceBtn primaryPriceBtn" href="tel:3463657906">Talk to Sales</a>
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
              <a className="priceBtn primaryPriceBtn" href={`mailto:${EMAIL}`}>Build My Elite Site</a>
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
            <a href={`mailto:${EMAIL}`} className="btn primaryBtn">Email Us</a>
            <a href={`tel:${MAIN_PHONE}`} className="btn ghostBtn">Call {MAIN_PRETTY}</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footerInner">
          <div>
            <div className="footerBrand">Atlas Digital Lab</div>
            <div className="footerSub">Websites • SEO • Small Business Growth</div>
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
          background: linear-gradient(180deg, #0b1218 0%, #101923 38%, #0c141c 100%);
          color: #f3f5f7;
          font-family: Inter, Arial, sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .bgGlow {
          position: fixed;
          border-radius: 999px;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.35;
        }

        .glowOne {
          width: 320px;
          height: 320px;
          top: 90px;
          left: -120px;
          background: rgba(191, 122, 46, 0.16);
        }

        .glowTwo {
          width: 340px;
          height: 340px;
          right: -140px;
          bottom: 60px;
          background: rgba(86, 111, 130, 0.12);
        }

        .fixedEmblem {
          position: fixed;
          right: -40px;
          top: 90px;
          width: 760px;
          height: 760px;
          z-index: 0;
          opacity: 0.11;
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
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(12px);
          background: rgba(8, 12, 17, 0.7);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .topbarInner {
          min-height: 76px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
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
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(240,196,138,0.14), rgba(255,255,255,0.02));
          border: 1px solid rgba(240,196,138,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 16px 36px rgba(0,0,0,0.22);
          flex-shrink: 0;
          position: relative;
          overflow: hidden;
        }

        .brandMark::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(130deg, transparent 18%, rgba(255,255,255,0.14) 45%, transparent 70%);
          opacity: 0.55;
          pointer-events: none;
        }

        .texasSvg {
          width: 28px;
          height: 28px;
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
          font-weight: 800;
          font-size: 15px;
        }

        .brandSub {
          font-size: 13px;
          opacity: 0.82;
        }

        .navLinks {
          display: flex;
          gap: 18px;
          align-items: center;
        }

        .navLinks a {
          color: rgba(255, 255, 255, 0.92);
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
        }

        .navLinks a:hover {
          color: #f0c48a;
        }

        .topActions,
        .heroActions,
        .pricingActions,
        .finalRight,
        .footerLinks {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }

        .pill,
        .btn,
        .priceBtn,
        .demoFeature,
        .demoRailItem,
        .salesChip {
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }

        .pill:hover,
        .btn:hover,
        .priceBtn:hover,
        .demoFeature:hover,
        .demoRailItem:hover,
        .salesChip:hover {
          transform: translateY(-2px);
        }

        .pill,
        .salesChip {
          padding: 10px 16px;
          min-height: 46px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: white;
          background: rgba(255, 255, 255, 0.04);
          font-weight: 700;
          text-decoration: none;
          backdrop-filter: blur(8px);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .primaryPill,
        .primaryBtn,
        .primaryPriceBtn {
          background: linear-gradient(135deg, #f0c48a, #9b6327);
          color: #17110b;
          border: none;
          box-shadow: 0 12px 24px rgba(155, 99, 39, 0.24);
        }

        .btn,
        .priceBtn {
          min-height: 54px;
          padding: 13px 20px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.04);
          color: #f3f5f7;
          text-decoration: none;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .darkBtn {
          background: rgba(255,255,255,0.08);
        }

        .ghostBtn {
          background: transparent;
        }

        .hero {
          padding: 54px 0 66px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 36px;
          align-items: start;
        }

        .eyebrow,
        .sectionEyebrow,
        .noteKicker {
          display: inline-block;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 900;
          color: #f0c48a;
          margin-bottom: 16px;
        }

        h1 {
          font-size: clamp(42px, 6vw, 76px);
          margin: 0 0 18px;
          line-height: 0.96;
          letter-spacing: -0.05em;
          max-width: 11ch;
        }

        h2 {
          font-size: clamp(30px, 4vw, 52px);
          margin: 0;
          line-height: 1.02;
          letter-spacing: -0.04em;
        }

        h3 {
          font-size: 26px;
          margin: 0 0 10px;
          line-height: 1.08;
          letter-spacing: -0.03em;
        }

        .heroText,
        .introRight p,
        .serviceContent p,
        .pricingNote,
        .finalLeft p,
        .pricingSide p,
        .demoFeatureText,
        .demoRailText {
          color: #b6c0c7;
          font-size: 17px;
          line-height: 1.72;
        }

        .heroNote {
          padding: 28px;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03));
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 30px 70px rgba(0,0,0,0.22);
        }

        .noteTitle {
          font-size: 28px;
          line-height: 1.08;
          letter-spacing: -0.03em;
          font-weight: 800;
          max-width: 14ch;
          margin-bottom: 18px;
        }

        .noteList {
          display: grid;
          gap: 16px;
        }

        .noteItem {
          display: grid;
          grid-template-columns: 14px 1fr;
          gap: 12px;
          align-items: start;
          padding-bottom: 16px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .noteItem:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .lineDot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #8fe4ff;
          margin-top: 8px;
          box-shadow: 0 0 18px rgba(143,228,255,0.35);
        }

        .salesSection {
          padding-bottom: 22px;
        }

        .salesHeader {
          margin-bottom: 18px;
        }

        .salesRow {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .section {
          padding: 86px 0;
        }

        .splitIntro {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 28px;
          align-items: end;
          margin-bottom: 34px;
        }

        .serviceRows {
          display: grid;
          gap: 26px;
        }

        .serviceRow {
          display: grid;
          grid-template-columns: 80px 1fr 0.9fr;
          gap: 26px;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.08);
          align-items: start;
        }

        .serviceNumber {
          font-size: 34px;
          font-weight: 900;
          color: rgba(240,196,138,0.92);
          line-height: 1;
        }

        .serviceContent h3 {
          margin-bottom: 8px;
        }

        .serviceTags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .serviceTags span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 40px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #d3dae0;
          font-size: 13px;
          font-weight: 700;
        }

        .demosSection {
          background: linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
        }

        .demoLayout {
          display: grid;
          grid-template-columns: 1.08fr 0.92fr;
          gap: 24px;
          align-items: stretch;
        }

        .demoFeature,
        .demoRailItem {
          text-decoration: none;
          color: inherit;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
          box-shadow: 0 18px 44px rgba(0,0,0,0.12);
        }

        .demoFeature {
          border-radius: 28px;
          min-height: 360px;
          position: relative;
          overflow: hidden;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .demoFeature::before {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at top right, rgba(240,196,138,0.16), transparent 38%),
            linear-gradient(180deg, rgba(255,255,255,0.02), transparent 55%);
          pointer-events: none;
        }

        .featureTag {
          position: relative;
          z-index: 1;
          display: inline-flex;
          width: fit-content;
          min-height: 34px;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
          background: rgba(143,228,255,0.08);
          border: 1px solid rgba(143,228,255,0.18);
          color: #8fe4ff;
          margin-bottom: 18px;
        }

        .demoFeatureTitle,
        .demoFeatureText,
        .demoArrow {
          position: relative;
          z-index: 1;
        }

        .demoFeatureTitle {
          font-size: 38px;
          line-height: 1.02;
          letter-spacing: -0.035em;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .demoArrow,
        .demoRailArrow {
          color: #f0c48a;
          font-weight: 800;
          font-size: 14px;
        }

        .demoRail {
          display: grid;
          gap: 18px;
        }

        .demoRailItem {
          border-radius: 24px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .demoRailTitle {
          font-size: 24px;
          font-weight: 800;
          line-height: 1.08;
          margin-bottom: 8px;
        }

        .demoRailText {
          margin-bottom: 16px;
        }

        .pricingSection {
          padding-top: 90px;
        }

        .pricingLayout {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 30px;
          align-items: start;
        }

        .pricingSide {
          padding: 24px 0 0;
        }

        .pricingSideKicker {
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #f0c48a;
          margin-bottom: 12px;
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
          align-items: stretch;
        }

        .priceCard {
          display: flex;
          flex-direction: column;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 18px 44px rgba(0,0,0,0.12);
          backdrop-filter: blur(10px);
        }

        .mutedCard {
          opacity: 0.92;
        }

        .featuredCard {
          border-color: rgba(143,228,255,0.14);
          box-shadow: 0 18px 44px rgba(46,180,255,0.08);
        }

        .eliteCard {
          border-color: rgba(240,196,138,0.24);
          box-shadow: 0 18px 44px rgba(155,99,39,0.12);
        }

        .plan {
          font-weight: 800;
          font-size: 18px;
          margin-bottom: 8px;
          color: #f0c48a;
        }

        .tag {
          display: inline-flex;
          width: fit-content;
          margin-bottom: 12px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 12px;
          font-weight: 800;
          color: #eef4f8;
        }

        .goldTag {
          background: linear-gradient(135deg, #f0c48a, #9b6327);
          color: #17110b;
          border: none;
        }

        .price {
          font-size: 48px;
          font-weight: 900;
          line-height: 1;
          margin-bottom: 8px;
        }

        .monthly {
          font-weight: 800;
          color: #b6c0c7;
          margin-bottom: 6px;
        }

        .priceCard ul {
          margin: 14px 0 0;
          padding-left: 18px;
          color: #c7cfd6;
          line-height: 1.8;
          flex: 1;
        }

        .priceBtn {
          width: 100%;
          margin-top: 18px;
        }

        .pricingFooter {
          margin-top: 34px;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.08);
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
          gap: 28px;
          flex-wrap: wrap;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .footer {
          padding: 40px 0;
        }

        .footerInner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 24px;
        }

        .footerBrand {
          font-weight: 800;
          margin-bottom: 4px;
        }

        .footerSub {
          font-size: 13px;
          color: rgba(255,255,255,0.68);
        }

        .footerLinks a {
          color: rgba(255,255,255,0.88);
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
        }

        @media (max-width: 1160px) {
          .heroGrid,
          .splitIntro,
          .serviceRow,
          .demoLayout,
          .pricingLayout {
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

          .heroMeta,
          .pricingGrid,
          .trustRow {
            grid-template-columns: 1fr;
          }

          .trustRow {
            border-radius: 22px;
          }

          .trustRow span {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.06);
          }

          .trustRow span:last-child {
            border-bottom: none;
          }

          .fixedEmblem {
            width: 520px;
            height: 520px;
            right: -140px;
            top: 180px;
            opacity: 0.1;
          }

          .demoFeatureTitle {
            font-size: 32px;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 14px;
          }

          .topbarInner,
          .topActions,
          .heroActions,
          .pricingActions,
          .finalRight,
          .footerInner,
          .footerLinks,
          .salesRow {
            flex-direction: column;
            align-items: stretch;
          }

          .pill,
          .btn,
          .priceBtn,
          .salesChip {
            width: 100%;
          }

          .hero,
          .section {
            padding-top: 70px;
            padding-bottom: 70px;
          }

          .heroNote,
          .demoFeature,
          .demoRailItem,
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

          .fixedEmblem {
            width: 360px;
            height: 360px;
            right: -120px;
            top: 220px;
            opacity: 0.09;
          }
        }
      `}</style>
    </main>
  );
}