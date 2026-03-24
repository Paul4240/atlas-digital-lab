"use client";

import React, { useMemo, useState } from "react";

type PackageKey = "0.2mm" | "0.5mm" | "0.8mm";

type Finish = {
  key: string;
  label: string;
  cardBg: string;
  sheen: string;
  text: string;
  border: string;
};

type CardPackage = {
  key: PackageKey;
  thickness: string;
  price: string;
  min: string;
  description: string;
  finishes: Finish[];
};

export default function IezekielHaleyMetalCardsPage() {
  const OWNER = "Iezekiel Haley";
  const PHONE_RAW = "8328710186";
  const PHONE_PRETTY = "(832) 871-0186";
  const EMAIL = "Iezekielcustoms@yahoo.com";
  const WEBSITE = "http://www.iezekielscustomcards.com";

  const packages: CardPackage[] = useMemo(
    () => [
      {
        key: "0.2mm",
        thickness: "0.2mm",
        price: "$1/card",
        min: "Minimum order: 50 cards",
        description:
          "Affordable custom metal cards with the widest color selection and a clean professional finish.",
        finishes: [
          {
            key: "violet",
            label: "Violet",
            cardBg: "linear-gradient(135deg, #2e1748 0%, #6b3fa0 55%, #b58cff 100%)",
            sheen: "rgba(255,255,255,0.18)",
            text: "#ffffff",
            border: "rgba(206, 181, 255, 0.45)",
          },
          {
            key: "black",
            label: "Black",
            cardBg: "linear-gradient(135deg, #0d1014 0%, #1a1f28 55%, #313846 100%)",
            sheen: "rgba(255,255,255,0.12)",
            text: "#ffffff",
            border: "rgba(255,255,255,0.16)",
          },
          {
            key: "green",
            label: "Green",
            cardBg: "linear-gradient(135deg, #103322 0%, #1e6c49 55%, #49bb81 100%)",
            sheen: "rgba(255,255,255,0.16)",
            text: "#ffffff",
            border: "rgba(155, 236, 197, 0.36)",
          },
          {
            key: "blue",
            label: "Blue",
            cardBg: "linear-gradient(135deg, #0d2a58 0%, #1850af 55%, #6ca8ff 100%)",
            sheen: "rgba(255,255,255,0.18)",
            text: "#ffffff",
            border: "rgba(170, 204, 255, 0.38)",
          },
          {
            key: "red",
            label: "Red",
            cardBg: "linear-gradient(135deg, #4f1017 0%, #a31e2d 55%, #e25261 100%)",
            sheen: "rgba(255,255,255,0.14)",
            text: "#ffffff",
            border: "rgba(255, 184, 191, 0.34)",
          },
          {
            key: "rose-gold",
            label: "Rose Gold",
            cardBg: "linear-gradient(135deg, #6a433d 0%, #b7756b 55%, #e7b8ae 100%)",
            sheen: "rgba(255,255,255,0.18)",
            text: "#fffaf8",
            border: "rgba(255, 226, 217, 0.4)",
          },
          {
            key: "golden-bronze",
            label: "Golden Bronze",
            cardBg: "linear-gradient(135deg, #4e361d 0%, #9f6d2f 55%, #ddb270 100%)",
            sheen: "rgba(255,255,255,0.16)",
            text: "#fffaf2",
            border: "rgba(255, 226, 181, 0.36)",
          },
        ],
      },
      {
        key: "0.5mm",
        thickness: "0.5mm",
        price: "$2.25/card",
        min: "Minimum order: 50 cards",
        description:
          "A thicker premium card for stronger presence and a more substantial feel in hand.",
        finishes: [
          {
            key: "blue",
            label: "Blue",
            cardBg: "linear-gradient(135deg, #0d2a58 0%, #1850af 55%, #6ca8ff 100%)",
            sheen: "rgba(255,255,255,0.18)",
            text: "#ffffff",
            border: "rgba(170, 204, 255, 0.38)",
          },
          {
            key: "black",
            label: "Black",
            cardBg: "linear-gradient(135deg, #0d1014 0%, #1a1f28 55%, #313846 100%)",
            sheen: "rgba(255,255,255,0.12)",
            text: "#ffffff",
            border: "rgba(255,255,255,0.16)",
          },
        ],
      },
      {
        key: "0.8mm",
        thickness: "0.8mm",
        price: "$2.50/card",
        min: "Minimum order: 50 cards",
        description:
          "Our heaviest package for the boldest premium look with a strong executive feel.",
        finishes: [
          {
            key: "black",
            label: "Black",
            cardBg: "linear-gradient(135deg, #0d1014 0%, #1a1f28 55%, #313846 100%)",
            sheen: "rgba(255,255,255,0.12)",
            text: "#ffffff",
            border: "rgba(255,255,255,0.16)",
          },
          {
            key: "silver",
            label: "Silver",
            cardBg: "linear-gradient(135deg, #7f858f 0%, #cfd4dc 50%, #f7f9fc 100%)",
            sheen: "rgba(255,255,255,0.28)",
            text: "#111827",
            border: "rgba(255,255,255,0.62)",
          },
        ],
      },
    ],
    []
  );

  const [selectedPackage, setSelectedPackage] = useState<CardPackage>(packages[0]);
  const [selectedFinish, setSelectedFinish] = useState<Finish>(packages[0].finishes[0]);

  const handlePackageChange = (pkg: CardPackage) => {
    setSelectedPackage(pkg);
    setSelectedFinish(pkg.finishes[0]);
  };

  const initials = OWNER.split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="page">
      <section className="hero">
        <div className="container heroGrid">
          <div className="heroLeft">
            <div className="eyebrow">Custom metal business cards</div>
            <h1>{OWNER} Custom Cards</h1>
            <p className="lead">
              Professional custom metal cards with package-based pricing, finish switching,
              and a clean premium presentation built for serious branding.
            </p>

            <div className="heroActions">
              <a href={`tel:${PHONE_RAW}`} className="btn btnPrimary">
                Call {PHONE_PRETTY}
              </a>
              <a href={`mailto:${EMAIL}`} className="btn btnSecondary">
                Email Now
              </a>
              <a
                href={WEBSITE}
                target="_blank"
                rel="noreferrer"
                className="btn btnGhost"
              >
                Visit Website
              </a>
            </div>

            <div className="contactBar">
              <div className="contactItem">
                <span>Phone</span>
                <strong>{PHONE_PRETTY}</strong>
              </div>
              <div className="contactItem">
                <span>Email</span>
                <strong>{EMAIL}</strong>
              </div>
              <div className="contactItem">
                <span>Website</span>
                <strong>iezekielscustomcards.com</strong>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="summaryCard">
              <div className="summaryTop">
                <span className="summaryLabel">Current package</span>
                <span className="summaryPrice">{selectedPackage.price}</span>
              </div>

              <h3>{selectedPackage.thickness} Metal Cards</h3>
              <p>{selectedPackage.description}</p>

              <div className="summarySpecs">
                <div>
                  <span>Minimum</span>
                  <strong>50 cards</strong>
                </div>
                <div>
                  <span>Selected color</span>
                  <strong>{selectedFinish.label}</strong>
                </div>
                <div>
                  <span>Website</span>
                  <strong>Live now</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="packagesSection">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow dark">Packages</div>
            <h2>Select your card thickness.</h2>
            <p>
              When you switch packages, the available card colors update automatically.
            </p>
          </div>

          <div className="packageGrid">
            {packages.map((pkg) => {
              const active = selectedPackage.key === pkg.key;
              return (
                <button
                  key={pkg.key}
                  type="button"
                  className={`packageCard ${active ? "active" : ""}`}
                  onClick={() => handlePackageChange(pkg)}
                >
                  <div className="packageRow">
                    <span className="packageThickness">{pkg.thickness}</span>
                    <span className="packagePrice">{pkg.price}</span>
                  </div>

                  <div className="packageMin">{pkg.min}</div>
                  <p>{pkg.description}</p>

                  <div className="packageBottom">
                    <span>{pkg.finishes.length} colors</span>
                    <span>{active ? "Selected" : "Choose package"}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="previewSection">
        <div className="container previewGrid">
          <div className="previewLeft">
            <div className="sectionHead left">
              <div className="eyebrow dark">Color options</div>
              <h2>Choose your finish color.</h2>
              <p>
                These colors are tied to the package you selected above.
              </p>
            </div>

            <div className="finishGrid">
              {selectedPackage.finishes.map((finish) => {
                const active = selectedFinish.key === finish.key;
                return (
                  <button
                    key={finish.key}
                    type="button"
                    className={`finishBtn ${active ? "active" : ""}`}
                    onClick={() => setSelectedFinish(finish)}
                  >
                    {finish.label}
                  </button>
                );
              })}
            </div>

            <div className="detailsCard">
              <h3>Order Details</h3>

              <div className="detailRows">
                <div className="detailRow">
                  <span>Thickness</span>
                  <strong>{selectedPackage.thickness}</strong>
                </div>
                <div className="detailRow">
                  <span>Price</span>
                  <strong>{selectedPackage.price}</strong>
                </div>
                <div className="detailRow">
                  <span>Minimum order</span>
                  <strong>50 cards</strong>
                </div>
                <div className="detailRow">
                  <span>Color</span>
                  <strong>{selectedFinish.label}</strong>
                </div>
              </div>

              <div className="detailsActions">
                <a href={`tel:${PHONE_RAW}`} className="btn btnPrimary full">
                  Call to Order
                </a>
                <a href={WEBSITE} target="_blank" rel="noreferrer" className="btn btnGhost full">
                  Open Website
                </a>
              </div>
            </div>
          </div>

          <div className="previewRight">
            <div className="cardStage">
              <div
                className="metalCard"
                style={{
                  background: selectedFinish.cardBg,
                  color: selectedFinish.text,
                  borderColor: selectedFinish.border,
                  boxShadow: `0 24px 70px rgba(0,0,0,.34), inset 0 1px 0 ${selectedFinish.sheen}`,
                }}
              >
                <div className="cardShine" />
                <div className="cardInner">
                  <div className="cardTop">
                    <div className="badge">{initials}</div>
                    <div className="cardBrand">
                      <div className="cardBrandName">{OWNER}</div>
                      <div className="cardBrandSub">Custom Metal Cards</div>
                    </div>
                  </div>

                  <div className="cardMiddle">
                    <div className="cardWebsite">iezekielscustomcards.com</div>
                    <div className="cardPackage">{selectedPackage.thickness} • {selectedFinish.label}</div>
                  </div>

                  <div className="cardBottom">
                    <div>{PHONE_PRETTY}</div>
                    <div>{EMAIL}</div>
                  </div>
                </div>
              </div>

              <div className="stageNote">
                Live preview updates when a package or color is selected.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricingSection">
        <div className="container">
          <div className="sectionHead">
            <div className="eyebrow dark">Pricing</div>
            <h2>Simple package pricing.</h2>
            <p>All packages require a 50 card minimum purchase.</p>
          </div>

          <div className="pricingGrid">
            <div className="pricingCard">
              <h3>0.2mm</h3>
              <div className="pricingValue">$1/card</div>
              <p>Colors: violet, black, green, blue, red, rose gold, golden bronze</p>
            </div>

            <div className="pricingCard featured">
              <h3>0.5mm</h3>
              <div className="pricingValue">$2.25/card</div>
              <p>Colors: blue, black</p>
            </div>

            <div className="pricingCard">
              <h3>0.8mm</h3>
              <div className="pricingValue">$2.50/card</div>
              <p>Colors: black, silver</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ctaSection">
        <div className="container ctaBox">
          <div>
            <div className="eyebrow">Ready to order?</div>
            <h2>Get started with {OWNER} Custom Cards.</h2>
            <p>
              Call, email, or visit the website to place your order and choose the right package.
            </p>
          </div>

          <div className="ctaActions">
            <a href={`tel:${PHONE_RAW}`} className="btn btnPrimary">
              {PHONE_PRETTY}
            </a>
            <a href={`mailto:${EMAIL}`} className="btn btnSecondary">
              {EMAIL}
            </a>
            <a href={WEBSITE} target="_blank" rel="noreferrer" className="btn btnGhost">
              iezekielscustomcards.com
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        :global(body) {
          margin: 0;
          background: #0a0f18;
          color: #eef2f7;
          font-family: Inter, Arial, Helvetica, sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        a {
          text-decoration: none;
        }

        .page {
          min-height: 100vh;
          background:
            radial-gradient(circle at top left, rgba(72, 108, 255, 0.12), transparent 28%),
            radial-gradient(circle at top right, rgba(255, 255, 255, 0.06), transparent 18%),
            linear-gradient(180deg, #08101a 0%, #0b1220 48%, #0a111a 100%);
        }

        .container {
          width: min(1180px, calc(100% - 32px));
          margin: 0 auto;
        }

        .hero,
        .packagesSection,
        .previewSection,
        .pricingSection,
        .ctaSection {
          padding: 72px 0;
        }

        .heroGrid,
        .previewGrid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 32px;
          align-items: center;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #c9d5e7;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .eyebrow.dark {
          background: rgba(20, 27, 39, 0.78);
          color: #b9c6d8;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        h1,
        h2,
        h3,
        p {
          margin: 0;
        }

        h1 {
          font-size: clamp(40px, 5vw, 68px);
          line-height: 0.98;
          letter-spacing: -0.03em;
          max-width: 720px;
        }

        .lead {
          margin-top: 20px;
          max-width: 650px;
          font-size: 18px;
          line-height: 1.7;
          color: #b4c1d1;
        }

        .heroActions,
        .ctaActions,
        .detailsActions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 28px;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 18px;
          border-radius: 14px;
          border: 1px solid transparent;
          font-weight: 700;
          font-size: 15px;
          transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
        }

        .btn:hover {
          transform: translateY(-1px);
        }

        .btnPrimary {
          background: linear-gradient(135deg, #ffffff 0%, #dbe5f2 100%);
          color: #09111c;
          box-shadow: 0 14px 30px rgba(255, 255, 255, 0.12);
        }

        .btnSecondary {
          background: rgba(255, 255, 255, 0.08);
          color: #eef2f7;
          border-color: rgba(255, 255, 255, 0.12);
        }

        .btnGhost {
          background: transparent;
          color: #d3deec;
          border-color: rgba(255, 255, 255, 0.18);
        }

        .btn.full {
          width: 100%;
        }

        .contactBar {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 28px;
        }

        .contactItem,
        .summaryCard,
        .detailsCard,
        .pricingCard,
        .ctaBox,
        .packageCard {
          background: rgba(12, 19, 30, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.22);
        }

        .contactItem {
          padding: 16px;
          border-radius: 18px;
        }

        .contactItem span {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: #93a6bc;
          margin-bottom: 8px;
        }

        .contactItem strong {
          font-size: 15px;
          color: #eef2f7;
          word-break: break-word;
        }

        .summaryCard {
          padding: 28px;
          border-radius: 26px;
        }

        .summaryTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 18px;
        }

        .summaryLabel {
          color: #9cb0c7;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .summaryPrice {
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.12);
          font-weight: 800;
          color: #ffffff;
        }

        .summaryCard h3 {
          font-size: 28px;
          margin-bottom: 12px;
        }

        .summaryCard p {
          color: #aebccf;
          line-height: 1.7;
        }

        .summarySpecs {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-top: 22px;
        }

        .summarySpecs div {
          padding: 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .summarySpecs span {
          display: block;
          font-size: 12px;
          color: #91a5bc;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 6px;
        }

        .summarySpecs strong {
          font-size: 15px;
          color: #f3f6fb;
        }

        .sectionHead {
          text-align: center;
          margin-bottom: 30px;
        }

        .sectionHead.left {
          text-align: left;
          margin-bottom: 22px;
        }

        .sectionHead h2 {
          font-size: clamp(30px, 3.8vw, 48px);
          line-height: 1.02;
          letter-spacing: -0.03em;
        }

        .sectionHead p {
          margin-top: 12px;
          color: #9fb0c4;
          line-height: 1.7;
          font-size: 17px;
        }

        .packageGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .packageCard {
          text-align: left;
          padding: 24px;
          border-radius: 24px;
          cursor: pointer;
          transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
          color: #eef2f7;
        }

        .packageCard:hover {
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.16);
        }

        .packageCard.active {
          border-color: rgba(255, 255, 255, 0.28);
          box-shadow: 0 18px 60px rgba(255, 255, 255, 0.08);
        }

        .packageRow {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          align-items: center;
          margin-bottom: 12px;
        }

        .packageThickness {
          font-size: 24px;
          font-weight: 800;
        }

        .packagePrice {
          font-size: 15px;
          font-weight: 800;
          color: #dce6f4;
        }

        .packageMin {
          font-size: 13px;
          color: #8ea2b8;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 14px;
        }

        .packageCard p {
          color: #afbdcf;
          line-height: 1.7;
        }

        .packageBottom {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          color: #dce6f4;
          font-size: 14px;
          font-weight: 600;
        }

        .finishGrid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 22px;
        }

        .finishBtn {
          min-height: 44px;
          padding: 0 16px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.04);
          color: #eaf0f8;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.18s ease, border-color 0.18s ease, background 0.18s ease;
        }

        .finishBtn:hover {
          transform: translateY(-1px);
        }

        .finishBtn.active {
          background: rgba(255, 255, 255, 0.14);
          border-color: rgba(255, 255, 255, 0.24);
        }

        .detailsCard {
          padding: 24px;
          border-radius: 24px;
        }

        .detailsCard h3 {
          font-size: 24px;
          margin-bottom: 18px;
        }

        .detailRows {
          display: grid;
          gap: 12px;
        }

        .detailRow {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        }

        .detailRow span {
          color: #96aabd;
        }

        .detailRow strong {
          color: #f2f6fb;
          text-align: right;
        }

        .cardStage {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100%;
          padding: 18px 0;
        }

        .metalCard {
          position: relative;
          width: min(100%, 520px);
          aspect-ratio: 1.65 / 1;
          border-radius: 28px;
          border: 1px solid;
          overflow: hidden;
          padding: 26px;
        }

        .cardShine {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(120deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 28%),
            radial-gradient(circle at top right, rgba(255,255,255,0.18), transparent 28%);
          pointer-events: none;
        }

        .cardInner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .cardTop {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .badge {
          width: 62px;
          height: 62px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          font-size: 22px;
          font-weight: 900;
          background: rgba(255, 255, 255, 0.16);
          border: 1px solid rgba(255, 255, 255, 0.22);
          backdrop-filter: blur(4px);
        }

        .cardBrandName {
          font-size: clamp(22px, 2vw, 28px);
          font-weight: 800;
          line-height: 1;
        }

        .cardBrandSub {
          margin-top: 6px;
          font-size: 13px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.86;
        }

        .cardMiddle {
          display: grid;
          gap: 8px;
        }

        .cardWebsite {
          font-size: 15px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0.92;
        }

        .cardPackage {
          font-size: 18px;
          font-weight: 700;
        }

        .cardBottom {
          display: grid;
          gap: 6px;
          font-size: 15px;
          font-weight: 600;
        }

        .stageNote {
          margin-top: 16px;
          font-size: 14px;
          color: #90a3b8;
          text-align: center;
        }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .pricingCard {
          padding: 26px;
          border-radius: 24px;
        }

        .pricingCard.featured {
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 60px rgba(255, 255, 255, 0.08);
        }

        .pricingCard h3 {
          font-size: 24px;
          margin-bottom: 12px;
        }

        .pricingValue {
          font-size: 34px;
          font-weight: 900;
          letter-spacing: -0.03em;
          margin-bottom: 14px;
        }

        .pricingCard p {
          color: #aab7c8;
          line-height: 1.7;
        }

        .ctaBox {
          border-radius: 28px;
          padding: 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .ctaBox h2 {
          font-size: clamp(30px, 3.5vw, 44px);
          line-height: 1.02;
          letter-spacing: -0.03em;
        }

        .ctaBox p {
          margin-top: 12px;
          color: #aebdd0;
          line-height: 1.7;
          max-width: 620px;
        }

        @media (max-width: 980px) {
          .heroGrid,
          .previewGrid,
          .packageGrid,
          .pricingGrid,
          .contactBar,
          .summarySpecs,
          .ctaBox {
            grid-template-columns: 1fr;
          }

          .heroGrid,
          .previewGrid {
            display: grid;
          }

          .ctaBox {
            display: grid;
          }
        }

        @media (max-width: 720px) {
          .hero,
          .packagesSection,
          .previewSection,
          .pricingSection,
          .ctaSection {
            padding: 56px 0;
          }

          h1 {
            font-size: 42px;
          }

          .sectionHead h2,
          .ctaBox h2 {
            font-size: 32px;
          }

          .btn,
          .finishBtn {
            width: 100%;
          }

          .heroActions,
          .ctaActions,
          .detailsActions {
            flex-direction: column;
          }

          .packageRow,
          .packageBottom,
          .detailRow {
            flex-direction: column;
            align-items: flex-start;
          }

          .detailRow strong {
            text-align: left;
          }

          .metalCard {
            padding: 20px;
            border-radius: 22px;
          }

          .badge {
            width: 54px;
            height: 54px;
            border-radius: 16px;
            font-size: 20px;
          }

          .cardWebsite,
          .cardBottom,
          .cardPackage {
            font-size: 14px;
          }
        }
      `}</style>
    </main>
  );
}
