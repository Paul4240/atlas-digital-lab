"use client";

import React, { useMemo, useRef, useState } from "react";

type Finish = "black" | "gold" | "rose" | "silver";

export default function MetalCardsDemo() {
  const [finish, setFinish] = useState<Finish>("black");
  const [logoDataUrl, setLogoDataUrl] = useState<string | null>(null);
  const [logoName, setLogoName] = useState<string>("");
  const [selectedPlan, setSelectedPlan] = useState<"starter" | "pro" | "elite">("pro");

  const fileRef = useRef<HTMLInputElement | null>(null);

  const phone = "(832) 593-5740";
  const salesEmail = "hello@atlasdigitallab.com";

  const finishConfig = useMemo(() => {
    const map: Record<Finish, any> = {
      black: {
        label: "Black",
        note: "Bold, high contrast, luxury vibe.",
        dot: "#0B0F14",
        cardBg:
          "linear-gradient(135deg, rgba(10,14,20,1) 0%, rgba(25,30,45,1) 45%, rgba(8,10,14,1) 100%)",
        sheen:
          "radial-gradient(circle at 20% 10%, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0) 55%)",
        edge: "linear-gradient(90deg, rgba(255,255,255,0.25), rgba(255,255,255,0))",
        accent: "#7DD3FC",
      },
      gold: {
        label: "Gold",
        note: "Premium look for high-ticket brands.",
        dot: "#D6B66B",
        cardBg:
          "linear-gradient(135deg, rgba(33,27,18,1) 0%, rgba(68,51,22,1) 45%, rgba(20,16,12,1) 100%)",
        sheen:
          "radial-gradient(circle at 25% 15%, rgba(255,224,140,0.22) 0%, rgba(255,224,140,0) 55%)",
        edge: "linear-gradient(90deg, rgba(255,214,140,0.35), rgba(255,255,255,0))",
        accent: "#FDE68A",
      },
      rose: {
        label: "Rose Gold",
        note: "Modern + classy, perfect for creative work.",
        dot: "#E7A2A2",
        cardBg:
          "linear-gradient(135deg, rgba(30,18,22,1) 0%, rgba(70,30,42,1) 45%, rgba(18,12,14,1) 100%)",
        sheen:
          "radial-gradient(circle at 25% 15%, rgba(255,195,210,0.22) 0%, rgba(255,195,210,0) 55%)",
        edge: "linear-gradient(90deg, rgba(255,195,210,0.33), rgba(255,255,255,0))",
        accent: "#FBCFE8",
      },
      silver: {
        label: "Silver",
        note: "Clean and professional. Brushed feel.",
        dot: "#BFC7D1",
        cardBg:
          "linear-gradient(135deg, rgba(16,20,26,1) 0%, rgba(26,34,44,1) 45%, rgba(14,18,24,1) 100%)",
        sheen:
          "radial-gradient(circle at 25% 15%, rgba(210,230,255,0.18) 0%, rgba(210,230,255,0) 55%)",
        edge: "linear-gradient(90deg, rgba(210,230,255,0.28), rgba(255,255,255,0))",
        accent: "#C7D2FE",
      },
    };

    return map[finish];
  }, [finish]);

  const planDetails = useMemo(() => {
    return {
      starter: {
        title: "Starter",
        price: "$299",
        sub: "100 cards • Single-sided",
        bullets: ["Simple layout", "Basic engraving/etch", "Clean typography", "Standard turnaround"],
      },
      pro: {
        title: "Pro",
        price: "$499",
        sub: "200 cards • Double-sided • QR option",
        bullets: ["Double-sided layout", "Premium finish options", "QR code option", "Priority turnaround"],
      },
      elite: {
        title: "Elite",
        price: "$799",
        sub: "300 cards • Custom branding",
        bullets: ["Premium custom layout", "QR + “scan to save” concept", "Brand-style polish", "Fastest turnaround"],
      },
    } as const;
  }, []);

  function openFilePicker() {
    fileRef.current?.click();
  }

  function onPickLogo(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // accept images only
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file (PNG/JPG/SVG).");
      return;
    }

    setLogoName(file.name);

    const reader = new FileReader();
    reader.onload = () => {
      setLogoDataUrl(String(reader.result));
    };
    reader.readAsDataURL(file);
  }

  const selected = planDetails[selectedPlan];

  return (
    <div className="page">
      {/* Top bar */}
      <header className="topbar">
        <div className="topbarInner">
          <div className="brand">
            <div className="brandDot" />
            <div className="brandText">
              <div className="brandTitle">Metal Business Cards Demo</div>
              <div className="brandSub">Premium engraved + laser-cut cards</div>
            </div>
          </div>

          <nav className="nav">
            <a className="navPill" href="#pricing">
              Pricing
            </a>
            <a className="navPill" href="#process">
              Process
            </a>
            <a className="navCta" href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
              Call/Text {phone}
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="container">
        <section className="hero">
          <div className="heroLeft">
            <div className="pillRow">
              <span className="pill">Premium Look</span>
              <span className="pillGhost">Fast turnaround</span>
              <span className="pillGhost">Crisp detail</span>
              <span className="pillGhost">Strong first impression</span>
            </div>

            <h1 className="h1">
              Make your first impression
              <br />
              feel expensive.
            </h1>

            <p className="lead">
              Metal business cards that people keep. Deep engraving or laser etch, clean typography, and premium finishes — designed to look
              high-end and convert conversations into customers.
            </p>

            <div className="ctaRow">
              <a className="btnPrimary" href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
                Text/Call to Order
              </a>
              <a className="btnSecondary" href={`mailto:${salesEmail}`}>
                Email for a Quote
              </a>
            </div>

            <div className="miniStats">
              <div className="miniStat">
                <div className="miniTop">1–3 Days</div>
                <div className="miniBot">Typical proof + production start</div>
              </div>
              <div className="miniStat">
                <div className="miniTop">Premium Finish</div>
                <div className="miniBot">Matte / gloss / brushed look</div>
              </div>
              <div className="miniStat">
                <div className="miniTop">High Detail</div>
                <div className="miniBot">Tiny text stays sharp</div>
              </div>
            </div>
          </div>

          <div className="heroRight">
            {/* Finish chooser */}
            <div className="panel">
              <div className="panelTitle">Choose a finish</div>
              <div className="panelSub">
                This changes the demo mockups below so it feels like a real product page <span className="muted">(not a service page)</span>.
              </div>

              <div className="finishGrid">
                {(["black", "gold", "rose", "silver"] as Finish[]).map((k) => {
                  const cfg =
                    k === "black"
                      ? { dot: "#0B0F14", label: "Black", note: "Bold, high contrast, luxury vibe." }
                      : k === "gold"
                      ? { dot: "#D6B66B", label: "Gold", note: "Premium look for high-ticket brands." }
                      : k === "rose"
                      ? { dot: "#E7A2A2", label: "Rose Gold", note: "Modern + classy, creative work." }
                      : { dot: "#BFC7D1", label: "Silver", note: "Clean and professional. Brushed." };

                  const active = finish === k;

                  return (
                    <button key={k} className={`finishCard ${active ? "active" : ""}`} onClick={() => setFinish(k)} type="button">
                      <div className="finishTop">
                        <div className="finishName">{cfg.label}</div>
                        <div className="finishDot" style={{ background: cfg.dot }} />
                      </div>
                      <div className="finishNote">{cfg.note}</div>
                    </button>
                  );
                })}
              </div>

              {/* Upload + preview */}
              <div className="uploadRow">
                <input ref={fileRef} type="file" accept="image/*" onChange={onPickLogo} style={{ display: "none" }} />
                <button className="btnSmall" onClick={openFilePicker} type="button">
                  Upload Your Logo
                </button>
                <div className="fileName">{logoName ? logoName : "PNG/JPG/SVG"}</div>
              </div>

              <div className="mockGrid">
                <div className="mockCard">
                  <div className="mockTop">
                    <div className="mockName">JORDAN MILLER</div>
                    <div className="mockRole">Owner • Custom Metal Cards</div>
                  </div>

                  <div className="mockBody">
                    <div className="mockLine">{phone}</div>
                    <div className="mockLine">{salesEmail}</div>
                    <div className="mockLine muted">brand.com • Houston, TX</div>
                  </div>

                  <div className="mockLogo">
                    {logoDataUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={logoDataUrl} alt="Uploaded logo" />
                    ) : (
                      <div className="mockLogoPlaceholder">Your logo here</div>
                    )}
                  </div>

                  <div className="mockSheen" />
                  <div className="mockEdge" />
                </div>

                <div className="infoCard">
                  <div className="infoTitle">SCAN TO SAVE</div>
                  <div className="infoSub">QR + vCard ready</div>
                  <div className="infoList">
                    <div className="infoItem">
                      <span className="check">✓</span> QR Code • NFC Option
                    </div>
                    <div className="infoItem">
                      <span className="check">✓</span> Clean typography
                    </div>
                    <div className="infoItem">
                      <span className="check">✓</span> Sharp edges
                    </div>
                  </div>
                  <div className="tiny muted">Demo mockups only — your real design uses your logo + brand colors.</div>
                </div>
              </div>

              <div className="tiny muted">Designed to feel premium.</div>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="section" id="process">
          <div className="sectionTitle">What you get</div>
          <div className="sectionSub">
            This demo is built like a product brand: finishes, mockups, features, packages, and a clear ordering path. It feels “worth it.”
          </div>

          <div className="featureRow">
            <div className="feature">
              <div className="featureTop">Deep Engraving</div>
              <div className="featureSub">Clean lines, sharp corners, readable tiny text.</div>
            </div>
            <div className="feature">
              <div className="featureTop">Premium Finishes</div>
              <div className="featureSub">Black, gold, rose gold, silver — modern vibe.</div>
            </div>
            <div className="feature">
              <div className="featureTop">Proof Included</div>
              <div className="featureSub">We send a digital proof before production starts.</div>
            </div>
            <div className="feature">
              <div className="featureTop">Fast Turnaround</div>
              <div className="featureSub">Simple process: choose package → approve → produce.</div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section" id="pricing">
          <div className="sectionTitle">Packages</div>
          <div className="sectionSub">Pick the package that matches the “first impression” you want. This is demo pricing — we can change it later.</div>

          <div className="pricingGrid">
            {(["starter", "pro", "elite"] as const).map((p) => {
              const d = planDetails[p];
              const active = selectedPlan === p;

              return (
                <button
                  key={p}
                  className={`priceCard ${active ? "active" : ""}`}
                  onClick={() => setSelectedPlan(p)}
                  type="button"
                >
                  <div className="priceTopRow">
                    <div className="priceName">{d.title}</div>
                    {p === "pro" ? <div className="badge">Most Popular</div> : <div className="badge ghost" />}
                  </div>

                  <div className="priceValue">{d.price}</div>
                  <div className="priceSub">{d.sub}</div>

                  <ul className="priceList">
                    {d.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  <div className={`priceBtn ${active ? "active" : ""}`}>Select {d.title}</div>
                </button>
              );
            })}
          </div>

          <div className="summary">
            <div className="summaryLeft">
              <div className="summaryTitle">Selected: {selected.title}</div>
              <div className="summarySub">
                Finish: <span className="accent">{finishConfig.label}</span> • Package: <span className="accent">{selected.price}</span>
              </div>
            </div>

            <div className="summaryRight">
              <a className="btnPrimary" href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
                Text/Call {phone}
              </a>
              <a className="btnSecondary" href={`mailto:${salesEmail}`}>
                Email a Quote Request
              </a>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section">
          <div className="sectionTitle">How it works</div>
          <div className="sectionSub">This keeps it professional and removes friction — exactly what a real product site does.</div>

          <div className="steps">
            <div className="step">
              <div className="stepNum">1</div>
              <div className="stepBody">
                <div className="stepTitle">Pick a package</div>
                <div className="stepSub">Choose quantity + finish. Tell us your name/title/logo and contact info.</div>
              </div>
            </div>

            <div className="step">
              <div className="stepNum">2</div>
              <div className="stepBody">
                <div className="stepTitle">Approve your proof</div>
                <div className="stepSub">We send a clean proof. You approve it, then production starts.</div>
              </div>
            </div>

            <div className="step">
              <div className="stepNum">3</div>
              <div className="stepBody">
                <div className="stepTitle">Delivered fast</div>
                <div className="stepSub">Your metal cards ship ready to impress. People keep them.</div>
              </div>
            </div>
          </div>

          <div className="contactBar">
            <a className="btnPrimary" href={`tel:${phone.replace(/[^\d+]/g, "")}`}>
              Text/Call {phone}
            </a>
            <a className="btnSecondary" href={`mailto:${salesEmail}`}>
              Email: {salesEmail}
            </a>
          </div>
        </section>

        <footer className="footer">
          <div className="footerLeft">
            <span className="muted">Demo Contact:</span> <b>{phone}</b> • <b>{salesEmail}</b>
          </div>
          <div className="footerRight muted">© {new Date().getFullYear()} Atlas Digital Lab • Demo</div>
        </footer>
      </main>

      {/* Plain <style> (no jsx prop) so TypeScript won’t freak out */}
      <style>{`
        :root {
          --bgA: #0b1020;
          --bgB: #070a10;
          --card: rgba(255,255,255,0.06);
          --card2: rgba(255,255,255,0.08);
          --line: rgba(255,255,255,0.10);
          --text: rgba(255,255,255,0.92);
          --muted: rgba(255,255,255,0.62);
          --muted2: rgba(255,255,255,0.45);
          --shadow: 0 18px 50px rgba(0,0,0,0.45);
          --shadow2: 0 10px 24px rgba(0,0,0,0.35);
        }

        .page {
          min-height: 100vh;
          color: var(--text);
          background:
            radial-gradient(circle at 20% 10%, rgba(32,58,140,0.32) 0%, rgba(0,0,0,0) 40%),
            radial-gradient(circle at 75% 20%, rgba(0,212,255,0.20) 0%, rgba(0,0,0,0) 45%),
            radial-gradient(circle at 50% 100%, rgba(122,92,255,0.14) 0%, rgba(0,0,0,0) 55%),
            linear-gradient(180deg, var(--bgA), var(--bgB));
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Apple Color Emoji","Segoe UI Emoji";
        }

        .topbar {
          position: sticky;
          top: 0;
          z-index: 20;
          backdrop-filter: blur(10px);
          background: rgba(5,7,10,0.55);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .topbarInner {
          max-width: 1180px;
          margin: 0 auto;
          padding: 14px 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 260px;
        }

        .brandDot {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(125,211,252,1), rgba(167,139,250,1));
          box-shadow: 0 0 0 3px rgba(125,211,252,0.15);
        }

        .brandTitle {
          font-weight: 800;
          letter-spacing: 0.2px;
          font-size: 14px;
          line-height: 1.1;
        }

        .brandSub {
          font-size: 12px;
          color: var(--muted);
          line-height: 1.1;
          margin-top: 2px;
        }

        .nav {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }

        .navPill {
          color: var(--text);
          text-decoration: none;
          font-size: 13px;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.04);
        }

        .navPill:hover { background: rgba(255,255,255,0.07); }

        .navCta {
          color: rgba(0,0,0,0.92);
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          padding: 9px 12px;
          border-radius: 999px;
          background: linear-gradient(135deg, rgba(125,211,252,1), rgba(167,139,250,1));
          box-shadow: 0 10px 20px rgba(0,0,0,0.35);
        }

        .container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 28px 22px 60px;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.12fr 0.88fr;
          gap: 26px;
          align-items: start;
          margin-top: 10px;
        }

        .pillRow { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 16px; }

        .pill {
          font-size: 12px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(16,185,129,0.18);
          border: 1px solid rgba(16,185,129,0.22);
          color: rgba(209,250,229,0.95);
          font-weight: 700;
        }

        .pillGhost {
          font-size: 12px;
          padding: 7px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          color: var(--muted);
          font-weight: 600;
        }

        .h1 {
          font-size: 56px;
          line-height: 1.02;
          letter-spacing: -0.8px;
          margin: 0 0 14px 0;
          text-shadow: 0 16px 42px rgba(0,0,0,0.35);
        }

        .lead {
          margin: 0 0 18px 0;
          color: rgba(255,255,255,0.78);
          font-size: 16px;
          line-height: 1.6;
          max-width: 560px;
        }

        .ctaRow { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 16px; }

        .btnPrimary, .btnSecondary, .btnSmall {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          text-decoration: none;
          cursor: pointer;
          border: 1px solid transparent;
          transition: transform .15s ease, background .15s ease, border-color .15s ease, filter .15s ease;
          user-select: none;
        }

        .btnPrimary {
          padding: 12px 14px;
          font-weight: 900;
          color: rgba(0,0,0,0.92);
          background: linear-gradient(135deg, rgba(125,211,252,1), rgba(167,139,250,1));
          box-shadow: var(--shadow2);
        }
        .btnPrimary:hover { transform: translateY(-1px); filter: brightness(1.03); }

        .btnSecondary {
          padding: 12px 14px;
          font-weight: 800;
          color: var(--text);
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.12);
        }
        .btnSecondary:hover { transform: translateY(-1px); background: rgba(255,255,255,0.09); }

        .btnSmall {
          padding: 10px 12px;
          font-weight: 900;
          color: rgba(0,0,0,0.92);
          background: linear-gradient(135deg, rgba(125,211,252,0.95), rgba(34,211,238,0.95));
          box-shadow: 0 10px 18px rgba(0,0,0,0.28);
        }
        .btnSmall:hover { transform: translateY(-1px); filter: brightness(1.03); }

        .miniStats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          max-width: 680px;
        }

        .miniStat {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 14px;
          padding: 12px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.18);
        }
        .miniTop { font-weight: 900; font-size: 13px; margin-bottom: 4px; }
        .miniBot { font-size: 12px; color: var(--muted); line-height: 1.3; }

        .panel {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 18px;
          padding: 16px;
          box-shadow: var(--shadow);
        }

        .panelTitle { font-size: 14px; font-weight: 900; margin-bottom: 6px; }
        .panelSub { font-size: 12px; color: var(--muted); margin-bottom: 12px; line-height: 1.4; }
        .muted { color: var(--muted2); }

        .finishGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin-bottom: 12px;
        }

        .finishCard {
          text-align: left;
          padding: 12px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.04);
          cursor: pointer;
          transition: transform .15s ease, background .15s ease, border-color .15s ease;
          color: var(--text);
        }
        .finishCard:hover { transform: translateY(-1px); background: rgba(255,255,255,0.07); }
        .finishCard.active { border-color: rgba(125,211,252,0.55); background: rgba(125,211,252,0.08); }

        .finishTop { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 6px; }
        .finishName { font-weight: 900; font-size: 13px; }
        .finishDot { width: 10px; height: 10px; border-radius: 999px; box-shadow: 0 0 0 3px rgba(255,255,255,0.06); }
        .finishNote { font-size: 12px; color: var(--muted); line-height: 1.35; }

        .uploadRow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 10px 0 14px;
        }

        .fileName { font-size: 12px; color: var(--muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

        .mockGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 10px;
        }

        .mockCard {
          position: relative;
          border-radius: 16px;
          padding: 14px;
          min-height: 210px;
          overflow: hidden;
          background: ${finishConfig.cardBg};
          border: 1px solid rgba(255,255,255,0.14);
          box-shadow: 0 20px 50px rgba(0,0,0,0.45);
          transform: translateZ(0);
        }

        .mockSheen {
          position: absolute;
          inset: 0;
          background: ${finishConfig.sheen};
          pointer-events: none;
        }

        .mockEdge {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.35);
          pointer-events: none;
        }

        .mockTop { margin-bottom: 10px; }
        .mockName { font-weight: 900; letter-spacing: 0.3px; font-size: 12px; }
        .mockRole { color: rgba(255,255,255,0.68); font-size: 11px; margin-top: 2px; }

        .mockBody { margin-top: 14px; }
        .mockLine { font-size: 12px; color: rgba(255,255,255,0.82); margin: 4px 0; }
        .mockLine.muted { color: rgba(255,255,255,0.60); }

        .mockLogo {
          position: absolute;
          right: 12px;
          bottom: 12px;
          width: 86px;
          height: 56px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(0,0,0,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .mockLogo img { width: 100%; height: 100%; object-fit: contain; padding: 8px; filter: drop-shadow(0 8px 14px rgba(0,0,0,0.5)); }
        .mockLogoPlaceholder { font-size: 11px; color: rgba(255,255,255,0.55); }

        .infoCard {
          border-radius: 16px;
          padding: 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 14px 34px rgba(0,0,0,0.25);
        }

        .infoTitle { font-weight: 900; font-size: 12px; letter-spacing: 0.6px; }
        .infoSub { color: rgba(255,255,255,0.72); font-size: 12px; margin-top: 4px; }
        .infoList { margin-top: 10px; display: grid; gap: 8px; }
        .infoItem { font-size: 12px; color: rgba(255,255,255,0.74); }
        .check { color: rgba(34,211,238,0.95); font-weight: 900; margin-right: 6px; }

        .tiny { font-size: 11px; }

        .section { margin-top: 30px; }
        .sectionTitle { font-size: 18px; font-weight: 900; margin-bottom: 6px; }
        .sectionSub { font-size: 13px; color: var(--muted); line-height: 1.45; margin-bottom: 14px; }

        .featureRow {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }

        .feature {
          border-radius: 16px;
          padding: 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 14px 34px rgba(0,0,0,0.20);
        }
        .featureTop { font-weight: 900; font-size: 13px; margin-bottom: 6px; }
        .featureSub { font-size: 12px; color: var(--muted); line-height: 1.4; }

        .pricingGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .priceCard {
          text-align: left;
          border-radius: 18px;
          padding: 16px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 16px 42px rgba(0,0,0,0.25);
          cursor: pointer;
          transition: transform .15s ease, background .15s ease, border-color .15s ease;
          color: var(--text);
        }
        .priceCard:hover { transform: translateY(-2px); background: rgba(255,255,255,0.07); }
        .priceCard.active {
          border-color: rgba(125,211,252,0.55);
          background: rgba(125,211,252,0.08);
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
        }

        .priceTopRow { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
        .priceName { font-weight: 900; font-size: 14px; }
        .badge {
          font-size: 11px;
          font-weight: 900;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(125,211,252,0.18);
          border: 1px solid rgba(125,211,252,0.28);
          color: rgba(219,234,254,0.96);
        }
        .badge.ghost { opacity: 0; }

        .priceValue { font-size: 42px; font-weight: 950; letter-spacing: -0.6px; margin: 8px 0 2px; }
        .priceSub { font-size: 12px; color: var(--muted); margin-bottom: 10px; }

        .priceList { margin: 0; padding-left: 18px; color: rgba(255,255,255,0.75); font-size: 12px; line-height: 1.5; }
        .priceBtn {
          margin-top: 12px;
          text-align: center;
          padding: 12px 12px;
          border-radius: 14px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.12);
          font-weight: 900;
          font-size: 13px;
        }
        .priceBtn.active {
          background: linear-gradient(135deg, rgba(125,211,252,1), rgba(167,139,250,1));
          color: rgba(0,0,0,0.92);
          border-color: transparent;
        }

        .summary {
          margin-top: 12px;
          border-radius: 18px;
          padding: 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.10);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .summaryTitle { font-weight: 900; }
        .summarySub { font-size: 12px; color: var(--muted); margin-top: 2px; }
        .accent { color: ${finishConfig.accent}; font-weight: 900; }

        .summaryRight { display: flex; gap: 10px; flex-wrap: wrap; }

        .steps {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        .step {
          border-radius: 18px;
          padding: 14px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.10);
          box-shadow: 0 16px 42px rgba(0,0,0,0.20);
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }
        .stepNum {
          width: 28px;
          height: 28px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 950;
          color: rgba(0,0,0,0.92);
          background: linear-gradient(135deg, rgba(125,211,252,1), rgba(167,139,250,1));
          flex: 0 0 auto;
        }
        .stepTitle { font-weight: 900; margin-bottom: 4px; }
        .stepSub { font-size: 12px; color: var(--muted); line-height: 1.45; }

        .contactBar {
          margin-top: 14px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .footer {
          margin-top: 26px;
          padding-top: 14px;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* Responsive */
        @media (max-width: 980px) {
          .hero { grid-template-columns: 1fr; }
          .h1 { font-size: 46px; }
          .featureRow { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .pricingGrid { grid-template-columns: 1fr; }
          .steps { grid-template-columns: 1fr; }
          .mockGrid { grid-template-columns: 1fr; }
          .miniStats { grid-template-columns: 1fr; }
        }

        @media (max-width: 520px) {
          .h1 { font-size: 36px; }
          .finishGrid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}