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
        note: "Bold, luxury, high-contrast look.",
        accent: "#ffffff",
        glow: "rgba(255,255,255,.14)",
        card:
          "linear-gradient(145deg, #0b0e13 0%, #151a22 34%, #0a0d12 100%)",
        edge: "rgba(255,255,255,.12)",
      },
      {
        key: "gold",
        name: "Gold",
        note: "High-ticket premium presentation.",
        accent: "#f3c44a",
        glow: "rgba(243,196,74,.22)",
        card:
          "linear-gradient(145deg, #2f2610 0%, #705822 34%, #251d0c 100%)",
        edge: "rgba(243,196,74,.28)",
      },
      {
        key: "silver",
        name: "Silver",
        note: "Clean, polished, professional feel.",
        accent: "#dce8ff",
        glow: "rgba(220,232,255,.18)",
        card:
          "linear-gradient(145deg, #8d96a5 0%, #dce2eb 28%, #7d8796 60%, #b8c1cd 100%)",
        edge: "rgba(255,255,255,.22)",
      },
      {
        key: "rose",
        name: "Rose Gold",
        note: "Modern creative luxury look.",
        accent: "#ef92b6",
        glow: "rgba(239,146,182,.22)",
        card:
          "linear-gradient(145deg, #2d1921 0%, #603644 35%, #211218 100%)",
        edge: "rgba(239,146,182,.24)",
      },
    ],
    []
  );

  const [finish, setFinish] = useState(finishes[0]);
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [brandName, setBrandName] = useState("JORDAN MILLER");
  const [title, setTitle] = useState("Owner • Custom Metal Cards");
  const [phone, setPhone] = useState(SALES_PRETTY);
  const [site, setSite] = useState("atlasdigitallab.com");
  const [city, setCity] = useState("Houston, TX");

  const fileRef = useRef<HTMLInputElement | null>(null);

  function onPickLogo() {
    fileRef.current?.click();
  }

  function onLogoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setLogoUrl(URL.createObjectURL(file));
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
Location: ${city}

