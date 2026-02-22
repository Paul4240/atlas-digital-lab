"use client";
export default function Home() {
  return (
    <main className="page">
      <div className="container">
        <header className="top">
          <div className="pill">Houston • Small Business Websites</div>
          <h1 className="h1">Atlas Digital Lab</h1>
          <p className="sub">
            Professional websites for small businesses. Fast setup. Simple pricing. Ongoing support.
          </p>
        </header>

        <section className="heroGrid">
          <div className="heroLeft card">
            <h2 className="h2">Get a professional website that brings you customers.</h2>
            <p className="text">
              We build modern, mobile-friendly websites for local businesses—designed to look legit, load fast,
              and help you get calls, leads, and bookings.
            </p>
            <p className="phone">
              Call or Text: <a href="tel:8327050313">(832) 705-0313</a>
            </p>
            <div className="btnRow">
              <a className="btn primary" href="mailto:hello@atlasdigitallab.com">
                Email Us
              </a>
              <a className="btn ghost" href="#contact">
                Contact Info
              </a>
            </div>

            <div className="miniGrid">
              <div className="miniCard">
                <div className="miniTitle">1–7 Days</div>
                <div className="miniText">Typical launch</div>
              </div>
              <div className="miniCard">
                <div className="miniTitle">Mobile</div>
                <div className="miniText">Looks great on phones</div>
              </div>
              <div className="miniCard">
                <div className="miniTitle">SEO</div>
                <div className="miniText">Built for local search</div>
              </div>
            </div>
          </div>

          <div className="heroRight card">
            <h3 className="h3">Free Quote</h3>
            <p className="muted">Tell us what you do and we’ll reply fast.</p>

            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href =
                  "mailto:hello@atlasdigitallab.com?subject=Free%20Quote%20Request&body=Name:%0D%0ABusiness:%0D%0APhone:%0D%0AWhat%20do%20you%20need:%0D%0A";
              }}
            >
              <label className="label">
                Name
                <input className="input" placeholder="Your name" />
              </label>

              <label className="label">
                Business name
                <input className="input" placeholder="Business name" />
              </label>

              <label className="label">
                Phone (optional)
                <input className="input" placeholder="(555) 555-5555" />
              </label>

              <label className="label">
                What do you need?
                <textarea className="textarea" placeholder="Website, updates, redesign, SEO, etc." rows={4} />
              </label>

              <button className="btn primary full" type="submit">
                Email Us To Start
              </button>

              <p className="fine">
                Response time: usually within 24 hours.
              </p>
            </form>
          </div>
        </section>

        <section className="twoCol">
          <div className="card">
            <h3 className="h3">What we do</h3>
            <p className="text">
              Clean, modern websites that make small businesses look established. We handle setup, updates,
              and ongoing support so you can focus on running your business.
            </p>
            <ul className="list">
              <li>Custom 5-page website (Home, About, Services, Gallery/Projects, Contact)</li>
              <li>Mobile-first design + fast load speeds</li>
              <li>Contact forms, call/email buttons, and lead capture</li>
              <li>Basic local SEO setup (titles, descriptions, indexing)</li>
            </ul>
          </div>

          <div className="card">
            <h3 className="h3">Pricing</h3>
            <div className="pricing">
              <div className="priceRow">
                <div>
                  <div className="priceName">Starter</div>
                  <div className="priceDesc">Perfect for new businesses</div>
                </div>
                <div className="priceNum">$299</div>
              </div>
              <div className="priceMeta">Setup + $50/month maintenance</div>

              <hr className="hr" />

              <div className="priceRow">
                <div>
                  <div className="priceName">Standard</div>
                  <div className="priceDesc">Most popular for local services</div>
                </div>
                <div className="priceNum">$499</div>
              </div>
              <div className="priceMeta">Setup + $75/month maintenance</div>

              <hr className="hr" />

              <div className="priceRow">
                <div>
                  <div className="priceName">Pro</div>
                  <div className="priceDesc">Best for higher competition</div>
                </div>
                <div className="priceNum">$799</div>
              </div>
              <div className="priceMeta">Setup + $99/month maintenance</div>

              <p className="fine">
          
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="card contact">
          <h3 className="h3">Contact</h3>
          <p className="text">
            Email us anytime:{" "}
            <a className="link" href="mailto:hello@atlasdigitallab.com">
              hello@atlasdigitallab.com
            </a>
          </p>
          <p className="fine">Response time: usually within 24 hours.</p>
        </section>
        <p>
         Phone: <a href="tel:8327050313">(832) 705-0313</a>
       </p>
        <footer className="footer">
          <div className="container">
            <p className="fine">© {new Date().getFullYear()} Atlas Digital Lab. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}