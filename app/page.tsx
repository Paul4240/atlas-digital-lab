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
      {/* HERO */}
      <section className="hero">
        <div className="heroOverlay" />

        <header className="topbar container">
          <Link href="/" className="brandWrap">
            <div className="brandDot" />
            <div>
              <div className="brandName">Atlas Digital Lab</div>
              <div className="brandSub">Premium Websites • SEO • Small Business Growth</div>
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
        </header>

        <div className="container heroContent">
          <div className="heroPanel">
            <div className="eyebrow">Atlas Digital Lab</div>

            <h1>Premium websites for small businesses that want to look more established.</h1>

            <p className="heroText">
              We build polished, high-conversion websites that make your business feel more trusted,
              more modern, and more worth calling. Clean design, sharp presentation, and better
              first impressions.
            </p>

            <div className="heroButtons">
              <a href="#demos" className="btn primaryBtn">
                View Demos
              </a>

              <a href={`tel:${MAIN_PHONE}`} className="btn ghostBtn">
                Call {MAIN_PRETTY}
              </a>

              <a href={`mailto:${EMAIL}`} className="btn ghostBtn">
                Email for Quote
              </a>
            </div>

            <div className="heroChips">
              <div className="chip">Premium presentation</div>
              <div className="chip">Mobile-first builds</div>
              <div className="chip">Clear conversion flow</div>
              <div className="chip">Local SEO-ready</div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="introStrip">
        <div className="container introGrid">
          <div className="introCard">
            <h3>Better first impressions</h3>
            <p>
              Your website should make people feel like they are dealing with a serious, established
              business from the first second.
            </p>
          </div>

          <div className="introCard">
            <h3>Cleaner sales flow</h3>
            <p>
              Strong layouts, trust sections, and clearer calls-to-action help move visitors toward
              contacting you.
            </p>
          </div>

          <div className="introCard">
            <h3>More premium positioning</h3>
            <p>
              Better spacing, sharper branding, and stronger structure help your business feel more
              valuable online.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section light">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow dark">What We Do</div>
            <h2>Websites built to help small businesses look stronger online.</h2>
            <p>
              Atlas Digital Lab creates cleaner, more premium websites for businesses that want to
              stand out from generic local competition.
            </p>
          </div>

          <div className="serviceGrid">
            <article className="serviceCard">
              <h3>Website Design</h3>
              <p>Modern, premium layouts designed to feel trustworthy and high-end.</p>
              <ul>
                <li>Mobile-first structure</li>
                <li>Premium visual hierarchy</li>
                <li>Clear contact flow</li>
              </ul>
            </article>

            <article className="serviceCard">
              <h3>SEO & Google Setup</h3>
              <p>Built with local visibility in mind so your business is better positioned online.</p>
              <ul>
                <li>On-page SEO basics</li>
                <li>Google Business support</li>
                <li>Search-ready structure</li>
              </ul>
            </article>

            <article className="serviceCard">
              <h3>Brand Presentation</h3>
              <p>Cleaner presentation that helps your business feel more polished and established.</p>
              <ul>
                <li>Visual polish</li>
                <li>Stronger brand feel</li>
                <li>More consistent design</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* FEATURE PANEL */}
      <section className="section darkPanelSection">
        <div className="container">
          <div className="featurePanel">
            <div className="featureLeft">
              <div className="eyebrow">Why Atlas</div>
              <h2>We want your site to feel custom, elevated, and easy to trust.</h2>
              <p>
                Most small business websites feel outdated or thrown together. Our goal is to create
                websites that feel cleaner, more premium, and more confidence-building without making
                the business feel fake or overdone.
              </p>
            </div>

            <div className="featureRight">
              <ul>
                <li>Premium layout and spacing</li>
                <li>Stronger online credibility</li>
                <li>Clear calls-to-action</li>
                <li>Cleaner section flow</li>
                <li>Designed for real business growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DEMOS */}
      <section id="demos" className="section creamSection">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow dark">Demo Portfolio</div>
            <h2>See the type of premium websites we can build.</h2>
            <p>
              These demos show different directions Atlas Digital Lab can take depending on the
              business type and brand feel.
            </p>
          </div>

          <div className="demoGrid">
            <div className="demoCard">
              <div className="demoTop">
                <div>
                  <div className="demoTitle">Pet Bakery Demo</div>
                  <div className="demoText">
                    Boutique, warm, premium storefront layout with stronger product presentation.
                  </div>
                </div>
                <span className="tag">Best style</span>
              </div>

              <Link className="demoBtn" href="/demo/pet-bakery">
                Open Pet Bakery Demo
              </Link>
            </div>

            <div className="demoCard">
              <div className="demoTop">
                <div>
                  <div className="demoTitle">Luxury Interior Styling Demo</div>
                  <div className="demoText">
                    Elegant, image-led concept with a cleaner luxury presentation.
                  </div>
                </div>
                <span className="tag">Elegant</span>
              </div>

              <Link className="demoBtn" href="/demo/home-styling">
                Open Interior Styling Demo
              </Link>
            </div>

            <div className="demoCard">
              <div className="demoTop">
                <div>
                  <div className="demoTitle">Roofing Demo</div>
                  <div className="demoText">
                    Local service-style concept focused on trust, structure, and quote flow.
                  </div>
                </div>
                <span className="tag">Upgrading later</span>
              </div>

              <Link className="demoBtn" href="/demo/roofing">
                Open Roofing Demo
              </Link>
            </div>

            <div className="demoCard">
              <div className="demoTop">
                <div>
                  <div className="demoTitle">Metal Business Cards Demo</div>
                  <div className="demoText">
                    Product-focused concept showing premium presentation and offer structure.
                  </div>
                </div>
                <span className="tag">Upgrading later</span>
              </div>

              <Link className="demoBtn" href="/demo/metal-cards">
                Open Metal Cards Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section light">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow dark">Pricing</div>
            <h2>Simple pricing for businesses ready to upgrade how they look online.</h2>
          </div>

          <div className="pricingGrid">
            <div className="priceCard">
              <div className="priceTop">
                <div className="planName">Starter</div>
                <div className="price">$299</div>
                <div className="monthly">$80/mo</div>
              </div>

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
              <div className="priceTop">
                <div className="planName">Growth</div>
                <div className="price">$499</div>
                <div className="monthly">$130/mo</div>
              </div>

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

            <div className="priceCard">
              <div className="priceTop">
                <div className="planName">Pro</div>
                <div className="badge">Most Popular</div>
                <div className="price">$799</div>
                <div className="monthly">$150/mo</div>
              </div>

              <ul>
                <li>Everything in Growth</li>
                <li>Advanced SEO setup</li>
                <li>Google Business optimization</li>
                <li>Priority design</li>
              </ul>

              <a className="priceBtn primaryBtnDark" href={`tel:${SALES_PHONE}`}>
                Talk to Sales
              </a>
            </div>

            <div className="priceCard elite">
              <div className="priceTop">
                <div className="planName">Elite</div>
                <div className="badge gold">Premium Option</div>
                <div className="price">$1,200</div>
                <div className="monthly">$200/mo</div>
              </div>

              <ul>
                <li>Custom premium design</li>
                <li>Brand strategy layout</li>
                <li>High-conversion structure</li>
                <li>Service area + trust sections</li>
              </ul>

              <a className="priceBtn primaryBtnDark" href={`mailto:${EMAIL}`}>
                Build My Elite Site
              </a>
            </div>
          </div>

          <div className="footerCtas">
            <div className="footerNote">
              Want a different niche demo or custom layout direction? Reach out and we’ll build around
              your business.
            </div>

            <div className="footerActionRow">
              <a className="pill darkPill" href={`tel:${MAIN_PHONE}`}>
                Text {MAIN_PRETTY}
              </a>
              <a className="pill primaryPill" href={`mailto:${EMAIL}`}>
                Email for Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section ctaSection">
        <div className="container">
          <div className="ctaPanel">
            <div className="ctaText">
              <div className="eyebrow">Atlas Digital Lab</div>
              <h2>Want your business to look this polished online?</h2>
              <p>
                We build websites that help small businesses look more premium, trustworthy, and ready
                to win better customers.
              </p>
            </div>

            <div className="ctaButtons">
              <a href={`mailto:${EMAIL}`} className="btn primaryBtn">
                Email Us
              </a>
              <a href={`tel:${MAIN_PHONE}`} className="btn darkGhost">
                Call {MAIN_PRETTY}
              </a>
            </div>
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
          background: #f6f1ea;
          color: #1d1713;
          font-family: Inter, Arial, sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .hero {
          position: relative;
          min-height: 92vh;
          background:
            linear-gradient(rgba(19, 24, 21, 0.52), rgba(19, 24, 21, 0.52)),
            url("https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80");
          background-size: cover;
          background-position: center;
          color: white;
          overflow: hidden;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top left, rgba(239, 187, 120, 0.18), transparent 42%);
          pointer-events: none;
        }

        .topbar {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          padding-top: 20px;
        }

        .brandWrap {
          display: flex;
          gap: 12px;
          align-items: center;
          color: white;
          text-decoration: none;
        }

        .brandDot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: #efbb78;
          flex-shrink: 0;
        }

        .brandName {
          font-weight: 700;
        }

        .brandSub {
          font-size: 14px;
          opacity: 0.82;
        }

        .navLinks {
          display: flex;
          gap: 18px;
          align-items: center;
        }

        .navLinks a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
        }

        .navLinks a:hover {
          color: #efbb78;
        }

        .topActions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          align-items: center;
        }

        .pill,
        .btn,
        .priceBtn,
        .demoBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-sizing: border-box;
          white-space: nowrap;
        }

        .pill {
          padding: 10px 16px;
          min-height: 46px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.26);
          color: white;
          background: rgba(255, 255, 255, 0.08);
          font-weight: 600;
        }

        .darkPill {
          border: 1px solid rgba(29, 23, 19, 0.14);
          color: #1d1713;
          background: white;
        }

        .primaryPill {
          background: #efbb78;
          color: black;
          border: none;
          font-weight: 700;
        }

        .heroContent {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          min-height: 74vh;
          padding: 40px 0 90px;
        }

        .heroPanel {
          max-width: 760px;
          background: rgba(0, 0, 0, 0.38);
          padding: 42px;
          border-radius: 24px;
          backdrop-filter: blur(4px);
        }

        .eyebrow {
          display: inline-block;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.15);
          font-size: 13px;
          margin-bottom: 18px;
          color: white;
        }

        .eyebrow.dark {
          background: #ead9c6;
          border: none;
          color: #6c4e36;
        }

        h1 {
          font-size: clamp(40px, 6vw, 66px);
          margin: 10px 0 20px;
          line-height: 1.02;
          letter-spacing: -0.03em;
          max-width: 12ch;
        }

        h2 {
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.06;
          margin: 0 0 14px;
          letter-spacing: -0.02em;
        }

        h3 {
          font-size: 22px;
          line-height: 1.2;
          margin: 0 0 10px;
        }

        p {
          margin: 0;
        }

        .heroText {
          font-size: 18px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.92);
          max-width: 60ch;
        }

        .heroButtons {
          margin-top: 24px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 12px 20px;
          min-height: 52px;
          border-radius: 12px;
          font-weight: 700;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn:hover,
        .priceBtn:hover,
        .demoBtn:hover {
          transform: translateY(-2px);
        }

        .primaryBtn {
          background: #efbb78;
          color: black;
          border: none;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
        }

        .ghostBtn {
          border: 1px solid white;
          color: white;
          background: transparent;
        }

        .darkGhost {
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: white;
          background: transparent;
        }

        .heroChips {
          margin-top: 22px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .chip {
          display: inline-block;
          padding: 7px 12px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.15);
          font-size: 14px;
        }

        .introStrip {
          margin-top: -42px;
          position: relative;
          z-index: 3;
        }

        .introGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .introCard {
          background: white;
          padding: 26px;
          border-radius: 20px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.07);
        }

        .introCard p,
        .sectionHead p,
        .serviceCard p,
        .featureLeft p,
        .demoText,
        .ctaText p {
          color: #5f5147;
          line-height: 1.7;
          font-size: 17px;
        }

        .section {
          padding: 84px 0;
        }

        .light {
          background: #f6f1ea;
        }

        .creamSection {
          background: #efe7dd;
        }

        .sectionHead {
          max-width: 780px;
          margin-bottom: 30px;
        }

        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .serviceCard {
          background: white;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
        }

        .serviceCard ul,
        .featureRight ul,
        .priceCard ul {
          margin: 14px 0 0;
          padding-left: 20px;
          line-height: 1.9;
        }

        .darkPanelSection {
          background: linear-gradient(135deg, #1e2c28 0%, #151f1c 100%);
          color: white;
        }

        .featurePanel {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 34px;
          display: grid;
          grid-template-columns: 1fr 0.95fr;
          gap: 28px;
        }

        .featureLeft p {
          color: rgba(255, 255, 255, 0.86);
        }

        .featureRight {
          display: flex;
          align-items: center;
        }

        .featureRight ul {
          color: rgba(255, 255, 255, 0.9);
        }

        .demoGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .demoCard {
          background: white;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .demoTop {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 16px;
        }

        .demoTitle {
          font-weight: 700;
          font-size: 22px;
          color: #1d1713;
          margin-bottom: 8px;
        }

        .tag {
          font-size: 12px;
          font-weight: 700;
          padding: 7px 10px;
          border-radius: 999px;
          background: #f1e5d6;
          color: #7b5d43;
          white-space: nowrap;
        }

        .demoBtn,
        .priceBtn {
          width: 100%;
          min-height: 52px;
          padding: 12px 18px;
          border-radius: 12px;
          font-weight: 700;
        }

        .demoBtn {
          background: #1d1713;
          color: white;
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 12px;
        }

        .priceCard {
          position: relative;
          background: white;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.06);
        }

        .priceCard.elite {
          border: 1px solid rgba(239, 187, 120, 0.7);
        }

        .priceTop {
          margin-bottom: 14px;
        }

        .planName {
          font-weight: 700;
          color: #6c4e36;
        }

        .price {
          font-size: 40px;
          font-weight: 800;
          line-height: 1;
          margin-top: 6px;
          color: #1d1713;
        }

        .monthly {
          margin-top: 8px;
          font-weight: 700;
          color: #5f5147;
        }

        .badge {
          position: absolute;
          top: 18px;
          right: 18px;
          font-size: 12px;
          font-weight: 700;
          padding: 7px 10px;
          border-radius: 999px;
          background: #efe7dd;
          color: #6c4e36;
        }

        .badge.gold {
          background: #efbb78;
          color: black;
        }

        .priceBtn {
          background: #1d1713;
          color: white;
          margin-top: 16px;
        }

        .primaryBtnDark {
          background: #1d1713;
          color: white;
        }

        .footerCtas {
          margin-top: 24px;
          background: white;
          border-radius: 22px;
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.05);
        }

        .footerNote {
          color: #5f5147;
          font-weight: 600;
          max-width: 700px;
        }

        .footerActionRow {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .ctaSection {
          background: #f6f1ea;
          padding-top: 24px;
        }

        .ctaPanel {
          background: #1b2623;
          color: white;
          padding: 42px;
          border-radius: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 28px;
          flex-wrap: wrap;
        }

        .ctaText {
          max-width: 720px;
        }

        .ctaButtons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
        }

        .footer {
          background: #1b1714;
          color: white;
          padding: 40px 0;
        }

        .footerInner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .footerBrand {
          font-weight: 700;
        }

        .footerSub {
          margin-top: 4px;
          color: rgba(255, 255, 255, 0.74);
          font-size: 14px;
        }

        .footerLinks {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          align-items: center;
        }

        .footerLinks a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          white-space: nowrap;
          font-size: 14px;
        }

        @media (max-width: 1100px) {
          .pricingGrid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 980px) {
          .navLinks,
          .introGrid,
          .serviceGrid,
          .featurePanel,
          .demoGrid {
            grid-template-columns: 1fr;
          }

          .navLinks {
            display: none;
          }

          .pricingGrid {
            grid-template-columns: 1fr;
          }

          .introGrid,
          .serviceGrid,
          .demoGrid {
            display: grid;
          }

          .footerInner {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 14px;
          }

          .topbar,
          .topActions,
          .heroButtons,
          .ctaButtons,
          .footerLinks,
          .footerActionRow {
            flex-direction: column;
            align-items: stretch;
          }

          .pill,
          .btn {
            width: 100%;
          }

          .heroPanel,
          .ctaPanel,
          .featurePanel {
            padding: 28px 18px;
          }

          .section {
            padding: 68px 0;
          }

          .introStrip {
            margin-top: -26px;
          }

          .footerCtas {
            padding: 18px;
          }
        }
      `}</style>
    </main>
  );
}