Notes:
`)}`;

  return (
    <main className="page">
      <div className="pageGlow glowOne" />
      <div className="pageGlow glowTwo" />

      <header className="topbar">
        <div className="container topbarInner">
          <div className="brandWrap">
            <div
              className="brandDot"
              style={{
                background: finish.accent,
                boxShadow: `0 0 22px ${finish.glow}`,
              }}
            />
            <div>
              <div className="brandName">Atlas Digital Lab</div>
              <div className="brandSub">Premium Metal Business Cards Demo</div>
            </div>
          </div>

          <div className="navActions">
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
      </header>

      <section className="hero container">
        <div className="heroCopy">
          <div className="eyebrow">PREMIUM METAL CARD DEMO</div>

          <h1>Make your brand feel like it belongs at the top.</h1>

          <p className="heroText">
            These aren’t just business cards — they’re a status signal. Built
            to make people stop, look twice, and remember you. Stronger
            presentation makes the whole brand feel more expensive.
          </p>

          <div className="heroBtns">
            <a href={telSales} className="btn btnPrimary">
              Call / Text {SALES_PRETTY}
            </a>
            <a href={mailtoQuote} className="btn">
              Email for Quote
            </a>
          </div>

          <div className="heroMiniRow">
            <div className="miniItem">
              <div className="miniTitle">Luxury feel</div>
              <div className="miniText">Presentation designed to feel premium first.</div>
            </div>
            <div className="miniItem">
              <div className="miniTitle">Live customization</div>
              <div className="miniText">Switch finishes and preview a logo instantly.</div>
            </div>
            <div className="miniItem">
              <div className="miniTitle">High-ticket look</div>
              <div className="miniText">Cleaner layout makes the offer feel stronger.</div>
            </div>
          </div>
        </div>

        <div className="heroPreview">
          <div className="previewTop">
            <div>
              <div className="sectionMiniKicker">LIVE PREVIEW</div>
              <div className="previewTitle">Luxury-style mock card</div>
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
                boxShadow: `0 18px 60px rgba(0,0,0,.38), 0 0 26px ${finish.glow}`,
              }}
            >
              <div className="cardGlow" />
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
        </div>
      </section>

      <section className="section container">
        <div className="sectionIntro">
          <div className="sectionMiniKicker">CUSTOMIZE THE MOCKUP</div>
          <h2 className="sectionTitle">Build your card preview</h2>
          <p className="sectionSub">
            Pick a finish, upload a logo, and change the details live. This
            section is lighter on purpose so the page feels more like a real
            landing page and less like a boxed dashboard.
          </p>
        </div>

        <div className="editorLayout">
          <div className="leftEditor">
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
                        boxShadow: `0 0 14px ${f.glow}`,
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

            <div className="fieldGrid twoColFields">
              <Field label="Name" value={brandName} onChange={setBrandName} />
              <Field label="Title" value={title} onChange={setTitle} />
            </div>

            <div className="fieldGrid twoColFields">
              <Field label="Phone" value={phone} onChange={setPhone} />
              <Field label="Website" value={site} onChange={setSite} />
            </div>

            <div className="fieldGrid">
              <Field label="Location" value={city} onChange={setCity} />
            </div>
          </div>

          <div className="rightEditor">
            <div className="softInfo">
              <div className="infoTitle">Why this page feels better</div>
              <p className="infoText">
                Better spacing, stronger surfaces, cleaner mockups, and a more
                open layout make the product feel more valuable before people
                ask about price.
              </p>
            </div>

            <div className="softInfo">
              <div className="infoTitle">More premium positioning</div>
              <p className="infoText">
                The goal is not just to show a card — it’s to make the entire
                brand feel more established and high-end.
              </p>
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

      <section className="section container">
        <div className="sectionIntro">
          <div className="sectionMiniKicker">FEATURES</div>
          <h2 className="sectionTitle">Built to feel premium at every step</h2>
        </div>

        <div className="featuresGrid">
          <div className="featureCard">
            <div className="featureTitle">Finish switching</div>
            <div className="featureText">
              Lets people imagine the card in different premium looks.
            </div>
          </div>

          <div className="featureCard">
            <div className="featureTitle">Logo upload preview</div>
            <div className="featureText">
              Makes the demo feel personalized and more real.
            </div>
          </div>

          <div className="featureCard">
            <div className="featureTitle">Luxury mockup presentation</div>
            <div className="featureText">
              Stronger card styling helps sell the value before contact.
            </div>
          </div>

          <div className="featureCard">
            <div className="featureTitle">Cleaner conversion flow</div>
            <div className="featureText">
              Better hierarchy means less confusion and stronger action.
            </div>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="sectionIntro">
          <div className="sectionMiniKicker">PACKAGES</div>
          <h2 className="sectionTitle">Choose the level of polish</h2>
          <p className="sectionSub">
            Styled to feel like a premium product offer without turning the page
            into a stack of heavy boxes.
          </p>
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
      </section>

      <section className="section container">
        <div className="sectionIntro">
          <div className="sectionMiniKicker">FAQ</div>
          <h2 className="sectionTitle">Questions people ask before ordering</h2>
        </div>

        <div className="faqGrid">
          <div className="faqCard">
            <div className="faqQ">Does the logo upload really work?</div>
            <div className="faqA">
              Yes. This demo previews the logo instantly on the sample card.
              A production version can store the file and generate final mockups.
            </div>
          </div>

          <div className="faqCard">
            <div className="faqQ">Can I change finishes?</div>
            <div className="faqA">
              Yes. Click a finish and the accents, card tone, and preview update right away.
            </div>
          </div>

          <div className="faqCard">
            <div className="faqQ">Can you add QR or NFC?</div>
            <div className="faqA">
              Absolutely. QR to a website, booking page, or contact card is easy.
            </div>
          </div>

          <div className="faqCard">
            <div className="faqQ">What is the fastest way to order?</div>
            <div className="faqA">
              Text Sales for the fastest response. Email quote also works and pre-fills the details.
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
          opacity: 0.65;
        }

        .glowOne {
          width: 300px;
          height: 300px;
          top: 90px;
          left: -80px;
          background: rgba(56, 195, 255, 0.12);
        }

        .glowTwo {
          width: 340px;
          height: 340px;
          top: 320px;
          right: -110px;
          background: rgba(0, 210, 170, 0.08);
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

        .topbar {
          padding: 14px 0;
          border-bottom: 1px solid rgba(255,255,255,.08);
          backdrop-filter: blur(12px);
          background: rgba(7, 14, 26, 0.3);
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

        .navActions {
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
          cursor: pointer;
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

        .hero {
          display: grid;
          grid-template-columns: 1.02fr 0.98fr;
          gap: 30px;
          align-items: center;
          padding-top: 34px;
          padding-bottom: 24px;
        }

        .eyebrow,
        .sectionMiniKicker {
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.12em;
          color: #8deaff;
        }

        h1 {
          margin: 14px 0 0;
          font-size: 66px;
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

        .heroBtns,
        .footerButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .btn,
        .priceBtn,
        .uploadBtn {
          min-height: 54px;
          padding: 14px 18px;
          border-radius: 16px;
        }

        .heroMiniRow {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 28px;
        }

        .miniItem {
          padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,.12);
        }

        .miniTitle,
        .infoTitle,
        .featureTitle,
        .faqQ,
        .priceName {
          font-size: 14px;
          font-weight: 900;
        }

        .miniText,
        .infoText,
        .featureText,
        .faqA {
          margin-top: 8px;
          font-size: 13px;
          line-height: 1.55;
          opacity: 0.78;
        }

        .heroPreview {
          position: relative;
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
          min-height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .metalCard {
          position: absolute;
          width: min(100%, 480px);
          aspect-ratio: 1.65 / 1;
          border-radius: 26px;
          border: 1px solid;
          overflow: hidden;
        }

        .metalRear {
          transform: translateY(-16px) rotate(-7deg);
          opacity: 0.7;
        }

        .metalFront {
          transform: translateY(18px) rotate(5deg);
          padding: 22px;
          transition: 0.35s ease;
        }

        .metalFront:hover {
          transform: translateY(10px) rotate(2deg) scale(1.02);
        }

        .cardGlow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 20%, rgba(255,255,255,.18), transparent 60%);
          opacity: 0.28;
          pointer-events: none;
        }

        .cardShine {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(115deg, rgba(255,255,255,.18), transparent 20%, transparent 58%, rgba(255,255,255,.12) 80%, transparent 100%);
          opacity: 0.5;
          pointer-events: none;
          animation: shineMove 4s infinite linear;
        }

        @keyframes shineMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
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

        .section {
          padding-top: 34px;
        }

        .sectionIntro {
          max-width: 760px;
          margin-bottom: 18px;
        }

        .sectionTitle {
          margin: 10px 0 0;
          font-size: 30px;
          line-height: 1.08;
          font-weight: 950;
          letter-spacing: -0.03em;
        }

        .sectionSub {
          margin-top: 10px;
          font-size: 14px;
          line-height: 1.62;
          opacity: 0.78;
          max-width: 64ch;
        }

        .editorLayout {
          display: grid;
          grid-template-columns: 1fr 0.42fr;
          gap: 24px;
          align-items: start;
        }

        .finishGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .finishBtn {
          text-align: left;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,.12);
          background: rgba(255,255,255,.05);
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

        .uploadHint {
          font-size: 12px;
          opacity: 0.65;
        }

        .fieldGrid {
          display: grid;
          gap: 12px;
          margin-top: 14px;
        }

        .twoColFields {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .softInfo {
          padding: 0 0 18px;
          margin-bottom: 18px;
          border-bottom: 1px solid rgba(255,255,255,.1);
        }

        .softInfo:last-of-type {
          margin-bottom: 0;
        }

        .sideButtons {
          display: grid;
          gap: 12px;
          margin-top: 22px;
        }

        .featuresGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }

        .featureCard {
          padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,.12);
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .priceCard,
        .faqCard {
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,.1);
          background: rgba(255,255,255,.04);
          padding: 18px;
          position: relative;
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

        .faqGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
        }

        .fullBtn {
          width: 100%;
        }

        .siteFooter {
          margin-top: 34px;
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
          .hero,
          .editorLayout,
          .pricingGrid,
          .faqGrid,
          .featuresGrid {
            grid-template-columns: 1fr;
          }

          h1 {
            max-width: none;
          }
        }

        @media (max-width: 860px) {
          .navActions {
            width: 100%;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .navFull {
            grid-column: 1 / -1;
          }

          .heroMiniRow,
          .twoColFields,
          .finishGrid {
            grid-template-columns: 1fr;
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

          .brandWrap {
            width: 100%;
          }

          .navActions {
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

          .heroBtns,
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

          .siteFooter {
            flex-direction: column;
            text-align: center;
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
          background: rgba(255, 255, 255, 0.04);
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
          background: rgba(0, 0, 0, 0.22);
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