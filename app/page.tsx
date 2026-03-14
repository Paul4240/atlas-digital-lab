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
      {/* NAV */}
      <header className="navWrap">
        <div className="nav">
          <Link href="/" className="brand">
            <span className="logo" aria-hidden />
            <div className="brandText">
              <div className="brandName">Atlas Digital Lab</div>
              <div className="brandSub">Premium Websites • SEO • Small Business Growth</div>
            </div>
          </Link>

          <nav className="links">
            <a href="#services">Services</a>
            <a href="#why-atlas">Why Atlas</a>
            <a href="#demos">Demos</a>
            <a href="#pricing">Pricing</a>
            <Link href="/houston-web-design">Houston SEO</Link>
          </nav>

          <div className="ctaRow">
            <a className="pill" href={`tel:${MAIN_PHONE}`}>
              Call {MAIN_PRETTY}
            </a>
            <a className="pill" href={`tel:${SALES_PHONE}`}>
              Sales {SALES_PRETTY}
            </a>
            <a className="pill primary" href={`mailto:${EMAIL}`}>
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="heroGlow heroGlowOne" aria-hidden />
        <div className="heroGlow heroGlowTwo" aria-hidden />

        <div className="heroLeft">
          <div className="kicker">Premium design • Fast turnaround • Mobile-first • Built to convert</div>

          <h1>
            We build <span className="accent">premium websites</span> that make small businesses look
            established, trusted, and worth calling.
          </h1>

          <p className="sub">
            Atlas Digital Lab creates high-conversion websites, sharp branding, and local SEO-ready
            pages for businesses that want to look more professional and win better customers.
          </p>

          <div className="heroBtns">
            <a className="btn primary" href={`tel:${MAIN_PHONE}`}>
              Call {MAIN_PRETTY}
            </a>
            <a className="btn" href="#demos">
              View Demos
            </a>
            <a className="btn ghost" href={`mailto:${EMAIL}`}>
              Email for Quote
            </a>
          </div>

          <div className="heroStats">
            <div className="stat">
              <div className="statNum">4</div>
              <div className="statLabel">Live demo concepts</div>
            </div>
            <div className="stat">
              <div className="statNum">Fast</div>
              <div className="statLabel">Turnaround and launch flow</div>
            </div>
            <div className="stat">
              <div className="statNum">SEO</div>
              <div className="statLabel">Structured for local visibility</div>
            </div>
          </div>
        </div>

        <div className="heroRight">
          <div className="heroPanel">
            <div className="panelTop">
              <span className="panelEyebrow">Atlas Digital Lab</span>
              <span className="panelBadge">Premium Agency Build</span>
            </div>

            <div className="panelHeadline">A cleaner online presence changes how people value your business.</div>

            <div className="panelList">
              <div className="panelItem">
                <span className="panelDot" />
                <div>
                  <strong>Premium presentation</strong>
                  <p>Look more credible, established, and higher-value from the first click.</p>
                </div>
              </div>

              <div className="panelItem">
                <span className="panelDot" />
                <div>
                  <strong>Clear conversion flow</strong>
                  <p>Strong headlines, trust sections, and calls-to-action that guide people to contact.</p>
                </div>
              </div>

              <div className="panelItem">
                <span className="panelDot" />
                <div>
                  <strong>Local growth ready</strong>
                  <p>Built with speed, mobile usability, and search visibility in mind.</p>
                </div>
              </div>
            </div>

            <div className="panelFooter">
              <a className="panelBtn" href={`tel:${MAIN_PHONE}`}>
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="trustStrip">
        <div className="trustInner">
          <div>Premium layouts</div>
          <div>High-conversion structure</div>
          <div>Local SEO-ready builds</div>
          <div>Modern branding polish</div>
          <div>Fast communication</div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="sectionHead">
          <div className="sectionKicker">Services</div>
          <h2>What we build for growing small businesses</h2>
          <p>
            Everything is designed to help your company look stronger online, build trust faster, and
            make it easier for customers to take action.
          </p>
        </div>

        <div className="cards3">
          <div className="card">
            <div className="cardIcon">01</div>
            <div className="cardTitle">Websites</div>
            <div className="cardSub">
              Fast, premium websites designed to look high-end and convert real leads.
            </div>
            <ul>
              <li>Mobile-first layout</li>
              <li>Clear calls-to-action</li>
              <li>Premium visual hierarchy</li>
              <li>Fast, clean front-end structure</li>
            </ul>
          </div>

          <div className="card">
            <div className="cardIcon">02</div>
            <div className="cardTitle">SEO &amp; Google Setup</div>
            <div className="cardSub">
              Build visibility locally and strengthen trust when customers search your service.
            </div>
            <ul>
              <li>Google Business profile help</li>
              <li>On-page SEO structure</li>
              <li>Performance and indexing readiness</li>
              <li>Service-area content support</li>
            </ul>
          </div>

          <div className="card">
            <div className="cardIcon">03</div>
            <div className="cardTitle">Branding & Positioning</div>
            <div className="cardSub">
              Cleaner branding, stronger presentation, and a more polished first impression.
            </div>
            <ul>
              <li>Logo refresh direction</li>
              <li>Typography and color polish</li>
              <li>Premium brand feel</li>
              <li>Stronger visual consistency</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY ATLAS */}
      <section id="why-atlas" className="section">
        <div className="sectionHead narrow">
          <div className="sectionKicker">Why Atlas</div>
          <h2>Built for businesses that want to look more expensive than they are today</h2>
          <p>
            Most small business websites feel outdated, generic, or unclear. We focus on premium
            design, strong structure, and trust-first messaging so your business feels more established
            the moment someone lands on the page.
          </p>
        </div>

        <div className="whyGrid">
          <div className="whyCard">
            <div className="whyTitle">Sharper first impression</div>
            <p>
              Better spacing, stronger type, cleaner sections, and a more premium overall look help
              your business feel more trustworthy right away.
            </p>
          </div>

          <div className="whyCard">
            <div className="whyTitle">Conversion-focused layout</div>
            <p>
              We structure pages to guide visitors from interest to action with stronger headlines,
              trust blocks, offer clarity, and cleaner CTA placement.
            </p>
          </div>

          <div className="whyCard">
            <div className="whyTitle">Not a cookie-cutter feel</div>
            <p>
              Even when using proven structure, the goal is to make the brand feel elevated, modern,
              and custom enough to stand out from the average local competitor.
            </p>
          </div>

          <div className="whyCard">
            <div className="whyTitle">Designed for real-world selling</div>
            <p>
              Whether someone finds you on Google, Facebook, Instagram, or a referral, the site should
              make them feel like they’re dealing with a serious business.
            </p>
          </div>
        </div>
      </section>

      {/* DEMOS */}
      <section id="demos" className="section">
        <div className="sectionHead">
          <div className="sectionKicker">Demo Portfolio</div>
          <h2>Premium concepts built to show what Atlas can do</h2>
          <p>
            These demos are built to mirror the kind of high-end layout, polish, and conversion
            structure we can create for real businesses.
          </p>
        </div>

        <div className="demoGrid">
          <div className="demoCard featured">
            <div className="demoTop">
              <div>
                <div className="demoTitle">Metal Business Cards Demo</div>
                <div className="demoText">
                  Premium product-style concept focused on finishes, package presentation, and a clean
                  luxury sales flow.
                </div>
              </div>
              <span className="tag">Premium product-style</span>
            </div>
            <Link className="demoBtn" href="/demo/metal-cards">
              Open Metal Cards Demo
            </Link>
          </div>

          <div className="demoCard">
            <div className="demoTop">
              <div>
                <div className="demoTitle">Roofing Demo</div>
                <div className="demoText">
                  Local service-style concept with stronger trust positioning, service clarity, and
                  quote-focused structure.
                </div>
              </div>
              <span className="tag">Local service-style</span>
            </div>
            <Link className="demoBtn" href="/demo/roofing">
              Open Roofing Demo
            </Link>
          </div>

          <div className="demoCard">
            <div className="demoTop">
              <div>
                <div className="demoTitle">Pet Bakery Demo</div>
                <div className="demoText">
                  Boutique retail-style concept with product highlights, premium storefront energy, and
                  a polished brand presentation.
                </div>
              </div>
              <span className="tag">Local retail-style</span>
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
                  Premium redesign concept with upscale positioning, portfolio flow, and consultation
                  focused CTA structure.
                </div>
              </div>
              <span className="tag">Premium redesign concept</span>
            </div>
            <Link className="demoBtn" href="/demo/home-styling">
              Open Interior Styling Demo
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="sectionHead">
          <div className="sectionKicker">Process</div>
          <h2>A simple build process that keeps things moving</h2>
          <p>
            Clear flow. Fast communication. No confusing handoff. We keep the process tight so projects
            move forward without dragging.
          </p>
        </div>

        <div className="processGrid">
          <div className="processCard">
            <div className="processNum">01</div>
            <div className="processTitle">Discovery</div>
            <p>We figure out the business, the offer, the audience, and what the site needs to do.</p>
          </div>

          <div className="processCard">
            <div className="processNum">02</div>
            <div className="processTitle">Design Direction</div>
            <p>We map the layout, positioning, tone, and visual feel so the brand looks more premium.</p>
          </div>

          <div className="processCard">
            <div className="processNum">03</div>
            <div className="processTitle">Build</div>
            <p>We turn the concept into a clean, responsive, conversion-minded site.</p>
          </div>

          <div className="processCard">
            <div className="processNum">04</div>
            <div className="processTitle">Launch & Improve</div>
            <p>We launch, refine, and keep improving with SEO, content, and better positioning over time.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section">
        <div className="sectionHead">
          <div className="sectionKicker">Pricing</div>
          <h2>Clear packages for businesses at different stages</h2>
          <p>
            Whether you need a clean starter site or a more premium custom presence, Atlas offers a
            path that fits where your business is right now.
          </p>
        </div>

        <div className="pricingGrid">
          <div className="priceCard">
            <div className="priceTop">
              <div className="planName">Starter</div>
              <div className="price">$299</div>
              <div className="monthly">$79/mo</div>
            </div>
            <ul>
              <li>Single-page website</li>
              <li>Mobile optimized layout</li>
              <li>Contact section</li>
              <li>Basic SEO-ready setup</li>
            </ul>
            <a className="priceBtn" href={`tel:${MAIN_PHONE}`}>
              Call to Start
            </a>
          </div>

          <div className="priceCard">
            <div className="priceTop">
              <div className="planName">Growth</div>
              <div className="price">$499</div>
              <div className="monthly">$129/mo</div>
            </div>
            <ul>
              <li>Everything in Starter</li>
              <li>Multi-section layout</li>
              <li>Trust and service blocks</li>
              <li>Stronger conversion structure</li>
            </ul>
            <a className="priceBtn" href={`tel:${MAIN_PHONE}`}>
              Call to Start
            </a>
          </div>

          <div className="priceCard popular">
            <div className="priceTop">
              <div className="planName">Pro</div>
              <div className="badge">Most Popular</div>
              <div className="price">$799</div>
              <div className="monthly">$179/mo</div>
            </div>
            <ul>
              <li>Everything in Growth</li>
              <li>Advanced SEO structure</li>
              <li>Google Business optimization help</li>
              <li>Priority design direction</li>
            </ul>
            <a className="priceBtn primary" href={`tel:${SALES_PHONE}`}>
              Talk to Sales
            </a>
          </div>

          <div className="priceCard elite">
            <div className="priceTop">
              <div className="planName">Elite</div>
              <div className="badge gold">Premium Option</div>
              <div className="price">$1,200</div>
              <div className="monthly">$249/mo</div>
            </div>
            <ul>
              <li>Custom premium design</li>
              <li>Sharper brand presentation</li>
              <li>High-conversion page structure</li>
              <li>Higher-end strategic layout</li>
            </ul>
            <a className="priceBtn primary" href={`mailto:${EMAIL}`}>
              Build My Elite Site
            </a>
          </div>
        </div>

        <div className="footerCtas">
          <div className="footerNote">
            Need something more custom, higher-end, or niche-specific? Reach out and we’ll map the
            right build.
          </div>
          <div className="footerActionRow">
            <a className="pill" href={`tel:${MAIN_PHONE}`}>
              Text {MAIN_PRETTY}
            </a>
            <a className="pill primary" href={`mailto:${EMAIL}`}>
              Email for Quote
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>© {new Date().getFullYear()} Atlas Digital Lab — Premium Websites • SEO • Branding</div>
        <div className="footerRight">
          Main: {MAIN_PRETTY} • Sales: {SALES_PRETTY} • {EMAIL}
        </div>
      </footer>

      <style jsx>{`
        .page {
          min-height: 100vh;
          color: #eef4ff;
          font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background:
            radial-gradient(circle at top left, rgba(49, 106, 255, 0.2), transparent 30%),
            radial-gradient(circle at 85% 15%, rgba(47, 211, 255, 0.14), transparent 25%),
            linear-gradient(180deg, #08111f 0%, #0a1425 30%, #08101d 100%);
        }

        .navWrap {
          position: sticky;
          top: 0;
          z-index: 40;
          backdrop-filter: blur(16px);
          background: rgba(7, 12, 21, 0.72);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .nav {
          max-width: 1180px;
          margin: 0 auto;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .brand {
          display: flex;
          gap: 12px;
          align-items: center;
          color: inherit;
          text-decoration: none;
          min-width: 250px;
        }

        .logo {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          background: linear-gradient(135deg, #34dcff, #3a63ff);
          box-shadow: 0 14px 34px rgba(52, 140, 255, 0.32);
          flex-shrink: 0;
        }

        .brandName {
          font-size: 16px;
          font-weight: 900;
          letter-spacing: -0.02em;
        }

        .brandSub {
          font-size: 12px;
          color: rgba(238, 244, 255, 0.72);
        }

        .links {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .links a {
          color: rgba(238, 244, 255, 0.84);
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
        }

        .links a:hover {
          color: #ffffff;
        }

        .ctaRow {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 11px 14px;
          border-radius: 999px;
          text-decoration: none;
          color: #eef4ff;
          font-weight: 800;
          font-size: 13px;
          white-space: nowrap;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .pill.primary {
          border: none;
          color: #07111f;
          background: linear-gradient(135deg, #37dfff, #4772ff);
          box-shadow: 0 12px 28px rgba(54, 134, 255, 0.28);
        }

        .hero {
          max-width: 1180px;
          margin: 0 auto;
          padding: 72px 20px 36px;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 28px;
          align-items: center;
          position: relative;
          overflow: hidden;
        }

        .heroGlow {
          position: absolute;
          border-radius: 999px;
          filter: blur(60px);
          pointer-events: none;
          opacity: 0.6;
        }

        .heroGlowOne {
          width: 220px;
          height: 220px;
          background: rgba(50, 110, 255, 0.22);
          top: 10px;
          left: 40%;
        }

        .heroGlowTwo {
          width: 260px;
          height: 260px;
          background: rgba(47, 211, 255, 0.16);
          right: 0;
          top: 90px;
        }

        .heroLeft {
          position: relative;
          z-index: 2;
        }

        .kicker {
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: rgba(238, 244, 255, 0.82);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        h1 {
          margin: 18px 0 14px;
          font-size: 60px;
          line-height: 1;
          letter-spacing: -0.045em;
          max-width: 12ch;
        }

        .accent {
          color: #5be1ff;
        }

        .sub {
          max-width: 60ch;
          margin: 0 0 24px;
          color: rgba(238, 244, 255, 0.82);
          font-size: 18px;
          line-height: 1.65;
        }

        .heroBtns {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 26px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 18px;
          border-radius: 14px;
          text-decoration: none;
          color: #eef4ff;
          font-weight: 900;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .btn.primary {
          border: none;
          color: #08111d;
          background: linear-gradient(135deg, #3fe5ff, #4976ff);
          box-shadow: 0 14px 36px rgba(61, 129, 255, 0.3);
        }

        .btn.ghost {
          background: transparent;
        }

        .heroStats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          max-width: 720px;
        }

        .stat {
          padding: 16px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.03));
        }

        .statNum {
          font-size: 22px;
          font-weight: 900;
          margin-bottom: 4px;
        }

        .statLabel {
          font-size: 13px;
          color: rgba(238, 244, 255, 0.74);
          line-height: 1.5;
        }

        .heroRight {
          position: relative;
          z-index: 2;
        }

        .heroPanel {
          padding: 28px;
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04)),
            rgba(10, 18, 31, 0.7);
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .panelTop {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }

        .panelEyebrow {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(238, 244, 255, 0.7);
        }

        .panelBadge {
          font-size: 12px;
          font-weight: 800;
          border-radius: 999px;
          padding: 7px 10px;
          background: rgba(91, 225, 255, 0.12);
          border: 1px solid rgba(91, 225, 255, 0.22);
          color: #baf3ff;
        }

        .panelHeadline {
          font-size: 28px;
          line-height: 1.15;
          font-weight: 900;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
        }

        .panelList {
          display: grid;
          gap: 16px;
        }

        .panelItem {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .panelDot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          margin-top: 8px;
          background: linear-gradient(135deg, #40e5ff, #4b73ff);
          flex-shrink: 0;
        }

        .panelItem strong {
          display: block;
          font-size: 15px;
          margin-bottom: 4px;
        }

        .panelItem p {
          margin: 0;
          color: rgba(238, 244, 255, 0.74);
          font-size: 14px;
          line-height: 1.6;
        }

        .panelFooter {
          margin-top: 24px;
        }

        .panelBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 16px;
          border-radius: 14px;
          background: linear-gradient(135deg, #3fe5ff, #4976ff);
          color: #07111e;
          text-decoration: none;
          font-weight: 900;
        }

        .trustStrip {
          max-width: 1180px;
          margin: 0 auto;
          padding: 6px 20px 10px;
        }

        .trustInner {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
          padding: 14px 16px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.04);
          text-align: center;
          color: rgba(238, 244, 255, 0.76);
          font-weight: 700;
          font-size: 13px;
        }

        .section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 86px 20px 0;
        }

        .sectionHead {
          max-width: 760px;
          margin-bottom: 28px;
        }

        .sectionHead.narrow {
          max-width: 820px;
        }

        .sectionKicker {
          font-size: 12px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #79e9ff;
          margin-bottom: 10px;
        }

        h2 {
          margin: 0 0 12px;
          font-size: 42px;
          line-height: 1.05;
          letter-spacing: -0.04em;
        }

        .sectionHead p {
          margin: 0;
          color: rgba(238, 244, 255, 0.76);
          line-height: 1.7;
          font-size: 16px;
        }

        .cards3 {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .card {
          border-radius: 22px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03)),
            rgba(255, 255, 255, 0.02);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .cardIcon {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 900;
          color: #08111d;
          background: linear-gradient(135deg, #46e1ff, #5177ff);
          margin-bottom: 18px;
        }

        .cardTitle {
          font-size: 22px;
          font-weight: 900;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .cardSub {
          color: rgba(238, 244, 255, 0.76);
          margin-bottom: 14px;
          line-height: 1.65;
        }

        ul {
          margin: 0;
          padding-left: 18px;
          color: rgba(238, 244, 255, 0.86);
        }

        li {
          margin: 8px 0;
          line-height: 1.5;
        }

        .whyGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .whyCard {
          border-radius: 22px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          background: rgba(255, 255, 255, 0.04);
        }

        .whyTitle {
          font-size: 20px;
          font-weight: 900;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }

        .whyCard p {
          margin: 0;
          color: rgba(238, 244, 255, 0.76);
          line-height: 1.7;
        }

        .demoGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .demoCard {
          border-radius: 24px;
          padding: 22px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03)),
            rgba(255, 255, 255, 0.02);
          min-height: 220px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .demoCard.featured {
          border-color: rgba(91, 225, 255, 0.22);
          box-shadow:
            0 18px 48px rgba(0, 0, 0, 0.18),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .demoTop {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 18px;
        }

        .demoTitle {
          font-size: 24px;
          font-weight: 900;
          line-height: 1.08;
          margin-bottom: 8px;
          letter-spacing: -0.03em;
        }

        .demoText {
          color: rgba(238, 244, 255, 0.76);
          line-height: 1.65;
          font-size: 15px;
          max-width: 44ch;
        }

        .tag {
          font-size: 12px;
          font-weight: 900;
          padding: 7px 11px;
          border-radius: 999px;
          white-space: nowrap;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(238, 244, 255, 0.86);
        }

        .demoBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 50px;
          padding: 0 16px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.05);
          color: #eef4ff;
          text-decoration: none;
          font-weight: 900;
        }

        .processGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .processCard {
          border-radius: 22px;
          padding: 22px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          background: rgba(255, 255, 255, 0.04);
        }

        .processNum {
          font-size: 13px;
          font-weight: 900;
          color: #80ebff;
          margin-bottom: 14px;
          letter-spacing: 0.08em;
        }

        .processTitle {
          font-size: 20px;
          font-weight: 900;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }

        .processCard p {
          margin: 0;
          color: rgba(238, 244, 255, 0.76);
          line-height: 1.7;
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .priceCard {
          position: relative;
          border-radius: 22px;
          padding: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.03)),
            rgba(255, 255, 255, 0.02);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .priceCard.popular {
          border-color: rgba(91, 225, 255, 0.24);
          box-shadow: 0 18px 48px rgba(0, 0, 0, 0.18);
        }

        .priceCard.elite {
          border: 1px solid rgba(255, 208, 102, 0.42);
          box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.2),
            0 0 0 1px rgba(255, 208, 102, 0.06) inset;
        }

        .priceTop {
          margin-bottom: 14px;
        }

        .planName {
          font-size: 18px;
          font-weight: 900;
          opacity: 0.96;
        }

        .price {
          margin-top: 8px;
          font-size: 40px;
          font-weight: 1000;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .monthly {
          margin-top: 8px;
          color: rgba(238, 244, 255, 0.74);
          font-weight: 800;
        }

        .badge {
          position: absolute;
          top: 18px;
          right: 18px;
          padding: 7px 10px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 900;
          background: rgba(71, 219, 255, 0.12);
          border: 1px solid rgba(71, 219, 255, 0.26);
          color: #b9f5ff;
        }

        .badge.gold {
          background: rgba(255, 208, 102, 0.12);
          border: 1px solid rgba(255, 208, 102, 0.3);
          color: #ffe3a3;
        }

        .priceBtn {
          margin-top: 18px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          min-height: 50px;
          border-radius: 14px;
          text-decoration: none;
          color: #eef4ff;
          font-weight: 900;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.05);
        }

        .priceBtn.primary {
          border: none;
          color: #07111e;
          background: linear-gradient(135deg, #40e5ff, #4b74ff);
          box-shadow: 0 14px 34px rgba(63, 129, 255, 0.26);
        }

        .footerCtas {
          margin-top: 24px;
          padding: 18px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.09);
          background: rgba(255, 255, 255, 0.04);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footerNote {
          color: rgba(238, 244, 255, 0.82);
          font-weight: 700;
          line-height: 1.6;
          max-width: 58ch;
        }

        .footerActionRow {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .footer {
          max-width: 1180px;
          margin: 0 auto;
          padding: 42px 20px 40px;
          display: flex;
          justify-content: space-between;
          gap: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          margin-top: 60px;
          color: rgba(238, 244, 255, 0.68);
          font-size: 13px;
        }

        .footerRight {
          text-align: right;
        }

        @media (max-width: 1100px) {
          .hero {
            grid-template-columns: 1fr;
          }

          h1 {
            max-width: 13ch;
          }

          .cards3,
          .pricingGrid,
          .processGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .trustInner {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 860px) {
          .links {
            display: none;
          }

          h1 {
            font-size: 46px;
          }

          h2 {
            font-size: 34px;
          }

          .heroStats,
          .cards3,
          .whyGrid,
          .demoGrid,
          .pricingGrid,
          .processGrid,
          .trustInner {
            grid-template-columns: 1fr;
          }

          .footer {
            flex-direction: column;
            text-align: center;
          }

          .footerRight {
            text-align: center;
          }

          .nav {
            padding: 14px 16px;
          }

          .hero {
            padding: 54px 16px 24px;
          }

          .section {
            padding: 64px 16px 0;
          }
        }
      `}</style>
    </main>
  );
}
