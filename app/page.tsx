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
      <div className="pageGlow glowOne" />
      <div className="pageGlow glowTwo" />
      <div className="steelNoise" />

      <section className="hero">
        <div className="heroOverlay" />
        <div className="heroEmblem" />

        <header className="topbar container">
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
          <div className="heroLeft">
            <div className="eyebrow">Texas-built presentation • Corporate polish • Premium positioning</div>

            <h1>
              Websites that make your business look like the serious choice.
            </h1>

            <p className="heroText">
              Atlas Digital Lab builds premium business websites with stronger structure,
              sharper presentation, and a more corporate feel — so your company looks more
              established, more trustworthy, and harder to ignore.
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

            <div className="heroStats">
              <div className="statCard">
                <div className="statValue">Corporate</div>
                <div className="statLabel">Sharper, stronger presentation</div>
              </div>

              <div className="statCard">
                <div className="statValue">Premium</div>
                <div className="statLabel">Built to feel more valuable</div>
              </div>

              <div className="statCard">
                <div className="statValue">Mobile</div>
                <div className="statLabel">Polished across phones and desktops</div>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="heroShowcase">
              <div className="showcaseTop">
                <div className="showcaseEyebrow">ATLAS DIGITAL LAB</div>
                <div className="showcaseBadge">Texas Corporate Web Design</div>
              </div>

              <h3>Presentation that makes the company feel stronger before the first call.</h3>

              <div className="showcaseGrid">
                <div className="showcaseCard">
                  <div className="showcaseTitle">Executive-level polish</div>
                  <div className="showcaseText">
                    Stronger spacing, cleaner hierarchy, and more disciplined layout direction.
                  </div>
                </div>

                <div className="showcaseCard">
                  <div className="showcaseTitle">Higher perceived value</div>
                  <div className="showcaseText">
                    Better presentation helps justify better pricing and stronger trust.
                  </div>
                </div>

                <div className="showcaseCard">
                  <div className="showcaseTitle">Corporate-style structure</div>
                  <div className="showcaseText">
                    More serious visual language for businesses that want to feel established.
                  </div>
                </div>

                <div className="showcaseCard">
                  <div className="showcaseTitle">Built for real sales flow</div>
                  <div className="showcaseText">
                    Cleaner sections and stronger CTA placement move more visitors toward contact.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trustStrip">
        <div className="container trustGrid">
          <div>Corporate-style polish</div>
          <div>Texas-built branding</div>
          <div>Premium presentation</div>
          <div>Mobile-first builds</div>
          <div>Local SEO-ready</div>
        </div>
      </section>

      <section id="services" className="section lightSection">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow dark">Services</div>
            <h2>Built to make businesses look sharper, more trusted, and more established.</h2>
            <p>
              We design websites that feel more premium and more corporate than the average small
              business site, without making the company feel fake or overdone.
            </p>
          </div>

          <div className="serviceGrid">
            <article className="serviceCard">
              <div className="serviceLine" />
              <h3>Website Design</h3>
              <p>Modern layouts with stronger spacing, clearer hierarchy, and premium visual structure.</p>
              <ul>
                <li>Mobile-first design</li>
                <li>Premium layout direction</li>
                <li>Clear lead flow</li>
              </ul>
            </article>

            <article className="serviceCard">
              <div className="serviceLine" />
              <h3>SEO & Google Setup</h3>
              <p>Structured foundations that help local businesses show up stronger in search.</p>
              <ul>
                <li>On-page SEO support</li>
                <li>Google Business setup</li>
                <li>Search-ready structure</li>
              </ul>
            </article>

            <article className="serviceCard">
              <div className="serviceLine" />
              <h3>Brand Presentation</h3>
              <p>Sharper online presentation that helps a company feel more legitimate and more valuable.</p>
              <ul>
                <li>Visual polish</li>
                <li>Stronger brand tone</li>
                <li>More consistent presentation</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="featureBand">
        <div className="container featureBandInner">
          <div className="featureLeft">
            <div className="eyebrow">Why Atlas</div>
            <h2>We want your business to look like the company people trust first.</h2>
            <p>
              Most local business websites feel generic. Atlas is built to make your company
              feel more established, more premium, and more capable without turning it into
              something over-styled or fake.
            </p>
          </div>

          <div className="featureRight">
            <div className="featureStack">
              <div className="featureItem">
                <div className="featureItemTitle">Stronger first impression</div>
                <div className="featureItemText">Better visual discipline helps the business look more serious immediately.</div>
              </div>

              <div className="featureItem">
                <div className="featureItemTitle">More premium positioning</div>
                <div className="featureItemText">A sharper site makes the business feel more valuable before pricing is even discussed.</div>
              </div>

              <div className="featureItem">
                <div className="featureItemTitle">Better contact flow</div>
                <div className="featureItemText">Clearer sections and cleaner calls-to-action help move visitors toward reaching out.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="demos" className="section demoSection">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow dark">Demo Portfolio</div>
            <h2>See the type of premium sites we can build.</h2>
            <p>
              Each demo is built to show how Atlas can adapt presentation, tone, and structure
              based on the niche and the kind of customer the business wants to attract.
            </p>
          </div>

          <div className="demoGrid">
            <div className="demoCard">
              <div className="demoGlow" />
              <div className="demoTop">
                <div>
                  <div className="demoTitle">Pet Bakery Demo</div>
                  <div className="demoText">
                    Boutique and premium storefront style with stronger emotional brand presentation.
                  </div>
                </div>
                <span className="tag">Flagship</span>
              </div>

              <Link className="demoBtn" href="/demo/pet-bakery">
                Open Pet Bakery Demo
              </Link>
            </div>

            <div className="demoCard">
              <div className="demoGlow" />
              <div className="demoTop">
                <div>
                  <div className="demoTitle">Luxury Interior Styling Demo</div>
                  <div className="demoText">
                    Elegant, image-led concept with a cleaner luxury residential tone.
                  </div>
                </div>
                <span className="tag">Luxury</span>
              </div>

              <Link className="demoBtn" href="/demo/home-styling">
                Open Interior Styling Demo
              </Link>
            </div>

            <div className="demoCard">
              <div className="demoGlow" />
              <div className="demoTop">
                <div>
                  <div className="demoTitle">Roofing Demo</div>
                  <div className="demoText">
                    Local service-style structure focused on trust, authority, and quote conversion.
                  </div>
                </div>
                <span className="tag">Service</span>
              </div>

              <Link className="demoBtn" href="/demo/roofing">
                Open Roofing Demo
              </Link>
            </div>

            <div className="demoCard">
              <div className="demoGlow" />
              <div className="demoTop">
                <div>
                  <div className="demoTitle">Metal Business Cards Demo</div>
                  <div className="demoText">
                    Product-style demo with premium positioning and stronger visual sales flow.
                  </div>
                </div>
                <span className="tag">Product</span>
              </div>

              <Link className="demoBtn" href="/demo/metal-cards">
                Open Metal Cards Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section lightSection">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow dark">Pricing</div>
            <h2>Simple pricing for businesses ready to look more established online.</h2>
            <p>
              The goal is to help your business look stronger, sharper, and more trustworthy
              so better customers take you more seriously.
            </p>
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
              <div className="eliteGlow" />
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
              Want a custom direction or a niche-specific demo? Reach out and we’ll build around the type of customer you want to attract.
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

      <section className="section finalCtaSection">
        <div className="container">
          <div className="ctaPanel">
            <div className="ctaText">
              <div className="eyebrow">Atlas Digital Lab</div>
              <h2>Want your company to look this sharp online?</h2>
              <p>
                We build websites that help businesses look more polished, more serious,
                and more ready for better customers.
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
          background: #e9e1d7;
          color: #151310;
          font-family: Inter, Arial, sans-serif;
          position: relative;
          overflow-x: hidden;
        }

        .pageGlow {
          position: absolute;
          border-radius: 999px;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.55;
        }

        .glowOne {
          width: 300px;
          height: 300px;
          top: 80px;
          left: -110px;
          background: rgba(191, 122, 46, 0.16);
        }

        .glowTwo {
          width: 360px;
          height: 360px;
          right: -140px;
          top: 540px;
          background: rgba(96, 53, 31, 0.12);
        }

        .steelNoise {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.035;
          background-image:
            radial-gradient(circle at 20% 20%, #ffffff 0.7px, transparent 0.8px),
            radial-gradient(circle at 80% 30%, #000000 0.7px, transparent 0.8px),
            radial-gradient(circle at 40% 70%, #ffffff 0.7px, transparent 0.8px),
            radial-gradient(circle at 65% 85%, #000000 0.7px, transparent 0.8px);
          background-size: 22px 22px, 28px 28px, 24px 24px, 30px 30px;
        }

        .container {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        .hero {
          position: relative;
          min-height: 94vh;
          background:
            linear-gradient(180deg, rgba(10, 15, 21, 0.82), rgba(10, 15, 21, 0.88)),
            radial-gradient(circle at 18% 10%, rgba(191, 122, 46, 0.2), transparent 30%),
            linear-gradient(135deg, #111920 0%, #1a242d 36%, #0e141a 100%);
          color: white;
          overflow: hidden;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.02), transparent 60%),
            radial-gradient(circle at 75% 18%, rgba(255,255,255,0.045), transparent 22%);
          pointer-events: none;
        }

        .heroEmblem {
          position: absolute;
          right: -60px;
          top: 40px;
          width: 720px;
          height: 720px;
          opacity: 0.18;
          pointer-events: none;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          filter: drop-shadow(0 0 28px rgba(0,0,0,0.3));
          background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 700'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1'%3E%3Cstop offset='0%25' stop-color='%23f0c48a'/%3E%3Cstop offset='100%25' stop-color='%23bf7a2e'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='none'%3E%3Ccircle cx='350' cy='350' r='255' stroke='url(%23g)' stroke-width='12'/%3E%3Ccircle cx='350' cy='350' r='218' stroke='url(%23g)' stroke-opacity='.55' stroke-width='8'/%3E%3Ccircle cx='350' cy='350' r='180' stroke='%23ffffff' stroke-opacity='.14' stroke-width='3'/%3E%3Cpath d='M350 150l30 92h97l-78 56 30 92-79-57-79 57 30-92-78-56h97z' fill='url(%23g)'/%3E%3Cpath d='M350 86l20 28 34-5-18 30 15 31-32-8-25 23-2-35-31-15 32-13z' fill='%23f0c48a' opacity='.92'/%3E%3Cpath d='M145 350h410' stroke='%23ffffff' stroke-opacity='.12' stroke-width='3'/%3E%3Cpath d='M350 145v410' stroke='%23ffffff' stroke-opacity='.12' stroke-width='3'/%3E%3Cpath d='M208 208l284 284' stroke='%23ffffff' stroke-opacity='.08' stroke-width='2'/%3E%3Cpath d='M492 208L208 492' stroke='%23ffffff' stroke-opacity='.08' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E");
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
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

        .brandMark {
          width: 46px;
          height: 46px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(240,196,138,0.16), rgba(255,255,255,0.03));
          border: 1px solid rgba(240,196,138,0.22);
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
            rgba(255,255,255,0.18) 45%,
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
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .pill:hover,
        .btn:hover,
        .priceBtn:hover,
        .demoBtn:hover {
          transform: translateY(-2px);
        }

        .pill {
          padding: 10px 16px;
          min-height: 46px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: white;
          background: rgba(255, 255, 255, 0.05);
          font-weight: 700;
          backdrop-filter: blur(8px);
        }

        .darkPill {
          border: 1px solid rgba(21, 19, 16, 0.1);
          color: #151310;
          background: white;
        }

        .primaryPill {
          background: linear-gradient(135deg, #f0c48a, #bf7a2e);
          color: #17110b;
          border: none;
          font-weight: 800;
          box-shadow: 0 12px 24px rgba(191, 122, 46, 0.26);
        }

        .heroContent {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 34px;
          align-items: center;
          min-height: 78vh;
          padding: 46px 0 92px;
        }

        .eyebrow {
          display: inline-block;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 18px;
          color: #f0c48a;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .eyebrow.dark {
          background: #ded0bf;
          border: none;
          color: #6a4c34;
        }

        h1 {
          font-size: clamp(42px, 6vw, 74px);
          margin: 10px 0 18px;
          line-height: 0.98;
          letter-spacing: -0.045em;
          max-width: 11ch;
        }

        h2 {
          font-size: clamp(32px, 4vw, 52px);
          line-height: 1.04;
          margin: 0 0 14px;
          letter-spacing: -0.03em;
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
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.9);
          max-width: 60ch;
        }

        .heroButtons {
          margin-top: 26px;
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          padding: 13px 20px;
          min-height: 54px;
          border-radius: 14px;
          font-weight: 800;
          font-size: 15px;
        }

        .primaryBtn {
          background: linear-gradient(135deg, #f0c48a, #bf7a2e);
          color: #17110b;
          border: none;
          box-shadow: 0 14px 28px rgba(191, 122, 46, 0.26);
        }

        .ghostBtn {
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: white;
          background: rgba(255,255,255,0.03);
        }

        .darkGhost {
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: white;
          background: transparent;
        }

        .heroStats {
          margin-top: 28px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }

        .statCard {
          padding: 18px;
          border-radius: 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
        }

        .statValue {
          font-size: 18px;
          font-weight: 900;
          margin-bottom: 6px;
          color: #f0c48a;
        }

        .statLabel {
          font-size: 13px;
          line-height: 1.5;
          color: rgba(255,255,255,0.8);
        }

        .heroShowcase {
          border-radius: 28px;
          padding: 28px;
          background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.025));
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 30px 80px rgba(0,0,0,0.28);
          backdrop-filter: blur(10px);
        }

        .showcaseTop {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 18px;
        }

        .showcaseEyebrow {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #f0c48a;
        }

        .showcaseBadge {
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.88);
        }

        .heroShowcase h3 {
          font-size: 30px;
          line-height: 1.08;
          margin: 0 0 20px;
          max-width: 14ch;
        }

        .showcaseGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .showcaseCard {
          padding: 16px;
          border-radius: 18px;
          background: rgba(0,0,0,0.18);
          border: 1px solid rgba(255,255,255,0.06);
        }

        .showcaseTitle {
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .showcaseText {
          color: rgba(255,255,255,0.8);
          line-height: 1.55;
          font-size: 13px;
        }

        .trustStrip {
          background: #e9e1d7;
          padding-top: 0;
          margin-top: -34px;
          position: relative;
          z-index: 3;
        }

        .trustGrid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          background: linear-gradient(180deg, #ffffff, #f4eee7);
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 18px 42px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(21, 19, 16, 0.06);
        }

        .trustGrid div {
          padding: 18px 16px;
          text-align: center;
          font-size: 13px;
          font-weight: 700;
          color: #5f5147;
          border-right: 1px solid rgba(21, 19, 16, 0.06);
        }

        .trustGrid div:last-child {
          border-right: none;
        }

        .section {
          padding: 86px 0;
        }

        .lightSection {
          background: #e9e1d7;
        }

        .demoSection {
          background: linear-gradient(180deg, #dfd2c4 0%, #e9e1d7 100%);
        }

        .sectionHead {
          max-width: 820px;
          margin-bottom: 34px;
        }

        .sectionHead p,
        .serviceCard p,
        .demoText,
        .ctaText p {
          color: #5f5147;
          line-height: 1.72;
          font-size: 17px;
        }

        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .serviceCard {
          background: linear-gradient(180deg, #ffffff, #f6f0e9);
          border-radius: 24px;
          padding: 26px;
          box-shadow: 0 14px 34px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(21, 19, 16, 0.05);
        }

        .serviceLine {
          width: 54px;
          height: 4px;
          border-radius: 999px;
          background: linear-gradient(90deg, #bf7a2e, #f0c48a);
          margin-bottom: 18px;
        }

        .serviceCard ul,
        .priceCard ul {
          margin: 14px 0 0;
          padding-left: 20px;
          line-height: 1.95;
          color: #5f5147;
        }

        .featureBand {
          background: linear-gradient(135deg, #121920 0%, #0d1318 100%);
          color: white;
          padding: 90px 0;
          position: relative;
        }

        .featureBandInner {
          display: grid;
          grid-template-columns: 1fr 0.95fr;
          gap: 34px;
          align-items: center;
        }

        .featureLeft p {
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.76;
          font-size: 17px;
        }

        .featureStack {
          display: grid;
          gap: 14px;
        }

        .featureItem {
          padding: 18px;
          border-radius: 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
        }

        .featureItemTitle {
          font-size: 15px;
          font-weight: 800;
          margin-bottom: 8px;
        }

        .featureItemText {
          color: rgba(255,255,255,0.76);
          line-height: 1.6;
          font-size: 14px;
        }

        .demoGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }

        .demoCard {
          position: relative;
          background: linear-gradient(180deg, #ffffff, #f6f0e9);
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(21, 19, 16, 0.05);
          overflow: hidden;
        }

        .demoGlow {
          position: absolute;
          width: 120px;
          height: 120px;
          right: -20px;
          top: -20px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(191,122,46,0.16), transparent 70%);
          pointer-events: none;
        }

        .demoTop {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .demoTitle {
          font-weight: 800;
          font-size: 22px;
          color: #151310;
          margin-bottom: 8px;
        }

        .tag {
          font-size: 12px;
          font-weight: 800;
          padding: 7px 10px;
          border-radius: 999px;
          background: #ead9c6;
          color: #6a4c34;
          white-space: nowrap;
        }

        .demoBtn,
        .priceBtn {
          width: 100%;
          min-height: 52px;
          padding: 12px 18px;
          border-radius: 14px;
          font-weight: 800;
          position: relative;
          z-index: 1;
        }

        .demoBtn {
          background: #151310;
          color: white;
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
          margin-top: 12px;
        }

        .priceCard {
          position: relative;
          background: linear-gradient(180deg, #ffffff, #f6f0e9);
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 14px 36px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(21, 19, 16, 0.05);
          overflow: hidden;
        }

        .priceCard.elite {
          border: 1px solid rgba(191, 122, 46, 0.38);
          box-shadow: 0 18px 42px rgba(191, 122, 46, 0.08);
        }

        .eliteGlow {
          position: absolute;
          width: 160px;
          height: 160px;
          right: -40px;
          top: -30px;
          border-radius: 999px;
          background: radial-gradient(circle, rgba(191,122,46,0.2), transparent 70%);
          pointer-events: none;
        }

        .priceTop {
          margin-bottom: 14px;
          position: relative;
          z-index: 1;
        }

        .planName {
          font-weight: 800;
          color: #6a4c34;
        }

        .price {
          font-size: 42px;
          font-weight: 900;
          line-height: 1;
          margin-top: 8px;
          color: #151310;
        }

        .monthly {
          margin-top: 8px;
          font-weight: 800;
          color: #5f5147;
        }

        .badge {
          position: absolute;
          top: 18px;
          right: 18px;
          font-size: 12px;
          font-weight: 800;
          padding: 7px 10px;
          border-radius: 999px;
          background: #e7d8c8;
          color: #6a4c34;
          z-index: 1;
        }

        .badge.gold {
          background: linear-gradient(135deg, #f0c48a, #bf7a2e);
          color: #17110b;
        }

        .priceBtn {
          background: #151310;
          color: white;
          margin-top: 16px;
        }

        .primaryBtnDark {
          background: #151310;
          color: white;
        }

        .footerCtas {
          margin-top: 26px;
          background: linear-gradient(180deg, #ffffff, #f6f0e9);
          border-radius: 24px;
          padding: 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.05);
          border: 1px solid rgba(21, 19, 16, 0.05);
        }

        .footerNote {
          color: #5f5147;
          font-weight: 600;
          max-width: 720px;
          line-height: 1.65;
        }

        .footerActionRow {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .finalCtaSection {
          background: #e9e1d7;
          padding-top: 28px;
        }

        .ctaPanel {
          background: linear-gradient(135deg, #121920 0%, #0d1318 100%);
          color: white;
          padding: 44px;
          border-radius: 26px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.14);
        }

        .ctaText {
          max-width: 760px;
        }

        .ctaButtons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
        }

        .footer {
          background: #12100d;
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
          font-weight: 800;
        }

        .footerSub {
          margin-top: 4px;
          color: rgba(255, 255, 255, 0.72);
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

        @media (max-width: 1160px) {
          .pricingGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .heroContent,
          .featureBandInner {
            grid-template-columns: 1fr;
          }

          .heroShowcase h3 {
            max-width: none;
          }
        }

        @media (max-width: 980px) {
          .navLinks {
            display: none;
          }

          .trustGrid,
          .serviceGrid,
          .demoGrid {
            grid-template-columns: 1fr;
          }

          .trustGrid div {
            border-right: none;
            border-bottom: 1px solid rgba(21, 19, 16, 0.06);
          }

          .trustGrid div:last-child {
            border-bottom: none;
          }

          .showcaseGrid {
            grid-template-columns: 1fr;
          }

          .footerInner {
            flex-direction: column;
            align-items: flex-start;
          }

          .heroStats {
            grid-template-columns: 1fr;
          }

          .trustStrip {
            margin-top: -18px;
          }

          .heroEmblem {
            width: 540px;
            height: 540px;
            right: -120px;
            top: 140px;
            opacity: 0.14;
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

          .heroShowcase,
          .ctaPanel {
            padding: 28px 18px;
          }

          .section {
            padding: 70px 0;
          }

          .footerCtas {
            padding: 18px;
          }

          h1 {
            max-width: none;
          }

          .ctaPanel {
            align-items: stretch;
          }

          .heroEmblem {
            width: 420px;
            height: 420px;
            right: -120px;
            top: 160px;
            opacity: 0.12;
          }
        }
      `}</style>
    </main>
  );
}