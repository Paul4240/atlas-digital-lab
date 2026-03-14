"use client";

import React, { useMemo, useRef, useState } from "react";

export default function MetalCardsDemo() {
  const MAIN_PHONE = "8327050313";
  const MAIN_PRETTY = "(832) 705-0313";
  const SALES_PHONE = "3463657906";
  const SALES_PRETTY = "(346) 365-7906";
  const EMAIL = "hello@atlasdigitallab.com";

  const finishes = useMemo(
    () => [
      {
        key: "black",
        name: "Black",
        note: "Bold, sharp, luxury look.",
        accent: "#38c3ff",
        glow: "rgba(56,195,255,.24)",
        card:
          "linear-gradient(145deg, #0c1016 0%, #171d27 35%, #0b0f15 100%)",
        edge: "rgba(255,255,255,.10)",
      },
      {
        key: "gold",
        name: "Gold",
        note: "Premium look for high-ticket brands.",
        accent: "#f3c44a",
        glow: "rgba(243,196,74,.20)",
        card:
          "linear-gradient(145deg, #2f2610 0%, #705822 34%, #251d0c 100%)",
        edge: "rgba(243,196,74,.28)",
      },
      {
        key: "rose",
        name: "Rose Gold",
        note: "Modern and classy creative feel.",
        accent: "#ef92b6",
        glow: "rgba(239,146,182,.20)",
        card:
          "linear-gradient(145deg, #2d1921 0%, #603644 35%, #211218 100%)",
        edge: "rgba(239,146,182,.24)",
      },
      {
        key: "silver",
        name: "Silver",
        note: "Clean, professional, brushed look.",
        accent: "#dce8ff",
        glow: "rgba(220,232,255,.18)",
        card:
          "linear-gradient(145deg, #8d96a5 0%, #dce2eb 28%, #7d8796 60%, #b8c1cd 100%)",
        edge: "rgba(255,255,255,.24)",
      },
    ],
    []
  );

  const [finish, setFinish] = useState(finishes[0]);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [brandName, setBrandName] = useState("JORDAN MILLER");
  const [title, setTitle] = useState("Owner • Custom Metal Cards");
  const [phone, setPhone] = useState(SALES_PRETTY);
  const [site, setSite] = useState("brand.com");
  const [city, setCity] = useState("Houston, TX");

  const fileRef = useRef<HTMLInputElement | null>(null);

  function onPickLogo() {
    fileRef.current?.click();
  }

  function onLogoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setLogoUrl(url);
  }

  const telMain = `tel:${MAIN_PHONE}`;
  const telSales = `tel:${SALES_PHONE}`;

  const mailtoQuote = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Metal Cards Quote"
  )}&body=${encodeURIComponent(`Hi Atlas Digital Lab,

I’m interested in premium metal business cards.

Finish: ${finish.name}
Name: ${brandName}
Title: ${title}
Phone: ${phone}
Website: ${site}
City: ${city}

Notes:
`)}`;

  return (
    <main className="page">
      <div className="pageGlow glowOne" />
      <div className="pageGlow glowTwo" />

      <section className="hero">
        <div className="heroOverlay" />

        <div className="container topbar">
          <div className="brandWrap">
            <div
              className="brandDot"
              style={{
                background: finish.accent,
                boxShadow: `0 0 24px ${finish.glow}`,
              }}
            />
            <div>
              <div className="brandName">Atlas Digital Lab</div>
              <div className="brandSub">Premium Metal Business Cards Demo</div>
            </div>
          </div>

          <div className="topActions">
            <a href={telMain} className="pill">
              Main {MAIN_PRETTY}
            </a>
            <a href={telSales} className="pill pillPrimary">
              Sales {SALES_PRETTY}
            </a>
            <a href={mailtoQuote} className="pill navFull">
              Email Quote
            </a>
          </div>
        </div>

        <div className="container heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">Premium presentation • engraved look • product-style flow</div>

            <h1>
              Metal cards that make your brand feel{" "}
              <span style={{ color: finish.accent }}>more expensive</span>.
            </h1>

            <p className="heroText">
              This demo is built to feel like a luxury storefront, not a plain
              order form. Strong finishes, better mockups, cleaner typography,
              and a premium-first layout that makes the product feel high-value.
            </p>

            <div className="heroCtas">
              <a href={telSales} className="btn btnPrimary">
                Call / Text to Order
              </a>
              <a href={mailtoQuote} className="btn">
                Email for a Quote
              </a>
            </div>

            <div className="heroPoints">
              <div className="pointCard">
                <div className="pointTitle">Luxury feel</div>
                <div className="pointText">Built to make a first impression feel premium.</div>
              </div>
              <div className="pointCard">
                <div className="pointTitle">Interactive demo</div>
                <div className="pointText">Switch finishes and upload a logo live.</div>
              </div>
              <div className="pointCard">
                <div className="pointTitle">Clear sales flow</div>
                <div className="pointText">Stronger visuals and cleaner CTA sections.</div>
              </div>
            </div>
          </div>

          <div className="previewPanel">
            <div className="previewTop">
              <div>
                <div className="previewKicker">LIVE PRODUCT PREVIEW</div>
                <div className="previewTitle">Luxury-style card mockup</div>
              </div>

              <div
                className="finishChip"
                style={{
                  color: finish.accent,
                  borderColor: finish.edge,
                  boxShadow: `0 0 0 3px ${finish.glow}`,
                }}
              >
                {finish.name}
              </div>
            </div>

            <div className="cardStage">
              <div
                className="metalCard metalRear"
                style={{
                  background: finish.card,
                  borderColor: finish.edge,
                  boxShadow: `0 18px 60px rgba(0,0,0,.35), 0 0 26px ${finish.glow}`,
                }}
              />
              <div
                className="metalCard metalFront"
                style={{
                  background: finish.card,
                  borderColor: finish.edge,
                  boxShadow: `0 18px 60px rgba(0,0,0,.35), 0 0 26px ${finish.glow}`,
                }}
              >
                <div className="cardShine" />

                <div className="cardTop">
                  <div>
                    <div className="cardName">{brandName.toUpperCase()}</div>
                    <div className="cardRole">{title}</div>
                  </div>

                  <div
                    className="cardBadge"
                    style={{ color: finish.accent, borderColor: finish.edge }}
                  >
                    {finish.name}
                  </div>
                </div>

                <div className="cardLogoBox">
                  {logoUrl ? (
                    <img src={logoUrl} alt="Logo preview" className="cardLogo" />
                  ) : (
                    <div className="cardLogoPlaceholder">Your logo here</div>
                  )}
                </div>

                <div className="cardMetaRow">
                  <div className="cardMeta">
                    {phone}
                    <br />
                    {EMAIL}
                  </div>
                  <div className="cardMeta cardMetaRight">
                    {site}
                    <br />
                    {city}
                  </div>
                </div>
              </div>
            </div>

            <div className="previewBottom">
              <div className="previewNote">Upload your logo and preview it instantly.</div>
              <div className="previewNote">Switch finishes to change the look and feel.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="introStrip">
            <div className="introItem">Premium layout</div>
            <div className="introItem">Luxury product feel</div>
            <div className="introItem">Live logo preview</div>
            <div className="introItem">Finish switching</div>
            <div className="introItem">High-conversion flow</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twoColSection">
          <div className="builderPanel">
            <div className="sectionMiniKicker">CUSTOMIZE THE MOCKUP</div>
            <h2 className="sectionTitle">Build your card preview</h2>
            <p className="sectionSub">
              This demo is meant to feel like a premium storefront experience.
              Choose a finish, upload a logo, and edit the card details live.
            </p>

            <div className="finishGrid">
              {finishes.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  className={`finishBtn ${finish.key === f.key ? "finishBtnActive" : ""}`}
                  onClick={() => setFinish(f)}
                  style={
                    finish.key === f.key
                      ? {
                          borderColor: f.edge,
                          boxShadow: `0 0 0 3px ${f.glow}`,
                        }
                      : undefined
                  }
                >
                  <div className="finishBtnTop">
                    <span
                      className="finishDot"
                      style={{
                        background: f.accent,
                        boxShadow: `0 0 16px ${f.glow}`,
                      }}
                    />
                    <span className="finishLabel">{f.name}</span>
                  </div>
                  <div className="finishNote">{f.note}</div>
                </button>
              ))}
            </div>

            <div className="uploadRow">
              <input
                ref={fileRef}
                type="file"
                accept="image/png,image/jpeg,image/svg+xml,image/webp"
                onChange={onLogoChange}
                style={{ display: "none" }}
              />
              <button type="button" className="uploadBtn" onClick={onPickLogo}>
                Upload Your Logo
              </button>
              <div className="uploadHint">PNG / JPG / SVG / WEBP</div>
            </div>

            <div className="fieldGrid twoCol">
              <Field label="Name" value={brandName} onChange={setBrandName} />
              <Field label="Title" value={title} onChange={setTitle} />
            </div>

            <div className="fieldGrid twoCol">
              <Field label="Phone" value={phone} onChange={setPhone} />
              <Field label="Website" value={site} onChange={setSite} />
            </div>

            <div className="fieldGrid">
              <Field label="Location" value={city} onChange={setCity} />
            </div>
          </div>

          <div className="sideInfoPanel">
            <div className="sectionMiniKicker">WHY THIS PAGE FEELS BETTER</div>
            <h2 className="sectionTitle smallTitle">Built like a showcase, not just a quote form</h2>
            <p className="sectionSub">
              Your Pet Bakery and Home Styling pages feel stronger because they
              sell a premium feeling first. This version does the same thing for
              metal cards.
            </p>

            <div className="infoStack">
              <div className="infoCard">
                <div className="infoTitle">Luxury-first presentation</div>
                <div className="infoText">
                  Bigger hero, stronger mockup section, cleaner card surfaces,
                  better spacing.
                </div>
              </div>

              <div className="infoCard">
                <div className="infoTitle">More like a real premium brand</div>
                <div className="infoText">
                  The layout makes the product feel more expensive before people
                  even ask about pricing.
                </div>
              </div>

              <div className="infoCard">
                <div className="infoTitle">Better conversion flow</div>
                <div className="infoText">
                  It explains value, shows the product, builds trust, then gives
                  a clear path to contact.
                </div>
              </div>
            </div>

            <div className="sideButtons">
              <a href={telSales} className="priceBtn btnPrimary">
                Text Sales
              </a>
              <a href={mailtoQuote} className="priceBtn">
                Email Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container sectionCard">
          <div className="sectionMiniKicker">PACKAGES</div>
          <h2 className="sectionTitle">Choose the level of polish</h2>
          <p className="sectionSub">
            These package blocks are intentionally styled like a premium product
            page so the whole offer feels more valuable.
          </p>

          <div className="pricingGrid">
            <div className="priceCard">
              <div className="priceTop">
                <div className="priceName">Starter</div>
                <div className="badge">Best for first run</div>
              </div>
              <div className="priceValue">$299</div>
              <div className="priceSmall">Design + proof • single finish</div>
              <ul className="priceList">
                <li>1 card layout + revisions</li>
                <li>Finish selection</li>
                <li>Print-ready files</li>
                <li>Email support</li>
              </ul>
              <a href={mailtoQuote} className="priceBtn">
                Get Starter Quote
              </a>
            </div>

            <div className="priceCard featuredPrice">
              <div className="featuredGlow" style={{ background: finish.glow }} />
              <div className="priceTop">
                <div className="priceName">Pro</div>
                <div
                  className="badge"
                  style={{ borderColor: finish.edge, color: finish.accent }}
                >
                  Most Popular
                </div>
              </div>
              <div className="priceValue">$799</div>
              <div className="priceSmall">Design + mockups • 2 finishes</div>
              <ul className="priceList">
                <li>2 mockups + finish variants</li>
                <li>Logo placement + sizing</li>
                <li>QR / vCard option</li>
                <li>Priority turnaround</li>
              </ul>
              <a href={telSales} className="priceBtn btnPrimary">
                Talk to Sales
              </a>
            </div>

            <div className="priceCard elitePrice">
              <div className="priceTop">
                <div className="priceName">Elite</div>
                <div className="badge gold">Premium Option</div>
              </div>
              <div className="priceValue">$1,200</div>
              <div className="priceSmall">Full set • 4 finishes • best polish</div>
              <ul className="priceList">
                <li>4 finish variants</li>
                <li>Premium product page layout</li>
                <li>Conversion-focused CTA sections</li>
                <li>High-end typography + spacing</li>
              </ul>
              <a href={mailtoQuote} className="priceBtn btnPrimary">
                Build My Elite Set
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container sectionCard">
          <div className="sectionMiniKicker">FAQ</div>
          <h2 className="sectionTitle">Questions people ask before ordering</h2>
          <p className="sectionSub">
            These trust blocks make the page feel more complete and reduce
            hesitation before someone reaches out.
          </p>

          <div className="faqGrid">
            <div className="faqCard">
              <div className="faqQ">Does my logo upload really work?</div>
              <div className="faqA">
                Yes. This demo previews the logo instantly on the sample card.
                A production version can store the file and generate final mockups.
              </div>
            </div>

            <div className="faqCard">
              <div className="faqQ">Can I change finishes?</div>
              <div className="faqA">
                Yes. Click a finish and the accents, surface tone, and mockup
                update right away.
              </div>
            </div>

            <div className="faqCard">
              <div className="faqQ">Can you add QR or NFC?</div>
              <div className="faqA">
                Absolutely. QR to a website, booking page, or contact card is
                easy. NFC depends on the vendor and package.
              </div>
            </div>

            <div className="faqCard">
              <div className="faqQ">What is the fastest way to order?</div>
              <div className="faqA">
                Text Sales for the fastest response. Email quote also works and
                pre-fills the selected details.
              </div>
            </div>
          </div>

          <div className="footerButtons">
            <a href={telSales} className="btn btnPrimary fullBtn">
              Text Sales {SALES_PRETTY}
            </a>
            <a href={mailtoQuote} className="btn fullBtn">
              Email Quote
            </a>
            <a href={telMain} className="btn fullBtn">
              Call Main {MAIN_PRETTY}
            </a>
          </div>
        </div>
      </section>

      <footer className="siteFooter container">
        <div>© {new Date().getFullYear()} Atlas Digital Lab — Websites • SEO • Branding</div>
        <div>
          Main: {MAIN_PRETTY} • Sales: {SALES_PRETTY} • {EMAIL}
        </div>
      </footer>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .page {
          position: relative;
          min-height: 100vh;
          overflow-x: hidden;
          color: rgba(237, 245, 255, 0.94);
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          background:
            radial-gradient(circle at 16% 0%, rgba(19, 56, 108, 0.95) 0%, rgba(10, 22, 45, 1) 44%, rgba(6, 11, 20, 1) 100%);
        }

        .pageGlow {
          position: absolute;
          border-radius: 999px;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.7;
        }

        .glowOne {
          width: 300px;
          height: 300px;
          top: 90px;
          left: -80px;
          background: rgba(56, 195, 255, 0.14);
        }

        .glowTwo {
          width: 340px;
          height: 340px;
          top: 320px;
          right: -110px;
          background: rgba(0, 210, 170, 0.1);
        }

        .container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding-left: 16px;
          padding-right: 16px;
          position: relative;
          z-index: 1;
        }

        .hero {
          position: relative;
          padding-bottom: 18px;
        }

        .heroOverlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04), transparent 24%),
            linear-gradient(180deg, rgba(255,255,255,0.02), transparent 60%);
          pointer-events: none;
        }

        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          flex-wrap: wrap;
          padding-top: 14px;
          padding-bottom: 14px;
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
          flex-shrink: 0;
        }

        .brandName {
          font-size: 14px;
          font-weight: 900;
          line-height: 1.1;
        }

        .brandSub {
          font-size: 12px;
          opacity: 0.78;
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
          color: rgba(237, 245, 255, 0.94);
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          transition: 0.2s ease;
        }

        .pill:hover,
        .btn:hover,
        .priceBtn:hover,
        .uploadBtn:hover,
        .finishBtn:hover {
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
          background: linear-gradient(135deg, #38c3ff, #00d2aa);
          border-color: transparent;
          color: #07111f;
          box-shadow: 0 14px 30px rgba(0, 210, 170, 0.14);
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.03fr 0.97fr;
          gap: 18px;
          align-items: stretch;
          padding-top: 18px;
        }

        .heroCopy,
        .previewPanel,
        .builderPanel,
        .sideInfoPanel,
        .sectionCard {
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.035)
          );
          box-shadow:
            0 26px 80px rgba(0, 0, 0, 0.34),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        .heroCopy,
        .previewPanel,
        .builderPanel,
        .sideInfoPanel,
        .sectionCard {
          padding: 28px;
        }

        .eyebrow,
        .sectionMiniKicker,
        .previewKicker {
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.12em;
          color: #8deaff;
        }

        h1 {
          margin: 14px 0 0;
          font-size: 64px;
          line-height: 0.98;
          letter-spacing: -1.8px;
          font-weight: 950;
          max-width: 10ch;
        }

        .heroText {
          margin-top: 16px;
          margin-bottom: 20px;
          font-size: 17px;
          line-height: 1.62;
          opacity: 0.87;
          max-width: 58ch;
        }

        .heroCtas {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .btn {
          min-height: 54px;
          padding: 14px 18px;
          border-radius: 16px;
        }

        .heroPoints {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 20px;
        }

        .pointCard,
        .infoCard,
        .faqCard,
        .priceCard {
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.18);
          padding: 16px;
          position: relative;
          overflow: hidden;
        }

        .pointTitle,
        .infoTitle,
        .faqQ,
        .priceName {
          font-size: 14px;
          font-weight: 900;
        }

        .pointText,
        .infoText,
        .faqA {
          margin-top: 8px;
          font-size: 13px;
          line-height: 1.55;
          opacity: 0.78;
        }

        .previewTop {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: flex-start;
          margin-bottom: 18px;
        }

        .previewTitle {
          margin-top: 8px;
          font-size: 24px;
          font-weight: 950;
          line-height: 1.1;
        }

        .finishChip {
          font-size: 12px;
          font-weight: 900;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid;
          background: rgba(255, 255, 255, 0.05);
          white-space: nowrap;
        }

        .cardStage {
          position: relative;
          min-height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .metalCard {
          position: absolute;
          width: min(100%, 460px);
          aspect-ratio: 1.65 / 1;
          border-radius: 26px;
          border: 1px solid;
          overflow: hidden;
        }

        .metalRear {
          transform: translateY(-16px) rotate(-7deg);
          opacity: 0.72;
        }

        .metalFront {
          transform: translateY(18px) rotate(5deg);
          padding: 22px;
        }

        .cardShine {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(115deg, rgba(255,255,255,.18), transparent 20%, transparent 58%, rgba(255,255,255,.12) 80%, transparent 100%);
          opacity: 0.5;
          pointer-events: none;
        }

        .cardTop {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: flex-start;
        }

        .cardName {
          font-size: 18px;
          font-weight: 950;
          letter-spacing: 0.06em;
          word-break: break-word;
        }

        .cardRole {
          margin-top: 6px;
          font-size: 12px;
          opacity: 0.8;
          line-height: 1.35;
        }

        .cardBadge {
          font-size: 11px;
          font-weight: 900;
          padding: 7px 10px;
          border-radius: 999px;
          border: 1px solid;
          background: rgba(255,255,255,.06);
          white-space: nowrap;
        }

        .cardLogoBox {
          position: relative;
          z-index: 2;
          margin-top: 20px;
          min-height: 94px;
          border-radius: 18px;
          border: 1px dashed rgba(255,255,255,.18);
          background: rgba(255,255,255,.05);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .cardLogo {
          max-width: 90%;
          max-height: 82px;
          object-fit: contain;
        }

        .cardLogoPlaceholder {
          font-size: 12px;
          font-weight: 900;
          opacity: 0.72;
        }

        .cardMetaRow {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 20px;
        }

        .cardMeta {
          font-size: 12px;
          line-height: 1.55;
          opacity: 0.86;
          word-break: break-word;
        }

        .cardMetaRight {
          text-align: right;
        }

        .previewBottom {
          margin-top: 18px;
          display: grid;
          gap: 10px;
        }

        .previewNote {
          font-size: 13px;
          opacity: 0.82;
        }

        .section {
          padding: 18px 0 0;
        }

        .introStrip {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
          border-radius: 999px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.04);
        }

        .introItem {
          padding: 14px 10px;
          text-align: center;
          font-size: 12px;
          font-weight: 800;
          color: rgba(237,245,255,.86);
          border-right: 1px solid rgba(255,255,255,.08);
        }

        .introItem:last-child {
          border-right: none;
        }

        .twoColSection {
          display: grid;
          grid-template-columns: 1fr 0.42fr;
          gap: 18px;
        }

        .sectionTitle {
          margin: 10px 0 0;
          font-size: 30px;
          line-height: 1.08;
          font-weight: 950;
          letter-spacing: -0.03em;
        }

        .smallTitle {
          font-size: 26px;
        }

        .sectionSub {
          margin-top: 10px;
          font-size: 14px;
          line-height: 1.62;
          opacity: 0.78;
          max-width: 64ch;
        }

        .finishGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 18px;
        }

        .finishBtn {
          text-align: left;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.06);
          color: rgba(237,245,255,.94);
          padding: 14px;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .finishBtnActive {
          background: rgba(255,255,255,.08);
        }

        .finishBtnTop {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .finishDot {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          flex-shrink: 0;
        }

        .finishLabel {
          font-size: 14px;
          font-weight: 900;
        }

        .finishNote {
          margin-top: 8px;
          font-size: 12px;
          opacity: 0.72;
          line-height: 1.35;
        }

        .uploadRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          margin-top: 16px;
        }

        .uploadBtn {
          min-height: 50px;
          padding: 12px 16px;
          border-radius: 16px;
          background: linear-gradient(
            135deg,
            rgba(255,255,255,.12),
            rgba(255,255,255,.05)
          );
          cursor: pointer;
        }

        .uploadHint {
          font-size: 12px;
          opacity: 0.65;
        }

        .fieldGrid {
          display: grid;
          gap: 12px;
          margin-top: 14px;
        }

        .twoCol {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .infoStack {
          display: grid;
          gap: 12px;
          margin-top: 18px;
        }

        .sideButtons {
          display: grid;
          gap: 10px;
          margin-top: 18px;
        }

        .sectionCard {
          padding: 28px;
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .featuredPrice {
          border-color: rgba(255,255,255,.14);
        }

        .featuredGlow {
          position: absolute;
          width: 140px;
          height: 140px;
          top: -40px;
          right: -30px;
          border-radius: 999px;
          filter: blur(24px);
          pointer-events: none;
        }

        .elitePrice {
          border-color: rgba(243, 196, 74, 0.24);
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
          opacity: 0.92;
        }

        .gold {
          border-color: rgba(243,196,74,.52);
          color: rgba(243,196,74,.96);
        }

        .priceValue {
          margin-top: 12px;
          font-size: 34px;
          font-weight: 950;
          letter-spacing: -0.02em;
        }

        .priceSmall {
          margin-top: 6px;
          font-size: 12px;
          line-height: 1.4;
          opacity: 0.72;
        }

        .priceList {
          margin-top: 12px;
          padding-left: 18px;
          font-size: 12px;
          line-height: 1.55;
          opacity: 0.9;
        }

        .priceBtn {
          width: 100%;
          min-height: 52px;
          padding: 12px 14px;
          border-radius: 14px;
          margin-top: 14px;
        }

        .faqGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .footerButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }

        .fullBtn {
          width: 100%;
        }

        .siteFooter {
          margin-top: 24px;
          padding-top: 18px;
          padding-bottom: 42px;
          border-top: 1px solid rgba(255,255,255,.08);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          opacity: 0.8;
          font-size: 12px;
          line-height: 1.45;
        }

        @media (max-width: 1080px) {
          .heroGrid,
          .twoColSection,
          .pricingGrid,
          .faqGrid {
            grid-template-columns: 1fr;
          }

          h1 {
            max-width: none;
          }

          .introStrip {
            grid-template-columns: 1fr;
            border-radius: 20px;
          }

          .introItem {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,.08);
          }

          .introItem:last-child {
            border-bottom: none;
          }
        }

        @media (max-width: 860px) {
          .topActions {
            width: 100%;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .navFull {
            grid-column: 1 / -1;
          }

          .heroPoints,
          .twoCol,
          .finishGrid {
            grid-template-columns: 1fr;
          }

          .heroCopy,
          .previewPanel,
          .builderPanel,
          .sideInfoPanel,
          .sectionCard {
            padding: 20px;
          }

          h1 {
            font-size: 46px;
            line-height: 1.02;
          }

          .cardStage {
            min-height: 320px;
          }
        }

        @media (max-width: 600px) {
          .container {
            padding-left: 12px;
            padding-right: 12px;
          }

          .topbar {
            align-items: flex-start;
          }

          .brandWrap {
            width: 100%;
          }

          .topActions {
            grid-template-columns: 1fr;
          }

          .navFull {
            grid-column: auto;
          }

          .pill,
          .btn,
          .priceBtn,
          .uploadBtn {
            width: 100%;
          }

          h1 {
            font-size: 36px;
            letter-spacing: -1px;
          }

          .heroCtas,
          .footerButtons {
            flex-direction: column;
          }

          .metalFront {
            padding: 16px;
          }

          .cardTop,
          .priceTop {
            flex-direction: column;
            align-items: flex-start;
          }

          .cardMetaRow {
            grid-template-columns: 1fr;
          }

          .cardMetaRight {
            text-align: left;
          }

          .previewTop {
            flex-direction: column;
          }

          .finishChip {
            white-space: normal;
          }
        }
      `}</style>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="fieldWrap">
      <span className="fieldLabel">{label}</span>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="fieldInput"
      />

      <style jsx>{`
        .fieldWrap {
          display: block;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          padding: 10px;
          min-width: 0;
        }

        .fieldLabel {
          display: block;
          font-size: 11px;
          opacity: 0.72;
          font-weight: 900;
          margin-bottom: 6px;
          letter-spacing: 0.03em;
        }

        .fieldInput {
          width: 100%;
          min-width: 0;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(0, 0, 0, 0.25);
          color: rgba(237, 245, 255, 0.94);
          padding: 12px;
          outline: none;
          font-weight: 800;
          font-size: 13px;
        }

        .fieldInput:focus {
          border-color: rgba(56, 195, 255, 0.45);
          box-shadow: 0 0 0 3px rgba(56, 195, 255, 0.12);
        }
      `}</style>
    </label>
  );
}