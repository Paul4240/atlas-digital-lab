"use client";

import React from "react";

export default function RoofingDemo() {
  const PHONE = "(346) 365-7906";
  const PHONE_LINK = "tel:3463657906";
  const EMAIL = "hello@atlasdigitallab.com";

  const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Roofing Estimate Request"
  )}&body=${encodeURIComponent(`Hi Atlas Digital Lab,

I’m interested in a roofing estimate.

Name:
Phone:
Address:
Service Needed:
Notes:
`)}`;

  return (
    <main className="page">
      <div className="pageGlow glowOne" />
      <div className="pageGlow glowTwo" />

      {/* TOPBAR */}
      <div className="topbar">
        <div className="container topbarInner">
          <div className="brandWrap">
            <div className="brandDot" />
            <div>
              <div className="brandTitle">Atlas Roofing Demo</div>
              <div className="brandSub">Premium roofing website concept</div>
            </div>
          </div>

          <div className="topActions">
            <a href={PHONE_LINK} className="pill">
              Call {PHONE}
            </a>
            <a href={PHONE_LINK} className="pill pillPrimary">
              Free Estimate
            </a>
            <a href={MAILTO} className="pill navFull">
              Email Quote
            </a>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="heroOverlay" />

        <div className="container heroGrid">
          <div className="heroLeft">
            <div className="eyebrow">Roof replacement • storm repair • premium presentation</div>

            <h1>
              Roofing that feels <span>high-trust</span> before they ever call.
            </h1>

            <p className="heroText">
              This demo is built like a premium local service brand — stronger
              visuals, cleaner structure, trust-first messaging, and a layout
              designed to push homeowners toward the higher-value package.
            </p>

            <div className="heroBtns">
              <a href={PHONE_LINK} className="btn btnPrimary">
                Call Now
              </a>
              <a href={PHONE_LINK} className="btn">
                Get Free Estimate
              </a>
            </div>

            <div className="heroStats">
              <div className="statCard">
                <div className="statTitle">24hr</div>
                <div className="statText">Emergency roof repairs</div>
              </div>
              <div className="statCard">
                <div className="statTitle">10+ Years</div>
                <div className="statText">Roofing experience</div>
              </div>
              <div className="statCard">
                <div className="statTitle">Free</div>
                <div className="statText">Roof inspections</div>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="heroImageCard">
              <img
                src="/roofing-hero.jpg"
                alt="Roofing crew working on a premium roof installation"
                className="heroImage"
              />
              <div className="heroImageShade" />

              <div className="heroImageContent">
                <div className="heroImageKicker">PREMIUM ROOFING PRESENTATION</div>
                <div className="heroImageTitle">
                  Make the company look like the obvious high-ticket choice.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="section">
        <div className="container">
          <div className="trustStrip">
            <div>Free roof inspections</div>
            <div>Storm damage support</div>
            <div>Repair + replacement</div>
            <div>Insurance claim help</div>
            <div>Premium brand feel</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="sectionIntro">
            <div className="sectionKicker">SERVICES</div>
            <h2>Built to look like a roofing company homeowners trust fast</h2>
            <p>
              This section feels more premium because it combines stronger copy,
              better spacing, and supporting visuals instead of just basic cards.
            </p>
          </div>

          <div className="serviceGrid">
            <div className="serviceCard">
              <img
                src="/roofing-detail-1.jpg"
                alt="Residential roof replacement shingles"
                className="serviceImage"
              />
              <div className="serviceBody">
                <h3>Roof Replacement</h3>
                <p>
                  Full replacement using premium shingles and a cleaner install
                  presentation designed to feel higher-value.
                </p>
              </div>
            </div>

            <div className="serviceCard">
              <img
                src="/roofing-detail-2.jpg"
                alt="Roof repair and leak inspection"
                className="serviceImage"
              />
              <div className="serviceBody">
                <h3>Roof Repair</h3>
                <p>
                  Leak detection, storm damage repair, flashing fixes, and fast
                  response work that keeps the company looking dependable.
                </p>
              </div>
            </div>

            <div className="serviceCard">
              <img
                src="/roofing-detail-3.jpg"
                alt="Storm damage roof inspection"
                className="serviceImage"
              />
              <div className="serviceBody">
                <h3>Storm Damage Support</h3>
                <p>
                  Help with inspection photos, claim documentation, and repair
                  planning after major weather hits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container twoCol">
          <div className="infoPanel">
            <div className="sectionKicker">WHY THIS LOOKS BETTER</div>
            <h2>It feels like a serious local brand, not a cheap contractor page.</h2>
            <p>
              The goal is not just to “have a roofing website.” The goal is to
              make the company look like the safer, stronger, more premium
              choice compared to local competitors.
            </p>

            <div className="bulletList">
              <div className="bulletItem">
                <div className="bulletTitle">Stronger first impression</div>
                <div className="bulletText">
                  Bigger visuals, better layout, cleaner spacing, and clearer trust.
                </div>
              </div>

              <div className="bulletItem">
                <div className="bulletTitle">More premium positioning</div>
                <div className="bulletText">
                  Helps justify a higher-ticket package instead of competing on price.
                </div>
              </div>

              <div className="bulletItem">
                <div className="bulletTitle">Better conversion flow</div>
                <div className="bulletText">
                  Hero, trust strip, services, packages, and CTA all push toward contact.
                </div>
              </div>
            </div>
          </div>

          <div className="quotePanel">
            <div className="quoteKicker">FREE INSPECTION</div>
            <h3>Need a roof estimate fast?</h3>
            <p>
              Call or text and schedule a same-day inspection. This block is
              intentionally built to feel like the “easy next step.”
            </p>

            <a href={PHONE_LINK} className="btn btnPrimary fullBtn">
              Call {PHONE}
            </a>
            <a href={MAILTO} className="btn fullBtn">
              Email Estimate Request
            </a>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="section">
        <div className="container packagesWrap">
          <div className="sectionIntro">
            <div className="sectionKicker">PACKAGES</div>
            <h2>Push attention toward the premium package</h2>
            <p>
              These package cards are styled to make the $1200 option feel like
              the clear best choice.
            </p>
          </div>

          <div className="pricingGrid">
            <div className="priceCard">
              <div className="priceTop">
                <div className="priceName">Starter</div>
                <div className="badge">Basic option</div>
              </div>
              <div className="priceValue">$299</div>
              <div className="priceSmall">Simple one-page roofing presence</div>
              <ul className="priceList">
                <li>Single service layout</li>
                <li>Basic contact CTA</li>
                <li>Mobile-friendly structure</li>
                <li>Clean local business look</li>
              </ul>
              <a href={PHONE_LINK} className="priceBtn">
                Ask About Starter
              </a>
            </div>

            <div className="priceCard">
              <div className="priceTop">
                <div className="priceName">Growth</div>
                <div className="badge">Popular</div>
              </div>
              <div className="priceValue">$799</div>
              <div className="priceSmall">Better trust sections and service flow</div>
              <ul className="priceList">
                <li>Multi-section layout</li>
                <li>Hero + trust blocks</li>
                <li>Service cards + CTA sections</li>
                <li>Designed to convert more leads</li>
              </ul>
              <a href={PHONE_LINK} className="priceBtn">
                Ask About Growth
              </a>
            </div>

            <div className="priceCard eliteCard">
              <div className="eliteGlow" />
              <div className="priceTop">
                <div className="priceName">Elite</div>
                <div className="badge gold">Best Value</div>
              </div>
              <div className="priceValue">$1,200</div>
              <div className="priceSmall">Premium presentation built to win trust fast</div>
              <ul className="priceList">
                <li>Custom premium homepage</li>
                <li>High-end visual structure</li>
                <li>Trust-first service presentation</li>
                <li>Luxury-style CTA sections</li>
                <li>Built to feel like the top local brand</li>
              </ul>
              <a href={PHONE_LINK} className="priceBtn btnPrimary">
                Build My Elite Roofing Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container">
          <div className="finalCta">
            <div className="sectionKicker">FINAL CTA</div>
            <h2>Need a roof inspection?</h2>
            <p>
              Call now and schedule your free inspection today. This closing
              section is meant to feel clean, premium, and easy to act on.
            </p>

            <div className="finalButtons">
              <a href={PHONE_LINK} className="btn btnPrimary">
                Call {PHONE}
              </a>
              <a href={MAILTO} className="btn">
                Email for Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="container footer">
        <div>Atlas Digital Lab Roofing Demo</div>
        <div>{PHONE} • {EMAIL}</div>
      </footer>

      <style jsx>{`
        .page {
          position: relative;
          min-height: 100vh;
          overflow-x: hidden;
          color: white;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          background:
            radial-gradient(circle at top left, rgba(17, 56, 102, 0.95) 0%, rgba(9, 21, 40, 1) 42%, rgba(6, 11, 20, 1) 100%);
        }

        .pageGlow {
          position: absolute;
          border-radius: 999px;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.65;
        }

        .glowOne {
          width: 260px;
          height: 260px;
          top: 80px;
          left: -60px;
          background: rgba(46, 180, 255, 0.16);
        }

        .glowTwo {
          width: 320px;
          height: 320px;
          top: 340px;
          right: -100px;
          background: rgba(0, 210, 170, 0.1);
        }

        .container {
          max-width: 1180px;
          margin: auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .topbar {
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,.08);
          backdrop-filter: blur(12px);
          background: rgba(7, 14, 26, 0.38);
        }

        .topbarInner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .brandWrap {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brandDot {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: linear-gradient(135deg, #2eb4ff, #00d2aa);
          box-shadow: 0 0 24px rgba(46,180,255,.28);
          flex-shrink: 0;
        }

        .brandTitle {
          font-size: 14px;
          font-weight: 900;
        }

        .brandSub {
          font-size: 12px;
          opacity: 0.76;
        }

        .topActions {
          display: grid;
          grid-template-columns: repeat(3, auto);
          gap: 10px;
          align-items: center;
        }

        .pill,
        .btn,
        .priceBtn,
        .uploadBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          text-decoration: none;
          font-weight: 900;
          color: white;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.06);
          transition: 0.2s ease;
        }

        .pill:hover,
        .btn:hover,
        .priceBtn:hover {
          transform: translateY(-1px);
        }

        .pill {
          min-height: 42px;
          padding: 10px 14px;
          border-radius: 999px;
          white-space: nowrap;
        }

        .pillPrimary,
        .btnPrimary {
          background: linear-gradient(135deg, #2eb4ff, #00d2aa);
          color: #07111f;
          border-color: transparent;
          box-shadow: 0 14px 30px rgba(0,210,170,.14);
        }

        .hero {
          position: relative;
          padding: 24px 0 6px;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 82% 18%, rgba(255,255,255,.04), transparent 22%),
            linear-gradient(180deg, rgba(255,255,255,.02), transparent 60%);
          pointer-events: none;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.03fr 0.97fr;
          gap: 18px;
          align-items: stretch;
        }

        .heroLeft,
        .previewPanel,
        .builderPanel,
        .sideInfoPanel,
        .sectionCard,
        .quotePanel,
        .infoPanel,
        .finalCta {
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,.1);
          background: linear-gradient(
            180deg,
            rgba(255,255,255,.08),
            rgba(255,255,255,.035)
          );
          box-shadow:
            0 26px 80px rgba(0,0,0,.34),
            inset 0 1px 0 rgba(255,255,255,.04);
        }

        .heroLeft,
        .heroRight,
        .quotePanel,
        .infoPanel,
        .sectionCard,
        .finalCta {
          padding: 28px;
        }

        .eyebrow,
        .sectionKicker,
        .quoteKicker {
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .12em;
          color: #8deaff;
        }

        h1 {
          margin: 14px 0 0;
          font-size: 62px;
          line-height: .98;
          letter-spacing: -1.8px;
          font-weight: 950;
          max-width: 10ch;
        }

        h1 span {
          color: #2eb4ff;
        }

        h2 {
          margin: 10px 0 0;
          font-size: 30px;
          line-height: 1.08;
          font-weight: 950;
          letter-spacing: -.03em;
        }

        h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.12;
          font-weight: 950;
        }

        .heroText,
        .sectionIntro p,
        .infoPanel p,
        .quotePanel p,
        .finalCta p {
          margin-top: 16px;
          font-size: 16px;
          line-height: 1.62;
          opacity: .86;
        }

        .heroBtns,
        .finalButtons,
        .footerButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .btn,
        .priceBtn {
          min-height: 54px;
          padding: 14px 18px;
          border-radius: 16px;
        }

        .heroStats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 12px;
          margin-top: 20px;
        }

        .statCard,
        .infoCard,
        .faqCard,
        .priceCard,
        .serviceCard,
        .bulletItem {
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(0,0,0,.18);
          overflow: hidden;
        }

        .statCard {
          padding: 16px;
        }

        .statTitle,
        .bulletTitle,
        .infoTitle,
        .faqQ,
        .priceName {
          font-size: 14px;
          font-weight: 900;
        }

        .statText,
        .bulletText,
        .infoText,
        .faqA {
          margin-top: 8px;
          font-size: 13px;
          line-height: 1.55;
          opacity: .78;
        }

        .heroImageCard {
          position: relative;
          min-height: 100%;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.1);
          box-shadow: 0 26px 80px rgba(0,0,0,.34);
        }

        .heroImage {
          width: 100%;
          height: 100%;
          min-height: 460px;
          object-fit: cover;
          display: block;
        }

        .heroImageShade {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.55));
        }

        .heroImageContent {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
        }

        .heroImageKicker {
          font-size: 12px;
          font-weight: 900;
          letter-spacing: .12em;
          color: #8deaff;
          margin-bottom: 10px;
        }

        .heroImageTitle {
          font-size: 28px;
          line-height: 1.1;
          font-weight: 950;
          max-width: 12ch;
        }

        .section {
          padding-top: 18px;
        }

        .trustStrip {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
          border-radius: 999px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.04);
        }

        .trustStrip div {
          padding: 14px 10px;
          text-align: center;
          font-size: 12px;
          font-weight: 800;
          color: rgba(255,255,255,.86);
          border-right: 1px solid rgba(255,255,255,.08);
        }

        .trustStrip div:last-child {
          border-right: none;
        }

        .sectionIntro {
          max-width: 760px;
          margin-bottom: 18px;
        }

        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 14px;
        }

        .serviceImage {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        .serviceBody {
          padding: 18px;
        }

        .serviceBody h3 {
          font-size: 18px;
          margin: 0 0 8px;
        }

        .serviceBody p {
          margin: 0;
          font-size: 14px;
          line-height: 1.6;
          opacity: .82;
        }

        .twoCol {
          display: grid;
          grid-template-columns: 1fr .42fr;
          gap: 18px;
        }

        .bulletList,
        .infoStack {
          display: grid;
          gap: 12px;
          margin-top: 18px;
        }

        .bulletItem,
        .infoCard {
          padding: 16px;
        }

        .quotePanel {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .fullBtn {
          width: 100%;
          margin-top: 10px;
        }

        .packagesWrap {
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,.1);
          background: linear-gradient(
            180deg,
            rgba(255,255,255,.08),
            rgba(255,255,255,.035)
          );
          box-shadow:
            0 26px 80px rgba(0,0,0,.34),
            inset 0 1px 0 rgba(255,255,255,.04);
          padding: 28px;
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .priceCard {
          position: relative;
          padding: 18px;
        }

        .eliteCard {
          border-color: rgba(46,180,255,.22);
          box-shadow: 0 0 0 1px rgba(46,180,255,.12);
        }

        .eliteGlow {
          position: absolute;
          width: 160px;
          height: 160px;
          top: -40px;
          right: -30px;
          border-radius: 999px;
          background: rgba(46,180,255,.16);
          filter: blur(30px);
          pointer-events: none;
        }

        .priceTop {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          align-items: baseline;
          flex-wrap: wrap;
        }

        .badge {
          font-size: 11px;
          font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,.14);
          background: rgba(255,255,255,.06);
          opacity: .92;
        }

        .gold {
          border-color: rgba(46,180,255,.38);
          color: #8deaff;
        }

        .priceValue {
          margin-top: 12px;
          font-size: 34px;
          font-weight: 950;
          letter-spacing: -.02em;
        }

        .priceSmall {
          margin-top: 6px;
          font-size: 12px;
          line-height: 1.4;
          opacity: .72;
        }

        .priceList {
          margin-top: 12px;
          padding-left: 18px;
          font-size: 12px;
          line-height: 1.55;
          opacity: .9;
        }

        .faqGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .faqCard {
          padding: 16px;
        }

        .finalCta {
          padding: 28px;
          text-align: center;
        }

        .finalButtons {
          justify-content: center;
        }

        .footer {
          margin-top: 24px;
          padding-top: 18px;
          padding-bottom: 42px;
          border-top: 1px solid rgba(255,255,255,.08);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          opacity: .8;
          font-size: 12px;
          line-height: 1.45;
        }

        @media (max-width: 1080px) {
          .heroGrid,
          .twoCol,
          .serviceGrid,
          .pricingGrid,
          .faqGrid {
            grid-template-columns: 1fr;
          }

          h1 {
            max-width: none;
          }

          .trustStrip {
            grid-template-columns: 1fr;
            border-radius: 20px;
          }

          .trustStrip div {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,.08);
          }

          .trustStrip div:last-child {
            border-bottom: none;
          }
        }

        @media (max-width: 860px) {
          .topActions {
            width: 100%;
            grid-template-columns: repeat(2, minmax(0,1fr));
          }

          .navFull {
            grid-column: 1 / -1;
          }

          .heroStats {
            grid-template-columns: 1fr;
          }

          .heroLeft,
          .quotePanel,
          .infoPanel,
          .packagesWrap,
          .finalCta {
            padding: 20px;
          }

          h1 {
            font-size: 46px;
            line-height: 1.02;
          }
        }

        @media (max-width: 600px) {
          .container {
            padding-left: 12px;
            padding-right: 12px;
          }

          .topActions {
            grid-template-columns: 1fr;
          }

          .navFull {
            grid-column: auto;
          }

          .pill,
          .btn,
          .priceBtn {
            width: 100%;
          }

          .heroBtns,
          .finalButtons {
            flex-direction: column;
          }

          h1 {
            font-size: 36px;
            letter-spacing: -1px;
          }

          .priceTop {
            flex-direction: column;
            align-items: flex-start;
          }

          .heroImageTitle {
            font-size: 24px;
          }

          .footer {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}