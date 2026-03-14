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
        note: "Bold, high contrast, luxury vibe.",
        accent: "#38c3ff",
        glow: "rgba(56,195,255,.28)",
        surface:
          "linear-gradient(145deg, #0e1117 0%, #171c24 38%, #0c1016 100%)",
        edge: "rgba(255,255,255,.08)",
      },
      {
        key: "gold",
        name: "Gold",
        note: "Premium look for high-ticket brands.",
        accent: "#f5c84c",
        glow: "rgba(245,200,76,.22)",
        surface:
          "linear-gradient(145deg, #2c2410 0%, #6a5320 30%, #221b0d 100%)",
        edge: "rgba(245,200,76,.25)",
      },
      {
        key: "rose",
        name: "Rose Gold",
        note: "Modern, classy, creative work.",
        accent: "#ef92b6",
        glow: "rgba(239,146,182,.22)",
        surface:
          "linear-gradient(145deg, #2a1820 0%, #5c3140 38%, #201319 100%)",
        edge: "rgba(239,146,182,.22)",
      },
      {
        key: "silver",
        name: "Silver",
        note: "Clean, professional, brushed style.",
        accent: "#dce8ff",
        glow: "rgba(220,232,255,.18)",
        surface:
          "linear-gradient(145deg, #9aa3b2 0%, #d7deea 24%, #7d8694 55%, #b9c2cf 100%)",
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
      <div className="bgGlow glowOne" />
      <div className="bgGlow glowTwo" />
      <div className="bgGrid" />

      <div className="topbar">
        <div className="container topbarInner">
          <div className="brandWrap">
            <div
              className="brandDot"
              style={{
                background: finish.accent,
                boxShadow: `0 0 26px ${finish.glow}`,
              }}
            />
            <div>
              <div className="brandTitle">Metal Business Cards Demo</div>
              <div className="brandSub">
                Premium engraved • laser etched • luxury-first presentation
              </div>
            </div>
          </div>

          <div className="navButtons">
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
      </div>

      <div className="container pageInner">
        <section className="heroShell">
          <div className="heroLeft card">
            <div className="eyebrowRow">
              <span className="eyebrow">PREMIUM METAL CARDS</span>
              <span
                className="finishPill"
                style={{
                  color: finish.accent,
                  borderColor: finish.edge,
                  boxShadow: `0 0 0 3px ${finish.glow}`,
                }}
              >
                {finish.name} Finish
              </span>
            </div>

            <h1 className="heroTitle">
              Business cards that feel like a{" "}
              <span style={{ color: finish.accent }}>luxury product</span>.
            </h1>

            <p className="heroText">
              Built to make people stop, look twice, and keep your card instead
              of throwing it away. Strong typography, high-end finishes, crisp
              detail, and a page flow that feels far more premium than a basic
              mockup.
            </p>

            <div className="heroActions">
              <a href={telSales} className="btn btnPrimary">
                Call / Text to Order
              </a>
              <a href={mailtoQuote} className="btn">
                Email for a Quote
              </a>
            </div>

            <div className="valueStrip">
              <div className="valueCard">
                <div className="valueTitle">Luxury feel</div>
                <div className="valueText">Made to look expensive on first contact.</div>
              </div>
              <div className="valueCard">
                <div className="valueTitle">Fast proofing</div>
                <div className="valueText">Quick turn to mockup and revisions.</div>
              </div>
              <div className="valueCard">
                <div className="valueTitle">Strong detail</div>
                <div className="valueText">Sharp lines, clean spacing, premium finish.</div>
              </div>
            </div>
          </div>

          <div className="heroRight card">
            <div className="heroPreviewTop">
              <div>
                <div className="previewLabel">LIVE PREVIEW</div>
                <div className="previewHeading">Interactive product-style mockup</div>
              </div>
              <div className="previewMini">Logo upload + finish switching</div>
            </div>

            <div className="cardShowcase">
              <div
                className="metalCard metalBack"
                style={{
                  background: finish.surface,
                  borderColor: finish.edge,
                  boxShadow: `0 22px 70px rgba(0,0,0,.35), 0 0 30px ${finish.glow}`,
                }}
              />

              <div
                className="metalCard metalFront"
                style={{
                  background: finish.surface,
                  borderColor: finish.edge,
                  boxShadow: `0 22px 70px rgba(0,0,0,.35), 0 0 30px ${finish.glow}`,
                }}
              >
                <div className="metalShine" />
                <div className="metalTop">
                  <div>
                    <div className="metalName">{brandName.toUpperCase()}</div>
                    <div className="metalRole">{title}</div>
                  </div>
                  <div
                    className="metalFinishTag"
                    style={{
                      color: finish.accent,
                      borderColor: finish.edge,
                    }}
                  >
                    {finish.name}
                  </div>
                </div>

                <div className="metalLogoArea">
                  {logoUrl ? (
                    <img src={logoUrl} alt="Logo preview" className="metalLogo" />
                  ) : (
                    <div className="metalLogoPlaceholder">Your logo here</div>
                  )}
                </div>

                <div className="metalBottom">
                  <div className="metalMeta">
                    {phone}
                    <br />
                    {EMAIL}
                  </div>
                  <div className="metalMeta alignRight">
                    {site}
                    <br />
                    {city}
                  </div>
                </div>
              </div>
            </div>

            <div className="heroNotes">
              <div className="heroNote">
                <span className="heroNoteDot" style={{ background: finish.accent }} />
                Premium mock card layout updates with each finish.
              </div>
              <div className="heroNote">
                <span className="heroNoteDot" style={{ background: finish.accent }} />
                Upload a logo and preview it directly on the sample card.
              </div>
            </div>
          </div>
        </section>

        <section className="builderShell">
          <div className="builderPanel card">
            <div className="panelHead">
              <div>
                <div className="panelKicker">CUSTOMIZE THE DEMO</div>
                <h2 className="sectionTitle">Build your card preview</h2>
                <p className="sectionSub">
                  Pick a finish, upload a logo, and change the info to make this
                  feel like a real premium storefront experience.
                </p>
              </div>
            </div>

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
                    <span className="finishName">{f.name}</span>
                  </div>
                  <div className="finishNote">{f.note}</div>
                </button>
              ))}
            </div>

            <div className="uploadArea">
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

          <div className="sidePanel card">
            <div className="panelKicker">WHY THIS FEELS BETTER</div>
            <h3 className="sideTitle">This is designed like a luxury product page, not a plain quote form.</h3>

            <div className="benefitList">
              <div className="benefitItem">
                <div className="benefitTitle">Premium visual hierarchy</div>
                <div className="benefitText">
                  Bigger hero, cleaner spacing, richer surfaces, and stronger mockups.
                </div>
              </div>

              <div className="benefitItem">
                <div className="benefitTitle">Interactive product feel</div>
                <div className="benefitText">
                  Finish switching and logo upload make the page feel more real and more valuable.
                </div>
              </div>

              <div className="benefitItem">
                <div className="benefitTitle">Better sales flow</div>
                <div className="benefitText">
                  The page explains value, shows the product, and then drives people into contact.
                </div>
              </div>
            </div>

            <div className="sideCtas">
              <a href={telSales} className="priceBtn btnPrimary">
                Text Sales
              </a>
              <a href={mailtoQuote} className="priceBtn">
                Email Quote
              </a>
            </div>
          </div>
        </section>

        <section className="sectionWrap">
          <div className="sectionCard card">
            <div className="sectionTop">
              <div>
                <div className="panelKicker">PACKAGES</div>
                <h2 className="sectionTitle">Choose the level of polish</h2>
                <p className="sectionSub">
                  These pricing blocks are styled to feel high-end on purpose —
                  cleaner product presentation helps the whole offer feel more valuable.
                </p>
              </div>
            </div>

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

        <section className="sectionWrap">
          <div className="sectionCard card">
            <div className="sectionTop">
              <div>
                <div className="panelKicker">FAQ</div>
                <h2 className="sectionTitle">Questions people ask before ordering</h2>
                <p className="sectionSub">
                  Trust blocks like this make the page feel more complete and reduce hesitation.
                </p>
              </div>
            </div>

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
                  Yes. Click a finish and the product accents, styling, and mock card update right away.
                </div>
              </div>

              <div className="faqCard">
                <div className="faqQ">Can you add QR or NFC?</div>
                <div className="faqA">
                  Absolutely. QR to website, booking page, or vCard is easy to add. NFC options depend on the vendor.
                </div>
              </div>

              <div className="faqCard">
                <div className="faqQ">What is the fastest way to order?</div>
                <div className="faqA">
                  Text Sales for the quickest response. Email quote also works and pre-fills the selected details.
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

        <footer className="siteFooter">
          <div>© {new Date().getFullYear()} Atlas Digital Lab — Websites • SEO • Branding</div>
          <div>
            Main: {MAIN_PRETTY} • Sales: {SALES_PRETTY} • {EMAIL}
          </div>
        </footer>
      </div>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .page {
          position: relative;
          min-height: 100vh;
          color: rgba(235, 245, 255, 0.94);
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          background:
            radial-gradient(circle at 18% 0%, rgba(19, 57, 110, 0.95) 0%, rgba(10, 22, 45, 1) 42%, rgba(6, 11, 20, 1) 100%);
          overflow-x: hidden;
        }

        .bgGlow {
          position: absolute;
          border-radius: 999px;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.7;
        }

        .glowOne {
          width: 320px;
          height: 320px;
          top: 90px;
          left: -60px;
          background: rgba(56, 195, 255, 0.16);
        }

        .glowTwo {
          width: 340px;
          height: 340px;
          top: 280px;
          right: -70px;
          background: rgba(0, 210, 170, 0.12);
        }

        .bgGrid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 34px 34px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,.28), transparent 78%);
          pointer-events: none;
        }

        .container {
          width: 100%;
          max-width: 1220px;
          margin: 0 auto;
          padding-left: 18px;
          padding-right: 18px;
          position: relative;
          z-index: 1;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          padding: 12px 0;
          backdrop-filter: blur(14px);
          background: rgba(8, 12, 22, 0.58);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .topbarInner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          flex-wrap: wrap;
        }

        .brandWrap {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 0;
        }

        .brandDot {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          flex-shrink: 0;
        }

        .brandTitle {
          font-size: 14px;
          font-weight: 900;
          line-height: 1.1;
        }

        .brandSub {
          font-size: 12px;
          opacity: 0.76;
          line-height: 1.2;
        }

        .navButtons {
          display: grid;
          grid-template-columns: repeat(3, auto);
          gap: 10px;
          align-items: center;
        }

        .pill,
        .btn,
        .priceBtn,
        .uploadBtn {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          color: rgba(235, 245, 255, 0.94);
          font-weight: 900;
          transition: 0.22s ease;
        }

        .pill:hover,
        .btn:hover,
        .priceBtn:hover,
        .uploadBtn:hover,
        .finishBtn:hover {
          transform: translateY(-1px);
        }

        .pill {
          min-height: 44px;
          padding: 10px 14px;
          border-radius: 999px;
          white-space: nowrap;
        }

        .pillPrimary,
        .btnPrimary {
          background: linear-gradient(135deg, #38c3ff, #00d2aa);
          color: #07111f;
          border-color: transparent;
          box-shadow: 0 14px 32px rgba(0, 210, 170, 0.16);
        }

        .pageInner {
          padding-top: 24px;
          padding-bottom: 58px;
        }

        .card {
          border-radius: 28px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.035)
          );
          box-shadow:
            0 26px 80px rgba(0, 0, 0, 0.36),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          overflow: hidden;
        }

        .heroShell {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 18px;
          align-items: stretch;
        }

        .heroLeft,
        .heroRight {
          padding: 28px;
          min-width: 0;
        }

        .eyebrowRow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }

        .eyebrow {
          font-size: 12px;
          letter-spacing: 0.12em;
          font-weight: 900;
          color: #8deaff;
        }

        .finishPill {
          font-size: 12px;
          font-weight: 900;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid;
          background: rgba(255, 255, 255, 0.05);
        }

        .heroTitle {
          margin: 0;
          font-size: 62px;
          line-height: 0.98;
          letter-spacing: -1.8px;
          font-weight: 950;
          max-width: 10.5ch;
        }

        .heroText {
          margin-top: 16px;
          margin-bottom: 20px;
          font-size: 17px;
          line-height: 1.62;
          opacity: 0.87;
          max-width: 60ch;
        }

        .heroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .btn {
          min-height: 54px;
          padding: 14px 18px;
          border-radius: 16px;
        }

        .valueStrip {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 20px;
        }

        .valueCard {
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(0, 0, 0, 0.18);
          padding: 16px;
        }

        .valueTitle {
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 6px;
        }

        .valueText {
          font-size: 12px;
          line-height: 1.4;
          opacity: 0.76;
        }

        .heroPreviewTop {
          display: flex;
          justify-content: space-between;
          gap: 14px;
          align-items: flex-start;
          margin-bottom: 18px;
        }

        .previewLabel,
        .panelKicker {
          font-size: 12px;
          letter-spacing: 0.12em;
          font-weight: 900;
          color: #8deaff;
        }

        .previewHeading {
          margin-top: 8px;
          font-size: 22px;
          font-weight: 900;
          line-height: 1.12;
        }

        .previewMini {
          font-size: 12px;
          opacity: 0.72;
          max-width: 120px;
          text-align: right;
          line-height: 1.35;
        }

        .cardShowcase {
          position: relative;
          min-height: 360px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .metalCard {
          position: absolute;
          width: min(100%, 470px);
          aspect-ratio: 1.65 / 1;
          border-radius: 26px;
          border: 1px solid;
          overflow: hidden;
        }

        .metalBack {
          transform: translateY(-18px) rotate(-7deg);
          opacity: 0.72;
        }

        .metalFront {
          transform: translateY(18px) rotate(5deg);
          padding: 22px;
        }

        .metalShine {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(115deg, rgba(255,255,255,.18), transparent 22%, transparent 58%, rgba(255,255,255,.12) 80%, transparent 100%);
          opacity: 0.48;
          pointer-events: none;
        }

        .metalTop {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: flex-start;
        }

        .metalName {
          font-size: 18px;
          font-weight: 950;
          letter-spacing: 0.06em;
          word-break: break-word;
          text-shadow: 0 1px 10px rgba(0,0,0,.25);
        }

        .metalRole {
          margin-top: 6px;
          font-size: 12px;
          line-height: 1.35;
          opacity: 0.8;
        }

        .metalFinishTag {
          font-size: 11px;
          font-weight: 900;
          padding: 7px 10px;
          border-radius: 999px;
          border: 1px solid;
          background: rgba(255,255,255,.07);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .metalLogoArea {
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

        .metalLogo {
          max-width: 90%;
          max-height: 84px;
          object-fit: contain;
        }

        .metalLogoPlaceholder {
          font-size: 12px;
          font-weight: 900;
          opacity: 0.72;
        }

        .metalBottom {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 20px;
        }

        .metalMeta {
          font-size: 12px;
          line-height: 1.55;
          opacity: 0.86;
          word-break: break-word;
        }

        .alignRight {
          text-align: right;
        }

        .heroNotes {
          margin-top: 20px;
          display: grid;
          gap: 10px;
        }

        .heroNote {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          opacity: 0.85;
        }

        .heroNoteDot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          flex-shrink: 0;
        }

        .builderShell {
          display: grid;
          grid-template-columns: 1fr 0.42fr;
          gap: 18px;
          margin-top: 18px;
        }

        .builderPanel,
        .sidePanel,
        .sectionCard {
          padding: 24px;
          min-width: 0;
        }

        .sectionTitle,
        .sideTitle {
          margin: 10px 0 0;
          font-size: 28px;
          line-height: 1.1;
          font-weight: 950;
          letter-spacing: -0.03em;
        }

        .sectionSub {
          margin-top: 10px;
          opacity: 0.78;
          font-size: 14px;
          line-height: 1.6;
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
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          padding: 14px;
          color: rgba(235, 245, 255, 0.94);
          cursor: pointer;
          min-width: 0;
          transition: 0.22s ease;
        }

        .finishBtnActive {
          background: rgba(255, 255, 255, 0.08);
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

        .finishName {
          font-weight: 900;
          font-size: 14px;
        }

        .finishNote {
          opacity: 0.72;
          font-size: 12px;
          margin-top: 8px;
          line-height: 1.35;
        }

        .uploadArea {
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
            rgba(255, 255, 255, 0.12),
            rgba(255, 255, 255, 0.05)
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

        .benefitList {
          display: grid;
          gap: 12px;
          margin-top: 18px;
        }

        .benefitItem {
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,.08);
          background: rgba(0,0,0,.16);
          padding: 14px;
        }

        .benefitTitle {
          font-size: 14px;
          font-weight: 900;
          margin-bottom: 6px;
        }

        .benefitText {
          font-size: 13px;
          line-height: 1.5;
          opacity: 0.76;
        }

        .sideCtas {
          display: grid;
          gap: 10px;
          margin-top: 18px;
        }

        .sectionWrap {
          margin-top: 18px;
        }

        .sectionTop {
          margin-bottom: 6px;
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 18px;
        }

        .priceCard,
        .faqCard {
          position: relative;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.2);
          padding: 18px;
          min-width: 0;
          overflow: hidden;
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
          filter: blur(22px);
          pointer-events: none;
        }

        .elitePrice {
          border-color: rgba(245, 200, 76, 0.24);
        }

        .priceTop {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          align-items: baseline;
          flex-wrap: wrap;
        }

        .priceName {
          font-weight: 900;
          font-size: 15px;
        }

        .badge {
          font-size: 11px;
          font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.06);
          opacity: 0.92;
        }

        .gold {
          border-color: rgba(245, 200, 76, 0.5);
          color: rgba(245, 200, 76, 0.96);
        }

        .priceValue {
          font-size: 34px;
          font-weight: 950;
          margin-top: 12px;
          letter-spacing: -0.02em;
        }

        .priceSmall {
          opacity: 0.72;
          font-size: 12px;
          margin-top: 6px;
          line-height: 1.4;
        }

        .scanList,
        .priceList {
          margin-top: 12px;
          padding-left: 18px;
          opacity: 0.9;
          font-size: 12px;
          line-height: 1.55;
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

        .faqQ {
          font-weight: 900;
          font-size: 14px;
        }

        .faqA {
          opacity: 0.78;
          font-size: 13px;
          margin-top: 10px;
          line-height: 1.55;
          word-break: break-word;
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
          margin-top: 22px;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          opacity: 0.8;
          font-size: 12px;
          line-height: 1.45;
        }

        @media (max-width: 1080px) {
          .heroShell,
          .builderShell,
          .pricingGrid,
          .faqGrid {
            grid-template-columns: 1fr;
          }

          .heroTitle {
            max-width: none;
          }
        }

        @media (max-width: 860px) {
          .navButtons {
            width: 100%;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .navFull {
            grid-column: 1 / -1;
          }

          .valueStrip,
          .twoCol,
          .finishGrid {
            grid-template-columns: 1fr;
          }

          .heroLeft,
          .heroRight,
          .builderPanel,
          .sidePanel,
          .sectionCard {
            padding: 20px;
          }

          .heroTitle {
            font-size: 46px;
            line-height: 1.02;
          }

          .cardShowcase {
            min-height: 320px;
          }
        }

        @media (max-width: 600px) {
          .container {
            padding-left: 12px;
            padding-right: 12px;
          }

          .topbarInner {
            align-items: flex-start;
          }

          .brandWrap {
            width: 100%;
          }

          .navButtons {
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

          .heroTitle {
            font-size: 36px;
            letter-spacing: -1px;
          }

          .heroActions,
          .footerButtons {
            flex-direction: column;
          }

          .metalFront {
            padding: 16px;
          }

          .metalTop,
          .priceTop {
            flex-direction: column;
            align-items: flex-start;
          }

          .metalBottom {
            grid-template-columns: 1fr;
          }

          .alignRight {
            text-align: left;
          }

          .previewMini {
            text-align: left;
            max-width: none;
          }

          .heroPreviewTop {
            flex-direction: column;
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
          color: rgba(235, 245, 255, 0.94);
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