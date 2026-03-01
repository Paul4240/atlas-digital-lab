"use client";

import React, { useMemo, useState } from "react";

export default function MetalCardsDemo() {
  const salesPhoneDial = "tel:+18325935740";
  const salesPhoneDisplay = "(832) 593-5740";
  const salesEmail = "hello@atlasdigitallab.com";

  const [finish, setFinish] = useState<"Black" | "Gold" | "Rose Gold" | "Silver">(
    "Black"
  );
  const [logo, setLogo] = useState<string | null>(null);

  const finishMeta = useMemo(() => {
    const base = {
      Black: {
        chip: "Premium Look",
        line: "Bold, high-contrast, luxury vibe.",
        accent: "rgba(90, 190, 255, 0.95)",
      },
      Gold: {
        chip: "High-Ticket",
        line: "Premium look for high-end brands.",
        accent: "rgba(255, 196, 73, 0.95)",
      },
      "Rose Gold": {
        chip: "Modern",
        line: "Classy + creative. Warm and stylish.",
        accent: "rgba(255, 140, 186, 0.95)",
      },
      Silver: {
        chip: "Clean",
        line: "Professional, brushed look.",
        accent: "rgba(190, 210, 230, 0.95)",
      },
    } as const;

    return base[finish];
  }, [finish]);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setLogo(reader.result as string);
    reader.readAsDataURL(file);
  };

  return (
    <main className="mc">
      {/* Top bar */}
      <header className="topbar">
        <div className="brand">
          <div className="dot" />
          <div>
            <div className="brandTitle">Metal Business Cards Demo</div>
            <div className="brandSub">Premium engraved + laser-cut cards</div>
          </div>
        </div>

        <nav className="nav">
          <a className="pill" href="#packages">
            Packages
          </a>
          <a className="pill" href="#process">
            Process
          </a>
          <a className="pill pillStrong" href={salesPhoneDial}>
            Call/Text {salesPhoneDisplay}
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="wrap hero">
        <div className="heroGrid">
          {/* Left */}
          <div className="heroLeft">
            <div className="badgeRow">
              <span className="chip" style={{ borderColor: finishMeta.accent }}>
                {finishMeta.chip}
              </span>
              <span className="muted">
                Fast turnaround • Crisp detail • Strong first impression
              </span>
            </div>

            <h1 className="h1">Make your first impression feel expensive.</h1>
            <p className="lead">
              Metal business cards that people keep. Deep engraving or laser
              etch, clean typography, and premium finishes — designed to look
              high-end and convert conversations into customers.
            </p>

            <div className="ctaRow">
              <label className="btnPrimary">
                Upload Your Logo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleLogoUpload}
                  style={{ display: "none" }}
                />
              </label>

              <a className="btn" href={salesPhoneDial}>
                Text/Call to Order
              </a>

              <a className="btn" href={`mailto:${salesEmail}`}>
                Email for a Quote
              </a>
            </div>

            <div className="miniStats">
              <div className="stat">
                <div className="statTop">1–3 Days</div>
                <div className="statSub">Typical proof + production start</div>
              </div>
              <div className="stat">
                <div className="statTop">Premium Finish</div>
                <div className="statSub">Matte / gloss / brushed look</div>
              </div>
              <div className="stat">
                <div className="statTop">High Detail</div>
                <div className="statSub">Tiny text stays sharp</div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="heroRight">
            <div className="panel">
              <div className="panelHead">
                <div>
                  <div className="panelTitle">Choose a finish</div>
                  <div className="panelSub">
                    Changes the mockups below so it feels like a real product
                    page.
                  </div>
                </div>
                <span className="finishPill" style={{ borderColor: finishMeta.accent }}>
                  {finish}
                </span>
              </div>

              <div className="finishGrid">
                {(["Black", "Gold", "Rose Gold", "Silver"] as const).map((f) => {
                  const selected = finish === f;
                  const accent =
                    f === "Black"
                      ? "rgba(90,190,255,0.95)"
                      : f === "Gold"
                      ? "rgba(255,196,73,0.95)"
                      : f === "Rose Gold"
                      ? "rgba(255,140,186,0.95)"
                      : "rgba(190,210,230,0.95)";
                  return (
                    <button
                      key={f}
                      className={`finishCard ${selected ? "active" : ""}`}
                      onClick={() => setFinish(f)}
                      style={{
                        borderColor: selected ? accent : "rgba(255,255,255,0.10)",
                        boxShadow: selected
                          ? `0 0 0 1px ${accent} inset, 0 12px 40px rgba(0,0,0,0.25)`
                          : "none",
                      }}
                    >
                      <div className="finishTop">
                        <span className="finishName">{f}</span>
                        <span
                          className="finishDot"
                          style={{ background: accent }}
                        />
                      </div>
                      <div className="finishDesc">
                        {f === "Black" && "Bold, high contrast, luxury vibe."}
                        {f === "Gold" && "Premium look for high-ticket brands."}
                        {f === "Rose Gold" &&
                          "Modern + classy, perfect for creative work."}
                        {f === "Silver" &&
                          "Clean and professional. Brushed feel."}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="previewGrid">
                <div className="previewCard">
                  <div className="previewTitle">Your Logo Preview</div>
                  <div className="previewBox">
                    {logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={logo}
                        alt="Uploaded logo"
                        className="logoImg"
                      />
                    ) : (
                      <div className="placeholder">
                        Upload a logo to preview
                        <div className="placeholderSub">
                          (This stays on your device — demo only)
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="note">
                    Tip: best results with a PNG/SVG on a transparent background.
                  </div>
                </div>

                <div className="infoCard">
                  <div className="idName">JORDAN MILLER</div>
                  <div className="idRole">Owner • Custom Metal Cards</div>
                  <div className="idLines">
                    <div>
                      <b>{salesPhoneDisplay}</b>
                      <span className="dim"> • {salesEmail}</span>
                    </div>
                    <div className="dim">Houston, TX</div>
                  </div>

                  <div className="scanBox">
                    <div className="scanTitle">SCAN TO SAVE</div>
                    <div className="scanSub">QR + vCard ready</div>
                    <div className="checks">
                      <div>✅ QR Code</div>
                      <div>✅ NFC Option</div>
                      <div>✅ Clean typography</div>
                      <div>✅ Sharp edges</div>
                    </div>
                  </div>

                  <div className="tiny dim">
                    Demo mockups only — your real design uses your logo + brand
                    colors.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="wrap">
        <div className="sectionHead">
          <h2 className="h2">What you get</h2>
          <p className="muted">
            This demo is built like a product brand: finishes, mockups, features,
            packages, and a clear ordering path. It feels “worth it.”
          </p>
        </div>

        <div className="featureRow">
          <div className="feature">
            <div className="featureTop">
              Deep Engraving <span className="tag">Crisp detail</span>
            </div>
            <div className="featureSub">
              Clean lines, sharp corners, readable tiny text.
            </div>
          </div>
          <div className="feature">
            <div className="featureTop">
              Premium Finishes <span className="tag">Luxury look</span>
            </div>
            <div className="featureSub">
              Black, gold, rose gold, silver — modern vibe.
            </div>
          </div>
          <div className="feature">
            <div className="featureTop">
              Proof Included <span className="tag">No surprises</span>
            </div>
            <div className="featureSub">
              We send a digital proof before production starts.
            </div>
          </div>
          <div className="feature">
            <div className="featureTop">
              Fast Turnaround <span className="tag">Quick</span>
            </div>
            <div className="featureSub">
              Simple process: choose package → approve → produce.
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="wrap" id="packages">
        <div className="sectionHead">
          <h2 className="h2">Packages</h2>
          <p className="muted">
            Pick the package that matches the “first impression” you want. This
            is demo pricing — we can change it to your friend’s real numbers
            later.
          </p>
        </div>

        <div className="packages">
          <div className="pkg">
            <div className="pkgName">Starter Pack</div>
            <div className="pkgPrice">$299</div>
            <div className="pkgMeta">100 cards • 1 finish • proof included</div>
            <ul className="list">
              <li>Single-sided design</li>
              <li>Basic engraving/etch</li>
              <li>Clean typography layout</li>
              <li>Standard turnaround</li>
            </ul>
            <a className="btnWide" href={salesPhoneDial}>
              Order Starter
            </a>
          </div>

          <div className="pkg pkgHot">
            <div className="pkgTopRow">
              <div className="pkgName">Pro Pack</div>
              <div className="hotBadge">Most Popular</div>
            </div>
            <div className="pkgPrice">$499</div>
            <div className="pkgMeta">200 cards • premium finish • proof included</div>
            <ul className="list">
              <li>Double-sided layout</li>
              <li>Premium finish options</li>
              <li>QR code option</li>
              <li>Priority turnaround</li>
            </ul>
            <a className="btnWide btnWideStrong" href={salesPhoneDial}>
              Order Pro
            </a>
          </div>

          <div className="pkg">
            <div className="pkgName">Elite Pack</div>
            <div className="pkgPrice">$799</div>
            <div className="pkgMeta">300 cards • custom branding • best impression</div>
            <ul className="list">
              <li>Premium custom layout</li>
              <li>QR + “scan to save” concept</li>
              <li>Brand style polish</li>
              <li>Fastest turnaround</li>
            </ul>
            <a className="btnWide" href={salesPhoneDial}>
              Order Elite
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="wrap" id="process">
        <div className="sectionHead">
          <h2 className="h2">How it works</h2>
          <p className="muted">
            This keeps it professional and removes friction — exactly what a
            real product site does.
          </p>
        </div>

        <div className="steps">
          <div className="step">
            <div className="stepNum">1</div>
            <div>
              <div className="stepTitle">Pick a package</div>
              <div className="stepSub">
                Choose quantity + finish. Tell us your name/title/logo and
                contact info.
              </div>
            </div>
          </div>
          <div className="step">
            <div className="stepNum">2</div>
            <div>
              <div className="stepTitle">Approve your proof</div>
              <div className="stepSub">
                We send a clean proof. You approve it, then production starts.
              </div>
            </div>
          </div>
          <div className="step">
            <div className="stepNum">3</div>
            <div>
              <div className="stepTitle">Delivered fast</div>
              <div className="stepSub">
                Your metal cards ship ready to impress. People keep them.
              </div>
            </div>
          </div>
        </div>

        <div className="ctaBar">
          <a className="btnWide btnWideStrong" href={salesPhoneDial}>
            Text/Call {salesPhoneDisplay}
          </a>
          <a className="btnWide" href={`mailto:${salesEmail}`}>
            Email: {salesEmail}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footerRow">
          <div className="footerLeft">
            <b>Demo Contact:</b> Call/Text{" "}
            <a className="link" href={salesPhoneDial}>
              {salesPhoneDisplay}
            </a>{" "}
            • Email{" "}
            <a className="link" href={`mailto:${salesEmail}`}>
              {salesEmail}
            </a>
          </div>

          <div className="hiring">Now Hiring: Part-time sales (commission)</div>

          <div className="footerRight">
            <span className="dim">
              © {new Date().getFullYear()} Atlas Digital Lab • Demo
            </span>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="sticky">
        <a className="stickyBtn strong" href={salesPhoneDial}>
          Call/Text
        </a>
        <a className="stickyBtn" href={`mailto:${salesEmail}`}>
          Email Quote
        </a>
      </div>

      <style jsx>{`
        .mc {
          min-height: 100vh;
          background: radial-gradient(
              900px 600px at 20% 10%,
              rgba(90, 190, 255, 0.22),
              transparent 60%
            ),
            radial-gradient(
              900px 600px at 85% 25%,
              rgba(255, 140, 186, 0.14),
              transparent 62%
            ),
            linear-gradient(180deg, #0b0f18 0%, #070a12 100%);
          color: rgba(255, 255, 255, 0.92);
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          backdrop-filter: blur(14px);
          background: rgba(10, 14, 25, 0.55);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .brand {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(90, 190, 255, 0.95);
          box-shadow: 0 0 0 6px rgba(90, 190, 255, 0.12);
        }
        .brandTitle {
          font-weight: 900;
          letter-spacing: -0.2px;
        }
        .brandSub {
          font-size: 12px;
          opacity: 0.75;
        }

        .nav {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .pill {
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          text-decoration: none;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 700;
          font-size: 13px;
          transition: transform 0.15s ease, background 0.15s ease;
        }
        .pill:hover {
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.07);
        }
        .pillStrong {
          border-color: rgba(90, 190, 255, 0.45);
          background: rgba(90, 190, 255, 0.12);
        }

        .wrap {
          max-width: 1100px;
          margin: 0 auto;
          padding: 28px 18px;
        }

        .heroGrid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 18px;
          align-items: start;
        }

        .heroLeft {
          padding: 16px 8px 8px 8px;
        }

        .badgeRow {
          display: flex;
          gap: 10px;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 14px;
        }
        .chip {
          padding: 7px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          font-weight: 900;
          font-size: 12px;
        }
        .muted {
          opacity: 0.78;
        }
        .dim {
          opacity: 0.7;
        }

        .h1 {
          font-size: 52px;
          line-height: 1.05;
          letter-spacing: -1.2px;
          margin: 0 0 12px 0;
          font-weight: 950;
        }
        .lead {
          margin: 0 0 16px 0;
          font-size: 16px;
          line-height: 1.6;
          opacity: 0.86;
          max-width: 58ch;
        }

        .ctaRow {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin: 14px 0 16px 0;
        }
        .btnPrimary,
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 11px 14px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.92);
          text-decoration: none;
          font-weight: 900;
          cursor: pointer;
          transition: transform 0.15s ease, background 0.15s ease,
            border-color 0.15s ease;
          user-select: none;
        }
        .btnPrimary {
          background: linear-gradient(
            90deg,
            rgba(90, 190, 255, 0.9),
            rgba(120, 115, 255, 0.85)
          );
          border-color: rgba(255, 255, 255, 0.14);
          color: #071018;
        }
        .btnPrimary:hover,
        .btn:hover {
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.07);
        }

        .miniStats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          margin-top: 10px;
        }
        .stat {
          border: 1px solid rgba(255, 255, 255, 0.10);
          background: rgba(255, 255, 255, 0.03);
          border-radius: 14px;
          padding: 12px;
        }
        .statTop {
          font-weight: 950;
          letter-spacing: -0.2px;
        }
        .statSub {
          margin-top: 4px;
          font-size: 12px;
          opacity: 0.75;
          line-height: 1.35;
        }

        .panel {
          border: 1px solid rgba(255, 255, 255, 0.10);
          background: rgba(255, 255, 255, 0.03);
          border-radius: 18px;
          padding: 14px;
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
        }
        .panelHead {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          align-items: start;
          margin-bottom: 10px;
        }
        .panelTitle {
          font-weight: 950;
          letter-spacing: -0.2px;
        }
        .panelSub {
          font-size: 12px;
          opacity: 0.75;
          margin-top: 4px;
        }
        .finishPill {
          padding: 8px 10px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.04);
          font-weight: 950;
          font-size: 12px;
          white-space: nowrap;
        }

        .finishGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin: 10px 0 12px 0;
        }
        .finishCard {
          text-align: left;
          border-radius: 14px;
          padding: 12px;
          border: 1px solid rgba(255, 255, 255, 0.10);
          background: rgba(255, 255, 255, 0.03);
          color: rgba(255, 255, 255, 0.92);
          cursor: pointer;
          transition: transform 0.14s ease, background 0.14s ease;
        }
        .finishCard:hover {
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.05);
        }
        .finishTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 6px;
        }
        .finishName {
          font-weight: 950;
          letter-spacing: -0.2px;
        }
        .finishDot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.06);
        }
        .finishDesc {
          font-size: 12px;
          opacity: 0.78;
          line-height: 1.35;
        }

        .previewGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-top: 10px;
        }
        .previewCard,
        .infoCard {
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.10);
          background: rgba(0, 0, 0, 0.12);
          padding: 12px;
        }
        .previewTitle {
          font-weight: 950;
          margin-bottom: 10px;
        }
        .previewBox {
          border-radius: 14px;
          border: 1px dashed rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.03);
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .logoImg {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 12px;
        }
        .placeholder {
          text-align: center;
          font-weight: 900;
          opacity: 0.85;
        }
        .placeholderSub {
          margin-top: 6px;
          font-size: 12px;
          opacity: 0.7;
          font-weight: 700;
        }
        .note {
          margin-top: 10px;
          font-size: 12px;
          opacity: 0.75;
          line-height: 1.35;
        }

        .idName {
          font-weight: 950;
          letter-spacing: -0.2px;
        }
        .idRole {
          margin-top: 4px;
          font-size: 12px;
          opacity: 0.75;
        }
        .idLines {
          margin-top: 10px;
          font-size: 12px;
          line-height: 1.45;
        }

        .scanBox {
          margin-top: 12px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.10);
          background: rgba(255, 255, 255, 0.03);
          padding: 10px;
        }
        .scanTitle {
          font-weight: 950;
          letter-spacing: -0.2px;
        }
        .scanSub {
          margin-top: 2px;
          font-size: 12px;
          opacity: 0.75;
        }
        .checks {
          margin-top: 10px;
          display: grid;
          gap: 6px;
          font-size: 12px;
          opacity: 0.85;
          font-weight: 800;
        }
        .tiny {
          margin-top: 10px;
          font-size: 11px;
          line-height: 1.35;
        }

        .sectionHead {
          margin-bottom: 14px;
        }
        .h2 {
          margin: 0 0 6px 0;
          font-size: 26px;
          letter-spacing: -0.6px;
          font-weight: 950;
        }

        .featureRow {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }
        .feature {
          border: 1px solid rgba(255, 255, 255, 0.10);
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          padding: 12px;
        }
        .featureTop {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          font-weight: 950;
          letter-spacing: -0.2px;
        }
        .tag {
          padding: 6px 9px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          font-size: 11px;
          font-weight: 900;
          opacity: 0.9;
        }
        .featureSub {
          margin-top: 8px;
          font-size: 12px;
          opacity: 0.75;
          line-height: 1.35;
        }

        .packages {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        .pkg {
          border: 1px solid rgba(255, 255, 255, 0.10);
          background: rgba(255, 255, 255, 0.03);
          border-radius: 18px;
          padding: 14px;
        }
        .pkgHot {
          border-color: rgba(90, 190, 255, 0.35);
          background: rgba(90, 190, 255, 0.06);
          box-shadow: 0 18px 60px rgba(0, 0, 0, 0.35);
        }
        .pkgTopRow {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }
        .hotBadge {
          padding: 6px 10px;
          border-radius: 999px;
          border: 1px solid rgba(90, 190, 255, 0.45);
          background: rgba(90, 190, 255, 0.12);
          font-weight: 950;
          font-size: 11px;
        }
        .pkgName {
          font-weight: 950;
        }
        .pkgPrice {
          margin-top: 10px;
          font-size: 38px;
          letter-spacing: -1px;
          font-weight: 950;
        }
        .pkgMeta {
          margin-top: 4px;
          font-size: 12px;
          opacity: 0.75;
        }
        .list {
          margin: 12px 0 0 0;
          padding-left: 18px;
          opacity: 0.85;
          font-weight: 800;
          font-size: 12px;
          line-height: 1.7;
        }
        .btnWide {
          margin-top: 12px;
          width: 100%;
          display: inline-flex;
          justify-content: center;
          padding: 12px 14px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.92);
          text-decoration: none;
          font-weight: 950;
          transition: transform 0.15s ease, background 0.15s ease;
        }
        .btnWide:hover {
          transform: translateY(-1px);
          background: rgba(255, 255, 255, 0.07);
        }
        .btnWideStrong {
          background: linear-gradient(
            90deg,
            rgba(90, 190, 255, 0.9),
            rgba(120, 115, 255, 0.85)
          );
          border-color: rgba(255, 255, 255, 0.14);
          color: #071018;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }
        .step {
          display: flex;
          gap: 10px;
          border: 1px solid rgba(255, 255, 255, 0.10);
          background: rgba(255, 255, 255, 0.03);
          border-radius: 16px;
          padding: 12px;
        }
        .stepNum {
          width: 30px;
          height: 30px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 950;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .stepTitle {
          font-weight: 950;
        }
        .stepSub {
          margin-top: 6px;
          font-size: 12px;
          opacity: 0.75;
          line-height: 1.35;
        }

        .ctaBar {
          margin-top: 12px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .footer {
          padding: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(0, 0, 0, 0.22);
        }
        .footerRow {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 12px;
          align-items: center;
        }
        .footerLeft {
          font-size: 12px;
          opacity: 0.85;
          font-weight: 800;
        }
        .footerRight {
          text-align: right;
          font-size: 12px;
        }
        .hiring {
          border: 1px dashed rgba(255, 255, 255, 0.25);
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          font-size: 12px;
          font-weight: 900;
          opacity: 0.9;
          white-space: nowrap;
        }
        .link {
          color: rgba(255, 255, 255, 0.92);
          text-decoration: none;
          font-weight: 950;
        }
        .link:hover {
          text-decoration: underline;
        }

        .sticky {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 10px;
          display: none;
          gap: 10px;
          background: rgba(8, 10, 16, 0.75);
          border-top: 1px solid rgba(255, 255, 255, 0.10);
          backdrop-filter: blur(14px);
          z-index: 30;
        }
        .stickyBtn {
          flex: 1;
          text-align: center;
          padding: 12px 12px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.92);
          text-decoration: none;
          font-weight: 950;
        }
        .stickyBtn.strong {
          background: linear-gradient(
            90deg,
            rgba(90, 190, 255, 0.9),
            rgba(120, 115, 255, 0.85)
          );
          border-color: rgba(255, 255, 255, 0.14);
          color: #071018;
        }

        /* Responsive */
        @media (max-width: 980px) {
          .heroGrid {
            grid-template-columns: 1fr;
          }
          .h1 {
            font-size: 42px;
          }
          .previewGrid {
            grid-template-columns: 1fr;
          }
          .featureRow {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .packages {
            grid-template-columns: 1fr;
          }
          .steps {
            grid-template-columns: 1fr;
          }
          .footerRow {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footerRight {
            text-align: center;
          }
          .nav {
            display: none;
          }
          .sticky {
            display: flex;
          }
        }

        @media (max-width: 520px) {
          .h1 {
            font-size: 34px;
          }
          .miniStats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}