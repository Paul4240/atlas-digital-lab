"use client";

import React from "react";

export default function RoofingDemoHome() {
  return (
    <main className="page">
      <style>{`
        .page{
          min-height:100vh;
          background:
            radial-gradient(900px 500px at 15% 10%, rgba(59,130,246,0.18), transparent 60%),
            radial-gradient(800px 520px at 85% 20%, rgba(251,191,36,0.12), transparent 60%),
            #0b0f17;
          color:rgba(255,255,255,0.92);
          font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial;
          padding:32px 18px 70px;
        }
        .container{max-width:1100px;margin:0 auto;}
        .topbar{
          display:flex;align-items:center;justify-content:space-between;gap:12px;
          margin-bottom:18px;
        }
        .pill{
          display:inline-block;padding:6px 14px;border-radius:999px;
          border:1px solid rgba(255,255,255,0.18);
          background:rgba(255,255,255,0.06);
          font-size:13px;opacity:0.9;
        }
        .brand{
          display:flex;align-items:center;gap:10px;
          font-weight:950;letter-spacing:-0.2px;
        }
        .logo{
          width:34px;height:34px;border-radius:12px;
          background:linear-gradient(180deg, rgba(59,130,246,0.55), rgba(59,130,246,0.10));
          border:1px solid rgba(59,130,246,0.55);
          box-shadow:0 14px 40px rgba(0,0,0,0.45);
        }
        h1{
          font-size:46px;margin:0 0 10px 0;letter-spacing:-0.8px;line-height:1.05;
        }
        .sub{
          font-size:16px;line-height:1.6;max-width:760px;opacity:0.85;margin-bottom:18px;
        }
        .btnRow{display:flex;gap:10px;flex-wrap:wrap;margin-top:12px;}
        .btn{
          display:inline-block;padding:11px 16px;border-radius:14px;
          border:1px solid rgba(255,255,255,0.16);
          background:rgba(255,255,255,0.08);
          color:rgba(255,255,255,0.95);
          text-decoration:none;font-weight:850;letter-spacing:0.2px;
        }
        .btnPrimary{
          background:linear-gradient(180deg, rgba(59,130,246,0.40), rgba(59,130,246,0.16));
          border:1px solid rgba(59,130,246,0.60);
        }
        .btnGold{
          background:linear-gradient(180deg, rgba(251,191,36,0.26), rgba(251,191,36,0.10));
          border:1px solid rgba(251,191,36,0.55);
        }
        .grid{
          display:grid;grid-template-columns:1.15fr 0.85fr;gap:16px;
          margin-top:16px;align-items:start;
        }
        .card{
          background:rgba(255,255,255,0.06);
          border:1px solid rgba(255,255,255,0.10);
          border-radius:20px;padding:20px;
          box-shadow:0 18px 50px rgba(0,0,0,0.45);
          backdrop-filter: blur(10px);
        }
        .cardTitle{font-size:18px;margin:0 0 10px 0;}
        .muted{opacity:0.82;font-size:13px;line-height:1.55;}
        .list{margin:10px 0 0 18px;line-height:1.75;opacity:0.92;}
        .mini{
          display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:14px;
        }
        .stat{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.10);
          border-radius:16px;padding:12px;
        }
        .statTop{font-weight:950;font-size:14px;margin-bottom:4px;}
        .statSub{font-size:12px;opacity:0.78;}
        .divider{height:1px;background:rgba(255,255,255,0.12);margin:14px 0;}
        .badge{
          display:inline-block;
          font-size:12px;font-weight:950;
          padding:6px 10px;border-radius:999px;
          background:rgba(59,130,246,0.20);
          border:1px solid rgba(59,130,246,0.55);
          margin-bottom:10px;
        }
        .highlight{
          border:1px solid rgba(59,130,246,0.75);
          box-shadow:0 0 0 2px rgba(59,130,246,0.20), 0 22px 60px rgba(0,0,0,0.55);
          background:linear-gradient(180deg, rgba(59,130,246,0.14), rgba(255,255,255,0.06));
        }
        .twoCol{
          display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:14px;
        }
        .fine{font-size:12px;opacity:0.70;line-height:1.5;margin-top:10px;}
        .footer{
          margin-top:26px;font-size:12px;opacity:0.65;text-align:center;line-height:1.6;
        }

        /* ✅ MOBILE */
        @media (max-width: 900px){
          .grid{grid-template-columns:1fr;}
          h1{font-size:40px;}
        }
        @media (max-width: 520px){
          .page{padding:22px 14px 60px;}
          h1{font-size:34px;}
          .btnRow{flex-direction:column;}
          .btn{width:100%;text-align:center;}
          .mini{grid-template-columns:1fr;}
          .twoCol{grid-template-columns:1fr;}
        }
      `}</style>

      <div className="container">
        {/* Top */}
        <div className="topbar">
          <div className="brand">
            <div className="logo" />
            <div>Roofing Demo</div>
          </div>
          <div className="pill">Houston · Storm Damage · Insurance Help</div>
        </div>

        {/* Hero */}
        <h1>Houston Elite Roofing</h1>
        <div className="sub">
          Premium roofing service demo page — built to convert. Clean layout, strong trust signals,
          and clear calls-to-action.
        </div>

        <div className="btnRow">
          <a className="btn btnPrimary" href="/demo/roofing/contact">
            Get a Free Estimate
          </a>
          <a className="btn" href="tel:+18327050313">
            Call Office (832) 705-0313
          </a>
          <a className="btn btnGold" href="tel:+18325935740">
            Call Sales (832) 593-5740
          </a>
        </div>

        {/* Main grid */}
        <div className="grid">
          {/* Left */}
          <div className="card">
            <div className="badge">Most Popular · $799 Build</div>
            <h2 className="cardTitle">What this demo includes</h2>
            <div className="muted">
              This is the kind of website we build for roofing companies — designed to look legit and generate leads.
            </div>

            <ul className="list">
              <li>Mobile-first design that looks premium</li>
              <li>Fast load speed + basic local SEO structure</li>
              <li>Service sections built for conversions</li>
              <li>Strong trust signals: licensing, insurance, reviews</li>
              <li>Easy contact: call buttons + estimate form</li>
            </ul>

            <div className="mini">
              <div className="stat">
                <div className="statTop">Same-week</div>
                <div className="statSub">Inspections available</div>
              </div>
              <div className="stat">
                <div className="statTop">Photos</div>
                <div className="statSub">Before/after proof</div>
              </div>
              <div className="stat">
                <div className="statTop">Local SEO</div>
                <div className="statSub">Built to rank</div>
              </div>
            </div>

            <div className="divider" />

            <h2 className="cardTitle">Services</h2>
            <div className="twoCol">
              <div className="card" style={{ padding: 16 }}>
                <div style={{ fontWeight: 950, marginBottom: 6 }}>Roof Repair</div>
                <div className="muted">Leak fixes, flashing, vents, missing shingles, and quick patches.</div>
              </div>
              <div className="card" style={{ padding: 16 }}>
                <div style={{ fontWeight: 950, marginBottom: 6 }}>Full Replacement</div>
                <div className="muted">Complete tear-off + install with clean lines and warranty-ready work.</div>
              </div>
              <div className="card" style={{ padding: 16 }}>
                <div style={{ fontWeight: 950, marginBottom: 6 }}>Storm Damage</div>
                <div className="muted">Wind + hail inspections with photo documentation.</div>
              </div>
              <div className="card" style={{ padding: 16 }}>
                <div style={{ fontWeight: 950, marginBottom: 6 }}>Insurance Help</div>
                <div className="muted">Claim support + supplement guidance (demo wording).</div>
              </div>
            </div>

            <div className="fine">
              Demo note: The “Sales” number is your temporary sales line. The office number stays yours.
            </div>
          </div>

          {/* Right */}
          <div className="card highlight">
            <h2 className="cardTitle">Get a free estimate</h2>
            <div className="muted">
              This form is a demo layout. You can wire it to email / CRM later.
            </div>

            <label style={{ display: "block", marginTop: 12, fontSize: 13, opacity: 0.9 }}>
              Name
              <input
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.92)",
                  marginTop: 8,
                  boxSizing: "border-box",
                }}
                placeholder="Your name"
              />
            </label>

            <label style={{ display: "block", marginTop: 10, fontSize: 13, opacity: 0.9 }}>
              Address / Zip
              <input
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.92)",
                  marginTop: 8,
                  boxSizing: "border-box",
                }}
                placeholder="Houston, TX 770xx"
              />
            </label>

            <label style={{ display: "block", marginTop: 10, fontSize: 13, opacity: 0.9 }}>
              Phone (optional)
              <input
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.92)",
                  marginTop: 8,
                  boxSizing: "border-box",
                }}
                placeholder="(555) 555-5555"
              />
            </label>

            <label style={{ display: "block", marginTop: 10, fontSize: 13, opacity: 0.9 }}>
              What do you need?
              <textarea
                style={{
                  width: "100%",
                  minHeight: 120,
                  padding: "12px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.06)",
                  color: "rgba(255,255,255,0.92)",
                  marginTop: 8,
                  boxSizing: "border-box",
                  resize: "vertical",
                }}
                placeholder="Leak repair, replacement, storm damage, insurance claim, etc."
              />
            </label>

            <a
              className="btn btnPrimary"
              style={{ display: "block", textAlign: "center", marginTop: 12 }}
              href="mailto:hello@atlasdigitallab.com?subject=Roofing%20Estimate%20Request"
            >
              Email Us To Start
            </a>

            <div className="divider" />

            <h3 style={{ margin: "0 0 8px 0" }}>Trust signals</h3>
            <ul className="list">
              <li>Licensed & Insured (demo)</li>
              <li>Photo documentation provided</li>
              <li>Fast response times</li>
              <li>Clear scope + clean workmanship</li>
            </ul>
          </div>
        </div>

        <div className="footer">
          Demo site for Atlas Digital Lab · Roofing niche
          <div style={{ marginTop: 6, opacity: 0.55 }}>
            © 2026 Atlas Digital Lab. All rights reserved.
          </div>
        </div>
      </div>
    </main>
  );
}