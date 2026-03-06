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
        accent: "#2eb4ff",
        glow: "rgba(46,180,255,.25)",
      },
      {
        key: "gold",
        name: "Gold",
        note: "Premium look for high-ticket brands.",
        accent: "#f5c84c",
        glow: "rgba(245,200,76,.18)",
      },
      {
        key: "rose",
        name: "Rose Gold",
        note: "Modern + classy, creative work.",
        accent: "#f08ab0",
        glow: "rgba(240,138,176,.18)",
      },
      {
        key: "silver",
        name: "Silver",
        note: "Clean and professional. Brushed.",
        accent: "#d8e5ff",
        glow: "rgba(216,229,255,.16)",
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
  )}&body=${encodeURIComponent(
    `Hi Atlas Digital Lab,

I’m interested in premium metal business cards.

Finish: ${finish.name}
Name: ${brandName}
Title: ${title}
Phone: ${phone}
Website: ${site}
City: ${city}

Notes:
`
  )}`;

  return (
    <main className="page">
      <div className="topbar">
        <div className="container topbarInner">
          <div className="brandWrap">
            <div
              className="brandDot"
              style={{
                background: finish.accent,
                boxShadow: `0 0 24px ${finish.glow}`,
              }}
            />
            <div>
              <div className="brandTitle">Metal Business Cards Demo</div>
              <div className="brandSub">
                Premium engraved • laser-etch • high-end
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
        <section className="heroGrid">
          <div className="card panel">
            <div className="chipRow">
              <div className="chip">Premium Look</div>
              <div className="chip">Fast turnaround</div>
              <div className="chip">Crisp detail</div>
              <div className="chip">Strong first impression</div>
            </div>

            <h1 className="heroTitle">
              Make your first impression feel{" "}
              <span style={{ color: finish.accent }}>expensive</span>.
            </h1>

            <p className="heroText">
              Metal business cards that people keep. Deep engraving or laser
              etch, clean typography, and premium finishes — designed to look
              high-end and convert conversations into customers.
            </p>

            <div className="ctaRow">
              <a href={telSales} className="btn btnPrimary">
                Call / Text to Order
              </a>
              <a href={mailtoQuote} className="btn">
                Email for a Quote
              </a>
            </div>

            <div className="statsGrid">
              <div className="statBox">
                <div className="statTitle">1–3 Days</div>
                <div className="statText">Typical proof + production start</div>
              </div>
              <div className="statBox">
                <div className="statTitle">Premium Finish</div>
                <div className="statText">Matte / gloss / brushed look</div>
              </div>
              <div className="statBox">
                <div className="statTitle">High Detail</div>
                <div className="statText">Tiny text stays sharp</div>
              </div>
            </div>
          </div>

          <div className="card panel">
            <div className="builderBox">
              <div className="sectionMiniTitle">Choose a finish</div>
              <div className="sectionMiniSub">
                This changes the demo mockups below so it feels like a real
                product page.
              </div>

              <div className="finishGrid">
                {finishes.map((f) => (
                  <button
                    key={f.key}
                    type="button"
                    className={`finishBtn ${
                      finish.key === f.key ? "finishBtnActive" : ""
                    }`}
                    onClick={() => setFinish(f)}
                    style={
                      finish.key === f.key
                        ? {
                            borderColor: f.accent,
                            boxShadow: `0 0 0 3px ${f.glow}`,
                          }
                        : undefined
                    }
                  >
                    <div className="finishRow">
                      <span
                        className="finishDot"
                        style={{
                          background: f.accent,
                          boxShadow: `0 0 16px ${f.glow}`,
                        }}
                      />
                      <div>
                        <div className="finishName">{f.name}</div>
                        <div className="finishNote">{f.note}</div>
                      </div>
                    </div>
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
                <div className="uploadHint">PNG / JPG / SVG</div>
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

            <div className="mockGrid">
              <div className="mockCard">
                <div className="mockTop">
                  <div>
                    <div className="mockName">{brandName.toUpperCase()}</div>
                    <div className="mockRole">{title}</div>
                  </div>
                  <div
                    className="finishBadge"
                    style={{
                      color: finish.accent,
                      borderColor: finish.accent,
                      boxShadow: `0 0 0 3px ${finish.glow}`,
                    }}
                  >
                    {finish.name}
                  </div>
                </div>

                <div className="mockMeta">
                  {phone}
                  <br />
                  {EMAIL}
                  <br />
                  {site} • {city}
                </div>

                <div className="logoBox">
                  {logoUrl ? (
                    <img src={logoUrl} alt="Logo preview" className="logoImg" />
                  ) : (
                    <div className="logoPlaceholder">Your logo here</div>
                  )}
                </div>

                <div className="mockNote">Designed to feel premium.</div>
              </div>

              <div className="scanBox">
                <div className="scanTitle">SCAN TO SAVE</div>
                <div className="scanSub">
                  QR + vCard ready
                  <br />✓ QR Code • NFC Option
                </div>

                <ul className="scanList">
                  <li>Clean typography</li>
                  <li>Sharp edges</li>
                  <li>
                    Demo mockups only — your real design uses your logo + brand
                    colors.
                  </li>
                </ul>

                <div className="scanButtons">
                  <a href={telSales} className="priceBtn btnPrimary">
                    Text Sales
                  </a>
                  <a href={mailtoQuote} className="priceBtn">
                    Email Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionWrap">
          <div className="card sectionCard">
            <h2 className="sectionTitle">Packages</h2>
            <p className="sectionSub">
              Built to look like a $2,000+ product page: finishes, mockups,
              trust blocks, and a clear path to checkout.
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

              <div className="priceCard">
                <div className="priceTop">
                  <div className="priceName">Pro</div>
                  <div
                    className="badge"
                    style={{ borderColor: finish.accent, color: finish.accent }}
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

              <div className="priceCard">
                <div className="priceTop">
                  <div className="priceName">Elite</div>
                  <div className="badge gold">Premium Option</div>
                </div>
                <div className="priceValue">$1,200</div>
                <div className="priceSmall">
                  Full set • 4 finishes • best polish
                </div>
                <ul className="priceList">
                  <li>4 finish variants</li>
                  <li>Premium product page layout</li>
                  <li>Conversion-focused CTA sections</li>
                  <li>“High-end” typography + spacing</li>
                </ul>
                <a href={mailtoQuote} className="priceBtn btnPrimary">
                  Build My Elite Set
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="sectionWrap">
          <div className="card sectionCard">
            <h2 className="sectionTitle">FAQ</h2>
            <p className="sectionSub">
              These blocks are here on purpose — they make the page feel like a
              premium product page and reduce “back and forth” questions.
            </p>

            <div className="faqGrid">
              <div className="faqCard">
                <div className="faqQ">Does my logo upload really work?</div>
                <div className="faqA">
                  Yes — it previews instantly in the mock card. This is a demo
                  version using local preview; production can store the file and
                  generate final mockups.
                </div>
              </div>

              <div className="faqCard">
                <div className="faqQ">Can I change finishes?</div>
                <div className="faqA">
                  Yep — tap a finish and the accents/glow update. This is
                  exactly the “premium product” feel people expect.
                </div>
              </div>

              <div className="faqCard">
                <div className="faqQ">Can you add NFC / QR?</div>
                <div className="faqA">
                  Absolutely. We can generate a QR to your website, contact
                  card, or booking page and offer NFC options depending on the
                  card vendor.
                </div>
              </div>

              <div className="faqCard">
                <div className="faqQ">How do I order fast?</div>
                <div className="faqA">
                  Text Sales and we’ll reply with a quick form. If you prefer
                  email, hit “Email Quote” and it auto-fills the details.
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
          min-height: 100vh;
          color: rgba(235, 245, 255, 0.92);
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          background:
            radial-gradient(circle at 18% 0%, rgba(15, 60, 110, 1) 0%, rgba(10, 26, 54, 1) 45%, rgba(7, 14, 26, 1) 100%);
          overflow-x: hidden;
        }

        .container {
          width: 100%;
          max-width: 1180px;
          margin: 0 auto;
          padding-left: 16px;
          padding-right: 16px;
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 50;
          padding: 12px 0;
          backdrop-filter: blur(12px);
          background: rgba(7, 14, 26, 0.55);
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
          font-weight: 800;
          line-height: 1.1;
        }

        .brandSub {
          font-size: 12px;
          opacity: 0.78;
          line-height: 1.15;
        }

        .navButtons {
          display: grid;
          grid-template-columns: repeat(3, auto);
          gap: 10px;
          align-items: center;
        }

        .pill,
        .btn,
        .priceBtn {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          color: rgba(235, 245, 255, 0.92);
          font-weight: 800;
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
        }

        .pageInner {
          padding-top: 18px;
          padding-bottom: 56px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 18px;
        }

        .card,
        .sectionCard {
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.06),
            rgba(255, 255, 255, 0.03)
          );
          box-shadow: 0 25px 80px rgba(0, 0, 0, 0.35);
          overflow: hidden;
        }

        .panel {
          padding: 24px;
          min-width: 0;
        }

        .chipRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 14px;
        }

        .chip {
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.05);
          font-size: 12px;
          font-weight: 800;
        }

        .heroTitle {
          margin: 0;
          font-size: 54px;
          line-height: 1.02;
          letter-spacing: -0.8px;
          font-weight: 900;
          word-break: break-word;
        }

        .heroText {
          margin-top: 14px;
          margin-bottom: 18px;
          font-size: 16px;
          line-height: 1.5;
          opacity: 0.86;
          max-width: 620px;
        }

        .ctaRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 10px;
        }

        .btn {
          min-height: 52px;
          padding: 14px 16px;
          border-radius: 14px;
        }

        .statsGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 18px;
        }

        .statBox {
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.18);
          padding: 14px;
          min-width: 0;
        }

        .statTitle {
          font-weight: 900;
          font-size: 14px;
        }

        .statText {
          opacity: 0.78;
          font-size: 12px;
          margin-top: 6px;
          line-height: 1.35;
        }

        .builderBox {
          min-width: 0;
        }

        .sectionMiniTitle {
          font-weight: 900;
          font-size: 14px;
          margin-bottom: 6px;
        }

        .sectionMiniSub {
          opacity: 0.72;
          font-size: 12px;
          line-height: 1.35;
        }

        .finishGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-top: 12px;
        }

        .finishBtn {
          text-align: left;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          padding: 12px;
          color: rgba(235, 245, 255, 0.92);
          cursor: pointer;
          min-width: 0;
        }

        .finishBtnActive {
          background: rgba(255, 255, 255, 0.08);
        }

        .finishRow {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .finishDot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .finishName {
          font-weight: 900;
          font-size: 13px;
        }

        .finishNote {
          opacity: 0.72;
          font-size: 12px;
          margin-top: 6px;
          line-height: 1.25;
        }

        .uploadRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          margin-top: 12px;
        }

        .uploadBtn {
          min-height: 48px;
          padding: 12px 14px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1),
            rgba(255, 255, 255, 0.05)
          );
          color: rgba(235, 245, 255, 0.92);
          font-weight: 900;
          cursor: pointer;
        }

        .uploadHint {
          font-size: 12px;
          opacity: 0.65;
        }

        .fieldGrid {
          display: grid;
          gap: 10px;
          margin-top: 12px;
        }

        .twoCol {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .mockGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 12px;
          min-width: 0;
        }

        .mockCard,
        .scanBox,
        .priceCard,
        .faqCard {
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.22);
          padding: 16px;
          min-width: 0;
        }

        .mockTop {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          align-items: flex-start;
        }

        .mockName {
          font-weight: 900;
          font-size: 13px;
          letter-spacing: 0.2px;
          word-break: break-word;
        }

        .mockRole {
          opacity: 0.75;
          font-size: 12px;
          margin-top: 4px;
          line-height: 1.3;
        }

        .finishBadge {
          font-size: 11px;
          font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid;
          background: rgba(255, 255, 255, 0.04);
          white-space: nowrap;
          flex-shrink: 0;
        }

        .mockMeta {
          opacity: 0.85;
          font-size: 12px;
          margin-top: 10px;
          line-height: 1.5;
          word-break: break-word;
        }

        .logoBox {
          margin-top: 14px;
          width: 100%;
          min-height: 88px;
          border-radius: 16px;
          border: 1px dashed rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .logoImg {
          max-width: 92%;
          max-height: 92%;
          object-fit: contain;
        }

        .logoPlaceholder {
          opacity: 0.7;
          font-size: 12px;
          font-weight: 800;
        }

        .mockNote {
          margin-top: 10px;
          opacity: 0.6;
          font-size: 12px;
        }

        .scanTitle,
        .faqQ {
          font-weight: 900;
          font-size: 13px;
        }

        .scanSub,
        .faqA {
          opacity: 0.78;
          font-size: 12px;
          margin-top: 8px;
          line-height: 1.45;
          word-break: break-word;
        }

        .scanList,
        .priceList {
          margin-top: 10px;
          padding-left: 18px;
          opacity: 0.9;
          font-size: 12px;
          line-height: 1.45;
        }

        .scanButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 12px;
        }

        .sectionWrap {
          margin-top: 18px;
        }

        .sectionCard {
          padding: 22px 18px;
        }

        .sectionTitle {
          margin: 0;
          font-size: 20px;
          font-weight: 900;
        }

        .sectionSub {
          margin-top: 8px;
          opacity: 0.75;
          font-size: 13px;
          line-height: 1.45;
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 14px;
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
          font-size: 14px;
        }

        .badge {
          font-size: 11px;
          font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.06);
          opacity: 0.9;
        }

        .gold {
          border-color: rgba(255, 205, 64, 0.65);
          color: rgba(255, 205, 64, 0.95);
        }

        .priceValue {
          font-size: 28px;
          font-weight: 900;
          margin-top: 10px;
        }

        .priceSmall {
          opacity: 0.72;
          font-size: 12px;
          margin-top: 6px;
          line-height: 1.35;
        }

        .priceBtn {
          width: 100%;
          min-height: 52px;
          padding: 12px 14px;
          border-radius: 14px;
          margin-top: 12px;
        }

        .faqGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 14px;
        }

        .footerButtons {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 16px;
        }

        .fullBtn {
          width: 100%;
        }

        .siteFooter {
          margin-top: 20px;
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

        @media (max-width: 980px) {
          .heroGrid,
          .mockGrid,
          .pricingGrid,
          .faqGrid {
            grid-template-columns: 1fr;
          }

          .navButtons {
            width: 100%;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .navFull {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 700px) {
          .pageInner {
            padding-top: 16px;
            padding-bottom: 44px;
          }

          .panel,
          .sectionCard {
            padding: 18px 14px;
          }

          .heroTitle {
            font-size: 40px;
            line-height: 1.05;
          }

          .ctaRow,
          .scanButtons,
          .footerButtons {
            flex-direction: column;
          }

          .btn,
          .priceBtn {
            width: 100%;
          }

          .statsGrid,
          .twoCol,
          .finishGrid {
            grid-template-columns: 1fr;
          }

          .mockTop,
          .priceTop {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 520px) {
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

          .pill {
            width: 100%;
          }

          .heroTitle {
            font-size: 34px;
          }

          .brandSub {
            max-width: 220px;
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
          border-radius: 14px;
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
        }

        .fieldInput {
          width: 100%;
          min-width: 0;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(0, 0, 0, 0.25);
          color: rgba(235, 245, 255, 0.92);
          padding: 10px;
          outline: none;
          font-weight: 800;
          font-size: 13px;
        }
      `}</style>
    </label>
  );
}