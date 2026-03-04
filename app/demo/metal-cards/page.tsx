"use client";

import React, { useMemo, useState } from "react";

export default function MetalCardsDemo() {
  const MAIN_PHONE = "8327050313";
  const MAIN_PRETTY = "(832) 705-0313";

  const SALES_PHONE = "3463657906";
  const SALES_PRETTY = "(346) 365-7906";

  const EMAIL = "hello@atlasdigitallab.com";

  type Finish = "black" | "gold" | "rose" | "silver";
  const [finish, setFinish] = useState<Finish>("black");
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);

  const finishLabel = useMemo(() => {
    switch (finish) {
      case "black":
        return { title: "Black", desc: "Bold, high contrast, luxury vibe." };
      case "gold":
        return { title: "Gold", desc: "Premium look for high-ticket brands." };
      case "rose":
        return { title: "Rose Gold", desc: "Modern + classy, creative work." };
      case "silver":
        return { title: "Silver", desc: "Clean and professional. Brushed." };
    }
  }, [finish]);

  const cardTheme = useMemo(() => {
    if (finish === "black") {
      return {
        bg: "linear-gradient(180deg, rgba(18,22,30,0.95), rgba(10,12,16,0.95))",
        border: "rgba(255,255,255,0.14)",
        accent: "#00d2aa",
        text: "#eaf2ff",
        sub: "rgba(234,242,255,0.72)",
        chip: "rgba(255,255,255,0.10)",
      };
    }
    if (finish === "gold") {
      return {
        bg: "linear-gradient(180deg, rgba(30,26,16,0.96), rgba(16,13,8,0.96))",
        border: "rgba(255,220,140,0.30)",
        accent: "#ffd27a",
        text: "#fff6e6",
        sub: "rgba(255,246,230,0.75)",
        chip: "rgba(255,210,122,0.14)",
      };
    }
    if (finish === "rose") {
      return {
        bg: "linear-gradient(180deg, rgba(34,18,24,0.96), rgba(16,10,12,0.96))",
        border: "rgba(255,170,200,0.26)",
        accent: "#ff8fb5",
        text: "#fff0f6",
        sub: "rgba(255,240,246,0.74)",
        chip: "rgba(255,143,181,0.14)",
      };
    }
    return {
      bg: "linear-gradient(180deg, rgba(26,28,32,0.96), rgba(12,13,16,0.96))",
      border: "rgba(220,230,255,0.22)",
      accent: "#b9d6ff",
      text: "#eef5ff",
      sub: "rgba(238,245,255,0.72)",
      chip: "rgba(185,214,255,0.14)",
    };
  }, [finish]);

  function onLogoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setLogoDataUrl(String(reader.result));
    reader.readAsDataURL(file);
  }

  return (
    <main className="page">
      <header className="top">
        <div className="brandBlock">
          <div className="titleSmall">Metal Business Cards Demo</div>
          <div className="subtitleSmall">Premium engraved + laser-cut cards</div>
        </div>

        <div className="topBtns">
          <a className="pill" href={`tel:${MAIN_PHONE}`}>
            Main {MAIN_PRETTY}
          </a>
          <a className="pill primary" href={`tel:${SALES_PHONE}`}>
            Sales {SALES_PRETTY}
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="heroLeft">
          <div className="chips">
            <span className="chip">Premium Look</span>
            <span className="chip">Fast turnaround</span>
            <span className="chip">Crisp detail</span>
            <span className="chip">Strong first impression</span>
          </div>

          <h1 className="h1">
            Make your first
            <br />
            impression feel <span className="accent">expensive</span>.
          </h1>

          <p className="lead">
            Metal business cards that people keep. Deep engraving or laser etch,
            clean typography, and premium finishes — designed to look high-end
            and convert conversations into customers.
          </p>

          <div className="ctaRow">
            <a className="btn primary" href={`tel:${SALES_PHONE}`}>
              Text/Call to Order
            </a>
            <a
              className="btn"
              href={`mailto:${EMAIL}?subject=Metal%20Cards%20Quote`}
            >
              Email for a Quote
            </a>
          </div>

          <div className="miniRow">
            <div className="miniCard">
              <div className="miniTop">1–3 Days</div>
              <div className="miniSub">Typical proof + production start</div>
            </div>
            <div className="miniCard">
              <div className="miniTop">Premium Finish</div>
              <div className="miniSub">Matte / gloss / brushed look</div>
            </div>
            <div className="miniCard">
              <div className="miniTop">High Detail</div>
              <div className="miniSub">Tiny text stays sharp</div>
            </div>
          </div>
        </div>

        <div className="heroRight">
          <div className="panel">
            <div className="panelTitle">Choose a finish</div>
            <div className="panelNote">
              This changes the demo mockups below so it feels like a real
              product page (not a service page).
            </div>

            <div className="finishGrid">
              <button
                type="button"
                className={`finishBtn ${finish === "black" ? "on" : ""}`}
                onClick={() => setFinish("black")}
              >
                <div className="finishName">Black</div>
                <div className="finishDesc">Bold, high contrast, luxury vibe.</div>
              </button>

              <button
                type="button"
                className={`finishBtn ${finish === "gold" ? "on" : ""}`}
                onClick={() => setFinish("gold")}
              >
                <div className="finishName">Gold</div>
                <div className="finishDesc">Premium look for high-ticket brands.</div>
              </button>

              <button
                type="button"
                className={`finishBtn ${finish === "rose" ? "on" : ""}`}
                onClick={() => setFinish("rose")}
              >
                <div className="finishName">Rose Gold</div>
                <div className="finishDesc">Modern + classy, creative work.</div>
              </button>

              <button
                type="button"
                className={`finishBtn ${finish === "silver" ? "on" : ""}`}
                onClick={() => setFinish("silver")}
              >
                <div className="finishName">Silver</div>
                <div className="finishDesc">Clean and professional. Brushed.</div>
              </button>
            </div>

            <label className="uploadRow">
              <span className="uploadBtn">Upload Your Logo</span>
              <span className="uploadHint">PNG/JPG/SVG</span>
              <input
                className="fileInput"
                type="file"
                accept="image/*"
                onChange={onLogoChange}
              />
            </label>

            <div className="mockRow">
              <div className="mockCard" style={{ background: cardTheme.bg, borderColor: cardTheme.border }}>
                <div className="mockName" style={{ color: cardTheme.text }}>
                  JORDAN MILLER
                </div>
                <div className="mockRole" style={{ color: cardTheme.sub }}>
                  Owner · Custom Metal Cards
                </div>

                <div className="mockLines">
                  <div className="mockLine" style={{ color: cardTheme.text }}>
                    {SALES_PRETTY}
                  </div>
                  <div className="mockLine" style={{ color: cardTheme.text }}>
                    {EMAIL}
                  </div>
                  <div className="mockLine" style={{ color: cardTheme.sub }}>
                    brand.com · Houston, TX
                  </div>
                </div>

                <div className="logoBox" style={{ borderColor: cardTheme.border, background: cardTheme.chip }}>
                  {logoDataUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={logoDataUrl}
                      alt="Uploaded logo"
                      className="logoImg"
                    />
                  ) : (
                    <div className="logoPlaceholder" style={{ color: cardTheme.sub }}>
                      Your logo here
                    </div>
                  )}
                </div>

                <div className="mockFoot" style={{ color: cardTheme.sub }}>
                  Designed to feel premium.
                </div>
              </div>

              <div className="mockInfo" style={{ borderColor: cardTheme.border }}>
                <div className="mockInfoTitle" style={{ color: cardTheme.text }}>
                  SCAN TO SAVE
                </div>
                <div className="mockInfoSub" style={{ color: cardTheme.sub }}>
                  QR + vCard ready
                </div>

                <ul className="checkList" style={{ color: cardTheme.sub }}>
                  <li>
                    <span className="check" style={{ color: cardTheme.accent }}>✓</span> QR Code + NFC Option
                  </li>
                  <li>
                    <span className="check" style={{ color: cardTheme.accent }}>✓</span> Clean typography
                  </li>
                  <li>
                    <span className="check" style={{ color: cardTheme.accent }}>✓</span> Sharp edges
                  </li>
                  <li>
                    <span className="check" style={{ color: cardTheme.accent }}>✓</span> Demo mockups only — your real design uses your logo + brand colors.
                  </li>
                </ul>
              </div>
            </div>

            <div className="panelFooter" style={{ color: cardTheme.sub }}>
              Selected: <span style={{ color: cardTheme.text, fontWeight: 700 }}>{finishLabel.title}</span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .page{
          min-height:100vh;
          background: radial-gradient(circle at 20% 0%, #0f2b4a 0%, #0b1426 55%, #070b14 100%);
          color:#eaf2ff;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
          padding: 18px 18px 40px;
        }

        .top{
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(10px);
          background: rgba(10, 15, 25, 0.55);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 16px;
          padding: 12px 14px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 12px;
        }

        .brandBlock{ display:flex; flex-direction:column; gap:2px; min-width: 220px; }
        .titleSmall{ font-weight: 800; letter-spacing: .2px; }
        .subtitleSmall{ font-size: 12px; color: rgba(234,242,255,0.65); }

        .topBtns{
          display:flex;
          gap:10px;
          flex-wrap: wrap; /* IMPORTANT: prevents overlap on phones */
          justify-content: flex-end;
        }

        .pill{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          color: #eaf2ff;
          text-decoration:none;
          font-weight: 700;
          white-space: nowrap;
        }
        .pill.primary{
          background: linear-gradient(135deg, rgba(46,180,255,0.95), rgba(0,210,170,0.95));
          color: #07111f;
          border: 0;
        }

        .hero{
          display:grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 18px;
          margin-top: 16px;
          align-items: start;
        }

        .heroLeft{
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.06);
          border-radius: 22px;
          padding: 22px;
        }

        .chips{ display:flex; flex-wrap:wrap; gap:10px; margin-bottom: 14px; }
        .chip{
          padding: 8px 12px;
          border-radius: 999px;
          font-weight: 700;
          font-size: 12px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          color: rgba(234,242,255,0.9);
          white-space: nowrap;
        }

        .h1{
          font-size: 56px;
          line-height: 1.02;
          margin: 0 0 12px;
          letter-spacing: -0.8px;
        }
        .accent{
          background: linear-gradient(135deg, #2eb4ff, #00d2aa);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .lead{
          margin: 0 0 18px;
          color: rgba(234,242,255,0.72);
          font-size: 16px;
          max-width: 56ch;
        }

        .ctaRow{
          display:flex;
          gap: 12px;
          flex-wrap: wrap; /* IMPORTANT: stacks nicely on phones */
          margin-bottom: 16px;
        }

        .btn{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 14px 18px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.06);
          color: #eaf2ff;
          text-decoration:none;
          font-weight: 800;
          letter-spacing: .2px;
          min-width: 180px;
          flex: 1 1 220px; /* IMPORTANT: stacks nicely on phones */
        }
        .btn.primary{
          background: linear-gradient(135deg, rgba(46,180,255,0.95), rgba(0,210,170,0.95));
          color: #07111f;
          border: 0;
        }

        .miniRow{
          display:flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .miniCard{
          flex: 1 1 180px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(0,0,0,0.12);
          border-radius: 16px;
          padding: 12px 12px;
        }
        .miniTop{ font-weight: 900; }
        .miniSub{ font-size: 12px; color: rgba(234,242,255,0.7); margin-top: 3px; }

        .heroRight{
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.06);
          border-radius: 22px;
          padding: 18px;
        }

        .panelTitle{ font-weight: 900; font-size: 16px; margin-bottom: 6px; }
        .panelNote{ font-size: 12px; color: rgba(234,242,255,0.65); margin-bottom: 12px; }

        .finishGrid{
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 12px;
        }
        .finishBtn{
          text-align:left;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(0,0,0,0.12);
          border-radius: 14px;
          padding: 12px;
          color: #eaf2ff;
          cursor: pointer;
        }
        .finishBtn.on{
          border-color: rgba(46,180,255,0.65);
          box-shadow: 0 0 0 1px rgba(46,180,255,0.25) inset;
        }
        .finishName{ font-weight: 900; margin-bottom: 4px; }
        .finishDesc{ font-size: 12px; color: rgba(234,242,255,0.65); }

        .uploadRow{
          display:flex;
          align-items:center;
          gap: 10px;
          flex-wrap: wrap;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(0,0,0,0.12);
          border-radius: 14px;
          padding: 10px 12px;
          cursor: pointer;
          margin-bottom: 12px;
        }
        .uploadBtn{
          font-weight: 900;
          background: linear-gradient(135deg, rgba(46,180,255,0.95), rgba(0,210,170,0.95));
          color: #07111f;
          border-radius: 999px;
          padding: 10px 14px;
          display:inline-flex;
          align-items:center;
          justify-content:center;
        }
        .uploadHint{ font-size: 12px; color: rgba(234,242,255,0.65); }
        .fileInput{ display:none; }

        .mockRow{
          display:grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .mockCard{
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 18px;
          padding: 14px;
          min-height: 260px;
        }
        .mockName{ font-weight: 1000; letter-spacing: .8px; }
        .mockRole{ font-size: 12px; margin-top: 2px; }
        .mockLines{ margin-top: 10px; display:flex; flex-direction:column; gap: 4px; }
        .mockLine{ font-size: 13px; }
        .logoBox{
          margin-top: 12px;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 14px;
          padding: 12px;
          min-height: 86px;
          display:flex;
          align-items:center;
          justify-content:center;
          overflow:hidden;
        }
        .logoImg{
          max-width: 100%;
          max-height: 70px;
          object-fit: contain;
          display:block;
        }
        .logoPlaceholder{ font-weight: 800; font-size: 12px; }

        .mockFoot{ margin-top: 10px; font-size: 12px; }

        .mockInfo{
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(0,0,0,0.12);
          border-radius: 18px;
          padding: 14px;
          min-height: 260px;
        }
        .mockInfoTitle{ font-weight: 1000; letter-spacing: .6px; }
        .mockInfoSub{ font-size: 12px; margin-top: 2px; }
        .checkList{ margin: 10px 0 0; padding-left: 18px; font-size: 12px; }
        .checkList li{ margin-bottom: 8px; }
        .check{ font-weight: 1000; margin-right: 6px; }

        .panelFooter{ margin-top: 12px; font-size: 12px; }

        /* MOBILE */
        @media (max-width: 980px){
          .hero{ grid-template-columns: 1fr; }
          .h1{ font-size: 44px; }
          .brandBlock{ min-width: 0; }
          .mockRow{ grid-template-columns: 1fr; }
          .finishGrid{ grid-template-columns: 1fr; }
        }

        @media (max-width: 520px){
          .page{ padding: 14px 14px 34px; }
          .h1{ font-size: 40px; }
          .top{ border-radius: 18px; }
          .topBtns{ justify-content: flex-start; }
          .pill{ width: 100%; justify-content: center; }
        }
      `}</style>
    </main>
  );
}