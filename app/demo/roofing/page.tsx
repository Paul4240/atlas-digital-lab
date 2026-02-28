"use client";

export default function RoofingDemoHome() {
  const SALES = "(832) 593-5740";
  const SALES_TEL = "tel:+18325935740";
  const OFFICE = "(832) 705-0313";
  const OFFICE_TEL = "tel:+18327050313";
  const EMAIL = "hello@atlasdigitallab.com";
  const EMAIL_LINK = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Roofing Demo - Free Estimate"
  )}&body=${encodeURIComponent(
    "Name:\nAddress/Area:\nPhone:\nType of service (repair/replacement/inspection):\nNotes:\n"
  )}`;

  return (
    <main className="container">
      <div className="topPill">Demo · Roofing · Pro ($799)</div>

      <h1 className="h1" style={{ fontSize: 50 }}>Houston Elite Roofing</h1>
      <p className="sub">
        Professional roofing services in Houston, TX — fast response, honest pricing, and clean workmanship.
      </p>

      <div className="heroGrid">
        <section className="card heroCard">
          <div className="kicker">Most Popular • $799 Build</div>

          <h2 style={{ margin: "10px 0 10px", fontSize: 32, letterSpacing: "-0.02em" }}>
            Get a free estimate today.
          </h2>

          <ul className="bullets">
            <li>Roof repair & leak detection</li>
            <li>Full roof replacement</li>
            <li>Storm damage inspection</li>
            <li>Insurance claim assistance</li>
          </ul>

          <div className="btnRow">
            <a className="btn btnPrimary" href={EMAIL_LINK}>Get a Free Estimate</a>
            <a className="btn" href={SALES_TEL}>Call Sales {SALES}</a>
            <a className="btn" href={OFFICE_TEL}>Call Office {OFFICE}</a>
          </div>

          <div className="pills">
            <div className="pill">
              <div className="pillTop">Same-week</div>
              <div className="pillSub">Inspections available</div>
            </div>
            <div className="pill">
              <div className="pillTop">Photos</div>
              <div className="pillSub">Before/after proof</div>
            </div>
            <div className="pill">
              <div className="pillTop">SEO</div>
              <div className="pillSub">Built to rank</div>
            </div>
          </div>
        </section>

        <aside className="card">
          <div className="cardInner">
            <h3 className="formTitle">Quick Request</h3>
            <p className="formSub">This demo uses “Email to Start” for simple lead capture.</p>

            <div className="field">
              <div className="label">Name</div>
              <input className="input" placeholder="Your name" />
            </div>

            <div className="field">
              <div className="label">Address / Area</div>
              <input className="input" placeholder="Neighborhood or zip" />
            </div>

            <div className="field">
              <div className="label">Phone</div>
              <input className="input" placeholder="(555) 555-5555" />
            </div>

            <div className="field">
              <div className="label">What do you need?</div>
              <textarea className="textarea" placeholder="Repair, replacement, inspection, storm damage..." />
            </div>

            <a className="btn btnPrimary" style={{ width: "100%" }} href={EMAIL_LINK}>
              Email Us To Start
            </a>

            <div className="smallNote">
              Want a call back? Sales:{" "}
              <a href={SALES_TEL} style={{ textDecoration: "underline" }}>{SALES}</a>{" "}
              · Office:{" "}
              <a href={OFFICE_TEL} style={{ textDecoration: "underline" }}>{OFFICE}</a>
            </div>
          </div>
        </aside>
      </div>

      <div className="sectionTitleRow">
        <h2 className="sectionTitle">Why choose us?</h2>
        <div className="sectionHint">Trust builders that convert</div>
      </div>

      <div className="demosGrid">
        <div className="card demoCard">
          <div className="demoTitle">Licensed & insured</div>
          <p className="demoText">Clear expectations, clean scope, and documentation.</p>
        </div>
        <div className="card demoCard">
          <div className="demoTitle">Fast response</div>
          <p className="demoText">Same-week inspections and quick estimates.</p>
        </div>
      </div>

      <div className="btnRow" style={{ marginTop: 18 }}>
        <a className="btn" href="/">Back to Atlas Digital Lab</a>
      </div>

      <footer className="footer">
        <div>Demo page for Atlas Digital Lab.</div>
        <div className="hiring">Now Hiring (part-time sales) — email hello@atlasdigitallab.com</div>
      </footer>
    </main>
  );
}