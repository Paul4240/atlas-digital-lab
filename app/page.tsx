export default function Home() {
  return (
    <main className="page">
      {/* NAV */}
      <header className="nav">
        <div className="container navInner">
          <div className="brand">
            <div className="logo">ADL</div>
            <div className="brandText">
              <div className="brandName">Atlas Digital Lab</div>
              <div className="brandTag">Websites that bring you customers</div>
            </div>
          </div>

          <nav className="navLinks">
            <a href="#services">Services</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
            <a className="navCta" href="#quote">Get a Quote</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="container heroGrid">
          <div>
            <h1 className="h1">Get a professional website that brings you customers.</h1>
            <p className="sub">
              Atlas Digital Lab builds modern, mobile-friendly websites for local businesses.
              Simple pricing. Fast setup. Ongoing support.
            </p>

            <div className="btnRow">
              <a className="btnPrimary" href="#quote">Request a Quote</a>
              <a className="btnSecondary" href="#pricing">See Pricing</a>
            </div>

            <div className="featureRow" id="services">
              <div className="miniCard">
                <div className="miniTitle">Fast Setup</div>
                <div className="miniText">Go live in 3–7 days</div>
              </div>
              <div className="miniCard">
                <div className="miniTitle">Mobile</div>
                <div className="miniText">Looks great on phones</div>
              </div>
              <div className="miniCard">
                <div className="miniTitle">SEO</div>
                <div className="miniText">Built to be found</div>
              </div>
            </div>
          </div>

          {/* QUOTE FORM */}
          <div className="card" id="quote">
            <h2 className="h2">Free Quote</h2>
            <p className="small muted">Tell us about your business. We’ll reply within 24 hours.</p>

            <form className="form">
              <label className="label">
                Name
                <input className="input" placeholder="Your name" />
              </label>

              <label className="label">
                Business name
                <input className="input" placeholder="Business name" />
              </label>

              <label className="label">
                Email
                <input className="input" placeholder="you@email.com" />
              </label>

              <label className="label">
                What do you need?
                <textarea className="textarea" placeholder="Website, updates, SEO, Google listing, etc." />
              </label>

              <button type="button" className="btnPrimary full">
                Send to Atlas
              </button>

              <p className="tiny muted">
                Or email us directly: <a href="mailto:hello@atlasdigitallab.com">hello@atlasdigitallab.com</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="pricing">
        <div className="container">
          <div className="sectionHead">
            <h2 className="h2">Pricing</h2>
            <p className="small muted">Clear packages. We can customize if you need something special.</p>
          </div>

          <div className="pricingGrid">
            <div className="priceCard">
              <div className="priceName">Starter</div>
              <div className="price">$299</div>
              <div className="priceSub">Setup + $50/mo maintenance</div>
              <ul className="list">
                <li>1–3 pages</li>
                <li>Mobile friendly</li>
                <li>Contact section</li>
              </ul>
              <a className="btnSecondary full" href="#quote">Get Starter</a>
            </div>

            <div className="priceCard featured">
              <div className="badge">Most Popular</div>
              <div className="priceName">Standard</div>
              <div className="price">$499</div>
              <div className="priceSub">Setup + $75/mo maintenance</div>
              <ul className="list">
                <li>Up to 5 pages</li>
                <li>Basic SEO setup</li>
                <li>Speed + security</li>
              </ul>
              <a className="btnPrimary full" href="#quote">Get Standard</a>
            </div>

            <div className="priceCard">
              <div className="priceName">Pro</div>
              <div className="price">$799</div>
              <div className="priceSub">Setup + $99/mo maintenance</div>
              <ul className="list">
                <li>Up to 8 pages</li>
                <li>SEO + content guidance</li>
                <li>Priority support</li>
              </ul>
              <a className="btnSecondary full" href="#quote">Get Pro</a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container contactBox">
          <div>
            <h2 className="h2">Contact</h2>
            <p className="small muted">Email us anytime.</p>
            <a className="contactLink" href="mailto:hello@atlasdigitallab.com">
              hello@atlasdigitallab.com
            </a>
            <p className="tiny muted">Response time: usually within 24 hours.</p>
          </div>

          <div className="contactActions">
            <a className="btnPrimary" href="mailto:hello@atlasdigitallab.com">Email Us</a>
            <a className="btnSecondary" href="#quote">Request Quote</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p className="tiny muted">
            © {new Date().getFullYear()} Atlas Digital Lab. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}