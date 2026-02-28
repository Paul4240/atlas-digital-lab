"use client";

export default function Home() {
  const SALES = "(832) 593-5740";
  const SALES_TEL = "tel:+18325935740";
  const OFFICE = "(832) 705-0313";
  const OFFICE_TEL = "tel:+18327050313";
  const EMAIL = "hello@atlasdigitallab.com";
  const EMAIL_LINK = `mailto:${EMAIL}?subject=${encodeURIComponent(
    "Free Quote - Atlas Digital Lab"
  )}&body=${encodeURIComponent(
    "Name:\nBusiness name:\nPhone:\nWhat do you need? (website, updates, redesign, SEO, etc.):\n"
  )}`;

  return (
    <main className="container">
      <div className="topPill">Houston · Small Business Websites</div>

      <h1 className="h1">Atlas Digital Lab</h1>
      <p className="sub">
        Professional websites for small businesses. Fast setup. Simple pricing.
        Ongoing support.
      </p>

      <div className="heroGrid">
        {/* LEFT */}
        <section className="card heroCard">
          <div className="kicker">Built for service businesses that want calls & leads</div>

          <h2 style={{ margin: "8px 0 8px", fontSize: 34, letterSpacing: "-0.02em" }}>
            Get a professional website that brings you customers.
          </h2>

          <p className="sub" style={{ marginBottom: 10 }}>
            We build modern, mobile-friendly websites for local businesses—designed
            to look legit, load fast, and help you get calls, leads, and bookings.
          </p>

          <ul className="bullets">
            <li>Custom 5-page website (Home, About, Services, Gallery/Projects, Contact)</li>
            <li>Mobile-first design + fast load speeds</li>
            <li>Contact forms, call/email buttons, and lead capture</li>
            <li>Basic local SEO setup (titles, descriptions, indexing)</li>
          </ul>

          <div className="btnRow">
            <a className="btn btnPrimary" href={EMAIL_LINK}>Email Us</a>
            <a className="btn" href="#pricing">View Pricing</a>
            <a className="btn" href="#demos">View Demos</a>
          </div>

          <div className="pills">
            <div className="pill">
              <div className="pillTop">1–7 Days</div>
              <div className="pillSub">Typical launch time</div>
            </div>
            <div className="pill">
              <div className="pillTop">Mobile</div>
              <div className="pillSub">Looks great on phones</div>
            </div>
            <div className="pill">
              <div className="pillTop">SEO</div>
              <div className="pillSub">Built for local search</div>
            </div>
          </div>
        </section>

        {/* RIGHT */}
        <aside className="card">
          <div className="cardInner">
            <h3 className="formTitle">Free Quote</h3>
            <p className="formSub">
              Tell us what you do and we’ll reply fast. Response time: usually within 24 hours.
            </p>

            <div className="field">
              <div className="label">Name</div>
              <input className="input" placeholder="Your name" />
            </div>

            <div className="field">
              <div className="label">Business name</div>
              <input className="input" placeholder="Business name" />
            </div>

            <div className="field">
              <div className="label">Phone (optional)</div>
              <input className="input" placeholder="(555) 555-5555" />
            </div>

            <div className="field">
              <div className="label">What do you need?</div>
              <textarea className="textarea" placeholder="Website, updates, redesign, SEO, etc." />
            </div>

            <a className="btn btnPrimary" style={{ width: "100%" }} href={EMAIL_LINK}>
              Email Us To Start
            </a>

            <div className="smallNote">
              Prefer a call? <a href={SALES_TEL} style={{ textDecoration: "underline" }}>Sales {SALES}</a>{" "}
              · <a href={OFFICE_TEL} style={{ textDecoration: "underline" }}>Office {OFFICE}</a>
            </div>
          </div>
        </aside>
      </div>

      {/* WHAT WE DO + PRICING */}
      <div id="pricing" className="sectionTitleRow">
        <h2 className="sectionTitle">Pricing</h2>
        <div className="sectionHint">Simple packages. Clear results.</div>
      </div>

      <div className="pricingGrid">
        <div className="card priceCard">
          <div className="priceTop">
            <div className="plan">Starter</div>
            <div className="badge">Best Value</div>
          </div>
          <div className="price">$299</div>
          <div className="monthly">+ $50/mo maintenance</div>
          <ul className="list">
            <li>5-page website</li>
            <li>Mobile optimized</li>
            <li>Contact form</li>
            <li>Basic SEO setup</li>
          </ul>
          <div className="bestFor">Best for: brand new businesses that need something clean and fast.</div>
        </div>

        <div className="card priceCard">
          <div className="priceTop">
            <div className="plan">Standard</div>
            <div className="badge">Popular</div>
          </div>
          <div className="price">$499</div>
          <div className="monthly">+ $75/mo maintenance</div>
          <ul className="list">
            <li>Everything in Starter</li>
            <li>Improved layout + sections</li>
            <li>Service area & trust blocks</li>
            <li>Stronger lead capture</li>
          </ul>
          <div className="bestFor">Best for: local service businesses that want more calls.</div>
        </div>

        <div className="card priceCard highlight">
          <div className="priceTop">
            <div className="plan">Pro</div>
            <div className="badge">Most Popular</div>
          </div>
          <div className="price">$799</div>
          <div className="monthly">+ $99/mo maintenance</div>
          <ul className="list">
            <li>Everything in Standard</li>
            <li>Priority design</li>
            <li>Advanced SEO</li>
            <li>Google Business setup</li>
          </ul>
          <div className="bestFor">Best for: higher competition markets that need to rank.</div>
        </div>

        <div className="card priceCard">
          <div className="priceTop">
            <div className="plan">Elite</div>
            <div className="badge">Premium Option</div>
          </div>
          <div className="price">$1,200</div>
          <div className="monthly">+ $149/mo maintenance</div>
          <ul className="list">
            <li>Custom premium design</li>
            <li>Brand strategy layout</li>
            <li>High-conversion structure</li>
            <li>Service area + trust sections</li>
            <li>Everything included in Pro</li>
          </ul>
          <div className="bestFor">Best for: businesses that want a high-end custom build with strong positioning.</div>
        </div>
      </div>

      {/* DEMOS */}
      <div id="demos" className="sectionTitleRow">
        <h2 className="sectionTitle">Demos</h2>
        <div className="sectionHint">Real examples you can show clients</div>
      </div>

      <div className="demosGrid">
        <div className="card demoCard">
          <div className="demoTitle">Roofing — Pro Demo ($799)</div>
          <p className="demoText">
            Clean, modern roofing demo designed to generate calls and estimate requests.
          </p>
          <div className="btnRow">
            <a className="btn btnPrimary" href="/demo/roofing">Open Roofing Demo</a>
          </div>
        </div>

        <div className="card demoCard">
          <div className="demoTitle">Metal Business Cards — Elite Demo ($1,200)</div>
          <p className="demoText">
            Premium product-style demo for engraved metal business cards.
          </p>
          <div className="btnRow">
            <a className="btn btnPrimary" href="/demo/metal-cards">Open Metal Cards Demo</a>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="sectionTitleRow">
        <h2 className="sectionTitle">Contact</h2>
        <div className="sectionHint">Fast response · clear pricing</div>
      </div>

      <div className="card">
        <div className="cardInner" style={{ display: "grid", gap: 10 }}>
          <div><b>Email:</b> <a href={`mailto:${EMAIL}`} style={{ textDecoration: "underline" }}>{EMAIL}</a></div>
          <div><b>Sales:</b> <a href={SALES_TEL} style={{ textDecoration: "underline" }}>{SALES}</a></div>
          <div><b>Office:</b> <a href={OFFICE_TEL} style={{ textDecoration: "underline" }}>{OFFICE}</a></div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div>© {new Date().getFullYear()} Atlas Digital Lab. All rights reserved.</div>
        <div className="hiring">Now Hiring (part-time sales) — email {EMAIL}</div>
      </footer>
    </main>
  );
}