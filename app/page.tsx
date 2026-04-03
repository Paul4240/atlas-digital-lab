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
            <a href="#services">Services</a>
            <a href="#demos">Demos</a>
            <a href="#pricing">Pricing</a>
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
            <div className="eyebrow">
              Houston-based • Built for small businesses • Fast turnaround
            </div>

            <h1>Websites that make small businesses look expensive — and get more calls.</h1>

            <p className="heroText">
              We design high-conversion websites that make your business look more trusted,
              more established, and worth contacting.
            </p>

            <div className="heroActions">
              <a href="tel:3463657906" className="btn primaryBtn">
                Call / Text Sales
              </a>
              <Link href="/demos" className="btn darkBtn">
                See Real Examples
              </Link>
              <a href={`mailto:${EMAIL}`} className="btn ghostBtn">
                Get a Quote
              </a>
            </div>

            <div className="heroPoints">
              <div>Cleaner structure</div>
              <div>Stronger trust</div>
              <div>Local SEO-ready</div>
            </div>
          </div>

          <div className="heroRight">
            <div className="heroPanel">
              <div className="panelEyebrow">ATLAS DIGITAL LAB</div>
              <div className="panelTitle">
                A cleaner, more custom presentation for serious businesses.
              </div>

              <div className="panelList">
                <div className="panelItem">
                  <div className="panelItemTitle">Corporate-style clarity</div>
                  <div className="panelItemText">
                    Cleaner hierarchy and more disciplined spacing make the business look more established.
                  </div>
                </div>

                <div className="panelItem">
                  <div className="panelItemTitle">Stronger trust from the first click</div>
                  <div className="panelItemText">
                    Better presentation helps people take the business more seriously before they even call.
                  </div>
                </div>

                <div className="panelItem">
                  <div className="panelItemTitle">Built to convert better</div>
                  <div className="panelItemText">
                    Clear structure and stronger calls-to-action help turn more visitors into real leads.
                  </div>
                </div>
              </div>

              <a href={`mailto:${EMAIL}`} className="btn primaryBtn fullBtn">
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="salesSection">
        <div className="container salesWrap">
          <div className="salesLabel">Sales Team</div>
          <div className="salesRow">
            {SALES_TEAM.map((item) => (
              <a key={item.label} href={item.href} className="salesChip">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container splitIntro">
          <div className="introLeft">
            <div className="sectionEyebrow">Services</div>
            <h2>Built to help businesses look stronger online.</h2>
          </div>

          <div className="introRight">
            <p>
              We design websites that feel more premium and more custom than the average
              small business site.
            </p>
          </div>
        </div>

        <div className="container serviceFlow">
          <div className="serviceLine">
            <div className="serviceNumber">01</div>
            <div className="serviceMain">
              <h3>Website Design</h3>
              <p>Modern layouts with stronger spacing, cleaner hierarchy, and a sharper first impression.</p>
            </div>
            <div className="serviceTags">
              <span>Mobile-first</span>
              <span>Premium layout</span>
              <span>Clear lead flow</span>
            </div>
          </div>

          <div className="serviceLine">
            <div className="serviceNumber">02</div>
            <div className="serviceMain">
              <h3>SEO & Google Setup</h3>
              <p>Structured foundations that help local businesses show up stronger in search and maps.</p>
            </div>
            <div className="serviceTags">
              <span>On-page SEO</span>
              <span>Google Business help</span>
              <span>Search-ready structure</span>
            </div>
          </div>

          <div className="serviceLine">
            <div className="serviceNumber">03</div>
            <div className="serviceMain">
              <h3>Brand Presentation</h3>
              <p>Sharper online presentation that helps a company feel more legitimate and more valuable.</p>
            </div>
            <div className="serviceTags">
              <span>Visual polish</span>
              <span>Stronger brand tone</span>
              <span>Consistency</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section problemSection">
        <div className="container problemWrap">
          <div className="sectionEyebrow">Why this matters</div>
          <h2>Most small business websites look outdated, cluttered, or cheap.</h2>
          <p className="problemText">
            We fix that. Our goal is simple — make your business look like the obvious choice
            the moment someone lands on your site.
          </p>
        </div>
      </section>

      <section id="demos" className="section">
        <div className="container splitIntro">
          <div className="introLeft">
            <div className="sectionEyebrow">Demos</div>
            <h2>Real directions we can build from.</h2>
          </div>

          <div className="introRight">
            <p>
              Different niches need different presentation styles. These demos show the kind
              of layout and sales direction we can build for your business.
            </p>
          </div>
        </div>

        <div className="container demoLayout">
          <Link href="/demo/pet-bakery" className="demoFeature">
            <span className="featureTag">Flagship Demo</span>
            <h3 className="demoFeatureTitle">Pet Bakery Demo</h3>
            <p className="demoFeatureText">
              Boutique storefront direction with stronger warmth, better product presentation,
              and a more polished visual flow.
            </p>
            <span className="demoArrow">Open Demo</span>
          </Link>

          <div className="demoRail">
            <Link href="/demo/home-styling" className="demoRailItem">
              <div className="demoRailTitle">Luxury Interior Styling</div>
              <div className="demoRailText">Elegant, image-led residential presentation.</div>
              <span className="demoArrow">Open Demo</span>
            </Link>

            <Link href="/demo/roofing" className="demoRailItem">
              <div className="demoRailTitle">Roofing Demo</div>
              <div className="demoRailText">Trust-based local service structure.</div>
              <span className="demoArrow">Open Demo</span>
            </Link>

            <Link href="/demo/metal-cards" className="demoRailItem">
              <div className="demoRailTitle">Metal Cards Demo</div>
              <div className="demoRailText">Product-style layout with stronger offer structure.</div>
              <span className="demoArrow">Open Demo</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="pricing" className="section pricingSection">
        <div className="container splitIntro">
          <div className="introLeft">
            <div className="sectionEyebrow">Pricing</div>
            <h2>Simple pricing for businesses ready to look more established.</h2>
          </div>

          <div className="introRight">
            <p>
              Better websites help your company feel more trusted, more valuable, and more worth contacting.
            </p>
          </div>
        </div>

        <div className="container pricingBanner">
          Most businesses choose Pro ($799) or Elite ($1,200)
        </div>

        <div className="container pricingLayout">
          <div className="pricingLeft">
            <div className="pricingSideNote">
              <div className="pricingSideKicker">How we structure it</div>
              <h3>Clear tiers with stronger options at the top end.</h3>
              <p>
                Starter and Growth cover the basics. Pro is the stronger sales option.
                Elite is for businesses that want a more custom, more polished build.
              </p>
            </div>
          </div>

          <div className="pricingRight">
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
                <div className="tag goldTag">Best Results</div>
                <div className="price">$1,200</div>
                <div className="monthly">$200/mo</div>
                <ul>
                  <li>Full premium build designed to make your business look top-tier</li>
                  <li>Brand strategy layout</li>
                  <li>High-conversion structure</li>
                  <li>Service area + trust sections</li>
                </ul>
                <a className="priceBtn primaryPriceBtn" href={`mailto:${EMAIL}`}>Build My Elite Site</a>
              </div>
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
          background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 700'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1'%3E%3Cstop offset='0%25' stop-color='%23f0c48a'/%3E%3Cstop offset='100%25' stop-color='%239b6327'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none'%3E%3Ccircle cx='350' cy='350' r='255' stroke='url(%23g)' stroke-width='12'/%3E%3Ccircle cx='350' cy='350' r='218' stroke='url(%23g)' stroke-opacity='.55' stroke-width='8'/%3E%3Ccircle cx='350' cy='350' r='180' stroke='%23ffffff' stroke-opacity='.08' stroke-width='3'/%3E%3Cpath d='M350 150l30 92h97l-78 56 30 92-79-57-79 57 30-92-78-56h97z' fill='url(%23g)'/%3E%3C/g%3E%3C/svg%3E");
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
        }

        .texasSvg {
          width: 28px;
          height: 28px;
          display: block;
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
          color: rgba(255,255,255,0.92);
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
        }

        .topActions,
        .heroActions,
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
        .salesChip,
        .demoFeature,
        .demoRailItem {
          transition: transform 0.22s ease, border-color 0.22s ease;
        }

        .pill:hover,
        .btn:hover,
        .priceBtn:hover,
        .salesChip:hover,
        .demoFeature:hover,
        .demoRailItem:hover {
          transform: translateY(-2px);
        }

        .pill,
        .salesChip {
          padding: 10px 16px;
          min-height: 46px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.14);
          color: white;
          background: rgba(255,255,255,0.04);
          font-weight: 700;
          text-decoration: none;
        }

        .primaryPill,
        .primaryBtn,
        .primaryPriceBtn {
          background: linear-gradient(135deg, #f0c48a, #9b6327);
          color: #17110b;
          border: none;
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
          padding: 54px 0 54px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 36px;
          align-items: start;
        }

        .eyebrow,
        .sectionEyebrow,
        .panelEyebrow,
        .salesLabel {
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
        .serviceMain p,
        .panelItemText,
        .problemText,
        .demoFeatureText,
        .demoRailText,
        .pricingSideNote p,
        .finalLeft p {
          color: #b6c0c7;
          font-size: 17px;
          line-height: 1.72;
        }

        .heroPoints {
          margin-top: 24px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .heroPoints div {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #c7cfd6;
          font-size: 13px;
          font-weight: 700;
        }

        .heroPanel {
          padding: 28px;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03));
          border: 1px solid rgba(255,255,255,0.08);
        }

        .panelTitle {
          font-size: 28px;
          line-height: 1.08;
          font-weight: 800;
          margin-bottom: 18px;
          max-width: 13ch;
        }

        .panelList {
          display: grid;
          gap: 18px;
          margin-bottom: 20px;
        }

        .panelItem {
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .panelItem:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .panelItemTitle {
          font-weight: 800;
          margin-bottom: 8px;
          font-size: 15px;
        }

        .fullBtn {
          width: 100%;
        }

        .salesSection {
          padding-bottom: 12px;
        }

        .salesWrap {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 26px;
        }

        .salesRow {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .section {
          padding: 82px 0;
        }

        .splitIntro {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 28px;
          align-items: end;
          margin-bottom: 34px;
        }

        .serviceFlow {
          display: grid;
          gap: 24px;
        }

        .serviceLine {
          display: grid;
          grid-template-columns: 80px 1fr 0.9fr;
          gap: 24px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,0.08);
          align-items: start;
        }

        .serviceNumber {
          font-size: 34px;
          font-weight: 900;
          color: rgba(240,196,138,0.92);
          line-height: 1;
        }

        .serviceTags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .serviceTags span {
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #d3dae0;
          font-size: 13px;
          font-weight: 700;
        }

        .problemWrap {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 30px;
        }

        .demoLayout {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 24px;
        }

        .demoFeature,
        .demoRailItem {
          text-decoration: none;
          color: inherit;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
        }

        .demoFeature {
          padding: 28px;
          min-height: 320px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }

        .featureTag {
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
          margin-bottom: 14px;
        }

        .demoFeatureTitle {
          font-size: 36px;
          line-height: 1.02;
          font-weight: 800;
          margin: 0 0 12px;
        }

        .demoRail {
          display: grid;
          gap: 18px;
        }

        .demoRailItem {
          padding: 22px;
        }

        .demoRailTitle {
          font-size: 24px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .demoArrow {
          color: #f0c48a;
          font-weight: 800;
          font-size: 14px;
        }

        .pricingSection {
          padding-top: 86px;
        }

        .pricingBanner {
          margin-bottom: 22px;
          display: inline-flex;
          min-height: 42px;
          align-items: center;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(240,196,138,0.1);
          border: 1px solid rgba(240,196,138,0.22);
          color: #f0c48a;
          font-weight: 800;
          font-size: 14px;
        }

        .pricingLayout {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 30px;
          align-items: start;
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
        }

        .priceCard {
          display: flex;
          flex-direction: column;
          background: rgba(255,255,255,0.035);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 24px;
        }

        .featuredCard {
          border-color: rgba(143,228,255,0.14);
        }

        .eliteCard {
          border-color: rgba(240,196,138,0.24);
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

        @media (max-width: 1100px) {
          .heroGrid,
          .splitIntro,
          .serviceLine,
          .demoLayout,
          .pricingLayout {
            grid-template-columns: 1fr;
          }

          h1 {
            max-width: none;
          }
        }

        @media (max-width: 900px) {
          .navLinks,
          .serviceTags {
            display: none;
          }

          .pricingGrid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 14px;
          }

          .topbarInner,
          .topActions,
          .heroActions,
          .salesRow,
          .finalRight,
          .footerInner,
          .footerLinks {
            flex-direction: column;
            align-items: stretch;
          }

          .pill,
          .btn,
          .salesChip,
          .priceBtn {
            width: 100%;
          }

          .hero,
          .section {
            padding-top: 64px;
            padding-bottom: 64px;
          }

          .heroPanel,
          .demoFeature,
          .demoRailItem,
          .priceCard {
            padding: 20px;
          }

          .price {
            font-size: 38px;
          }
        }
      `}</style>
    </main>
  );
}