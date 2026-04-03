"use client";

import Link from "next/link";

export default function HomePage() {
  const MAIN_PHONE = "8327050313";
  const MAIN_PRETTY = "(832) 705-0313";

  const SALES_PHONE = "3463657906";
  const SALES_PRETTY = "(346) 365-7906";

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
              <a href={`tel:${SALES_PHONE}`} className="btn primaryBtn">
                Call / Text Sales
              </a>
              <Link href="/demos" className="btn darkBtn">
                See Real Examples
              </Link>
              <a href={`mailto:${EMAIL}`} className="btn ghostBtn">
                Get a Quote
              </a>
            </div>

            <div className="heroMeta">
              <div className="metaItem">
                <div className="metaLabel">Positioning</div>
                <div className="metaText">
                  Built to make your business feel sharper, more trusted, and more established.
                </div>
              </div>

              <div className="metaItem">
                <div className="metaLabel">Built For</div>
                <div className="metaText">
                  Small businesses that want to look more serious online and win better customers.
                </div>
              </div>

              <div className="metaItem">
                <div className="metaLabel">Focus</div>
                <div className="metaText">
                  Design, trust, local SEO structure, and better conversion flow.
                </div>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="heroPanel">
              <div className="panelTop">
                <div>
                  <div className="panelEyebrow">ATLAS DIGITAL LAB</div>
                  <div className="panelTitle">
                    A cleaner, more custom presentation for serious businesses.
                  </div>
                </div>

                <div className="panelBadge">Texas Web Design</div>
              </div>

              <div className="panelLines">
                <div className="panelLine">
                  <div className="lineTitle">Corporate-style clarity</div>
                  <div className="lineText">
                    Cleaner hierarchy and more disciplined spacing make the business look more established.
                  </div>
                </div>

                <div className="panelLine">
                  <div className="lineTitle">Stronger trust from the first click</div>
                  <div className="lineText">
                    Better presentation helps people take the business more seriously before they even call.
                  </div>
                </div>

                <div className="panelLine">
                  <div className="lineTitle">Built to convert better</div>
                  <div className="lineText">
                    Clear structure and stronger calls-to-action help turn more visitors into real leads.
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
          <span>Mobile-first builds</span>
          <span>Local SEO-ready</span>
          <span>Stronger brand presentation</span>
          <span>Clear conversion flow</span>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <div className="splitIntro">
            <div className="introLeft">
              <div className="sectionEyebrow">Services</div>
              <h2>Built to help businesses look stronger online.</h2>
            </div>

            <div className="introRight">
              <p>
                We design websites that feel more premium and more custom than the average
                small business site — without making the company feel overdesigned or fake.
              </p>
            </div>
          </div>

          <div className="serviceRows">
            <div className="serviceRow">
              <div className="serviceNumber">01</div>
              <div className="serviceContent">
                <h3>Website Design</h3>
                <p>
                  Modern layouts with better spacing, stronger hierarchy, and a sharper first impression.
                </p>
              </div>
              <div className="serviceList">
                <span>Mobile-first design</span>
                <span>Premium layout direction</span>
                <span>Clear lead flow</span>
              </div>
            </div>

            <div className="serviceRow">
              <div className="serviceNumber">02</div>
              <div className="serviceContent">
                <h3>SEO & Google Setup</h3>
                <p>
                  Structured foundations that help local businesses show up stronger in search and maps.
                </p>
              </div>
              <div className="serviceList">
                <span>On-page SEO support</span>
                <span>Google Business help</span>
                <span>Search-ready structure</span>
              </div>
            </div>

            <div className="serviceRow">
              <div className="serviceNumber">03</div>
              <div className="serviceContent">
                <h3>Brand Presentation</h3>
                <p>
                  Sharper online presentation that helps a company feel more legitimate and more valuable.
                </p>
              </div>
              <div className="serviceList">
                <span>Visual polish</span>
                <span>Stronger brand tone</span>
                <span>More consistency</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section featureSection">
        <div className="container featureGrid">
          <div className="featureLeft">
            <div className="sectionEyebrow">Why Atlas</div>
            <h2>We want your business to look like the company people trust first.</h2>
          </div>

          <div className="featureRight">
            <div className="featureList">
              <div className="featureItem">
                <div className="featureItemTitle">Stronger first impression</div>
                <div className="featureItemText">
                  Better visual discipline helps the business look more serious immediately.
                </div>
              </div>

              <div className="featureItem">
                <div className="featureItemTitle">More premium positioning</div>
                <div className="featureItemText">
                  A sharper site makes the business feel more valuable before pricing is even discussed.
                </div>
              </div>

              <div className="featureItem">
                <div className="featureItemTitle">Better contact flow</div>
                <div className="featureItemText">
                  Clearer sections and cleaner calls-to-action help move visitors toward reaching out.
                </div>
              </div>
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
        <div className="container">
          <div className="splitIntro demosIntro">
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

          <div className="showcaseWrap">
            <Link className="demoFeature" href="/demo/pet-bakery">
              <div className="demoFeatureInner">
                <div className="demoFeatureTop">
                  <span className="featureTag">Flagship Demo</span>
                  <span className="featureMini">Best showcase</span>
                </div>

                <div className="demoFeatureBody">
                  <h3 className="demoFeatureTitle">Pet Bakery Demo</h3>
                  <p className="demoFeatureText">
                    Boutique storefront direction with stronger warmth, better product presentation,
                    and a more polished visual flow that feels much closer to a real paid build.
                  </p>
                </div>

                <div className="demoFeatureBottom">
                  <span className="demoArrow">Open Demo</span>
                </div>
              </div>
            </Link>

            <div className="demoRail">
              <Link className="demoRailItem" href="/demo/home-styling">
                <div className="demoRailTitle">Luxury Interior Styling</div>
                <div className="demoRailText">
                  Elegant, image-led residential presentation with a stronger design feel.
                </div>
                <div className="demoRailArrow">Open Demo</div>
              </Link>

              <Link className="demoRailItem" href="/demo/roofing">
                <div className="demoRailTitle">Roofing Demo</div>
                <div className="demoRailText">
                  Trust-based local service structure focused on stronger quote intent.
                </div>
                <div className="demoRailArrow">Open Demo</div>
              </Link>

              <Link className="demoRailItem" href="/demo/metal-cards">
                <div className="demoRailTitle">Metal Cards Demo</div>
                <div className="demoRailText">
                  Product-style layout with stronger offer structure and interactive direction.
                </div>
                <div className="demoRailArrow">Open Demo</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section pricingSection">
        <div className="container">
          <div className="splitIntro pricingIntro">
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

          <div className="pricingBanner">
            Most businesses choose Pro ($799) or Elite ($1,200)
          </div>

          <div className="pricingLayout">
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
                  <a className="priceBtn" href={`tel:${MAIN_PHONE}`}>
                    Call to Start
                  </a>
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
                  <a className="priceBtn primaryPriceBtn" href={`tel:${SALES_PHONE}`}>
                    Talk to Sales
                  </a>
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
                  <a className="priceBtn primaryPriceBtn" href={`mailto:${EMAIL}`}>
                    Build My Elite Site
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pricingFooter">
            <div className="pricingNote">
              Want a custom direction or a niche-specific demo? Reach out and we’ll build around
              the type of customer you want to attract.
            </div>

            <div className="pricingActions">
              <a className="pill" href={`tel:${MAIN_PHONE}`}>
                Text {MAIN_PRETTY}
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

        .steelNoise {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.03;
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
        }

        .texasMark {
          position: relative;
          overflow: hidden;
        }

        .texasMark::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            130deg,
            transparent 18%,
            rgba(255,255,255,0.14) 45%,
            transparent 70%
          );
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
        .demoRailItem {
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }

        .pill:hover,
        .btn:hover,
        .priceBtn:hover,
        .demoFeature:hover,
        .demoRailItem:hover {
          transform: translateY(-2px);
        }

        .pill {
          padding: 10px 16px;
          min-height: 46px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          color: white;
          background: rgba(255, 255, 255, 0.04);
          font-weight: 700;
          text-decoration: none;
          backdrop-filter: blur(8px);
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
          padding: 54px 0 76px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 36px;
          align-items: start;
        }

        .eyebrow,
        .sectionEyebrow,
        .panelEyebrow {
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
        .featureItemText,
        .pricingNote,
        .finalLeft p,
        .pricingSideNote p,
        .demoFeatureText,
        .demoRailText,
        .problemText {
          color: #b6c0c7;
          font-size: 17px;
          line-height: 1.72;
        }

        .heroMeta {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .metaItem {
          padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .metaLabel {
          font-size: 13px;
          font-weight: 800;
          color: #f0c48a;
          margin-bottom: 6px;
        }

        .metaText {
          color: #c7cfd6;
          font-size: 14px;
          line-height: 1.55;
        }

        .heroPanel {
          padding: 28px;
          border-radius: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03));
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 30px 70px rgba(0,0,0,0.22);
        }

        .panelTop {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .panelTitle {
          font-size: 28px;
          line-height: 1.08;
          letter-spacing: -0.03em;
          font-weight: 800;
          max-width: 13ch;
        }

        .panelBadge {
          font-size: 12px;
          font-weight: 800;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.88);
          white-space: nowrap;
        }

        .panelLines {
          display: grid;
          gap: 18px;
        }

        .panelLine {
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .panelLine:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .lineTitle {
          font-weight: 800;
          margin-bottom: 8px;
          font-size: 15px;
        }

        .lineText {
          color: #b6c0c7;
          line-height: 1.65;
          font-size: 14px;
        }

        .panelActionRow {
          margin-top: 22px;
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
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 999px;
          overflow: hidden;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
        }

        .trustRow span {
          padding: 16px 12px;
          text-align: center;
          font-size: 13px;
          font-weight: 700;
          color: #c7cfd6;
          border-right: 1px solid rgba(255,255,255,0.06);
        }

        .trustRow span:last-child {
          border-right: none;
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

        .serviceRows,
        .featureList {
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

        .serviceList {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .serviceList span {
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

        .featureSection {
          background: linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
        }

        .featureGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 34px;
          align-items: start;
        }

        .featureItem {
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .featureItem:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .featureItemTitle {
          font-size: 15px;
          font-weight: 800;
          margin-bottom: 8px;
          color: #f3f5f7;
        }

        .problemSection {
          padding-top: 26px;
        }

        .problemWrap {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding-top: 34px;
        }

        .showcaseWrap {
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

        .demoFeatureInner {
          position: relative;
          z-index: 1;
          height: 100%;
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .demoFeatureTop {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
        }

        .featureTag,
        .featureMini {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 34px;
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
        }

        .featureTag {
          background: rgba(143,228,255,0.08);
          border: 1px solid rgba(143,228,255,0.18);
          color: #8fe4ff;
        }

        .featureMini {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.86);
        }

        .demoFeatureBody {
          max-width: 560px;
        }

        .demoFeatureTitle {
          font-size: 38px;
          line-height: 1.02;
          letter-spacing: -0.035em;
          font-weight: 800;
          margin: 18px 0 12px;
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

        .pricingSideNote {
          position: sticky;
          top: 100px;
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

        .pricingSideNote h3 {
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
          .featureGrid,
          .showcaseWrap,
          .splitIntro,
          .serviceRow,
          .pricingLayout {
            grid-template-columns: 1fr;
          }

          .pricingSideNote {
            position: static;
            padding-top: 0;
          }

          h1 {
            max-width: none;
          }

          .heroPanel {
            margin-top: 8px;
          }
        }

        @media (max-width: 900px) {
          .navLinks {
            display: none;
          }

          .trustRow,
          .heroMeta,
          .pricingGrid {
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
          .footerLinks {
            flex-direction: column;
            align-items: stretch;
          }

          .pill,
          .btn,
          .priceBtn {
            width: 100%;
          }

          .hero,
          .section {
            padding-top: 70px;
            padding-bottom: 70px;
          }

          .heroPanel,
          .demoFeatureInner,
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

          .panelTop,
          .demoFeatureTop {
            flex-direction: column;
            align-items: flex-start;
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