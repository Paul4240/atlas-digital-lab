"use client";

export default function Home() {
  return (
    <main className="page">
      <div className="container">
        {/* Top */}
        <header className="top">
          <div className="pill">Houston • Small Business Websites</div>

          <h1 className="h1">Atlas Digital Lab</h1>
          <p className="sub">
            Professional websites for small businesses. Fast setup. Simple pricing. Ongoing
            support.
          </p>
        </header>

        {/* Hero */}
        <section className="heroGrid">
          <div className="card heroLeft">
            <h2 className="heroTitle">Get a professional website that brings you customers.</h2>
            <p className="heroText">
              We build modern, mobile-friendly websites for local businesses—designed to look
              legit, load fast, and help you get calls, leads, and bookings.
            </p>

            <div className="btnRow">
              <a className="btnPrimary" href="mailto:hello@atlasdigitallab.com">
                Email Us
              </a>
              <a className="btnGhost" href="#contact">
                Contact Info
              </a>
            </div>

            <div className="chipRow">
              <div className="chip">
                <div className="chipTitle">1–7 Days</div>
                <div className="chipSub">Typical launch</div>
              </div>

              <div className="chip">
                <div className="chipTitle">Mobile</div>
                <div className="chipSub">Looks great on phones</div>
              </div>

              <div className="chip">
                <div className="chipTitle">SEO</div>
                <div className="chipSub">Built for local search</div>
              </div>
            </div>
          </div>

          <div className="card heroRight">
            <h3 className="formTitle">Free Quote</h3>
            <p className="formSub">Tell us what you do and we’ll reply fast.</p>

            {/* Simple “mailto” form (no backend needed) */}
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const fd = new FormData(form);

                const name = (fd.get("name") || "").toString();
                const business = (fd.get("business") || "").toString();
                const phone = (fd.get("phone") || "").toString();
                const message = (fd.get("message") || "").toString();

                const subject = encodeURIComponent(`Quote Request — ${business || "New Lead"}`);
                const body = encodeURIComponent(
                  `Name: ${name}\nBusiness: ${business}\nPhone: ${phone}\n\nWhat they need:\n${message}`
                );

                window.location.href = `mailto:hello@atlasdigitallab.com?subject=${subject}&body=${body}`;
              }}
            >
              <label className="label">Name</label>
              <input className="input" name="name" placeholder="Your name" />

              <label className="label">Business name</label>
              <input className="input" name="business" placeholder="Business name" />

              <label className="label">Phone (optional)</label>
              <input className="input" name="phone" placeholder="(555) 555-5555" />

              <label className="label">What do you need?</label>
              <textarea
                className="textarea"
                name="message"
                placeholder="Website, updates, redesign, SEO, etc."
              />

              <button className="btnWide" type="submit">
                Email Us To Start
              </button>

              <p className="microText">Response time: usually within 24 hours.</p>
            </form>
          </div>
        </section>

        {/* Lower grid */}
        <section className="lowerGrid">
          <div className="card">
            <h3>What we do</h3>
            <p className="muted">
              Clean, modern websites that make small businesses look established. We handle
              setup, updates, and ongoing support so you can focus on running your business.
            </p>

            <ul className="list">
              <li>Custom 5-page website (Home, About, Services, Gallery/Projects, Contact)</li>
              <li>Mobile-first design + fast load speeds</li>
              <li>Contact forms, call/email buttons, and lead capture</li>
              <li>Basic local SEO setup (titles, descriptions, indexing)</li>
            </ul>
          </div>

          <div className="card">
            <div className="pricingHeader">
              <h3>Pricing</h3>
              <div className="pricingNote">Simple packages. Clear results.</div>
            </div>

            <div className="pricingItem">
              <div>
                <div className="pricingName">Starter</div>
                <div className="pricingDesc">Perfect for new businesses</div>
                <div className="pricingSub">Setup + $50/month maintenance</div>
              </div>
              <div className="pricingPrice">$299</div>
            </div>

            <div className="divider" />

            <div className="pricingItem">
              <div>
                <div className="pricingName">Standard</div>
                <div className="pricingDesc">Most popular for local services</div>
                <div className="pricingSub">Setup + $75/month maintenance</div>
              </div>
              <div className="pricingPrice">$499</div>
            </div>

            <div className="divider" />

            <div className="pricingItem">
              <div>
                <div className="pricingName">Pro</div>
                <div className="pricingDesc">Best for higher competition</div>
                <div className="pricingSub">Setup + $99/month maintenance</div>
              </div>
              <div className="pricingPrice">$799</div>
            </div>

            <p className="microText" style={{ marginTop: 10 }}>
              (We can adjust pricing later—this just gives you a clean professional baseline.)
            </p>
          </div>

          <section id="contact" className="contactCard">
            <h3>Contact</h3>

            <p>
              Email us anytime:
              <a href="mailto:hello@atlasdigitallab.com">hello@atlasdigitallab.com</a>
            </p>

            <p>
              Phone:
              <a href="tel:8327050313">(832) 705-0313</a>
            </p>

            <p className="microText">Response time: usually within 24 hours.</p>
          </section>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footerRow">
            <span>© {new Date().getFullYear()} Atlas Digital Lab. All rights reserved.</span>
          </div>
        </footer>
      </div>
    </main>
  );
}