"use client";

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
      <div className="glow glowA" />
      <div className="glow glowB" />
      <div className="emblem" />

      <section className="hero">
        <div className="heroLeft">
          <div className="kicker">
            HOUSTON • SMALL BUSINESS WEBSITES • FAST TURNAROUND
          </div>

          <h1>
            Websites that make small businesses look expensive — and get more
            calls.
          </h1>

          <p className="subcopy">
            Clean layouts, stronger trust, and better conversion structure so
            your business actually looks worth hiring.
          </p>

          <div className="heroActions">
            <a href={`tel:${SALES_1}`} className="btn btnPrimary">
              Call / Text Sales
            </a>
            <a href="#demos" className="btn btnSoft">
              View Demos
            </a>
            <a href={`mailto:${EMAIL}`} className="btn btnSoft">
              Get a Quote
            </a>
          </div>

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

        <div className="heroRight">
          <div className="heroPanel">
            <div className="panelEyebrow">ATLAS DIGITAL LAB</div>
            <h2 className="panelTitle">
              A cleaner, more custom presentation for serious businesses.
            </h2>
            <p className="panelText">
              Stronger first impression, better structure, and more calls from
              real customers.
            </p>
            <a href={`mailto:${EMAIL}`} className="panelBtn">
              Start a Project
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="sectionTitle">
          Built to help businesses look stronger online.
        </h2>

        <div className="serviceGrid">
          <div className="softCard">
            <h3>Website Design</h3>
            <p>Modern layout, better spacing, stronger first impression.</p>
          </div>

          <div className="softCard">
            <h3>SEO & Google Setup</h3>
            <p>Show up stronger in search and maps.</p>
          </div>

          <div className="softCard">
            <h3>Brand Presentation</h3>
            <p>Look more legit and more valuable online.</p>
          </div>
        </div>
      </section>

      <section id="demos" className="section">
        <h2 className="sectionTitle">Real directions we can build from.</h2>

        <div className="demosWrap">
          <a href="/demo/pet-bakery" className="demoFeature">
            <div className="demoBadge">Featured Demo</div>
            <h3>Pet Bakery Demo</h3>
            <p>
              Boutique storefront direction with warmer presentation and better
              product flow.
            </p>
            <span>Open Demo</span>
          </a>

          <div className="demoRail">
            <a href="/demo/home-styling" className="demoItem">
              <strong>Interior Styling</strong>
              <small>Elegant, image-led layout</small>
            </a>

            <a href="/demo/roofing" className="demoItem">
              <strong>Roofing Demo</strong>
              <small>Trust-based service structure</small>
            </a>

            <a href="/demo/metal-cards" className="demoItem">
              <strong>Metal Cards Demo</strong>
              <small>Product-style layout with stronger offer flow</small>
            </a>
          </div>
        </div>
      </section>

      <section className="section pricingSection">
        <h2 className="sectionTitle">
          Simple pricing for businesses ready to look more established.
        </h2>

        <div className="pricingIntro">
          <div className="pricingNote">
            Most businesses choose <strong>Pro ($799)</strong> or{" "}
            <strong>Elite ($1,200)</strong>.
          </div>
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

          <div className="priceCard featured">
            <div className="miniTag">Most Popular</div>
            <div className="plan">Pro</div>
            <div className="price">$799</div>
            <p>Advanced SEO • Priority design</p>
          </div>

          <div className="priceCard elite">
            <div className="miniTag miniGold">Best Results</div>
            <div className="plan">Elite</div>
            <div className="price">$1,200</div>
            <p>Premium custom build</p>
          </div>
        </div>
      </section>

      <section className="section finalSection">
        <h2 className="sectionTitle">Want your company to look this sharp online?</h2>

        <div className="finalActions">
          <a href={`mailto:${EMAIL}`} className="btn btnPrimary">
            Email Us
          </a>
          <a href={`tel:${MAIN_PHONE}`} className="btn btnSoft">
            Call {MAIN_PRETTY}
          </a>
        </div>
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(199, 169, 106, 0.12), transparent 22%),
            linear-gradient(180deg, #060b14 0%, #08101b 45%, #050a12 100%);
          color: #f5f1e8;
          font-family: Georgia, "Times New Roman", serif;
          padding: 40px 32px 80px;
          position: relative;
          overflow: hidden;
        }

        .glow {
          position: fixed;
          border-radius: 999px;
          filter: blur(100px);
          pointer-events: none;
          opacity: 0.18;
        }

        .glowA {
          width: 260px;
          height: 260px;
          top: 80px;
          left: -120px;
          background: rgba(199, 169, 106, 0.5);
        }

        .glowB {
          width: 300px;
          height: 300px;
          right: -120px;
          bottom: 120px;
          background: rgba(52, 81, 132, 0.45);
        }

        .emblem {
          position: fixed;
          right: -120px;
          top: 160px;
          width: 520px;
          height: 520px;
          border-radius: 999px;
          border: 1px solid rgba(199, 169, 106, 0.08);
          pointer-events: none;
          opacity: 0.28;
        }

        .emblem::before,
        .emblem::after {
          content: "";
          position: absolute;
          inset: 40px;
          border-radius: 999px;
          border: 1px solid rgba(199, 169, 106, 0.08);
        }

        .emblem::after {
          inset: 150px;
          clip-path: polygon(
            50% 0%,
            61% 35%,
            98% 35%,
            68% 57%,
            79% 91%,
            50% 70%,
            21% 91%,
            32% 57%,
            2% 35%,
            39% 35%
          );
          background: rgba(199, 169, 106, 0.18);
          border: none;
        }

        .hero,
        .section {
          max-width: 1180px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 48px;
          align-items: start;
          padding-top: 10px;
        }

        .kicker {
          font-family: Arial, sans-serif;
          font-size: 12px;
          letter-spacing: 0.12em;
          font-weight: 700;
          color: #c7a96a;
          margin-bottom: 20px;
        }

        h1 {
          font-size: clamp(50px, 7vw, 78px);
          line-height: 0.98;
          margin: 0 0 24px;
          letter-spacing: -0.04em;
          max-width: 9ch;
        }

        .subcopy {
          font-family: Arial, sans-serif;
          color: #b7c0cf;
          max-width: 640px;
          font-size: 19px;
          line-height: 1.6;
          margin: 0 0 22px;
        }

        .heroActions,
        .salesRow,
        .finalActions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .btn {
          font-family: Arial, sans-serif;
          text-decoration: none;
          padding: 14px 20px;
          border-radius: 12px;
          font-weight: 700;
          transition: 0.2s ease;
        }

        .btn:hover,
        .salesChip:hover,
        .demoFeature:hover,
        .demoItem:hover,
        .softCard:hover,
        .priceCard:hover {
          transform: translateY(-3px);
        }

        .btnPrimary {
          background: linear-gradient(135deg, #d8b44f, #c79f2b);
          color: #111;
          box-shadow: 0 10px 30px rgba(199, 159, 43, 0.18);
        }

        .btnSoft {
          color: #f5f1e8;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }

        .salesRow {
          margin-top: 18px;
        }

        .salesChip {
          font-family: Arial, sans-serif;
          text-decoration: none;
          color: #f0f3f9;
          background: rgba(255, 255, 255, 0.045);
          padding: 10px 14px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          transition: 0.2s ease;
        }

        .heroPanel,
        .softCard,
        .demoFeature,
        .demoItem,
        .priceCard {
          background:
            linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.025));
          backdrop-filter: blur(14px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.18);
        }

        .heroPanel {
          border-radius: 28px;
          padding: 34px 32px;
          min-height: 220px;
        }

        .panelEyebrow {
          font-family: Arial, sans-serif;
          font-size: 12px;
          letter-spacing: 0.12em;
          font-weight: 700;
          color: #c7a96a;
          margin-bottom: 16px;
        }

        .panelTitle {
          font-size: 36px;
          line-height: 1.02;
          margin: 0 0 14px;
          letter-spacing: -0.03em;
        }

        .panelText {
          font-family: Arial, sans-serif;
          color: #c7cfdb;
          line-height: 1.65;
          font-size: 17px;
          margin: 0 0 20px;
        }

        .panelBtn {
          display: inline-block;
          font-family: Arial, sans-serif;
          text-decoration: none;
          color: #fff;
          background: rgba(0, 0, 0, 0.35);
          padding: 12px 18px;
          border-radius: 10px;
          font-weight: 700;
        }

        .section {
          margin-top: 88px;
        }

        .sectionTitle {
          font-size: clamp(36px, 4vw, 54px);
          line-height: 1.04;
          margin: 0 0 26px;
          letter-spacing: -0.03em;
        }

        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .softCard {
          border-radius: 22px;
          padding: 26px 24px;
          min-height: 126px;
        }

        .softCard h3 {
          margin: 0 0 14px;
          font-size: 28px;
          line-height: 1.05;
        }

        .softCard p {
          margin: 0;
          font-family: Arial, sans-serif;
          color: #c2c9d5;
          font-size: 16px;
          line-height: 1.6;
        }

        .demosWrap {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 20px;
          align-items: stretch;
        }

        .demoFeature {
          text-decoration: none;
          color: #f5f1e8;
          border-radius: 28px;
          padding: 30px;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          transition: 0.2s ease;
        }

        .demoBadge,
        .miniTag {
          width: fit-content;
          font-family: Arial, sans-serif;
          font-size: 12px;
          font-weight: 700;
          border-radius: 999px;
          padding: 7px 10px;
        }

        .demoBadge {
          background: rgba(111, 182, 255, 0.12);
          color: #9fd0ff;
          margin-bottom: 18px;
        }

        .demoFeature h3 {
          margin: 0 0 12px;
          font-size: 40px;
          line-height: 1.02;
          letter-spacing: -0.03em;
        }

        .demoFeature p {
          margin: 0 0 18px;
          font-family: Arial, sans-serif;
          color: #c5ccda;
          font-size: 17px;
          line-height: 1.65;
          max-width: 520px;
        }

        .demoFeature span:last-child {
          font-family: Arial, sans-serif;
          color: #d8b44f;
          font-weight: 700;
          font-size: 14px;
        }

        .demoRail {
          display: grid;
          gap: 18px;
        }

        .demoItem {
          text-decoration: none;
          color: #f5f1e8;
          border-radius: 22px;
          padding: 24px;
          transition: 0.2s ease;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 82px;
        }

        .demoItem strong {
          font-size: 28px;
          line-height: 1.06;
          margin-bottom: 8px;
        }

        .demoItem small {
          font-family: Arial, sans-serif;
          color: #c2c9d5;
          font-size: 15px;
          line-height: 1.5;
        }

        .pricingIntro {
          margin-bottom: 18px;
        }

        .pricingNote {
          display: inline-block;
          font-family: Arial, sans-serif;
          color: #d8b44f;
          background: rgba(216, 180, 79, 0.08);
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
          transition: 0.2s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
        }

        .plan {
          font-size: 28px;
          margin-bottom: 10px;
        }

        .price {
          font-size: 52px;
          line-height: 1;
          margin-bottom: 12px;
          letter-spacing: -0.03em;
        }

        .priceCard p {
          margin: 0;
          font-family: Arial, sans-serif;
          color: #c2c9d5;
          line-height: 1.6;
          font-size: 16px;
        }

        .featured {
          background:
            linear-gradient(135deg, rgba(255,255,255,0.06), rgba(111,182,255,0.06));
        }

        .elite {
          background:
            linear-gradient(135deg, rgba(216,180,79,0.95), rgba(194,151,42,0.92));
          color: #17120a;
        }

        .elite p,
        .elite .miniTag {
          color: #2b2110;
        }

        .miniTag {
          background: rgba(255,255,255,0.08);
          color: #edf3ff;
          margin-bottom: 10px;
        }

        .miniGold {
          background: rgba(23, 18, 10, 0.14);
          color: #17120a;
        }

        .finalSection {
          padding-bottom: 30px;
        }

        @media (max-width: 1080px) {
          .hero,
          .demosWrap,
          .serviceGrid,
          .pricingGrid {
            grid-template-columns: 1fr 1fr;
          }

          .hero {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 760px) {
          .page {
            padding: 26px 16px 60px;
          }

          .serviceGrid,
          .demosWrap,
          .pricingGrid {
            grid-template-columns: 1fr;
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

          .demoFeature h3 {
            font-size: 32px;
          }

          .softCard h3,
          .demoItem strong,
          .plan {
            font-size: 24px;
          }

          .price {
            font-size: 42px;
          }

          .emblem {
            width: 360px;
            height: 360px;
            right: -120px;
            top: 260px;
          }
        }
      `}</style>
    </main>
  );
}