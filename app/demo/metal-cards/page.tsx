"use client";

export default function MetalCardsDemo() {
  const SALES = "(832) 593-5740";
  const SALES_TEL = "tel:+18325935740";
  const OFFICE = "(832) 705-0313";
  const OFFICE_TEL = "tel:+18327050313";
  const EMAIL = "hello@atlasdigitallab.com";
  const EMAIL_LINK = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Metal Cards Demo - Quote Request"
  )}&body=${encodeURIComponent(
    "Name:\nBusiness:\nPhone:\nQuantity:\nCard finish (matte/gloss/brushed):\nEngraving details:\n"
  )}`;

  return (
    <main className="container">
      <div className="topPill">Demo · Metal Business Cards · Elite ($1,200)</div>

      <h1 className="h1" style={{ fontSize: 50 }}>Premium Metal Business Cards</h1>
      <p className="sub">
        A high-end product demo built to sell. Clean layout, strong CTA, and a premium feel.
      </p>

      <div className="heroGrid">
        <section className="card heroCard">
          <div className="kicker">Premium Option • $1,200 Build</div>

          <h2 style={{ margin: "10px 0 10px", fontSize: 32, letterSpacing: "-0.02em" }}>
            Make a first impression they don’t forget.
          </h2>

          <ul className="bullets">
            <li>Laser engraving / deep etch options</li>
            <li>Matte, brushed, and premium finishes</li>
            <li>QR codes + custom layouts</li>
            <li>Built for conversions with product-style sections</li>
          </ul>

          <div className="btnRow">
            <a className="btn btnPrimary" href={EMAIL_LINK}>Request a Quote</a>
            <a className="btn" href={SALES_TEL}>Call Sales {SALES}</a>
            <a className="btn" href={OFFICE_TEL}>Call Office {OFFICE}</a>
          </div>

          <div className="pills">
            <div className="pill">
              <div className="pillTop">Premium</div>
              <div className="pillSub">Product-style layout</div>
            </div>
            <div className="pill">
              <div className="pillTop">Fast</div>
              <div className="pillSub">Quick quote workflow</div>
            </div>
            <div className="pill">
              <div className="pillTop">Brand</div>
              <div className="pillSub">Strong positioning</div>
            </div>
          </div>
        </section>

        <aside className="card">
          <div className="cardInner">
            <h3 className="formTitle">Quick Quote</h3>
            <p className="formSub">Simple lead capture for a premium product.</p>

            <div className="field">
              <div className="label">Name</div>
              <input className="input" placeholder="Your name" />
            </div>

            <div className="field">
              <div className="label">Business</div>
              <input className="input" placeholder="Business name" />
            </div>

            <div className="field">
              <div className="label">Phone (optional)</div>
              <input className="input" placeholder="(555) 555-5555" />
            </div>

            <div className="field">
              <div className="label">What do you need?</div>
              <textarea className="textarea" placeholder="Quantity, finish, engraving details..." />
            </div>

            <a className="btn btnPrimary" style={{ width: "100%" }} href={EMAIL_LINK}>
              Email Us To Start
            </a>

            <div className="smallNote">
              Sales: <a href={SALES_TEL} style={{ textDecoration: "underline" }}>{SALES}</a> · Office:{" "}
              <a href={OFFICE_TEL} style={{ textDecoration: "underline" }}>{OFFICE}</a>
            </div>
          </div>
        </aside>
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